import type { Seat } from "../../../shared/interfaces/studio";

export default function Seat(props: Seat) {
  return (
    <div
      onClick={props.onClick as any}
      className={`cursor-pointer rounded p-4 ${
        props.is_available ? "bg-white" : "bg-yellow-300"
      }`}
    >
      <p className="text-center">{props.seat_number}</p>
    </div>
  );
}
