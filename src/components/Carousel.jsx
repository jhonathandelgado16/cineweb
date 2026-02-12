import React, { useRef } from 'react';

const Carousel = ({ children }) => {
  const containerRef = useRef(null);

  const scroll = (dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll(-1)}
        aria-label="previous"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#d00000] transition-opacity duration-500 opacity-70 text-white p-2 rounded-full hover:opacity-100 hover:font-bold"
      >
        ‹
      </button>

      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth py-4 px-2 md:scrollbar-hide custom-scrollbar"
      >
        {React.Children.map(children, (child, idx) => (
          <div className="flex-shrink-0" key={idx}>
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll(1)}
        aria-label="next"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#d00000] transition-opacity duration-500 opacity-70 text-white p-2 rounded-full hover:opacity-100 hover:font-bold"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
