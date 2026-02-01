import Image from 'next/image';

interface PhotoGridProps {
  photos: string[];
  alt?: string;
}

// Placeholder component for when photos aren't available yet
function PhotoPlaceholder({ index }: { index: number }) {
  // Different muted colors for variety
  const colors = [
    'bg-neutral-100',
    'bg-neutral-50',
    'bg-stone-100',
    'bg-zinc-100',
  ];

  return (
    <div
      className={`
        aspect-[4/3] rounded-lg ${colors[index % colors.length]}
        flex items-center justify-center
      `}
    >
      <div className="text-center text-neutral-400">
        <svg
          className="w-8 h-8 mx-auto mb-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span className="text-xs">Photo {index + 1}</span>
      </div>
    </div>
  );
}

export default function PhotoGrid({ photos, alt = 'Event photo' }: PhotoGridProps) {
  // If no photos, show placeholder grid
  if (!photos || photos.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[0, 1, 2].map((index) => (
          <PhotoPlaceholder key={index} index={index} />
        ))}
      </div>
    );
  }

  // Single photo layout
  if (photos.length === 1) {
    return (
      <div className="aspect-video relative rounded-lg overflow-hidden bg-neutral-100">
        {/* TODO: Replace placeholder check with actual image loading */}
        {photos[0].startsWith('placeholder') || !photos[0] ? (
          <PhotoPlaceholder index={0} />
        ) : (
          <Image
            src={`/photos/${photos[0]}`}
            alt={alt}
            fill
            className="object-cover"
          />
        )}
      </div>
    );
  }

  // Multiple photos grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-100"
        >
          {/* TODO: Replace with actual images once uploaded */}
          <PhotoPlaceholder index={index} />
          {/* Uncomment below when real images are available:
          <Image
            src={`/photos/${photo}`}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
          />
          */}
        </div>
      ))}
    </div>
  );
}
