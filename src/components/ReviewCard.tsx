import React from "react";

type Props = {
  avatar: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  isVerified?: boolean;
};

const ReviewCard: React.FC<Props> = ({
  avatar,
  name,
  location,
  rating,
  review,
  isVerified,
}) => {
  return (
    <div className="slide-col">
      {/* Content Section - Left Side */}
      <div className="content">
        <p>{review}</p>
        <h2>{name}</h2>
        <p>{location}</p>
        {isVerified && (
          <div className="verified-badge">
            <svg
              viewBox="0 0 20 20"
              className="verified-icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              />
            </svg>
            Verified
          </div>
        )}
      </div>
      
      {/* Hero Image - Right Side */}
      <div className="hero">
        <img src={avatar} alt={`${name} avatar`} />
      </div>
    </div>
  );
};

export default ReviewCard;
