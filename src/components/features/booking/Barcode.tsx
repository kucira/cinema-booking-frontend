import type { BookingDetail } from "../../../shared/interfaces/booking";

export default function Barcode(props: { booking: BookingDetail }) {
  return (
    <div className="">
      <img
        src={`${props.booking?.qr_code}`}
        alt={`Barcode for ${props.booking?.studio_id}`}
      />
      <p className="text-center text-white">Studio: {props.booking?.studio_id}</p>
       <p className="text-center text-white">status: {props.booking?.status}</p>
    </div>
  );
}
