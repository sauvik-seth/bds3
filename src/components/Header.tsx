"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const HeaderInner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState("Home");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      showcase: {
        type: "text",
        content: "Welcome Home",
        background:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_488/at%2Freal-estate%2Fpride-flag-on-house",
      },
    },
    {
      name: "About Us",
      href: "#mission",
      showcase: {
        type: "text",
        content: "Learn about our mission",
        background:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy50cw7fOjYcONN3bRyvgmzdhQFUA_Xnx6Gw&s",
      },
    },
    {
      name: "Programmes",
      href: "/all-programs",
      showcase: {
        type: "text",
        content: "Explore our programs",
        background:
          "https://ddc514qh7t05d.cloudfront.net/dA/73450bc5792cdeb4835bd4a2a6faa3d6/1200w/Jpeg",
      },
    },
    {
      name: "Contact",
      href: "#contact",
      showcase: {
        type: "text",
        content: "Get in touch",
        background:
          "https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2018/10/India-Briefing-Section-377-LGBTQ-Rights-and-HR-Policy-in-the-Indian-Workplace.jpg?ssl=1",
      },
    },
  ];

  const handleMenuItemHover = (itemName: string) => setHoveredItem(itemName);

  const handleMenuItemClick = (itemName: string, href: string) => {
    setActiveMenuItem(itemName);
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const currentShowcase = menuItems.find(
    (i) => i.name === hoveredItem
  )?.showcase;

  return (
    <>
      {/* Restored CSS for hamburger morph + hover effects */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        .ham { cursor: pointer; -webkit-tap-highlight-color: transparent; transition: transform 400ms; -webkit-user-select: none; user-select: none; }
        .hamRotate.active { transform: rotate(45deg); }
        .line { fill: none; transition: stroke-dasharray 400ms, stroke-dashoffset 400ms; stroke: #000; stroke-width: 5.5; stroke-linecap: round; }
        .ham1 .top { stroke-dasharray: 40 139; }
        .ham1 .bottom { stroke-dasharray: 40 180; }
        .ham1.active .top { stroke-dashoffset: -98px; }
        .ham1.active .bottom { stroke-dashoffset: -138px; }

        .donate-button { all: unset; position: relative; display: inline-flex; height: 3.5rem; align-items: center; border-radius: 9999px; padding-left: 2rem; padding-right: 2rem; font-family: 'Poppins', sans-serif; font-size: 1.1rem; font-weight: 600; color: #fff; letter-spacing: -0.06em; background-color: transparent; cursor: pointer; }
        .donate-button-bg { overflow: hidden; border-radius: 2rem; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1); transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1); border: 1px solid #FFD074; background-color:#A855F7; }
        .donate-button-bg-layers { position: absolute; left: 50%; transform: translate(-50%); top: -60%; aspect-ratio: 1 / 1; width: max(200%, 10rem); display: block; }
        .donate-button-bg-layer { border-radius: 9999px; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(0); display: block; }
        .donate-button-bg-layer-1 { background-color: #A374FF; }
        .donate-button-bg-layer-2 { background-color: #17F1D1; }
        .donate-button-bg-layer-3 { background-color: #FFD074; }
        .donate-button-inner { position: relative; display: block; pointer-events: none; }
        .donate-button-inner-static { display: block; pointer-events: none; }
        .donate-button-inner-hover { position: absolute; top: 0; left: 0; opacity: 0; transform: translateY(70%); display: block; pointer-events: none; }
        .donate-button:hover .donate-button-inner-static { opacity: 0; transform: translateY(-70%); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
        .donate-button:hover .donate-button-inner-hover { opacity: 1; transform: translateY(0); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1); }
        .donate-button:hover .donate-button-bg-layer { transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
        .donate-button:hover .donate-button-bg-layer-1 { transform: scale(1); }
        .donate-button:hover .donate-button-bg-layer-2 { transition-delay: 0.1s; transform: scale(1); }
        .donate-button:hover .donate-button-bg-layer-3 { transition-delay: 0.2s; transform: scale(1); }

        .cool-text-effect { font-size: 3.5rem; position: relative; text-transform: uppercase; transition: all 300ms ease; width: fit-content; cursor: pointer; display: inline-block; font-weight: 600; }
        .cool-text-effect:hover { transform: skew(10deg); }
        .cool-text-effect::before { content: attr(data-name); position: absolute; top: 0; left: -20px; background: white; height: 2.8rem; overflow: hidden; transition: all 300ms ease; padding-left: 20px; color: #A855F7; font-weight: 600; font-size: inherit; text-transform: uppercase; }
        .cool-text-effect:hover::before { top: -3px; left: 0px; color: #A855F7; }
        .cool-text-effect::after { content: ""; height: 4px; width: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #A855F7; transition: all 300ms ease; }
        .cool-text-effect:hover::after { width: 120%; outline: 5px solid white; }

        @media (max-width: 768px) {
          .cool-text-effect { font-size: 2.5rem; line-height: 1.1; }
          .cool-text-effect::before { height: 2rem; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cool-text-effect { font-size: 3rem; }
          .cool-text-effect::before { height: 2.4rem; }
        }
      `}</style>

      {/* Header above all content via portal */}
      <header
        className="fixed top-0 left-1/2 -translate-x-1/2 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg transition-opacity duration-300 w-[85%] md:w-[70%] mt-4 rounded-full"
        style={{ fontFamily: "Poppins, sans-serif", zIndex: 10000 }}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/");
            }}
          >
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://forms.gle/nuEvu9EdXZ89SMxd7"
              target="_blank"
              rel="noopener noreferrer"
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
                <span className="donate-button-inner-static">Donate Now</span>
                <span className="donate-button-inner-hover">Donate Now</span>
              </span>
            </a>

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`ham hamRotate ham1 ${isMenuOpen ? "active" : ""}`}
                viewBox="0 0 100 100"
                width="60"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 
                     9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 
                     -14.89975,-10.85914 -6.875401,1.098863 -13.637059,
                     4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,
                     -11.717785 15.357889,-26.851538 0,-15.133752 
                     -4.786586,-27.274118 -16.667516,-27.274118 
                     -11.88093,0 -18.499247,6.994427 -18.435284,
                     17.125656 l 0.252538,40"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay kept under header */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ fontFamily: "Poppins, sans-serif", zIndex: 9000 }}
      >
        <div className="flex h-full">
          {/* Left showcase */}
          <div
            className={`hidden md:flex w-1/2 bg-black text-white items-center justify-center relative transition-transform duration-500 ease-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
              style={{ backgroundImage: `url(${currentShowcase?.background})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-medium uppercase tracking-widest">
                {currentShowcase?.content}
              </h2>
            </div>
          </div>

          {/* Right menu */}
          <div
            className={`w-full md:w-1/2 bg-white flex flex-col transition-transform duration-500 ease-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex-1 pt-20 px-6 md:px-12 overflow-y-auto flex items-center justify-center">
              <nav className="w-full">
                <ul className="space-y-2 md:space-y-1">
                  {menuItems.map((item, index) => (
                    <li key={item.name} className="group">
                      <div className="md:hidden text-center">
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMenuItemClick(item.name, item.href);
                          }}
                          onMouseEnter={() => handleMenuItemHover(item.name)}
                          className="block py-3"
                        >
                          <span
                            className={`cool-text-effect ${
                              activeMenuItem === item.name
                                ? "text-purple-500"
                                : "text-black"
                            }`}
                            data-name={item.name}
                          >
                            {item.name}
                          </span>
                        </a>
                      </div>

                      <div className="hidden md:flex items-center">
                        <div className="w-20 overflow-hidden">
                          <span
                            className={`block text-5xl font-medium text-gray-400 transition-transform duration-300 tracking-wide ${
                              hoveredItem === item.name
                                ? "translate-y-0"
                                : "translate-y-full"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMenuItemClick(item.name, item.href);
                          }}
                          onMouseEnter={() => handleMenuItemHover(item.name)}
                          className="block py-3 group"
                        >
                          <span
                            className={`cool-text-effect ${
                              activeMenuItem === item.name
                                ? "text-purple-500"
                                : "text-black"
                            }`}
                            data-name={item.name}
                          >
                            {item.name}
                          </span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(<HeaderInner />, document.body);
};

export default Header;
