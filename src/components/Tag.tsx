interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

export default function Tag({ label, active = false, onClick, size = 'sm' }: TagProps) {
  const baseClasses = `
    inline-flex items-center rounded-full border transition-colors
    ${size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
  `;

  const colorClasses = active
    ? 'bg-accent-100 border-accent-200 text-accent-700'
    : 'bg-neutral-50 border-neutral-200 text-neutral-600';

  const interactiveClasses = onClick
    ? 'cursor-pointer hover:border-accent-300 hover:bg-accent-50'
    : '';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${colorClasses} ${interactiveClasses}`}
      >
        {label}
      </button>
    );
  }

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      {label}
    </span>
  );
}
