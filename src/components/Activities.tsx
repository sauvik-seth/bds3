import React from 'react';
import Carousel from './Carousel';

const Activities: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-50 text-black">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-100 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-100 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          OUR ACTIVITIES
        </span>
        <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Explore Our <span className="text-blue-600">Engagements</span>
        </h2>
      </div>

      {/* Carousel will be placed here */}
      <div className="relative mt-16">
        <Carousel />
      </div>
    </section>
  );
};

export default Activities;