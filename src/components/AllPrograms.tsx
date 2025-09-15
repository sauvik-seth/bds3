import React from "react";

// All the complex CSS for the layout and scroll-driven animation is placed here as a string.
const scrollingGalleryStyles = `
  /* CSS Layers for organization */
  @layer normalize, base, demo, grid, setup, scroll;

  /* --- SCROLL ANIMATION LOGIC --- */
  @layer scroll {
    :root {
      /* Easing functions for smooth, non-linear animations */
      --power-1-out: linear(0, 0.0027 3.64%, 0.0106 7.29%, 0.0425 14.58%, 0.0957 21.87%, 0.1701 29.16%, 0.2477 35.19%, 0.3401 41.23%, 0.5982 55.18%, 0.7044 61.56%, 0.7987 68.28%, 0.875 75%, 0.9297 81.25%, 0.9687 87.5%, 0.9922 93.75%, 1);
      --power-2-out: linear(0, 0.0036 9.62%, 0.0185 16.66%, 0.0489 23.03%, 0.0962 28.86%, 0.1705 34.93%, 0.269 40.66%, 0.3867 45.89%, 0.5833 52.95%, 0.683 57.05%, 0.7829 62.14%, 0.8621 67.46%, 0.8991 70.68%, 0.9299 74.03%, 0.9545 77.52%, 0.9735 81.21%, 0.9865 85%, 0.9949 89.15%, 1);
      --power-3-out: linear(0, 0.0029 13.8%, 0.0184 21.9%, 0.0339 25.51%, 0.0551 28.81%, 0.0827 31.88%, 0.1168 34.76%, 0.1962 39.57%, 0.3005 44.02%, 0.4084 47.53%, 0.6242 53.45%, 0.7493 57.93%, 0.8495 62.97%, 0.8888 65.67%, 0.9213 68.51%, 0.9629 73.9%, 0.9876 80.16%, 0.998 87.5%, 1);
      --power-4-out: linear(0, 0.0012 14.95%, 0.0089 22.36%, 0.0297 28.43%, 0.0668 33.43%, 0.0979 36.08%, 0.1363 38.55%, 0.2373 43.07%, 0.3675 47.01%, 0.5984 52.15%, 0.7121 55.23%, 0.8192 59.21%, 0.898 63.62%, 0.9297 66.23%, 0.9546 69.06%, 0.9733 72.17%, 0.9864 75.67%, 0.9982 83.73%, 1);
      --sine: linear(0, 0.2861 18.47%, 0.4829 32.08%, 0.6437 44.52%, 0.7712 56.07%, 0.8722 67.47%, 0.9115 73.02%, 0.9434 78.49%, 0.9682 83.91%, 0.9859 89.3%, 0.9965 94.66%, 1);
    }
    @keyframes fade { 0%, 55% { opacity: 0; } }
    @keyframes reveal { 0%, 30% { scale: 0; } }
    @keyframes scale-x { 0%, 10% { width: calc(100vw - (2 * var(--gutter))); } }
    @keyframes scale-y { 0%, 10% { height: calc(100vh - (2 * var(--gutter))); } }

    @media (prefers-reduced-motion: no-preference) {
      [data-enhanced='true'] {
        main section:first-of-type {
          min-height: 240vh; /* This provides the scroll distance needed for the animation */
        }
        @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
          main section:first-of-type {
            view-timeline: --runner; /* Creates a named scroll timeline */
          }
          &[data-center='true'] .scaler img {
            animation-name: scale-x, scale-y;
            animation-fill-mode: both;
            animation-timing-function: var(--power-2-out), var(--power-1-out);
            animation-timeline: --runner, --runner;
            animation-range: entry 100% exit -20%;
          }
          &[data-layers='true'] .grid .layer {
            animation-name: fade, reveal;
            animation-fill-mode: both;
            animation-timeline: --runner, --runner;
            animation-timing-function: var(--sine), var(--power-1-out);
            animation-range: entry 100% exit 0%;
          }
          &[data-stagger='range'] .grid .layer {
            &:nth-of-type(1) { animation-range: entry 100% exit 0%; }
            &:nth-of-type(2) { animation-range: entry 100% exit -10%; }
            &:nth-of-type(3) { animation-range: entry 100% exit -20%; }
          }
        }
      }
    }
  }

  /* --- STICKY CONTAINER & SCALER SETUP --- */
  @layer setup {
    :root {
      --gap: clamp(10px, 7.35vw, 80px);
      --gutter: 2rem;
    }
    @media (max-width: 600px) { :root { --gutter: 1rem; } }

    .content {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      place-items: center;
      align-content: center;
      position: sticky; /* This is key: it keeps the animation viewport in place while scrolling */
      top: 0;
    }

    .scaler {
      z-index: 2;
      width: 100%;
      height: 100%;
      position: relative;
    }
    .scaler img {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      object-fit: cover;
      border-radius: 1rem;
      width: 100%;
      height: 100%;
    }
  }

  /* --- GRID LAYOUT LOGIC --- */
  @layer grid {
    .grid {
      --offset: 0;
      width: 1600px;
      max-width: calc(100% - (2 * var(--gutter)));
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: var(--gap);
      margin: 0 auto;
      align-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    @media (max-width: 600px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
        --offset: -1;
      }
      .grid > div:nth-of-type(1) { display: none; }
    }

    .grid > .layer {
      display: grid;
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      grid-template-columns: subgrid;
      grid-template-rows: subgrid;
    }

    /* Defines which columns the images in each layer will occupy */
    .grid > div:nth-of-type(1) div:nth-of-type(odd) { grid-column: 1; }
    .grid > div:nth-of-type(1) div:nth-of-type(even) { grid-column: -2; }
    .grid > div:nth-of-type(2) div:nth-of-type(odd) { grid-column: calc(2 + var(--offset)); }
    .grid > div:nth-of-type(2) div:nth-of-type(even) { grid-column: calc(-3 - var(--offset)); }
    .grid > div:nth-of-type(3) div { grid-column: calc(3 + var(--offset)); }
    .grid > div:nth-of-type(3) div:last-of-type { grid-row: -1; }
    
    .grid .scaler {
      position: relative;
      grid-area: 2 / calc(3 + var(--offset)); /* Places the scaler in the middle */
    }

    .grid img {
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      border-radius: 1rem;
      background-color: #eee;
    }
  }

  /* --- DEMO & THEME STYLES --- */
  @layer demo {
    /* LIGHT THEME */
    .all-programs-wrapper, .all-programs-wrapper body {
      background: #ffffff;
      color: #1a202c; /* A dark grey for text */
    }
    .content-wrap {
      background: #ffffff;
      overflow: clip;
      z-index: 2;
    }
    
    .all-programs-wrapper h1 { --font-level: 8; line-height: 0.8; }
    .all-programs-wrapper h2 { --font-level: 4; }

    .all-programs-wrapper header {
      min-height: 100vh;
      display: grid;
      margin: 0 auto;
      align-content: center;
      max-width: calc(100% - (2 * var(--gutter)));
      padding-left: 48px;
      text-align: left;
    }

    .all-programs-wrapper main, .all-programs-wrapper section { max-width: 100%; }
    .all-programs-wrapper section { min-height: 100vh; }
    .all-programs-wrapper .content { overflow: hidden; }
    .all-programs-wrapper main section:last-of-type {
      display: grid;
      place-items: center;
      background-color: #f7fafc; /* A slightly off-white for the final section */
    }
  }

  /* --- BASE & FLUID TYPOGRAPHY --- */
  @layer base {
    .all-programs-wrapper {
        --font-size-min: 16;
        --font-size-max: 20;
        --font-ratio-min: 1.2;
        --font-ratio-max: 1.33;
        --font-width-min: 375;
        --font-width-max: 1500;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui;
    }
    .all-programs-wrapper :where(.fluid) {
      --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
      --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
      --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
      --fluid-type: clamp( (var(--fluid-min) / 16) * 1rem, ((var(--fluid-min) / 16) * 1rem) - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) + (var(--fluid-preferred) * var(--variable-unit, 100vi)), (var(--fluid-max) / 16) * 1rem);
      font-size: var(--fluid-type);
    }
    .all-programs-wrapper *, .all-programs-wrapper *:after, .all-programs-wrapper *:before { box-sizing: border-box; }
    .all-programs-wrapper body {
      display: block;
      min-height: 100vh;
    }
  }
`;

