import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Configuration, DefaultApi } from "./api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const api = new DefaultApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL,
  })
);