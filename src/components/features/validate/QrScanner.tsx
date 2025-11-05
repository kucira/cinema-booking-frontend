import { useEffect, useRef, useState } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';
import { validateBooking } from "../../../shared/api/booking";
import type { Booking, BookingDetail } from "../../../shared/interfaces/booking";

const QrScanner = () => {
  const handleScan = async (result: any) => {
    console.log(result);
    const data: { bookingCode: string } = result.length > 0 && JSON.parse(result[0].rawValue);
    console.log(data);
    await validateBooking(data.bookingCode || "");
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  return (
    <div className="flex flex-col items-center">
      <Scanner
        onScan={handleScan}
        onError={handleError}
      />
    </div>
  );
};

export default QrScanner;
