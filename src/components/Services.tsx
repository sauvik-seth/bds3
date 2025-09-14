"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Define a list of LGBTQ+ flag-inspired hex color codes for card backgrounds
const lgbtqColors = [
  "#FF0000", // Red (Life)
  "#FF8C00", // Orange (Healing)
  "#FFFF00", // Yellow (Sunlight)
  "#008000", // Green (Nature)
  "#0000FF", // Blue (Harmony/Serenity)
  "#4B0082", // Indigo/Violet (Spirit)
  "#EE82EE", // Violet (Transgender Flag)
  "#F7A8B8", // Pink (Lesbian Flag)
  "#D62828", // Red (Pansexual Flag)
  "#FFD300", // Yellow (Pansexual Flag)
  "#2684FE", // Blue (Pansexual Flag)
];

const serviceCards = [
  {
    id: 1,
    title: "Advocacy & Policy Reform",
    description: "Working to change laws and policies to protect trans rights.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Community Support & Outreach",
    description:
      "Building a strong, supportive community for trans individuals.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Education & Awareness",
    description: "Promoting understanding and acceptance through education.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    title: "Healthcare Access",
    description: "Ensuring equitable access to affirming healthcare services.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    title: "Legal Aid & Resources",
    description:
      "Providing legal assistance and resources for trans individuals.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 6,
    title: "Youth & Family Programs",
    description:
      "Supporting trans youth and their families with dedicated programs.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
  },
];

// Helper: Convert hex to rgba
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

type ServiceCardProps = {
  card: (typeof serviceCards)[number];
  i: number;
  scrollYProgress: any;
  total: number;
};

function ServiceCard({ card, i, scrollYProgress, total }: ServiceCardProps) {
  const targetScale = 1 - (total - i) * 0.05;

  const scale = useTransform(scrollYProgress, [i / total, 1], [1, targetScale]);
  const y = useTransform(
    scrollYProgress,
    [i / total, 1],
    [0, (total - i) * 20]
  );

  const color1 = lgbtqColors[i % lgbtqColors.length];
  const color2 = lgbtqColors[(i + 1) % lgbtqColors.length];

  const rgbaColor1 = hexToRgba(color1, 0.4);
  const rgbaColor2 = hexToRgba(color2, 0.4);

  return (
    <motion.div
      style={{
        scale,
        y,
        zIndex: i,
        background: `linear-gradient(to bottom right, ${rgbaColor1}, ${rgbaColor2})`,
        color: "white",
        border: `1px solid ${hexToRgba(color1, 0.3)}`,
        backdropFilter: "blur(10px) saturate(180%)",
        WebkitBackdropFilter: "blur(10px) saturate(180%)",
      }}
      className="sticky top-24 h-[70vh] w-full rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center overflow-hidden transform-gpu"
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-center w-full h-full gap-10 lg:gap-16 ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <motion.div
          className="md:w-1/2 flex justify-center items-center p-4 lg:p-6"
          whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 2 : -2 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full max-h-80 object-cover rounded-xl shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 p-4 lg:p-6 text-center md:text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight drop-shadow-md">
            {card.title}
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-28 lg:py-40 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="text-5xl font-bold mt-6 mb-4">
            Our{" "}
            <span className="text-[#A855F7] relative">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
            </span>
          </h2>
        </div>
        <div ref={containerRef} className="relative h-[400vh]">
          {serviceCards.map((card, i) => (
            <ServiceCard
              key={card.id}
              card={card}
              i={i}
              scrollYProgress={scrollYProgress}
              total={serviceCards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
