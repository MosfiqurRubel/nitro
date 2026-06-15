import type { ButtonHTMLAttributes, ReactNode } from "react";
import type React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "outline"
  | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  override?: boolean;
  weight?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  isLoading = false,
  loadingText = "Please wait...",
  className = "",
  override = false,
  weight = "",
  ...props
}) => {
  const baseStyles: Record<ButtonSize, string> = {
    small: "px-3 py-1 text-sm sm:px-4 sm:py-2",
    medium: "px-4 py-1.5 text-base sm:px-6 sm:py-2",
    large: "px-6 py-3 text-lg sm:px-8 sm:py-4",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#E0E600] hover:bg-lime-300 active:bg-lime-400 text-black shadow-sm",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "hover:bg-gray-100 text-gray-700",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={clsx(
        override
          ? className
          : [
              "inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200",
              disabled || isLoading ? "cursor-not-allowed" : "cursor-pointer",
              baseStyles[size],
              variantStyles[variant],
              fullWidth && "w-full",
              weight,
              (disabled || isLoading) && "opacity-60",
              "focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:ring-offset-1",
              className,
            ],
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {icon && (
            <span className="flex items-center justify-center">{icon}</span>
          )}

          {label && <span>{label}</span>}

          {children}
        </>
      )}
    </button>
  );
};

export default Button;
