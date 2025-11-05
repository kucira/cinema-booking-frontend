const base_url: string = "http://localhost:3000/api";
const base_url_internal_server: string = "http://api-gateway:8080/api"; 
//because running in docker container with backend services
//when server to server communication is needed, it will call the internal API
//no need internal api url, if we can separated the backend services docker, and the api gateway expose the url
// and frontend docker
// the docker compose just to make it easier running directly


export const API_ENDPOINT = {
    BASE_URL: base_url,
    BASE_URL_INTERNAL_SERVER: base_url_internal_server,
    STUDIOS: `${base_url_internal_server}/cinema/studios`,
    SEATS: (id: string) => `${base_url}/cinema/studios/${id}/seats`,
    REGISTER: `${base_url}/auth/register`,
    LOGIN: `${base_url}/auth/login`,
    BOOKING_ONLINE: `${base_url}/booking/online`,
    BOOKING_OFFLINE: `${base_url}/booking/offline`,
    BOOKING_VALIDATE: `${base_url}/booking/validate`,
    BOOKING_LIST: `${base_url_internal_server}/booking/my-bookings`,
    VALIDATE: `${base_url}/booking/validate`,
}