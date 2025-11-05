export interface Booking {
  studioId: number;
  seatIds: Array<number>;
  customerName?: string;
  customerEmail?: string;
}

export interface BookingDetail {
  id?: number;
  booking_code?: string;
  user_id?: number;
  user_name?: string;
  user_email?: string;
  studio_id?: number;
  seat_ids?: Array<number>;
  qr_code?: string;
  booking_type?: string;
  status?: string;
  created_at?: string;
  qrCode? : string;
}
