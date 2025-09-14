import React from "react";

const Donation: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 overflow-hidden text-black"
      style={{ fontFamily: "Poppins, sans-serif", background: "#ffffff" }}
    >
      {/* Add Poppins Font + Hamburger Animation Styles + Donate Button Styles */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        .donate-button {
          all: unset;
          position: relative;
          display: inline-flex;
          height: 3.5rem;
          align-items: center;
          border-radius: 9999px;
          padding-left: 2rem;
          padding-right: 2rem;
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.06em;
          background-color: transparent;
          cursor: pointer;
        }

        .donate-button-bg {
          overflow: hidden;
          border-radius: 2rem;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(1);
          transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
          border: 1px solid #FFD074;
          background-color:#A855F7;
        }

        .donate-button-bg-layers {
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          top: -60%;
          aspect-ratio: 1 / 1;
          width: max(200%, 10rem);
          display: block;
        }

        .donate-button-bg-layer {
          border-radius: 9999px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(0);
          display: block;
        }

        .donate-button-bg-layer-1 {
          background-color: #A374FF;
        }

        .donate-button-bg-layer-2 {
          background-color: #17F1D1;
        }

        .donate-button-bg-layer-3 {
          background-color: #FFD074;
        }

        .donate-button-inner {
          position: relative;
          display: block;
          pointer-events: none;
        }

        .donate-button-inner-static {
          display: block;
          pointer-events: none;
        }

        .donate-button-inner-hover {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transform: translateY(70%);
          display: block;
          pointer-events: none;
        }

        .donate-button:hover .donate-button-inner-static {
          opacity: 0;
          transform: translateY(-70%);
          transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear;
        }

        .donate-button:hover .donate-button-inner-hover {
          opacity: 1;
          transform: translateY(0);
          transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .donate-button:hover .donate-button-bg-layer {
          transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear;
        }

        .donate-button:hover .donate-button-bg-layer-1 {
          transform: scale(1);
        }

        .donate-button:hover .donate-button-bg-layer-2 {
          transition-delay: 0.1s;
          transform: scale(1);
        }

        .donate-button:hover .donate-button-bg-layer-3 {
          transition-delay: 0.2s;
          transform: scale(1);
        }
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
          <a
            href="#"
            className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donation;
