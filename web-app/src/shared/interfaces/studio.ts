export interface Studio {
    id: string,
    name: string,
    total_seats: number
}

export interface Seat {
    id: number,
    studio_id: number,
    seat_number: number,
    is_available: boolean,
    is_available_local?: boolean,
    studio: {
        id: number,
        name: string,
        total_seats: number,
        created_at: string,
        updated_at: string
    },
    onClick?: Function | void,
}