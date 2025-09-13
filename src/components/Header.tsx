import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsMenuOpen(!isMenuOpen);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  };

  const closeMenu = () => {
    if (isMenuOpen && !isAnimating) {
      setIsAnimating(true);
      setIsMenuOpen(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        
        @keyframes slide-in-left {
          from { transform: translateX(-100%) rotate(-5deg); opacity: 0; }
          to { transform: translateX(0) rotate(0deg); opacity: 1; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(-90deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes grain-animation {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(-15%, 10%); }
          90% { transform: translate(10%, 5%); }
        }
        
        .glass-morphism {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: none;
        }
        
        .glass-morphism-scrolled {
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 1px rgba(255, 255, 255, 0.5);
        }
        
        .menu-item {
          position: relative;
          overflow: hidden;
        }
        
        .menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        
        .menu-item:hover::before {
          left: 100%;
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #667eea 0%,
            #764ba2 25%,
            #f093fb 50%,
            #764ba2 75%,
            #667eea 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s linear infinite;
        }
        
        .grain-texture {
          position: relative;
        }
        
        .grain-texture::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(0,0,0,0.1) 1px, transparent 0);
          background-size: 100px 100px;
          animation: grain-animation 8s infinite linear;
          pointer-events: none;
        }
      `}</style>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'px-4 pt-4' : 'px-0 pt-0'
      }`}>
        {/* Dynamic Header Container */}
        <div className={`transition-all duration-700 ease-in-out mx-auto ${
          isScrolled 
            ? 'glass-morphism-scrolled rounded-2xl px-6 py-4 w-[65%] max-w-4xl' 
            : 'glass-morphism px-6 py-4 w-full max-w-none rounded-none'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #A855F7, #7C3AED, #EC4899)',
                  animation: 'pulse-glow 2s infinite'
                }}
              >
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className={`text-xl font-bold font-accent transition-all duration-300 ${
                !isScrolled ? 'text-white' : 'text-gray-800'
              } hover:scale-105`}>
                Baishamyadurikaronsmiti
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['About Us', 'Programmes', 'Events'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`transition-all duration-300 font-medium relative group ${
                    !isScrolled ? 'text-white hover:text-purple-300' : 'text-gray-700 hover:text-purple-500'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${!isScrolled ? 'bg-white' : 'bg-gray-700'}`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                } ${!isScrolled ? 'bg-white' : 'bg-gray-700'}`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${!isScrolled ? 'bg-white' : 'bg-gray-700'}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Animated Background with Gradient */}
          <div 
            className={`absolute inset-0 grain-texture transition-all duration-800 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
              `
            }}
          />

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Menu Content Container */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>

            {/* Menu Items */}
            <nav className="flex flex-col items-center space-y-8 z-10">
              {[
                { name: 'About Us', href: '#about', delay: '100ms' },
                { name: 'Programmes', href: '#programmes', delay: '200ms' },
                { name: 'Events', href: '#events', delay: '300ms' }
              ].map((item, index) => (
                <div
                  key={item.name}
                  className={`menu-item transform transition-all duration-700 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
                  style={{ 
                    animationDelay: item.delay,
                    animation: isMenuOpen ? `slide-in-left 0.8s ease-out ${item.delay} both` : 'none'
                  }}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-4xl md:text-5xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 transition-all duration-500 transform hover:scale-110 hover:rotate-1 px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-purple-500/25"
                    style={{
                      textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      animation: `bounce-in 0.6s ease-out ${item.delay} both`
                    }}
                  >
                    <span className="shimmer-text">{item.name}</span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Contact Info */}
            <div 
              className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-all duration-700 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              <div className="text-white/60 text-sm space-y-2">
                <p className="shimmer-text">Building bridges, creating change</p>
                <div className="flex space-x-4 justify-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                    <span className="text-xs">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                    <span className="text-xs">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                    <span className="text-xs">🌐</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;