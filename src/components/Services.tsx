"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Define colors similar to the CSS example but adapted to your LGBTQ+ theme
const cardColors = [
  "rgba(163, 230, 53, 0.9)", // lime green
  "rgba(251, 191, 36, 0.9)",
  "rgba(249, 168, 212, 0.9)",
  "rgba(147, 51, 234, 0.9)",
  "rgba(59, 130, 246, 0.9)",
  "rgba(34, 197, 94, 0.9)",
];

// Each card now has its own `extra` paragraph (desktop-only)
const serviceCards = [
  {
    id: 1,
    title: "Legal Support",
    description:
      "Providing legal assistance to transgender individuals facing discrimination or rights violations.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Assistance with name and gender marker updates, anti-discrimination complaints, and access to legal remedies.",
  },
  {
    id: 2,
    title: "Awareness Campaigns",
    description:
      "Organizing outreach programs to educate society about trans rights and gender diversity.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Community toolkits, school and workplace workshops, and partnerships that turn education into action against stigma.",
  },
  {
    id: 3,
    title: "Counseling Services",
    description:
      "Offering emotional and psychological support tailored for trans persons.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Affirming, trauma-informed counseling with referrals to licensed providers and crisis options for continuity of care.",
  },
  {
    id: 4,
    title: "Climate Justice",
    description:
      "partnering with trans organic farmers and waste collectors, we ackel issues real.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Collaborations with trans farmers and waste workers to build resilient livelihoods, fair pay, and low‑carbon practices.",
  },
  {
    id: 5,
    title: "Trans Work Rights",
    description:
      "Supporting and advocating for equal employment opportunities and workplace protections for trans individuals.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Support with fair hiring, accommodations, inclusive policies, and redress for harassment or discriminatory practices.",
  },
  {
    id: 6,
    title: "Digital Security",
    description:
      "Providing education and resources for online privacy, security, and digital self-defense for trans people and activists.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1770&q=80",
    extra:
      "Hands-on trainings on privacy tools, threat modeling, account hardening, and safe reporting to reduce online risk.",
  },
] as const;

// Include optional `extra` in the card prop type
type ServiceCardProps = {
  card: (typeof serviceCards)[number] & { extra?: string };
  i: number;
  scrollYProgress: any;
  total: number;
};

function ServiceCard({ card, i, scrollYProgress, total }: ServiceCardProps) {
  const targetScale = 1 - (total - i) * 0.05;
  const scale = useTransform(scrollYProgress, [i / total, 1], [1, targetScale]);

  // Modified y transform - last card (highest index) moves up more
  const yOffset = (total - i) * 30;
  const y = useTransform(scrollYProgress, [i / total, 1], [0, yOffset]);

  const headerColor = cardColors[i % cardColors.length];
  // Extract RGB values for text color matching
  const textColor = headerColor.replace("0.9", "1");

  // Get the dot color (same as header color but with partial opacity)
  const dotColor = headerColor.replace("0.9", "0.6");

  return (
    <motion.div
      style={{
        scale,
        y,
        zIndex: i,
      }}
      className="sticky top-16 sm:top-20 md:top-24 h-[45vh] sm:h-[50vh] md:h-[55vh] w-full transform-gpu"
    >
      {/* Dotted Background Container */}
      <div
        className="relative h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl"
        style={{
          position: "relative",
        }}
      >
        {/* Dots Background */}
        <div
          className="absolute inset-0 rounded-lg sm:rounded-xl"
          style={{
            background: `radial-gradient(${dotColor} 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
            backgroundPosition: "center",
            transform: "scale(1.05)", // Slightly larger to extend beyond card
            zIndex: -1,
          }}
        />

        {/* White Background Layer */}
        <div
          className="absolute inset-0 bg-white rounded-lg sm:rounded-xl"
          style={{ zIndex: -1 }}
        />

        {/* Padding wrapper for responsive padding */}
        <div className="p-3 sm:p-4 md:p-5 h-full relative z-10">
          {/* Main Card */}
          <div className="bg-white h-full rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg flex flex-col">
            {/* Header */}
            <motion.div
              className="px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-between flex-shrink-0"
              style={{ backgroundColor: headerColor }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white m-0 tracking-wide leading-tight">
                {card.title}
              </h2>
              <motion.div
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer flex-shrink-0 ml-2"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                ⟩
              </motion.div>
            </motion.div>

            {/* Content - flex column on mobile, grid on desktop */}
            <div className="flex-1 flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:gap-8 p-4 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
              {/* Text Content */}
              <motion.div
                className="flex flex-col justify-center text-center md:text-left order-1 md:order-2 mb-3 md:mb-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Title matching card color */}
                <h3
                  className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 tracking-wide leading-tight"
                  style={{ color: textColor }}
                >
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed m-0 px-2 md:px-0">
                  {card.description}
                </p>

                {/* Desktop-only extra paragraph per card (hidden on mobile/tablet) */}
                {card.extra && (
                  <div className="mt-3 md:mt-6 space-y-2 sm:space-y-3 hidden lg:block">
                    <p className="text-gray-600 text-base lg:text-lg xl:text-xl">
                      {card.extra}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                className="flex items-center justify-center order-2 md:order-1 mt-1 md:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full max-w-xs md:max-w-none h-28 sm:h-32 md:h-40 lg:h-full max-h-40 md:max-h-48 lg:max-h-64 object-cover rounded-md sm:rounded-lg shadow-sm sm:shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-40 bg-gray-100 text-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6 mb-0 text-center px-4">
            Our{" "}
            <span className="text-[#A855F7] relative">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
            </span>
          </h2>
        </div>
        <p className="mt-0 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
          Learn how our services create safer spaces, amplify voices, and fight
          for equality.
        </p>
        <div
          ref={containerRef}
          className="relative h-[270vh] sm:h-[300vh] md:h-[400vh]"
        >
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
