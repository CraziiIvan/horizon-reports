import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
    return twMerge(clsx(input))
}

function addTimeLable(format: string, time: number) {
  return `${time} ${format}${time === 1 ? "" : "s"} ago`
}

export function calculatePeriod(date: Date) {
    const curDate = new Date()
    const pubDate = new Date(date)

    const timeDiff = Math.abs(curDate.getTime() - pubDate.getTime());

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    if( days >= 1 ) {
      return addTimeLable("day", days)
    } else if ( hours >= 1 ) {
      return addTimeLable("hour", hours)
    } else if ( minutes >= 1 ) {
      return addTimeLable("minute", minutes)
    } else {
      return addTimeLable("second", seconds)
    }
}

export function generateRouteName(blogTitle: string) {
  const routeName = blogTitle.toLowerCase().replace(/\s+/g, '-');

  return routeName;
}