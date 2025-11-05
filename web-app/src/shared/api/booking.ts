import type { UserToken } from "../interfaces/auth";
import type { Booking } from "../interfaces/booking";
import { API_ENDPOINT } from "./endpoint";

export const bookingOnline = async (payload: Booking, token: UserToken) => {
    const response = await fetch(API_ENDPOINT.BOOKING_ONLINE, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token?.token || ""}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(response.statusText);
}

export const bookingOffline = async (payload: Booking, token: UserToken) => { 
    const response = await fetch(API_ENDPOINT.BOOKING_OFFLINE, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token?.token || ""}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(response.statusText);
}

export const getMyBookings = async (token: UserToken) => { 
    const response = await fetch(API_ENDPOINT.BOOKING_LIST, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token.token}`,
        },
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(response.statusText);
}    

export const validateBooking = async (bookingCode: string) => { 
    const response = await fetch(API_ENDPOINT.VALIDATE, {
        headers: {
            'content-type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({bookingCode}),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(response.statusText);
}