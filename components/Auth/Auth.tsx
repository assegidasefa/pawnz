"use client";
import * as React from "react";
import { LoginForm } from "./LoginForm";
import Image from "next/image";

export const PawnzLoginPage: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row w-full h-screen">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full">
          <Image
            src="/SignInForm.svg"
            alt="Login illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default PawnzLoginPage;
