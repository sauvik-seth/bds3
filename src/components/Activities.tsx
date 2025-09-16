import React from "react";
import "../styles/Button.css";

const Activities: React.FC = () => {
  return (
    <>
      {/* Strip gallery styles (light theme + faster animations) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .gallery {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          overflow: hidden;
          max-width: 1300px;
          margin: auto;
        }

        .gallery__strip {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding: 3rem 0;
          will-change: transform;
        }

        .gallery__strip__wrapper {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: #ffffff;
          border-right: 2px solid #eeeeee;
          position: relative;
        }

        /* 2 columns on small tablets */
        @media (min-width: 500px) and (max-width: 767px) {
          .gallery__strip__wrapper { flex: 0 0 50%; }
        }

        /* 3 columns on tablets */
        @media (min-width: 768px) and (max-width: 949px) {
          .gallery__strip__wrapper { flex: 0 0 33.333%; }
          .gallery { height: 120vh; }
          /* light, balanced motion on tablets */
          .gallery__strip.one  { animation: 18s move-it ease alternate infinite 0s;     transform: translateY(0%); }
          .gallery__strip.two  { animation: 18s move-it-2 ease alternate infinite 0.2s; transform: translateY(-25%); }
          .gallery__strip.three{ animation: 19s move-it ease alternate infinite 0.4s;   transform: translateY(0%); }
          .gallery__strip.four { animation: 19s move-it-2 ease alternate infinite 0.6s; transform: translateY(-25%); }
          .gallery__strip:hover { animation-play-state: paused; }
        }

        /* 4 columns + faster motion on desktops */
        @media (min-width: 950px) {
          .gallery { height: 100vh; }
          /* Faster durations: 15s, 17.5s, 14.5s, 16.25s */
          .gallery__strip.one  { animation: 15s move-it ease alternate infinite 0s;     transform: translateY(2%); }
          .gallery__strip.three{ animation: 17.5s move-it ease alternate infinite 0.5s; transform: translateY(2%); }
          .gallery__strip.two  { animation: 14.5s move-it-2 ease alternate infinite 0.2s; transform: translateY(-50%); }
          .gallery__strip.four { animation: 16.25s move-it-2 ease alternate infinite 0.3s; transform: translateY(-50%); }
          .gallery__strip:hover { animation-play-state: paused; }
          .gallery__strip__wrapper { flex: 0 0 25%; }
        }

        /* Tighter spacing and centered layout on mobile */
        @media (max-width: 499px) {
          .gallery__strip { gap: 1.25rem; padding: 1.5rem 0; }
          .photo { text-align: center; padding-bottom: 2rem; }
        }

        .photo {
          position: relative;
          text-align: right;
          padding-bottom: 3rem;
        }

        .photo__image img {
          width: 90%;
          transform: translateX(30%);
          transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          /* Consistent framing */
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }

        /* On phones, show images centered with no off-canvas translate */
        @media (max-width: 767px) {
          .photo__image img {
            width: 100%;
            transform: none;
          }
        }

        .photo__name {
          text-transform: uppercase;
          font-size: 30px;
          line-height: 1.2;
          letter-spacing: 2px;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #111111;
          margin-top: -20px;
          transition: 0.3s ease-in-out 0.2s;
          position: relative;
          width: 100%;
        }

        /* Friendlier label size on small screens */
        @media (max-width: 767px) {
          .photo__name {
            font-size: 20px;
            letter-spacing: 1px;
            -webkit-text-stroke-width: 0.5px;
            margin-top: -10px;
          }
        }

        /* Hover reveal only applies where hover exists; default stays readable on mobile */
        .photo:hover .photo__image img { transform: translateX(0%); }
        .photo:hover .photo__name { color: #111111; }

        /* Keyframes unchanged (distance), speed controlled by duration above */
        @keyframes move-it {
          0%, 90%, 100% { transform: translateY(2%); }
          45% { transform: translateY(-50%); }
        }

        @keyframes move-it-2 {
          0%, 90%, 100% { transform: translateY(-50%); }
          45% { transform: translateY(5%); }
        }

        /* Respect reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .gallery__strip { animation: none !important; }
          .photo__image img { transition: none !important; }
        }
      `}</style>

      <section
        className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden text-black"
        style={{ fontFamily: "Poppins, sans-serif", background: "#ffffff" }}
      >
        {/* Title */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6 mb-0">
            Our{" "}
            <span className="text-[#A855F7] relative">
              Activities
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
            </span>
          </h2>
          <p className="mt-4 mb-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Standing with LGBTQ+ community Discover how our platform has
            transformed the way people connect and share their stories. Real
            experiences from real people.
          </p>
        </div>

        <div className="text-center mt-6 sm:mt-8 mb-12 sm:mb-16 px-4">
          <button
            onClick={() => (window.location.href = "/all-programs")}
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
              <span className="donate-button-inner-static">All Programs</span>
              <span className="donate-button-inner-hover">All Programs</span>
            </span>
          </button>
        </div>

        {/* Four animated vertical strips */}
        <div className="gallery px-2 sm:px-0">
          {/* Strip 1 */}
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip one">
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/book1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Book fair & calendar gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/book2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Book fair & calendar gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/book3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Book fair & calendar gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/cg1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Calender Gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/cg2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Calender Gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/cg3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Calender Gifting</div>
              </div>
            </div>
          </div>

          {/* Strip 2 */}
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip two">
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/cg4.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Calender Gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/cg5.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Calender Gifting</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/tdov1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Transgender Day of Visibility</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/tdov2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Transgender Day of Visibility</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/tdov3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Transgender Day of Visibility</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/tdov4.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Transgender Day of Visibility</div>
              </div>
            </div>
          </div>

          {/* Strip 3 */}
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip three">
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/tdov5.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Transgender Day of Visibility</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/legal1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Legal Advocacy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/legal2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Legal Advocacy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/legal3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Legal Advocacy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/legal4.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Legal Advocacy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/legal5.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Legal Advocacy</div>
              </div>
            </div>
          </div>

          {/* Strip 4 */}
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip four">
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/mkrk1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Moner khoje rupantor kamira</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/mkrk2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Moner khoje rupantor kamira</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/mkrk3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Moner khoje rupantor kamira</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/sc1.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Street Corner Awareness</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/sc2.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Street Corner Awareness</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img
                    src="activities/sc3.webp"
                    alt="see the attached image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 499px) 92vw, (max-width: 949px) 46vw, 23vw"
                  />
                </div>
                <div className="photo__name">Street Corner Awareness</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
