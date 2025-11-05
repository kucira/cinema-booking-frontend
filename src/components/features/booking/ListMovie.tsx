import { API_ENDPOINT } from "../../../shared/api/endpoint";
import type { Studio } from "../../../shared/interfaces/studio";
import Item from "./Item";

export default async function ListMovie() {
  const response = await fetch(API_ENDPOINT.STUDIOS);
  const data = await response.json();
  return (
    <article className="mx-auto grid grid-flow-col grid-rows-2 gap-10 justify-center items-center">
      {data.map((studio: Studio) => (
        <Item key={studio.id} name={studio.name} id={studio.id}/>
      ))}
    </article>
  );
}
