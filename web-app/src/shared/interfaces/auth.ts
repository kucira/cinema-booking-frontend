export interface Register {
    email: string;
    password: string;
    name: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface UserToken {
    user: {
        id: number,
        email: string,
        name: string,
        role: string,
        created_at: string,
        updated_at: string
    },
    token: string;
}