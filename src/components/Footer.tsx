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

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(dropInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, height, density, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
      style={{ height: `${height}px` }}
    />
  );
};

const Footer: React.FC = () => {
  return (
    <div className="relative">
      <WaterDrop color="#1c1f2f" height={150} density={0.1} frequency={20} />

      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-blue-500 pb-2 inline-block">
                Address
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong>Corporate Office:</strong>
                  <br />
                  Doon House, B-275(A), First floor
                  <br />
                  Sector-57, Shushant Lok 3<br />
                  Near Hong Kong Bazzar, Gurugram
                  <br />
                  Pin 122001, Haryana.
                </p>
                <p className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  <a href="tel:+919122588799">+91-9122588799</a>
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  <strong>Reg. Office:</strong>
                  <br />
                  Doon House, D2/3, 4th Floor
                  <br />
                  Chandra Tower, IDBI Bank Building
                  <br />
                  Dimna Road, Mango
                  <br />
                  Jamshedpur-831012, Jharkhand.
                </p>
                <p className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  <a href="tel:+919122588799">+91-9122588799</a>
                </p>
              </div>
            </div>

            {/* Middle Column without Recent News */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Contact Form only */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-purple-500 pb-2 inline-block">
                    Email Us
                  </h3>
                  <form className="space-y-4">
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
                    <button
                      type="submit"
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
                        <span className="donate-button-inner-static">Send</span>
                        <span className="donate-button-inner-hover">Send</span>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-yellow-500 pb-2 inline-block">
                Our Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80`}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  2020 ©{" "}
                  <a
                    href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Top HTML & CSS Program
                  </a>
                </p>
              </div>

              {/* Footer Navigation */}
              <nav className="text-center">
                <ul className="flex justify-center space-x-6 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors border-r border-gray-600 pr-6"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors border-r border-gray-600 pr-6"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors border-r border-gray-600 pr-6"
                    >
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Add more
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Social Media */}
              <div className="text-center md:text-right">
                <div className="flex justify-center md:justify-end space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  >
                    <i className="fab fa-facebook-f text-blue-400 group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  >
                    <i className="fab fa-twitter text-blue-400 group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  >
                    <i className="fab fa-instagram text-pink-400 group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  >
                    <i className="fab fa-youtube text-red-400 group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 group shadow-lg"
                  >
                    <i className="fab fa-telegram text-blue-400 group-hover:text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
