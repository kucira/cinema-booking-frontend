import type { Login, Register } from "../interfaces/auth"
import { API_ENDPOINT } from "./endpoint";

export const register = async (payload: Register) => {
    const response = await fetch(API_ENDPOINT.REGISTER, {
        headers: {
            'content-type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return true;
    }
    const err: { error: string } = await response.json();
    throw new Error(err?.error);
}
export const login = async (payload: Login) => { 
    const response = await fetch(API_ENDPOINT.LOGIN, {
        headers: {
            'content-type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(response.statusText);
}