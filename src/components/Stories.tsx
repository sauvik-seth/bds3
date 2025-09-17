import React from "react";
import ReviewCard from "./ReviewCard";

// Complete CSS styles matching the reference design exactly
const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  @keyframes scroll-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-scroll-right {
    animation: scroll-right 20s linear infinite;
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-3000 {
    animation-delay: 3s;
  }

  .group:hover .group-hover\\:pause {
    animation-play-state: paused;
  }

  /* Reference design styles */
  .slide-col {
    position: relative;
    width: 500px;
    height: 400px;
    margin: 0 1rem;
    flex-shrink: 0;
    font-family: "Poppins", sans-serif;
  }

  .hero {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .hero img {
    height: 100%;
    border-radius: 10px;
    width: 320px;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }

  .content {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    height: 270px;
    color: #4d4352;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    padding: 35px;
    z-index: 2;
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
  }

  .content h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 25px 0 5px 0;
    color: #4d4352;
  }

  .verified-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: #22c55e;
    margin-top: 10px;
  }

  .verified-icon {
    width: 16px;
    height: 16px;
    color: #22c55e;
  }

  /* Responsive styles matching reference */
  @media (max-width: 850px) {
    .slide-col {
      width: 400px;
      height: 300px;
    }
    .hero img {
      width: 200px;
    }
    .content {
      width: 260px;
      height: 220px;
      padding: 25px;
    }
    .content p {
      font-size: 0.9rem;
    }
    .content h2 {
      font-size: 1.2rem;
      margin: 15px 0 5px 0;
    }
  }

  @media (max-width: 550px) {
    .slide-col {
      width: 320px;
      height: 280px;
    }
    .hero {
      top: 50%;
      height: 120px;
      z-index: 5;
    }
    .hero img {
      width: 120px;
      height: 120px;
      border-radius:24px;
    }
    .content {
      width: 280px;
      height: 200px;
      padding: 20px;
    }
    .content p {
      font-size: 0.85rem;
    }
    .content h2 {
      font-size: 1.1rem;
      margin: 12px 0 3px 0;
    }
  }
`;

const reviews = [
  {
    avatar: "/stories/s1.png",
    name: "Suvana",
    location: "India",
    rating: 5,
    review:
      "Advocacy is not a one-time game, it has to be carried out in many ways and consistently.",
    isVerified: true,
  },
  {
    avatar: "/stories/s2.png",
    name: "Amrita Sarkar",
    location: "India",
    rating: 5,
    review:
      "Advocacy, various types of advocacy, is one of the ways to pave the way for achieving full dignity and rights, achieving social recognition, and keeping pace with the mainstream..",
    isVerified: false,
  },
  {
    avatar: "/stories/s3.png",
    name: "Raina Roy",
    location: "India",
    rating: 5,
    review: "The first step in advocacy is to change the situation.",
    isVerified: true,
  },
];

const Stories: React.FC = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <>
      {/* Include CSS styles directly in the component */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 text-black">
        {/* Background animated elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-40 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-30 animate-blob animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-30 animate-blob animation-delay-3000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mt-6 mb-0">
            Our{" "}
            <span className="text-[#A855F7] relative">
              Stories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
            </span>{" "}
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our platform has transformed the way people connect and
            share their stories. Real experiences from real people.
          </p>
        </div>

        {/* Scrolling Reviews */}
        <div
          className="relative mt-12 group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-scroll-right group-hover:pause">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`review-${index}`} {...review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
