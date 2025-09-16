import React from "react";

const allProgramsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap');

  :root {
    --surface-2: #f8f9fa; /* Light background */
    --text-1: #212529; /* Dark text */
    --content: 66ch;
    --gutter: 1rem;
    --font-size-fluid-3: 2rem;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif, system-ui;
    background: var(--surface-2);
    display: grid;
    justify-items: center;
    align-content: start;
    overflow-x: hidden;
    color: var(--text-1);
    margin: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* --- Fixed background grid (subtle, light) --- */
  .bg-grid {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-color: var(--surface-2);
    background-image:
      repeating-linear-gradient(
        0deg,
        rgba(33, 37, 41, 0.06) 0,
        rgba(33, 37, 41, 0.06) 1px,
        transparent 1px,
        transparent 40px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(33, 37, 41, 0.06) 0,
        rgba(33, 37, 41, 0.06) 1px,
        transparent 1px,
        transparent 40px
      );
    will-change: transform;
  }

  /* --- Floating LGBTQ+ gender symbols (more visible) --- */
.floating-symbols {
  position: fixed;
  inset: 0;
  z-index: 1; /* above grid, below content */
  pointer-events: none;
  overflow: hidden;
  color: rgba(33, 37, 41, 0.50); /* was 0.25 */
  font-family: 'Inter', system-ui, sans-serif;
  /* optional: blend a bit darker against light BGs */
  /* mix-blend-mode: multiply; */
}

.floating-symbols span {
  position: absolute;
  top: 100vh; /* start below viewport */
  font-size: clamp(18px, 2.8vw, 56px); /* slightly larger */
  opacity: 0.45; /* was 0.25 */
  filter: saturate(1);
  /* halo + soft drop for readability */
  text-shadow:
    0 0 3px rgba(255,255,255,0.7),
    0 1px 2px rgba(0,0,0,0.18);
  /* thin stroke where supported (optional) */
  -webkit-text-stroke: 0.5px rgba(255,255,255,0.6);
  animation: floatY var(--dur, 22s) linear infinite;
  animation-delay: var(--delay, 0s);
  will-change: transform;
}



  .floating-symbols span:nth-child(1) { left: 5%;  --dur: 24s; --delay: -2s; }
  .floating-symbols span:nth-child(2) { left: 15%; --dur: 28s; --delay: -6s; }
  .floating-symbols span:nth-child(3) { left: 25%; --dur: 20s; --delay: -4s; }
  .floating-symbols span:nth-child(4) { left: 35%; --dur: 26s; --delay: -10s; }
  .floating-symbols span:nth-child(5) { left: 45%; --dur: 22s; --delay: -8s; }
  .floating-symbols span:nth-child(6) { left: 55%; --dur: 30s; --delay: -12s; }
  .floating-symbols span:nth-child(7) { left: 65%; --dur: 24s; --delay: -14s; }
  .floating-symbols span:nth-child(8) { left: 75%; --dur: 26s; --delay: -3s; }
  .floating-symbols span:nth-child(9) { left: 85%; --dur: 21s; --delay: -7s; }
  .floating-symbols span:nth-child(10){ left: 12%; --dur: 27s; --delay: -1s; }
  .floating-symbols span:nth-child(11){ left: 52%; --dur: 23s; --delay: -9s; }
  .floating-symbols span:nth-child(12){ left: 82%; --dur: 29s; --delay: -5s; }

  @keyframes floatY {
    from { transform: translateY(10vh) rotate(0deg); }
    to   { transform: translateY(-115vh) rotate(360deg); }
  }

  .programs-header, .programs-main {
    width: var(--content);
    max-width: calc(100vw - (2 * var(--gutter)));
    margin: 0 auto;
    position: relative; /* sit above bg layers */
    z-index: 2;
  }

  .programs-footer {
    padding: 2rem;
    font-size: 0.875rem;
    text-align: center;
  }

  .programs-header {
    min-height: 100vh;
    display: grid;
    align-content: center;
    position: relative;
    margin-top: 50px; /* Added top margin here */
  }

  .programs-header img {
    position: absolute;
    left: 25%;
    top: 15%;
    z-index: 1;
    opacity: 0.65;
    filter: saturate(0.5);
    clip-path: polygon(0 15%, 75% 0, 100% 32%, 80% 100%, 0 67%);
    border-radius: 15px; /* Added rounded corners */
  }

  .programs-header h1 {
    font-weight: 900;
    font-family: impact, sans-serif;
    font-size: calc(var(--font-size-fluid-3) * 2.5);
    line-height: 1;
    z-index: 2;
    position: relative;
  }

  .programs-header h1 span:nth-of-type(2) {
    color: transparent;
    -webkit-text-stroke: 0.25rem var(--text-1);
  }

  .program-section {
    display: grid;
    gap: var(--gutter);
    grid-template-columns: auto 1fr;
    align-items: center;
    min-height: 100vh;
    --x: -100%;
  }

  .program-section:nth-of-type(even) {
    grid-template-columns: 1fr auto;
    grid-auto-flow: dense;
    --x: 100%;
  }

  .program-section:nth-of-type(even) img {
    grid-column: 2;
  }

  .program-section:nth-of-type(even) .program-description {
    grid-column: 1;
  }

  /* Blur-to-clear reveal on scroll-driven timeline */
  .program-section img {
    grid-column: 1;
    width: 260px;
    max-width: 20vw;
    clip-path: none;
    border-radius: 15px;
    scale: 1.5;
    view-timeline-name: --item;
    animation: item-reveal both ease-in;
    animation-timeline: --item;
    animation-range: entry 10% cover 35%;
    will-change: transform, opacity, filter;
  }

  .program-description {
    z-index: 2;
    background: hsla(210, 17%, 98%, 0.65);
    padding: 1rem;
    color: var(--text-1);
    backdrop-filter: blur(4px);
    font-size: 1rem;
    --x: 0;
    --y: 50%;
    view-timeline-name: --item;
    animation: item-reveal both ease-out;
    animation-timeline: --item;
    animation-range: entry 35% cover 50%;
    position: sticky;
    bottom: 40%;
    border-radius: 10px;
  }

  .program-description h2 {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0;
  }

  /* Updated reveal to include filter blur -> clear */
  @keyframes item-reveal {
    from {
      opacity: 0;
      transform: translate(var(--x, 0), var(--y, 0));
      filter: blur(12px) saturate(0.85);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }

  .ring-wrapper {
    --char-count: 19;
    --inner-angle: calc((360 / var(--char-count)) * 1deg);
    --character-width: 1.0;
    --radius: calc((var(--character-width) / 0.32469946920468346) * -1ch);
    --font-size: 1.5rem;
    position: fixed;
    top: 0;
    right: 0;
    height: calc((var(--character-width) / 0.32469946920468346) * 3.5ch);
    width: calc((var(--character-width) / 0.32469946920468346) * 3.5ch);
    translate: 0% 0%;
    display: grid;
    place-items: center;
    z-index: 10;
    border: calc(var(--character-width) * 1.5rem) solid var(--surface-2);
    border-radius: 50%;
    font-weight: bold;
  }

  .ring {
    font-family: monospace;
    text-transform: uppercase;
    font-size: calc(var(--font-size, 1) * 1rem);
    animation: rotation 6s linear infinite;
    position: relative;
  }

  .char {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
      translate(-50%, -50%)
      rotate(calc(var(--inner-angle) * var(--char-index)))
      translateY(var(--radius));
  }

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }

  /* --- Mobile Optimizations --- */
  @media (max-width: 768px) {
    .programs-header {
      margin-top: 0;
    }

    .programs-header img {
      position: static;
      width: 80%;
      max-width: 300px;
      margin: 20px auto;
      clip-path: none;
      border-radius: 15px;
    }

    .programs-header h1 {
      font-size: calc(var(--font-size-fluid-3) * 1.5);
      text-align: center;
      margin-top: 20px;
    }

    .programs-header h1 span:nth-of-type(2) {
      -webkit-text-stroke: 0.15rem var(--text-1);
    }

    .program-section {
      grid-template-columns: 1fr;
      text-align: center;
      min-height: auto;
      padding: 20px 0;
    }

    .program-section img {
      grid-column: 1;
      width: 80%;
      max-width: 300px;
      margin: 0 auto 20px auto;
      scale: 1;
      clip-path: none;
      border-radius: 15px;
    }

    .program-section .program-description {
      grid-column: 1;
      position: static;
      bottom: auto;
      margin: 0 10px;
    }

    .program-section:nth-of-type(even) {
      grid-template-columns: 1fr;
    }

    .program-section:nth-of-type(even) img {
      grid-column: 1;
    }

    .program-section:nth-of-type(even) .program-description {
      grid-column: 1;
    }

    .ring-wrapper {
      position: absolute;
      top: 10px;
      right: 10px;
      height: calc((var(--character-width) / 0.32469946920468346) * 2.5ch);
      width: calc((var(--character-width) / 0.32469946920468346) * 2.5ch);
      border: calc(var(--character-width) * 1rem) solid var(--surface-2);
      transform: scale(0.8);
    }
  }

  /* Optional: respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .floating-symbols span,
    .ring,
    .program-section img,
    .program-description {
      animation: none !important;
      transform: none !important;
      filter: none !important;
      opacity: 1 !important;
    }
  }
`;

const ScrollingText = () => {
  const text = "Scroll • Scroll • ";
  const chars = text.split("").map((char, i) => (
    <span
      key={i}
      className="char"
      style={{ "--char-index": i } as React.CSSProperties}
      aria-hidden="true"
    >
      {char}
    </span>
  ));
  return (
    <div className="ring-wrapper">
      <div
        className="ring"
        style={{ "--char-count": text.length } as React.CSSProperties}
      >
        {chars}
        <span className="sr-only">{text}</span>
      </div>
    </div>
  );
};

const FloatingSymbols: React.FC = () => {
  // Unicode symbols: ♀ (U+2640), ♂ (U+2642), ⚧ (U+26A7), ⚥ (U+26A5), ⚢, ⚣
  const symbols = ["♀", "♂", "⚧", "⚥", "⚢", "⚣", "⚧", "♀", "♂", "⚥", "⚢", "⚣"];
  return (
    <div className="floating-symbols" aria-hidden="true">
      {symbols.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
};

const AllPrograms: React.FC = () => {
  const images = [
    "/activities/book1.webp",
    "/activities/cg1.webp",
    "/activities/tdov1.webp",
    "/activities/legal1.webp",
    "/activities/sc1.webp",
    "/activities/book2.webp",
    "/activities/cg2.webp",
    "/activities/tdov2.webp",
    "/activities/legal2.webp",
    "/activities/sc2.webp",
    "/activities/mkrk2.webp",
    "/activities/cg3.webp",
    "/activities/tdov3.webp",
    "/activities/legal3.webp",
    "/activities/tdov4.webp",
    "/activities/tdov5.webp",
    "/activities/mkrk1.webp",
    "/activities/mkrk3.webp",
    "/activities/cg4.webp",
    "/activities/cg5.webp",
    "/activities/sc3.webp",
  ];

  return (
    <>
      <style>{allProgramsStyles}</style>

      {/* Fixed background layers */}
      <div className="bg-grid" aria-hidden="true" />
      <FloatingSymbols />

      <ScrollingText />
      <header className="programs-header">
        <img
          src="https://picsum.photos/400/400?random=1"
          alt="Header decorative image"
          width="400"
          height="400"
        />
        <h1>
          <span aria-hidden="true">Our</span>
          <span aria-hidden="true">Programs</span>
          <span aria-hidden="true">Gallery</span>
          <span className="sr-only">Our Programs Gallery</span>
        </h1>
      </header>
      <main className="programs-main">
        {images.map((image, index) => (
          <section key={index} className="program-section">
            <img
              src={image}
              alt={`Program ${index + 1} thumbnail`}
              width="200"
              height="200"
            />
            <div className="program-description">
              <h2>Program {index + 1}</h2>
              <p>
                This section showcases one of our key programs. Here we can
                describe the event, its impact, and the community it served.
                Each program is a step towards our mission.
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default AllPrograms;
