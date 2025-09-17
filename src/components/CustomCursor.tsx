import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener for mouse movement
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Add event listener for mouse enter/leave interactive elements
    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.classList.contains("interactive") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive")
      ) {
        setIsHovering(true);
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      setIsHovering(false);
    };

    // Add event listener for mouse leaving the window
    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);
    document.addEventListener("mouseleave", onMouseLeaveWindow);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
    };
  }, [isVisible]);

  // Styles for the cursor
  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999,
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition:
      "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease, opacity 0.3s ease",
    width: isHovering ? "40px" : "10px",
    height: isHovering ? "40px" : "10px",
    borderRadius: "50%",
    backgroundColor: isHovering ? "transparent" : "#0066cc",
    border: isHovering ? "2px solid #888888" : "none",
    mixBlendMode: isHovering ? "difference" : "normal",
    opacity: isVisible ? 1 : 0,
    left: "-20px", // Half of the maximum width to center
    top: "-20px", // Half of the maximum height to center
  };

  return <div className="custom-cursor" style={cursorStyle} />;
};

export default CustomCursor;
