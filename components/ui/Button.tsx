"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

const variants = {
  primary:
    "bg-brand-yellow text-brand-text font-semibold shadow-soft hover:bg-brand-orange hover:text-white hover:shadow-card",
  secondary:
    "border-2 border-brand-yellow text-brand-text font-semibold hover:bg-brand-yellow hover:shadow-soft",
  ghost:
    "text-brand-text font-medium hover:text-brand-orange",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3.5 text-base rounded-full",
  lg: "px-8 py-4 text-lg rounded-full",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  icon,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          className={base}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.97 }} onClick={onClick} className={base}>
      {content}
    </motion.button>
  );
}
