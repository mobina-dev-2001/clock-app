import { getDayOfYear as getDayOfYearFNS, getWeek, getDay } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const isDaytime = (timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const hours = new Intl.DateTimeFormat("en", { hour: "numeric", hour12: false, timeZone: timezone }).format(new Date());
  return parseInt(hours) >= 5 && parseInt(hours) < 18;
};

export const getTimeOfDay = (timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const hours = new Intl.DateTimeFormat("en", { hour: "numeric", hour12: false, timeZone: timezone }).format(new Date());
  const hourNum = parseInt(hours);
  if (hourNum >= 5 && hourNum <= 12) return "morning";
  if (hourNum > 12 && hourNum < 18) return "afternoon";
  return "evening";
};

// date-fns-tz package
export const getDayOfYear = (timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  return getDayOfYearFNS(toZonedTime(new Date(), timezone));
};

export const getWeekNumber = (timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  return getWeek(toZonedTime(new Date(), timezone));
};

export const getDayOfWeek = (timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const zonedDate = toZonedTime(new Date(), timezone);
  return getDay(zonedDate) === 0 ? 7 : getDay(zonedDate);
};
