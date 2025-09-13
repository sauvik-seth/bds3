import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Lazy load spline only when near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadSpline(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const hero = document.querySelector(".spline-container");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Animated Background Graphics - Hidden */}
      <div className="absolute inset-0 overflow-hidden opacity-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink/30 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-blue/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-green/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink/20 to-blue/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow/20 to-purple/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Stars */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div
          className="absolute top-32 right-1/3 w-1 h-1 bg-pink rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-blue rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-32 right-1/4 w-2 h-2 bg-yellow rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-16">
        {/* Notice Badge */}
        <div
          className={`inline-block px-6 py-2 text-white rounded-full text-sm font-semibold mb-8 transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ background: "linear-gradient(to right, #A855F7, #7C3AED)" }}
        >
          🏳️‍⚧️ Standing Up for Trans Rights
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "50ms" }}
        >
          <span className="text-gradient font-accent">Standing Up for</span>
          <br />
          <span className="text-white">Trans Rights</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          Our organization is dedicated to advocating for the rights of
          transgender individuals, working to break down barriers and promote
          equality in all areas of life.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "150ms", marginBottom: "0.25rem" }} // tighter gap
        >
          <button className="btn-primary group relative w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3">
            <span className="relative z-10">Get Involved</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #C084FC, #9333EA, #6B21A8)",
              }}
            />
          </button>

          <button className="btn-secondary group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        {/* 3D Globe */}
        <div
          className={`w-full max-w-7xl mx-auto transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "200ms", marginTop: "-12rem" }} // 👈 pulls globe up
        >
          <div className="spline-container relative w-full h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1050px] xl:h-[1200px] 2xl:h-[1350px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl pointer-events-none">
            {loadSpline ? (
              <iframe
                src="https://my.spline.design/3dglobe-e6L3Vtyz5ohjCANfHHkiMmGx/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full pointer-events-none"
                title="3D Globe"
                loading="lazy"
                style={{ pointerEvents: "none" }}
              />
            ) : (
              // Lightweight placeholder until spline loads
              <div className="w-full h-full bg-gradient-to-b from-purple-900 via-indigo-900 to-black animate-pulse" />
            )}
            {/* Watermark overlay to hide "Built with Spline" */}
            <div className="absolute bottom-0 right-0 w-32 h-8 bg-black z-10"></div>
          </div>
        </div>

        {/* Mac Window Container for Hero Image */}
        <div className="relative z-20 -mt-[50rem] w-[100%] max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {/* Mac Title Bar */}
          <div className="flex items-center h-8 px-4 bg-gray-700 rounded-t-xl">
            {/* Mac Buttons */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* Tab Title */}
            <div className="flex-grow text-center text-sm text-gray-300">
              Hero Image
            </div>
          </div>
          {/* Image Content */}
          <img
            src="./hero_image.png"
            alt="Organization covering image"
            className="w-full h-[30rem] object-cover rounded-b-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
