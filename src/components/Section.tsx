import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function Section({ children, title, description, className = '' }: SectionProps) {
  return (
    <section className={`py-10 md:py-14 ${className}`}>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h2 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-neutral-600 max-w-content">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
