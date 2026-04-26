import React from "react";
import Link from "next/link";

/**
 * Universal Button Component
 * 
 * Props:
 * - variant: "primary" | "outline" | "secondary"
 * - size: "sm" | "md" | "lg"
 * - href: URL (if provided, renders as a Next.js Link)
 * - className: additional custom classes
 * - children: the content of the button
 * - onClick: click handler
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  onClick,
  ...props
}) {
  const baseClass = "vq-btn";
  const variantClass = `vq-btn-${variant}`;
  const sizeClass = `vq-btn-${size}`;
  const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
