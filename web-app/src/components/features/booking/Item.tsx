import IconMovie from "./IconMovie";
export default function Item(props: { name: string; id: string }) {
  return (
    <a
      href={`/bookings/${props.id}`}
      className="cursor-pointer"
      data-astro-prefetch
    >
      <img width="100%" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fe22ff753131197.596c4c560ae3b.jpg&f=1&nofb=1&ipt=a5a4e63967478d2510ede5fbb84b093247df8994d3e898b44da86ac6963f6dc6" />
      <p className="text-center pt-2 text-white">{props.name || ""}</p>
    </a>
  );
}
