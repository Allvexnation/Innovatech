export interface EmailTemplateData {
  name: string;
  email: string;
  subject: string;
  message: string;
  isUserCopy?: boolean;
}

export function createEmailTemplate(data: EmailTemplateData): string {
  const { name, email, subject, message, isUserCopy = false } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${isUserCopy ? "Thank You for Contacting Innovatech" : "New Contact Form Submission"}</title>
  <style>
    :root {
      color-scheme: dark;
      supported-color-schemes: dark;
    }
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
    
    * {
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0A0A0F !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body[data-outlook-cycle] {
      background-color: #0A0A0F !important;
    }
    
    .email-wrapper {
      width: 100%;
      background: linear-gradient(135deg, #0A0A0F 0%, #1A1A24 100%) !important;
      padding: 0;
      margin: 0;
    }
    
    .email-container {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      background: #0A0A0F !important;
      border-radius: 0;
      overflow: hidden;
      box-shadow: none;
      border: none;
    }
    
    .email-header {
      background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .email-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      animation: pulse 4s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    
    .logo-container {
      position: relative;
      z-index: 1;
      margin-bottom: 20px;
    }
    
    .logo {
      width: 80px;
      height: 80px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.1);
    }
    
    .email-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      position: relative;
      z-index: 1;
      letter-spacing: -0.02em;
    }
    
    .email-body {
      padding: 40px 30px;
      color: #F8FAFC !important;
      background: #0A0A0F !important;
    }
    
    .greeting {
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC !important;
      margin: 0 0 20px 0;
    }
    
    .message-text {
      font-size: 15px;
      line-height: 1.6;
      color: #94A3B8 !important;
      margin: 0 0 30px 0;
    }
    
    .info-card {
      background: #151520 !important;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 24px;
      margin: 24px 0;
    }
    
    .info-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      font-weight: 600;
      color: #94A3B8 !important;
      min-width: 100px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .info-value {
      color: #F8FAFC !important;
      font-size: 15px;
      flex: 1;
      word-break: break-word;
    }
    
    .message-box {
      background: #151520 !important;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 4px solid #3B82F6;
      border-radius: 8px;
      padding: 20px;
      margin: 24px 0;
    }
    
    .message-label {
      font-weight: 600;
      color: #94A3B8 !important;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }
    
    .message-content {
      color: #F8FAFC !important;
      font-size: 15px;
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
      color: #ffffff;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      margin: 20px 0;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;
    }
    
    .email-footer {
      background: #0A0A0F !important;
      padding: 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .footer-text {
      color: #94A3B8 !important;
      font-size: 13px;
      line-height: 1.6;
      margin: 8px 0;
    }
    
    .footer-links {
      margin: 16px 0;
    }
    
    .footer-link {
      color: #3B82F6;
      text-decoration: none;
      margin: 0 12px;
      font-size: 13px;
    }
    
    .social-links {
      margin: 20px 0;
    }
    
    .social-link {
      display: inline-block;
      width: 36px;
      height: 36px;
      background: rgba(59, 130, 246, 0.1);
      border-radius: 8px;
      margin: 0 6px;
      text-decoration: none;
      color: #3B82F6;
      line-height: 36px;
      font-size: 18px;
      transition: all 0.3s ease;
    }
    
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      margin: 24px 0;
    }
    
    /* Force dark mode on iOS Mail */
    @supports (-webkit-overflow-scrolling: touch) {
      body, .email-wrapper, .email-container, .email-body, .info-card, .message-box, .email-footer {
        background-color: #0A0A0F !important;
      }
      .info-card, .message-box {
        background-color: #151520 !important;
      }
      .greeting, .info-value, .message-content {
        color: #F8FAFC !important;
      }
      .message-text, .info-label, .message-label, .footer-text {
        color: #94A3B8 !important;
      }
    }
    
    @media (prefers-color-scheme: dark) {
      body, .email-wrapper, .email-container, .email-body, .info-card, .message-box, .email-footer {
        background-color: #0A0A0F !important;
      }
      .info-card, .message-box {
        background-color: #151520 !important;
      }
      .greeting, .info-value, .message-content {
        color: #F8FAFC !important;
      }
      .message-text, .info-label, .message-label, .footer-text {
        color: #94A3B8 !important;
      }
    }
    
    @media (prefers-color-scheme: light) {
      body, .email-wrapper, .email-container, .email-body, .info-card, .message-box, .email-footer {
        background-color: #0A0A0F !important;
      }
      .info-card, .message-box {
        background-color: #151520 !important;
      }
      .greeting, .info-value, .message-content {
        color: #F8FAFC !important;
      }
      .message-text, .info-label, .message-label, .footer-text {
        color: #94A3B8 !important;
      }
    }
    
    @media only screen and (max-width: 600px) {
      .email-wrapper {
        padding: 0;
      }
      
      .email-container {
        border-radius: 0;
        max-width: 100%;
      }
      
      .email-header {
        padding: 30px 20px;
      }
      
      .email-title {
        font-size: 22px;
      }
      
      .email-body {
        padding: 30px 20px;
      }
      
      .info-row {
        flex-direction: column;
      }
      
      .info-label {
        min-width: auto;
        margin-bottom: 4px;
      }
      
      .cta-button {
        display: block;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="email-header">
        <div class="logo-container">
          <img src="https://res.cloudinary.com/dbob1wota/image/upload/3f3e83ebe24f2efe9edbfffd18acb955_bbiayb.jpg" alt="Innovatech Logo" class="logo" />
        </div>
        <h1 class="email-title">${isUserCopy ? "Thank You for Reaching Out!" : "New Contact Form Submission"}</h1>
      </div>
      
      <div class="email-body">
        ${
          isUserCopy
            ? `
          <p class="greeting">Hi ${name},</p>
          <p class="message-text">
            Thank you for contacting Innovatech! We've received your message and our team will get back to you as soon as possible.
          </p>
          <p class="message-text">
            Here's a copy of your submission for your records:
          </p>
        `
            : `
          <p class="greeting">New Contact Form Submission</p>
          <p class="message-text">
            You have received a new message from your website contact form.
          </p>
        `
        }
        
        <div class="info-card">
          <div class="info-row">
            <div class="info-label">Name</div>
            <div class="info-value">${name}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email</div>
            <div class="info-value">${email}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Subject</div>
            <div class="info-value">${subject}</div>
          </div>
        </div>
        
        <div class="message-box">
          <div class="message-label">Message</div>
          <div class="message-content">${message}</div>
        </div>
        
        ${
          isUserCopy
            ? `
          <div class="divider"></div>
          <p class="message-text">
            We typically respond within 24 hours during business hours. If your inquiry is urgent, please feel free to call us at <strong style="color: #3B82F6;">0981-982-9768</strong>.
          </p>
          <p class="message-text">
            In the meantime, feel free to explore our services or check out our latest updates.
          </p>
        `
            : `
          <div class="divider"></div>
          <p class="message-text">
            Please respond to this inquiry at your earliest convenience.
          </p>
        `
        }
      </div>
      
      <div class="email-footer">
        <p class="footer-text"><strong>Innovatech Solution</strong></p>
        <p class="footer-text">Puerto Princesa City, Palawan</p>
        <div class="footer-links">
          <a href="tel:09819829768" class="footer-link">0981-982-9768</a>
          <span style="color: #94A3B8;">|</span>
          <a href="mailto:Innovatech.solution111@gmail.com" class="footer-link">Innovatech.solution111@gmail.com</a>
        </div>
        <div class="divider"></div>
        <p class="footer-text" style="font-size: 12px; color: #64748B;">
          © ${new Date().getFullYear()} Innovatech Solution. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}
