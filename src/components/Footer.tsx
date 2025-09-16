import React, { useRef, useEffect, useState } from "react";

interface WaterDropProps {
  color?: string;
  height?: number;
  density?: number;
  frequency?: number;
}

const WaterDrop: React.FC<WaterDropProps> = ({
  color = "#1c1f2f",
  height = 150,
  density = 0.1,
  frequency = 20,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = height;

    const drops: Array<{
      x: number;
      y: number;
      radius: number;
      rippleRadius: number;
      opacity: number;
      growing: boolean;
    }> = [];

    const createDrop = (x: number, y: number) => {
      drops.push({
        x,
        y,
        radius: 2,
        rippleRadius: 0,
        opacity: 1,
        growing: true,
      });
    };

    const generateRandomDrop = () => {
      if (Math.random() < density) {
        createDrop(Math.random() * canvas.width, Math.random() * (height / 2));
      }
    };

    // hex -> rgb helpers
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[22], 16),
            g: parseInt(result[23], 16),
            b: parseInt(result[24], 16),
          }
        : null;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = drops.length - 1; i >= 0; i--) {
        const drop = drops[i];

        if (drop.growing) {
          drop.rippleRadius += 2;
          drop.opacity -= 0.02;
          if (drop.opacity <= 0) {
            drops.splice(i, 1);
            continue;
          }
        }

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.rippleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hexToRgb(color)?.r || 28}, ${
          hexToRgb(color)?.g || 31
        }, ${hexToRgb(color)?.b || 47}, ${drop.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(color)?.r || 28}, ${
          hexToRgb(color)?.g || 31
        }, ${hexToRgb(color)?.b || 47}, ${drop.opacity * 2})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    const dropInterval = setInterval(generateRandomDrop, 1000 / frequency);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearInterval(dropInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, height, density, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
      style={{ height: `${height}px` }}
    />
  );
};

