import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortenString(input: string, maxLength: number = 77): string {
  if (input.length <= maxLength) {
      return input;
  }
  return input.substring(0, maxLength - 3) + '...';
}
