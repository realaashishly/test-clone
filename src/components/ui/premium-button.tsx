"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PremiumButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "lg" | "md";
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  href?: string;
  ariaLabel?: string;
}

export function PremiumButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  rounded = "full",
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
  href,
  ariaLabel,
}: PremiumButtonProps) {
  // Determine classes based on props
  const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  const roundedClasses = {
    full: "rounded-full",
    lg: "rounded-lg",
    md: "rounded-md",
  };

  const variantClasses = {
    primary: `bg-primary text-white hover:bg-primary/90 active:bg-primary/95 shadow-lg shadow-primary/20`,
    secondary: `bg-mymind-dark text-white hover:bg-mymind-dark/90 active:bg-mymind-dark/95 shadow-lg shadow-mymind-dark/20`,
    outline: `bg-transparent border border-mymind-dark/20 text-mymind-dark hover:bg-mymind-dark/5 active:bg-mymind-dark/10`,
    ghost: `bg-transparent text-mymind-dark hover:bg-mymind-dark/5 active:bg-mymind-dark/10`,
  };

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "";

  const baseClasses = `relative font-nunito inline-flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/20 ${
    sizeClasses[size]
  } ${roundedClasses[rounded]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}

      {/* Subtle gradient overlay for primary and secondary variants */}
      {(variant === "primary" || variant === "secondary") && (
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-b from-white/30 to-transparent rounded-inherit" />
      )}
    </>
  );

  // Animation properties
  const buttonAnimation = {
    tap: { scale: 0.98 },
    hover: disabled ? {} : { y: -2, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" },
  };

  // Render as link or button based on href prop
  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileTap={buttonAnimation.tap}
        whileHover={buttonAnimation.hover}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileTap={buttonAnimation.tap}
      whileHover={buttonAnimation.hover}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </motion.button>
  );
}
