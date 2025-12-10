"use client";

export interface CustomInputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function CustomInput({
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}: CustomInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg transition-all duration-200 placeholder:text-gray-400 hover:border-[#3990F8] focus:outline-none focus:border-[#3990F8] focus:ring-2 focus:ring-[#3990F8]/20 ${className}`}
    />
  );
}
