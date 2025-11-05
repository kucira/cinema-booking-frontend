import { type FormEvent } from "react";
import useAuth from "../../../shared/hooks/useAuth";

export default function SigninForm() {
  const { isLoading, errorMessage, handleLogin } = useAuth();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await handleLogin(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[90%]">
      <div className="flex flex-col bg-white shadow-md rounded p-6">
        <form
          onSubmit={(e: FormEvent) => handleSubmit(e)}
          className="flex flex-row justify-center gap-4"
        >
          <input
            className="border-solid border-2 border-blue-300 rounded p-2"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="border-solid border-2 border-blue-300 rounded p-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer ${
              isLoading ? "bg-gray-500" : "bg-blue-500"
            } text-white py-2 px-4 rounded`}
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </form>
        <p className="text-red-500">{errorMessage}</p>
      </div>
    </div>
  );
}
