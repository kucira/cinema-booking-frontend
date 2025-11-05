import { useEffect, useState, type FormEvent } from "react";
import { API_ENDPOINT } from "../../../shared/api/endpoint";
import type { Seat } from "../../../shared/interfaces/studio";
import SeatItem from "./Seat";
import useBooking from "../../../shared/hooks/useBooking";
import type { Booking } from "../../../shared/interfaces/booking";


export default function Seats({ id, token }: { id: string; token: string }) {
  const [data, setData] = useState<Seat[]>([]);
  const { isLoading, errorMessage, handleBooking } = useBooking(token);

  useEffect(() => {
    // Fetch seat data once the component is mounted
    const fetchSeats = async () => {
      try {
        const response = await fetch(API_ENDPOINT.SEATS(id));
        const seats = await response.json();
        const newSeats = seats.map((s: Seat) => ({
          ...s,
          is_available_local: true,
        }));
        setData(newSeats);
      } catch (error) {
        console.error("Failed to fetch seats:", error);
      }
    };

    fetchSeats();
  }, [id]);

  const handleClick = (idx: number) => {
    return function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      setData((prevData) => {
        const newData = [...prevData];
        if (newData[idx].is_available === newData[idx].is_available_local) {
          newData[idx].is_available = !newData[idx].is_available;
          newData[idx].is_available_local = !newData[idx].is_available_local;
        }
        return newData;
      });
    };
  };

  const handleBookingOnline = async () => {
    const payload: Booking = {
      studioId: Number(id),
      seatIds: data
        .filter((seat) => !seat.is_available_local)
        .map((seat) => seat.id) as number[],
    };
    await handleBooking(payload, "online");
  };

  const handleBookingOffline = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload: Booking = {
      studioId: Number(id),
      seatIds: data
        .filter((seat) => !seat.is_available_local)
        .map((seat) => seat.id) as number[],
      customerName: formData.get('name') as string,
      customerEmail: formData.get('email') as string,
    };
    await handleBooking(payload, "offline");
  };

  return (
    <div>
      <div className="cursor-pointer mx-auto grid grid-flow-col grid-rows-3 gap-4 justify-center items-center">
        {data.map((seat, idx) => (
          <SeatItem key={seat.id} {...seat} onClick={handleClick(idx)} />
        ))}
      </div>
      <div className="grid grid-rows-1 gap-4 justify-center items-center h-[50px]">
        <p className="text-xl text-white">
          {data
            .filter((seat) => !seat.is_available_local)
            .map((s) => s.seat_number)
            .join(", ")}
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleBookingOnline}
          disabled={
            data.filter((seat) => !seat.is_available_local).length === 0 ||
            isLoading
          }
          className={`${
            data.filter((seat) => !seat.is_available_local).length === 0 ||
            isLoading
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-700"
          } w-[150px] text-center cursor-pointer  text-white py-2 px-4 rounded`}
        >
          {isLoading ? "Loading..." : "Book Online"}
        </button>
      </div>

      <div className="flex flex-col justify-center items-center min-h-[90%] mt-10">
        <div className="flex flex-col bg-white shadow-md rounded p-6">
          <form
            onSubmit={handleBookingOffline}
            className="flex flex-row justify-center gap-4"
          >
            <input
              className="border-solid border-2 border-blue-300 rounded p-2"
              type="text"
              name="email"
              placeholder="Customer Email"
            />
            <input
              className="border-solid border-2 border-blue-300 rounded p-2"
              type="text"
              name="name"
              placeholder="Customer Name"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`cursor-pointer ${
                data.filter((seat) => !seat.is_available_local).length === 0 ||
                isLoading
                  ? "bg-gray-400"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white py-2 px-4 rounded`}
            >
              {isLoading ? "Loading..." : "Book Offline"}
            </button>
          </form>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
