import IconMovie from './IconMovie';
export default function Item(props :{name:string, id: string}) {
    return(
        <a href={`/bookings/${props.id}`} className='cursor-pointer' data-astro-prefetch>
            <IconMovie />
            <p className='text-center pt-2 text-white'>{props.name || ""}</p>
        </a>
    );
}