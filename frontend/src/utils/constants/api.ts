export const API_BASE_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
} as const;

export const API_ENDPOINTS = {
    users: `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
} as const;
