
// API base URL for backend requests.
// Set NEXT_PUBLIC_API_URL in production (e.g. https://api.yourdomain.com).
// Falls back to localhost for development.

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3030";
