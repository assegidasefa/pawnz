import * as React from "react";

interface LoginInputFieldProps {
  placeholder: string;
  type?: string;
}

export const LoginInputField: React.FC<LoginInputFieldProps> = ({
  placeholder,
  type = "text"
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex-1 shrink gap-3 self-stretch max-w-full rounded-lg border border-solid basis-0 min-h-[50px] text-ellipsis w-[400px] px-4 text-sm font-medium"
    />
  );
};
