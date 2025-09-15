"use client";
import Pointer from "./Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

// Custom cursor SVG inline (black + purple accent for light theme)
const cursorSvgData = `data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 4L12 20L8 21L7 25L4 4Z' stroke='black' stroke-width='2' fill='%23A855F7'/%3E%3C/svg%3E`;

const PLAY_STORE_URL = "";

// Change this to match the actual next section background,
// or set it on the next section container as --next-section-bg.
const NEXT_SECTION_BG = "#ffffff";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const [buttonHovered, setButtonHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const runAnimations = () => {
      if (
        !leftDesignScope.current ||
        !leftPointerScope.current ||
        !rightDesignScope.current ||
        !rightPointerScope.current
      ) {
        return;
      }

      try {
        // Left pointer animation first
        leftPointerAnimate([
          [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
          [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
          [
            leftPointerScope.current,
            { y: [0, 16, 0], x: 0 },
            { duration: 0.5, ease: "easeInOut" },
          ],
        ]);

        // Left image follows the pointer
        leftDesignAnimate([
          [
            leftDesignScope.current,
            { opacity: 1 },
            { duration: 0.5, delay: 0.3 },
          ],
          [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        // Right pointer animation with delay
        rightPointerAnimate([
          [
            rightPointerScope.current,
            { opacity: 1 },
            { duration: 0.5, delay: 1.5 },
          ],
          [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
          [
            rightPointerScope.current,
            { y: [0, 20, 0], x: 0 },
            { duration: 0.5, ease: "easeInOut" },
          ],
        ]);

        // Right image follows the pointer
        rightDesignAnimate([
          [
            rightDesignScope.current,
            { opacity: 1 },
            { duration: 0.5, delay: 1.8 },
          ],
          [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    setTimeout(runAnimations, 100);
  }, [
    isMounted,
    leftDesignAnimate,
    leftPointerAnimate,
    rightDesignAnimate,
    rightPointerAnimate,
    leftDesignScope,
    leftPointerScope,
    rightDesignScope,
    rightPointerScope,
  ]);

  const handleDownload = () => {
    if (typeof window !== "undefined") {
      window.open(PLAY_STORE_URL, "_blank");
    }
  };

  return (
    <section
      id="home"
      // Expose the next-section color as a CSS variable for the fader.
      style={{ ["--next-section-bg" as any]: NEXT_SECTION_BG }}
      className="relative py-24 overflow-hidden bg-white text-black min-h-screen flex items-center"
    >
      {/* Animated liquid gradient backdrop (bottom) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65vh] z-0"
        initial={{ opacity: 0.9 }}
        style={{
          // A vivid multi-color gradient that we animate by shifting background-position.
          background:
            "linear-gradient(120deg, rgba(255,107,157,0.75), rgba(78,205,196,0.75), rgba(255,214,61,0.75), rgba(180,167,214,0.75))",
          backgroundSize: "200% 100%",
          filter: "blur(80px)",
          // Keep a top fade so the gradient rolls off into the hero content.
          maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 70%, transparent 100%)",
        }}
        animate={{
          opacity: 1,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom edge fader to blend into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] z-20"
        style={{
          // Transparent to the exact next section color for a seamless seam.
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--next-section-bg, #ffffff) 90%)",
        }}
      />

      {/* Content layer above decorative backgrounds */}
      <div className="container mx-auto px-4 relative w-full">
        {/* Left image */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          className="absolute left-0 xl:left-8 top-16 hidden lg:block cursor-grab active:cursor-grabbing z-10"
          drag
        >
          <img
            draggable={false}
            src="/customimage1.webp"
            alt="Advocacy Visual"
            width={310}
            height={439}
            className="pointer-events-none"
          />
        </motion.div>

        {/* Community pointer */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 hidden lg:block z-20"
          style={{ left: "calc(14rem + 120px)" }}
        >
          <Pointer name="Community" />
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightDesignScope}
          animate={{ opacity: 1, y: 0, x: 0 }}
          className="absolute right-0 xl:right-8 -top-16 hidden lg:block cursor-grab active:cursor-grabbing z-10"
          drag
        >
          <img
            draggable={false}
            src="/customimage2.webp"
            alt="Support Visual"
            width={310}
            height={439}
            className="pointer-events-none"
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 xl:right-96 hidden lg:block z-20"
        >
          <Pointer color="blue" name="Rights" />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center relative z-30 max-w-5xl mx-auto">
          {/* Badge with LGBTQ gradient and noise */}
          <div className="relative inline-flex py-1 px-3 rounded-full text-white font-semibold mb-8 overflow-hidden">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "linear-gradient(to right,#EF4444, #F97316, #FCD34D, #22C55E, #3B82F6, #4F46E5, #9333EA)",
              }}
            />
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
              }}
            />
            <span className="relative z-10">
              🏳️‍⚧️ Standing Up for Trans Rights
            </span>
          </div>

          {/* Heading with gradient text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Equality{" "}
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(45deg,  #5682B1, #FCC61D,#EA5B6F,#CC66DA, #FEA405, #FFCB61, #5E936C , #FFB4B4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
              }}
            >
              for Everyone
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' opacity='0.6'/%3E%3C/svg%3E")`,
                  backgroundSize: "80px 80px",
                  mixBlendMode: "overlay",
                }}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-black/70 mt-8 max-w-2xl leading-relaxed">
            Dedicated to advocating, educating, and creating a supportive
            community for transgender individuals and allies.
          </p>

          {/* Button */}
          <div className="mt-12">
            <motion.div
              className="group relative"
              onMouseEnter={() => isMounted && setButtonHovered(true)}
              onMouseLeave={() => isMounted && setButtonHovered(false)}
            >
              {isMounted && (
                <motion.div
                  className="absolute inset-0 -z-10 rounded-xl opacity-40 blur-xl"
                  style={{
                    background:
                      "linear-gradient(45deg, #ff6b9d, #4ecdc4, #ffe66d, #b4a7d6)",
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: buttonHovered ? 0.6 : 0.3,
                    scale: buttonHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              )}

              <motion.button
                onClick={isMounted ? handleDownload : undefined}
                className="flex items-center bg-white border border-transparent px-7 py-5 rounded-xl text-white shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF, #B185DB, #FF85A1)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-20 mix-blend-soft-light"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='btnNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23btnNoise)' opacity='0.7'/%3E%3C/svg%3E")`,
                    backgroundSize: "50px 50px",
                  }}
                />

                <div className="flex items-center relative z-10">
                  <div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-4 flex items-center justify-center border border-white/30"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-black/80 font-medium">
                      JOIN US
                    </span>
                    <span className="text-lg text-black/80 font-bold tracking-wide drop-shadow-sm">
                      Get Involved
                    </span>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
