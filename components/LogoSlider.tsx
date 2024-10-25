// LogoSlider.tsx
import React from "react";
import { motion } from "framer-motion";

interface LogoSliderProps {
  logos: string[]; // Array of logo image URLs
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos }) => {
  return (
    <div className="overflow-hidden py-6 grayscale">
      {/* First row of logos */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {logos.map((logo, index) => (
            <img
              key={`row1-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-16 w-auto"
            />
          ))}
          {/* Duplicate the logos to make the scrolling seamless */}
          {logos.map((logo, index) => (
            <img
              key={`row1-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-16 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
