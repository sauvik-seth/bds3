import React from "react";

type Props = {
  avatar: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  isVerified?: boolean;
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M10 15.27l-5.18 3.04 1.39-5.98L1 7.97l6.09-.52L10 2l2.91 5.45 6.09.52-5.21 4.36 1.39 5.98z"
    />
  </svg>
);

const ReviewCard: React.FC<Props> = ({
  avatar,
  name,
  location,
  rating,
  review,
  isVerified,
}) => {
  return (
    <article
      className="
        relative overflow-hidden rounded-3xl
        bg-white/80 backdrop-blur-md
        shadow-xl border border-white/20
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
        p-0 min-h-[280px]
      "
      role="figure"
      aria-label={`${name} from ${location} review`}
    >
      {/* Linear gradient horizontal bar */}
      <div className="h-2 w-full bg-[linear-gradient(to_right,#EF4444,#F97316,#FCD34D,#22C55E,#3B82F6,#4F46E5,#9333EA)]" />

      {/* Circular badge with linear gradient */}
      <div className="
        absolute -top-8 -right-8 h-20 w-20 rounded-full
        bg-[linear-gradient(45deg,#EF4444,#F97316,#FCD34D,#22C55E,#3B82F6,#4F46E5,#9333EA)]
        ring-4 ring-white shadow-lg opacity-90
      " />

      <div className="p-6 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-16 w-16 rounded-full ring-4 ring-white object-cover shadow-lg"
              loading="lazy"
            />
            {isVerified && (
              <div className="
                absolute -bottom-1 -right-1 
                bg-green-500 rounded-full p-1 
                ring-2 ring-white shadow-md
              ">
                <svg
                  viewBox="0 0 20 20"
                  className="h-3 w-3 text-white"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
              </div>
            )}
          </div>
          
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {name}
              </h3>
              {isVerified && (
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full"
                  aria-label="Verified reviewer"
                  title="Verified reviewer"
                >
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
              <svg viewBox="0 0 20 20" className="h-3 w-3 text-gray-400" aria-hidden="true">
                <path fill="currentColor" d="M10 2C6.13 2 3 5.13 3 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C12.58 18.92 17 13.17 17 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
              {location}
            </p>
            <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < rating} />
              ))}
              <span className="ml-1 text-sm font-medium text-gray-600">
                {rating}.0
              </span>
            </div>
          </div>
        </div>

        <blockquote className="text-gray-700 leading-relaxed text-sm italic relative">
          <span className="text-4xl text-gray-300 absolute -top-2 -left-1 font-serif">"</span>
          <p className="relative z-10 pl-4">
            {review}
          </p>
          <span className="text-4xl text-gray-300 absolute -bottom-6 right-0 font-serif">"</span>
        </blockquote>
      </div>
    </article>
  );
};

export default ReviewCard;
