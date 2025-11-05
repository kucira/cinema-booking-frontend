import { getMyBookings } from "../../../shared/api/booking";
import type { UserToken } from "../../../shared/interfaces/auth";
import type { BookingDetail } from "../../../shared/interfaces/booking";
import Barcode from "./Barcode";

export default async function MyBookings({ token } : { token: string }) {
    const userToken: UserToken = JSON.parse(token);
    const data:BookingDetail[] = await getMyBookings(userToken);
    

  return (
    <div className="mx-auto grid grid-flow-col grid-rows-3 gap-10 justify-center items-center">
         {data.map((booking: BookingDetail) => (
             <Barcode key={booking.id} booking={booking} />
         ))}
    </div>
  );
}
