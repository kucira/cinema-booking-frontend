import { useState } from "react";
import { bookingOffline, bookingOnline } from "../api/booking";
import type { BookingDetail } from "../interfaces/booking";

export default function useBooking(token: string = "") {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");

  const handleBooking = async (payload: any, type: string) => {
    try {
      if(token === "") return alert("Please login first");
      setIsLoading(true);
      setErrorMessage("");
      const result: BookingDetail =
        type === "online"
          ? await bookingOnline(payload, JSON.parse(token))
          : await bookingOffline(payload, JSON.parse(token));


      if (result && type === "online") return window.location.replace("/my-bookings");
      if(result && type === "offline") return window.location.replace(`/booking-offline?qr=${encodeURIComponent(result.qrCode || "")}`);
    } catch (error: any) {
      alert(error.message);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    errorMessage,
    handleBooking,
  };
}
