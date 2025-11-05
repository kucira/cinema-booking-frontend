import type { UserToken } from "../../../shared/interfaces/auth";

function Header(props: { user: string }) {
  const userToken: UserToken = props.user && JSON.parse(props.user|| "");
  return (
    <header className="w-full flex justify-end gap-2 mb-4">
      <a
        href={`/validate`}
      >
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Validate QRCode
        </button>
      </a>
      <a
        href={`${userToken?.token ? "/my-bookings" : "/sign-in"}`}
        data-astro-prefetch
      >
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {userToken?.token ? "My Bookings" : "Signin"}
        </button>
      </a>
      <a
        href={`${userToken?.token ? "/logout" : "/register"}`}
        data-astro-prefetch
      >
        <button className="cursor-pointer border border-blue-500 text-white py-2 px-4 rounded">
          {userToken?.token ? "Logout" : "Register"}
        </button>
      </a>
    </header>
  );
}

export default Header;
