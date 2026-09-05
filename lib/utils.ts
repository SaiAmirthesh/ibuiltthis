import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
