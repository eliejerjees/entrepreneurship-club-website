interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 md:mb-12">
      <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-neutral-600 max-w-content">
          {description}
        </p>
      )}
    </header>
  );
}
