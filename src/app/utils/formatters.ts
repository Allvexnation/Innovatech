export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatUserName = (name: string): string => {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const businessHours = {
  monday: { start: 8, end: 20 },
  tuesday: { start: 8, end: 20 },
  wednesday: { start: 8, end: 20 },
  thursday: { start: 8, end: 20 },
  friday: { start: 8, end: 20 },
  saturday: { start: 9, end: 18 },
  sunday: { start: 10, end: 16 },
};

export const getPhilippineTime = (): Date => {
  return new Date(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
      .format(new Date())
      .replace(/(\d+)\/(\d+)\/(\d+),\s(\d+):(\d+):(\d+)/, "$3-$1-$2T$4:$5:$6")
  );
};

export const isBusinessOpen = (): boolean => {
  const now = getPhilippineTime();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Manila" })
    .toLowerCase() as keyof typeof businessHours;
  const hours = now.getHours();

  const schedule = businessHours[day];
  if (!schedule) return false;

  return hours >= schedule.start && hours < schedule.end;
};

export const getNextStatusChange = (): {
  time: string;
  status: "open" | "closed";
} => {
  const now = getPhilippineTime();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Manila" })
    .toLowerCase() as keyof typeof businessHours;
  const hours = now.getHours();

  const schedule = businessHours[day];

  if (hours < schedule.start) {
    return {
      time: `${schedule.start}:00 AM`,
      status: "open",
    };
  } else if (hours < schedule.end) {
    const endHour = schedule.end > 12 ? schedule.end - 12 : schedule.end;
    const period = schedule.end >= 12 ? "PM" : "AM";
    return {
      time: `${endHour}:00 ${period}`,
      status: "closed",
    };
  } else {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const currentDayIndex = daysOfWeek.indexOf(day);
    const nextDayIndex = (currentDayIndex + 1) % 7;
    const nextDay = daysOfWeek[nextDayIndex];
    const nextSchedule = businessHours[nextDay as keyof typeof businessHours];

    return {
      time: `${nextSchedule.start}:00 AM (${nextDay.charAt(0).toUpperCase() + nextDay.slice(1)})`,
      status: "open",
    };
  }
};