const AllPrograms: React.FC = () => {
  // We split the images into different layers for the animation
  // The central image that scales
  const scalerImage = "/activities/mkrk1.webp";

  // Images for the first layer that fades in
  const layer1Images = [
    "/activities/book1.webp",
    "/activities/cg1.webp",
    "/activities/tdov1.webp",
    "/activities/legal1.webp",
    "/activities/sc1.webp",
    "/activities/book2.webp",
  ];

  // Images for the second layer
  const layer2Images = [
    "/activities/cg2.webp",
    "/activities/tdov2.webp",
    "/activities/legal2.webp",
    "/activities/sc2.webp",
    "/activities/mkrk2.webp",
    "/activities/cg3.webp",
  ];

  // Images for the third layer
  const layer3Images = ["/activities/tdov3.webp", "/activities/legal3.webp"];

  return (
    <>
      <style>{scrollingGalleryStyles}</style>
      <div
        className="all-programs-wrapper"
        data-enhanced="true"
        data-layers="true"
        data-stagger="range"
        data-center="true"
      >
        <div className="content-wrap">
          <header>
            <h1 className="fluid">
              Explore
              <br />
              Our Programs.
            </h1>
          </header>
          <main>
            {/* This section is the scroll container for the animation */}
            <section>
              <div className="content">
                <div className="grid">
                  <div className="layer">
                    {layer1Images.map((image, index) => (
                      <div key={`layer1-${index}`}>
                        <img
                          src={image}
                          alt={`Program activity ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="layer">
                    {layer2Images.map((image, index) => (
                      <div key={`layer2-${index}`}>
                        <img
                          src={image}
                          alt={`Program activity ${index + 7}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="layer">
                    {layer3Images.map((image, index) => (
                      <div key={`layer3-${index}`}>
                        <img
                          src={image}
                          alt={`Program activity ${index + 13}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* This is the central image that scales down */}
                  <div className="scaler">
                    <img src={scalerImage} alt="Main program feature" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="fluid">And Much More.</h2>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default AllPrograms;
