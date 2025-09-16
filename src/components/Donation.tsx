import React from "react";
import "../styles/Button.css";

const Donation: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 overflow-hidden text-black"
      style={{ fontFamily: "Poppins, sans-serif", background: "#ffffff" }}
    >
      {/* Add Poppins Font + Hamburger Animation Styles + Donate Button Styles */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
      `}</style>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-4">
          Support Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 relative">
            LGBTQ+
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></span>
          </span>
          Initiatives
        </h2>
        <p className="text-lg mb-8">
          Your generous donations help us create a more inclusive and supportive
          community for everyone.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button className="donate-button">
            <span className="donate-button-bg">
              <span className="donate-button-bg-layers">
                <span className="donate-button-bg-layer donate-button-bg-layer-1"></span>
                <span className="donate-button-bg-layer donate-button-bg-layer-2"></span>
                <span className="donate-button-bg-layer donate-button-bg-layer-3"></span>
              </span>
            </span>
            <span className="donate-button-inner">
              <span className="donate-button-inner-static">Donate Now</span>
              <span className="donate-button-inner-hover">Donate Now</span>
            </span>
          </button>
          <button
            className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => {}}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Donation;
