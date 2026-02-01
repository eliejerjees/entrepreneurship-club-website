import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-neutral-200 rounded-lg p-5 md:p-6
        ${hover ? 'hover:border-neutral-300 hover:shadow-sm transition-all' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
