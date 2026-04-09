import { useState } from 'react';

function ImageWithLoader({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-full relative overflow-hidden">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-lg" />
      )}

      {/* Imagem */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}

export default ImageWithLoader;
