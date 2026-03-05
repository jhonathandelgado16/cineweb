import React, { useRef } from 'react';

const Carousel = ({ children }) => {
  const containerRef = useRef(null);

  const scroll = (dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 1);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto scroll-smooth scrollbar-hide custom-scrollbar h-full"
      >
        {React.Children.map(children, (child, idx) => (
          <div
            className="flex-shrink-0 p-1 md:p-2 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5"
            key={idx}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-between px-2 text-2xl">
        <button
          onClick={() => scroll(-1)}
          aria-label="previous"
          className="h-8 bg-[#d00000] transition-opacity duration-500 opacity-70 text-white px-2 rounded-md hover:opacity-100 hover:font-bold"
        >
          ‹
        </button>

        <button
          onClick={() => scroll(1)}
          aria-label="next"
          className="h-8 bg-[#d00000] transition-opacity duration-500 opacity-70 text-white px-2 rounded-md hover:opacity-100 hover:font-bold"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