const Footer: React.FC = () => {
  const LGBTQ_SYMBOLS = [
    "♀",
    "♂",
    "⚧",
    "⚥",
    "⚢",
    "⚣",
    "⚧",
    "♀",
    "♂",
    "⚥",
    "⚢",
    "⚣",
  ];

  // Bubbles config (stable per mount)
  const [bubbles] = useState(() =>
    Array.from({ length: 96 }).map(() => ({
      size: +(2 + Math.random() * 4).toFixed(2), // rem
      distance: +(6 + Math.random() * 4).toFixed(2), // rem
      position: +(-5 + Math.random() * 110).toFixed(2), // %
      time: +(2 + Math.random() * 2).toFixed(2), // s
      delay: +(-1 * (2 + Math.random() * 2)).toFixed(2), // s
    }))
  );

  return (
    <div className="relative">
      <style>{`
        /* Flaticon UIcons (brands) */
        @import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');

        /* Subtle grid */
        .footer-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.06) 0,
              rgba(255,255,255,0.06) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.06) 0,
              rgba(255,255,255,0.06) 1px,
              transparent 1px,
              transparent 40px
            );
        }

        /* Soft top fade */
        .footer-top-fade {
          position: absolute;
          left: 0;
          right: 0;
          top: -96px;
          height: 140px;
          pointer-events: none;
          z-index: 12;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(31,41,55,0.15) 25%,
            rgba(31,41,55,0.45) 60%,
            rgba(31,41,55,0.75) 85%,
            rgba(31,41,55,1) 100%
          );
        }
        @media (max-width: 640px) { .footer-top-fade { top: -72px; height: 110px; } }

        /* Floating symbols */
        .footer-floating-symbols {
          position: absolute;
          inset: 0;
          z-index: 15;
          pointer-events: none;
          overflow: hidden;
          color: rgba(255,255,255,0.5);
          font-family: Inter, system-ui, sans-serif;
        }
        .footer-floating-symbols span {
          position: absolute;
          top: 100vh;
          font-size: clamp(18px, 2.8vw, 56px);
          opacity: 0.45;
          text-shadow:
            0 0 3px rgba(0,0,0,0.35),
            0 1px 2px rgba(0,0,0,0.25);
          -webkit-text-stroke: 0.5px rgba(0,0,0,0.35);
          animation: footerFloatY var(--dur, 22s) linear infinite;
          animation-delay: var(--delay, 0s);
          will-change: transform;
        }
        .footer-floating-symbols span:nth-child(1)  { left: 5%;  --dur: 24s; --delay: -2s; }
        .footer-floating-symbols span:nth-child(2)  { left: 15%; --dur: 28s; --delay: -6s; }
        .footer-floating-symbols span:nth-child(3)  { left: 25%; --dur: 20s; --delay: -4s; }
        .footer-floating-symbols span:nth-child(4)  { left: 35%; --dur: 26s; --delay: -10s; }
        .footer-floating-symbols span:nth-child(5)  { left: 45%; --dur: 22s; --delay: -8s; }
        .footer-floating-symbols span:nth-child(6)  { left: 55%; --dur: 30s; --delay: -12s; }
        .footer-floating-symbols span:nth-child(7)  { left: 65%; --dur: 24s; --delay: -14s; }
        .footer-floating-symbols span:nth-child(8)  { left: 75%; --dur: 26s; --delay: -3s; }
        .footer-floating-symbols span:nth-child(9)  { left: 85%; --dur: 21s; --delay: -7s; }
        .footer-floating-symbols span:nth-child(10) { left: 12%; --dur: 27s; --delay: -1s; }
        .footer-floating-symbols span:nth-child(11) { left: 52%; --dur: 23s; --delay: -9s; }
        .footer-floating-symbols span:nth-child(12) { left: 82%; --dur: 29s; --delay: -5s; }

        @keyframes footerFloatY {
          from { transform: translateY(10vh) rotate(0deg); }
          to   { transform: translateY(-115vh) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-floating-symbols span { animation: none !important; transform: none !important; }
        }

        /* Social expand buttons */
        .social-links { display:flex; justify-content:center; align-items:center; gap:16px; }
        .social-btn {
          cursor:pointer; height:56px; width:56px;
          display:inline-flex; align-items:center; justify-content:center;
          gap:10px; color:#e5e7eb;
          border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.18);
          background:rgba(31,41,55,0.55); backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,0.08);
          transition: width .45s cubic-bezier(.19,1,.22,1), background-color .3s ease, transform .2s ease, justify-content .2s ease, padding .2s ease;
          overflow:hidden; text-decoration:none; position:relative; z-index:20;
        }
        .social-btn span { width:0; overflow:hidden; white-space:nowrap; transition: width .45s cubic-bezier(.19,1,.22,1), padding .3s ease, opacity .2s ease; opacity:0; }
        .social-btn:hover { width:180px; border-radius:12px; transform:translateY(-2px); justify-content:flex-start; padding-left:14px; }
        .social-btn:hover span { padding:2px 8px; width:max-content; opacity:1; }
        .social-btn i { font-size:24px; line-height:1; display:inline-block; }
        #facebook i  { color:#1877F2; }
        #instagram i { color:#E4405F; transform:scale(1.15); transform-origin:center; }
        #youtube i   { color:#FF0000; }

        /* Fancy mail link */
        .fancy-mail.link { height:30px; align-items:center; color:#f3f4f6; text-decoration:none; display:inline-flex; font-weight:700; position:relative; z-index:20; }
        .fancy-mail .mask { position:relative; padding:0; height:20px; overflow:hidden; }
        .fancy-mail .link-container { transition: transform .4s ease; }
        .fancy-mail .title { display:block; font-size:16px; line-height:20px; transition: transform .4s ease; }
        .fancy-mail .link-title1 { transform-origin:right center; }
        .fancy-mail .link-title2 { transform-origin:left center; transform:rotate(20deg); }
        .fancy-mail .link-icon { position:relative; width:30px; height:30px; background:#f8f8ff; border-radius:50%; display:flex; justify-content:center; align-items:center; margin-left:10px; overflow:hidden; }
        .fancy-mail .icon { display:block; position:absolute; width:18px; height:18px; fill:#111827; transition: transform .4s ease; }
        .fancy-mail .icon:nth-child(2) { transform: translate(-40px); }
        .fancy-mail:hover .link-container { transform: translateY(-20px); }
        .fancy-mail:hover .link-title1 { transform: rotate(20deg); }
        .fancy-mail:hover .link-title2 { transform: rotate(0); }
        .fancy-mail:hover .icon:first-child { transform: translate(40px); }
        .fancy-mail:hover .icon:nth-child(2) { transform: translate(0px); }

        /* Bubbles row */
        .footer-bubbles-row { position: relative; isolation: isolate; overflow: hidden; background: transparent; }
        .footer-bubbles { position: relative; height: 10rem; filter: url("#footer-blob-filter"); }
        .footer-bubble {
          position: absolute;
          bottom: -4rem;
          left: var(--position, 50%);
          transform: translateX(-50%);
          width: var(--size, 4rem);
          height: var(--size, 4rem);
          background: var(--bubble-color, #A855F7); /* purple */
          border-radius: 9999px;
          animation:
            bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
            bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
          will-change: transform, width, height;
        }
        @keyframes bubble-size { 0%, 75% { width: var(--size, 4rem); height: var(--size, 4rem); } 100% { width: 0rem; height: 0rem; } }
        @keyframes bubble-move { 0% { bottom: -4rem; } 100% { bottom: var(--distance, 10rem); } }
      `}</style>

      {/* Footer wrapper: pt-12 pb-0 removes the extra bottom space */}
      <footer className="relative isolate bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-0 z-[25] overflow-visible">
        <div className="footer-top-fade" aria-hidden="true" />
        <div className="footer-grid" aria-hidden="true" />

        <div className="footer-floating-symbols" aria-hidden="true">
          {LGBTQ_SYMBOLS.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>

        <WaterDrop color="#1c1f2f" height={150} density={0.1} frequency={20} />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-white inline-block relative pb-2">
                Address
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
              </h3>

              <div className="space-y-2 mt-4">
                <p className="text-gray-200 text-base sm:text-lg md:text-xl/7 font-medium">
                  10 sahid Binoy bose road
                </p>
                <p className="text-gray-200 text-base sm:text-lg md:text-xl/7 font-medium">
                  Pin 700070, Kolkata
                </p>

                <a
                  href="mailto:bds.westbengal2014@gmail.com"
                  className="fancy-mail link mt-2"
                  aria-label="Email bds.westbengal2014@gmail.com"
                >
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">
                        bds.westbengal2014@gmail.com
                      </span>
                      <span className="link-title2 title">
                        bds.westbengal2014@gmail.com
                      </span>
                    </div>
                  </span>
                  <div className="link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236H0v1h21.883z" />
                    </svg>
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236H0v1h21.883z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Email form */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-white inline-block relative pb-2">
                Email Us
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
              </h3>

              <form className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600 resize-vertical"
                />
                <button type="submit" className="donate-button">
                  <span className="donate-button-bg">
                    <span className="donate-button-bg-layers">
                      <span className="donate-button-bg-layer donate-button-bg-layer-1"></span>
                      <span className="donate-button-bg-layer donate-button-bg-layer-2"></span>
                      <span className="donate-button-bg-layer donate-button-bg-layer-3"></span>
                    </span>
                  </span>
                  <span className="donate-button-inner">
                    <span className="donate-button-inner-static">Send</span>
                    <span className="donate-button-inner-hover">Send</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative z-20 mt-8 pt-8 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  2025 ©{" "}
                  <a
                    href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    baishamyadurikaronsmiti
                  </a>
                </p>
              </div>

              <div className="hidden md:block"></div>

              <div className="text-center md:text-right">
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/share/1B1aSPhQvn/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="facebook"
                    aria-label="Facebook"
                  >
                    <i className="fi fi-brands-facebook" aria-hidden="true"></i>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/bds.samabhabona?igsh=bzNic2w3YWoyNGlo"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="instagram"
                    aria-label="Instagram"
                  >
                    <i
                      className="fi fi-brands-instagram"
                      aria-hidden="true"
                    ></i>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com/@bdssamabhabona?si=KSz7kyIDFi3rZLxk"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="youtube"
                    aria-label="YouTube"
                  >
                    <i className="fi fi-brands-youtube" aria-hidden="true"></i>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bubbles row (purple) */}
        <div className="footer-bubbles-row">
          <svg
            aria-hidden="true"
            focusable="false"
            className="absolute w-0 h-0"
          >
            <defs>
              <filter id="footer-blob-filter">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  result="blob"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"
                />
              </filter>
            </defs>
          </svg>

          {/* Set bubble color via CSS variable */}
          <div
            className="footer-bubbles"
            style={{ ["--bubble-color" as any]: "#A855F7" }}
          >
            {bubbles.map((b, i) => (
              <div
                key={i}
                className="footer-bubble"
                style={
                  {
                    ["--size" as any]: `${b.size}rem`,
                    ["--distance" as any]: `${b.distance}rem`,
                    ["--position" as any]: `${b.position}%`,
                    ["--time" as any]: `${b.time}s`,
                    ["--delay" as any]: `${b.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
