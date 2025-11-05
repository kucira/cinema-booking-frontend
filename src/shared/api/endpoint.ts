const base_url: string = "http://localhost:3000/api";

export const API_ENDPOINT = {
    BASE_URL: base_url,
    STUDIOS: `${base_url}/cinema/studios`,
    SEATS: (id: string) => `${base_url}/cinema/studios/${id}/seats`,
    REGISTER: `${base_url}/auth/register`,
    LOGIN: `${base_url}/auth/login`,
    BOOKING_ONLINE: `${base_url}/booking/online`,
    BOOKING_OFFLINE: `${base_url}/booking/offline`,
    BOOKING_VALIDATE: `${base_url}/booking/validate`,
    BOOKING_LIST: `${base_url}/booking/my-bookings`,
    VALIDATE: `${base_url}/booking/validate`,
}