import React, { useState, useEffect } from 'react';

const BigCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const itemsArray = React.Children.toArray(children);
  const itemCount = itemsArray.length;

  const scroll = (dir = 1) => {
    const newIndex = (currentIndex + dir + itemCount) % itemCount;
    setCurrentIndex(newIndex);
    //setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    //setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, itemCount]);

  if (itemCount === 0) return null;

  return (
    <div className="h-full flex-row items-center justify-center px-6 mx-auto">
      <div className="relative w-full max-w-7xl h-70 md:h-120 overflow-hidden mx-auto mb-6">
        <div className="flex h-full">
          <div className="w-full lg:w-full relative flex items-center justify-end overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {itemsArray.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700`}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                  <div className="h-full w-full flex items-center justify-center">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll(-1)}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          aria-label="previous"
          className="h-8 absolute left-0 bottom-0 z-10 bg-gray-700 transition-all duration-300 opacity-70 text-white px-2 rounded-md hover:opacity-100 text-2xl font-bold hover:bg-gray-800"
        >
          ‹
        </button>

        <button
          onClick={() => scroll(1)}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          aria-label="next"
          className="h-8 absolute right-0 bottom-0 z-10 bg-gray-700 transition-all duration-300 opacity-70 text-white px-2 rounded-md hover:opacity-100 text-2xl font-bold hover:bg-gray-800"
        >
          ›
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {itemsArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-gray-500 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigCarousel;
