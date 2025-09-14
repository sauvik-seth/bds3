import React from "react";
import {
  Heart,
  Users,
  Shield,
  BookOpen,
  Calendar,
  MessageCircle,
  HandHeart,
  Globe,
} from "lucide-react";

// Key NGO services and values to display with hex colors
const ngoFeatures = [
  {
    name: "Safe Spaces",
    icon: <Shield size={32} style={{ color: "#9333EA" }} />, // purple-600
    description: "Creating inclusive environments",
  },
  {
    name: "Community Support",
    icon: <Users size={32} style={{ color: "#EC4899" }} />, // pink-500
    description: "Building connections together",
  },
  {
    name: "Education & Awareness",
    icon: <BookOpen size={32} style={{ color: "#3B82F6" }} />, // blue-500
    description: "Promoting understanding",
  },
  {
    name: "Mental Health",
    icon: <Heart size={32} style={{ color: "#EF4444" }} />, // red-500
    description: "Wellness and counseling",
  },
  {
    name: "Events & Programs",
    icon: <Calendar size={32} style={{ color: "#F97316" }} />, // orange-500
    description: "Bringing people together",
  },
  {
    name: "Peer Counseling",
    icon: <MessageCircle size={32} style={{ color: "#22C55E" }} />, // green-500
    description: "One-on-one support",
  },
  {
    name: "Advocacy",
    icon: <HandHeart size={32} style={{ color: "#4F46E5" }} />, // indigo-500
    description: "Fighting for equal rights",
  },
  {
    name: "Global Outreach",
    icon: <Globe size={32} style={{ color: "#14B8A6" }} />, // teal-500
    description: "Worldwide community impact",
  },
];

export default function LGBTQTicker() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mt-6 mb-12 text-center">
          Standing with{" "}
          <span className="text-[#A855F7] relative">
            LGBTQ+
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
          </span>{" "}
          community
        </h2>

        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                animation: "scroll 40s linear infinite",
                minWidth: "calc(100% + 1500px)",
              }}
            >
              {/* First set of items */}
              {ngoFeatures.map((feature, index) => (
                <div
                  key={`first-${index}`}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center min-w-[320px] flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Second set of items for seamless loop */}
              {ngoFeatures.map((feature, index) => (
                <div
                  key={`second-${index}`}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center min-w-[320px] flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced call to action with pride theme */}
        <div className="text-center mt-20">
          <div
            className="inline-flex items-center gap-3 text-2xl font-bold mb-6"
            style={{
              background: "linear-gradient(90deg, #9333EA, #EC4899, #2563EB)", // purple → pink → blue
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <Heart size={32} className="text-red-500 animate-pulse" />
            <span>Love is Love • Pride is Power • Unity is Strength</span>
            <Heart size={32} className="text-red-500 animate-pulse" />
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex gap-2">
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FF0000" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FF7F00" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FFB823" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#00FF00" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#0000FF" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#8B00FF" }}
              ></div>
            </div>

            <p className="text-gray-700 font-medium text-lg">
              Together we rise
            </p>

            <div className="flex gap-2">
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#8B00FF" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#0000FF" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#00FF00" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FFB823" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FF7F00" }}
              ></div>
              <div
                className="w-4 h-8 rounded-sm"
                style={{ backgroundColor: "#FF0000" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
