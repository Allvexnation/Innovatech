import { NextRequest, NextResponse } from "next/server";
import { createEmailTemplate } from "@/app/utils/emailTemplate";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME;
const TEAM_EMAIL = process.env.TEAM_EMAIL;

export async function POST(request: NextRequest) {
  try {
    if (
      !BREVO_API_KEY ||
      !BREVO_SENDER_EMAIL ||
      !BREVO_SENDER_NAME ||
      !TEAM_EMAIL
    ) {
      console.error("Email service configuration is incomplete");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const teamEmailContent = createEmailTemplate({
      name,
      email,
      subject,
      message,
      isUserCopy: false,
    });

    const teamEmailPayload = {
      sender: {
        name: "Innovatech Website",
        email: BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: TEAM_EMAIL,
          name: "Innovatech Team",
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: `New Contact Form: ${subject}`,
      htmlContent: teamEmailContent,
    };

    const userEmailContent = createEmailTemplate({
      name,
      email,
      subject,
      message,
      isUserCopy: true,
    });

    const userEmailPayload = {
      sender: {
        name: BREVO_SENDER_NAME,
        email: BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email,
          name,
        },
      ],
      subject: "Thank you for contacting Innovatech",
      htmlContent: userEmailContent,
    };

    const [teamResponse, userResponse] = await Promise.all([
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify(teamEmailPayload),
      }),
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify(userEmailPayload),
      }),
    ]);

    if (!teamResponse.ok || !userResponse.ok) {
      const teamError = !teamResponse.ok ? await teamResponse.json() : null;
      const userError = !userResponse.ok ? await userResponse.json() : null;

      console.error("❌ Team email error:", teamError);
      console.error("❌ User email error:", userError);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
          details: teamError || userError,
        },
        { status: 500 }
      );
    }

    const teamResult = await teamResponse.json();
    const userResult = await userResponse.json();

    console.log("✅ Team email sent successfully!");
    console.log("   Message ID:", teamResult.messageId);
    console.log("✅ User confirmation email sent successfully!");
    console.log("   Message ID:", userResult.messageId);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! We've sent you a confirmation email and will get back to you soon.",
    });
  } catch (error) {
    console.error("General error:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
