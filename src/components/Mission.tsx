"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "Advancing Trans Rights and Equality, our organization is dedicated to fighting for the rights of transgender individuals, promoting understanding, and removing societal barriers to achieve full equality and acceptance";
const words = text.split(" ");

export default function Mission() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  const rainbowColors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
  ];

  return (
    <section id="mission" className="py-28 lg:py-40">
      <div className="container mx-auto">
        <div className="sticky top-28 md:top-32">
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mt-6 mb-0">
              About{" "}
              <span className="text-[#A855F7] relative">
                Us
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
              </span>{" "}
            </h2>
          </div>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            Empowering trans voices, breaking barriers, and building equality
            for all
          </p>
          <div className="flex justify-center"></div>
          <div className="text-2xl md:text-4xl lg:text-5xl text-center font-medium mt-10 ">
            <span className="text-gray-300">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500",
                    wordIndex < currentWord
                      ? rainbowColors[wordIndex % rainbowColors.length]
                      : "text-gray-300"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
          </div>
        </div>
        <div ref={scrollTarget} className="h-[150vh]"></div>
      </div>
    </section>
  );
}
