import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Mountain Adventure",
    description:
      "Experience the thrill of the mountains with our guided tours.",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Lakeside Serenity",
    description: "Relax and unwind by the crystal-clear waters of the lake.",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Forest Exploration",
    description: "Discover the hidden gems of the lush green forests.",
  },
  {
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Road Trip Fun",
    description: "Embark on an unforgettable journey along scenic routes.",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Winter Wonderland",
    description: "Enjoy the magic of winter with our special packages.",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main image carousel */}
      {/* 👇 THIS IS THE MODIFIED LINE 👇 */}
      <div className="relative h-[550px] overflow-hidden rounded-2xl shadow-2xl bg-gray-200 mx-4 md:mx-6 lg:mx-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
          </div>
        ))}

        {/* Caption area */}
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <div className="overflow-hidden">
            <h3
              className="text-4xl font-bold transform transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(${currentIndex * -100}%)` }}
            >
              {slides[currentIndex].title}
            </h3>
          </div>
          <div className="overflow-hidden mt-2">
            <p
              className="text-lg transform transition-transform duration-700 ease-in-out delay-100"
              style={{ transform: `translateY(${currentIndex * -100}%)` }}
            >
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail previews */}
      <div className="flex justify-center mt-8 space-x-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-24 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-110`}
            style={{
              boxShadow:
                currentIndex === index
                  ? "0 0 15px 5px rgba(59, 130, 246, 0.5)"
                  : "none",
              border:
                currentIndex === index
                  ? "2px solid #3B82F6"
                  : "2px solid transparent",
            }}
            onClick={() => goToSlide(index)}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-3 bg-white/80 rounded-full shadow-lg hover:scale-110 transition-transform backdrop-blur-sm"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-3 bg-white/80 rounded-full shadow-lg hover:scale-110 transition-transform backdrop-blur-sm"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Play/Pause toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/80 rounded-full shadow-lg backdrop-blur-sm"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Progress bar */}
      <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-linear"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
