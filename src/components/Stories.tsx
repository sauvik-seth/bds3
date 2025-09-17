import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Jane Doe",
    location: "New York, USA",
    rating: 5,
    review: "This is the best service I have ever used. Highly recommended!",
    isVerified: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Smith",
    location: "London, UK",
    rating: 4,
    review: "Excellent experience. The team was very supportive and helpful.",
    isVerified: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Jones",
    location: "Sydney, AU",
    rating: 5,
    review: "A game-changer! I can't imagine my life without it now.",
    isVerified: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Michael Brown",
    location: "Toronto, CA",
    rating: 4,
    review:
      "Great platform with a lot of useful features. Keep up the good work!",
    isVerified: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Jessica Wilson",
    location: "Paris, FR",
    rating: 5,
    review:
      "Absolutely fantastic! The user interface is so intuitive and beautiful.",
    isVerified: false,
  },
];

const Stories: React.FC = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 text-black">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-40 animate-blob animation-delay-4000"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-30 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-30 animate-blob animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 relative">
            Stories
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></span>
          </span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how our platform has transformed the way people connect and
          share their stories. Real experiences from real people.
        </p>
      </div>

      {/* Row 1 - Scrolling Left */}
      <div
        className="relative mt-16 group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex animate-scroll-left group-hover:pause">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-3 md:mx-4"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div
        className="relative mt-8 group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex animate-scroll-right group-hover:pause">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-3 md:mx-4"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
