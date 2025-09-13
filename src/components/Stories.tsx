import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Jane Doe',
    location: 'New York, USA',
    rating: 5,
    review: 'This is the best service I have ever used. Highly recommended!',
    isVerified: true,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    location: 'London, UK',
    rating: 4,
    review: 'Excellent experience. The team was very supportive and helpful.',
    isVerified: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Emily Jones',
    location: 'Sydney, AU',
    rating: 5,
    review: 'A game-changer! I can\'t imagine my life without it now.',
    isVerified: true,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Michael Brown',
    location: 'Toronto, CA',
    rating: 4,
    review: 'Great platform with a lot of useful features. Keep up the good work!',
    isVerified: true,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    name: 'Jessica Wilson',
    location: 'Paris, FR',
    rating: 5,
    review: 'Absolutely fantastic! The user interface is so intuitive and beautiful.',
    isVerified: false,
  },
];

const Stories: React.FC = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-100 text-black">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
       
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our <span className="text-purple-600">Stories</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Discover how our platform has transformed the way people connect and share their stories.
        </p>
      </div>

      <div className="relative mt-12 group" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
        <div className="flex animate-scroll-left group-hover:pause">
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-96 mx-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-8 group" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
        <div className="flex animate-scroll-right group-hover:pause">
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-96 mx-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;