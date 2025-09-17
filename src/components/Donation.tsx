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
        <h2 className="text-4xl font-bold mt-6 mb-0">
          Support Our{" "}
          <span className="text-[#A855F7] relative">
            LGBTQ+
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
          </span>{" "}
          Initiatives
        </h2>
        <p className="text-lg mb-8">
          Your generous donations help us create a more inclusive and supportive
          community for everyone.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://forms.gle/nuEvu9EdXZ89SMxd7"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
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
          </a>
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
