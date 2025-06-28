import * as React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  variant,
  className = ""
}) => {
  const baseClasses = "overflow-hidden flex-1 shrink gap-1 self-stretch px-3 w-full rounded-lg backdrop-blur-[20px] basis-0 min-h-[50px] text-ellipsis";

  const variantClasses = variant === "primary"
    ? "py-4 font-medium text-black bg-lime-300 border border-solid border-white border-opacity-10"
    : "py-5 mt-2 leading-none text-zinc-400";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};
