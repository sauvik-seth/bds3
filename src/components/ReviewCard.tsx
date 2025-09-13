import React from 'react';

interface ReviewCardProps {
  avatar: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  isVerified: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, name, location, rating, review, isVerified }) => {
  return (
    <div className="relative flex flex-col h-64 p-6 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        {isVerified && (
          <span className="ml-auto text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            Verified
          </span>
        )}
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="italic text-gray-600 flex-grow">"{review}"</p>
      <div className="flex items-center mt-4 text-sm text-gray-500">
        <button className="flex items-center hover:text-gray-800">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Like
        </button>
        <button className="flex items-center ml-4 hover:text-gray-800">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.54 15.255 3 13.682 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Reply
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;