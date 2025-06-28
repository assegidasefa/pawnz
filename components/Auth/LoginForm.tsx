"use client";
import * as React from "react";
import { LoginInputField } from "./LoginInputField";
import { LoginButton } from "./LoginButton";

export const LoginForm: React.FC = () => {
  return (
    <section className="w-full max-w-md flex flex-col gap-6 p-6 sm:p-10">
      <div className="flex justify-center">
        <img
          src="/pawnzFullLogo.svg"
          className="w-60 sm:w-80 object-contain"
          alt="Pawnz Logo"
        />
      </div>

      <form className="flex flex-col gap-4 w-full">
        <LoginInputField placeholder="Username" />
        <LoginInputField placeholder="Password" type="password" />
      </form>

      <div className="flex flex-col gap-3 items-center">
        <LoginButton variant="primary">Sign In</LoginButton>
        <LoginButton variant="secondary">Forgot Password?</LoginButton>
      </div>
    </section>
  );
};
