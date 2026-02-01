import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  external = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-md
    transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  const variantClasses = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
    secondary: 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100',
    ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
