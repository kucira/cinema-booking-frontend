import { useState } from "react";
import type { Login, Register } from "../interfaces/auth";
import { login, register } from "../api/auth";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");
  const handleRegister = async (formData: FormData) => {
    if (
      formData.get("email") === "" ||
      formData.get("password") === "" ||
      formData.get("name") === ""
    ) {
      setErrorMessage("Please fill all fields.");
      return;
    }
    const payload: Register = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
    };
    try {
      setIsLoading(true);
      setErrorMessage("");
      const result = await register(payload);
      if (result) return window.location.replace("/sign-in");
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };

  const handleLogin = async (formData: FormData) => {
    if (formData.get("email") === "" || formData.get("password") === "") {
      setErrorMessage("Please fill all fields.");
      return;
    }
    const payload: Login = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    try {
      setIsLoading(true);
      setErrorMessage("");
      const result = await login(payload);

      //set cookie on server
      await fetch("/api/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });

      if (result) return window.location.replace("/");
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    errorMessage,
    handleRegister,
    handleLogin,
  };
}
