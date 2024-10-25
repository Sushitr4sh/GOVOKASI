// ScrollingNumber.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollingNumberProps {
  value: number; // The number to display
  duration?: number; // Duration of the animation in seconds
}

const ScrollingNumber: React.FC<ScrollingNumberProps> = ({
  value,
  duration = 2,
}) => {
  const countRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && countRef.current) {
      const { current } = countRef;
      const startValue = 0;
      const endValue = value;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);

        // Easing function (easeOutQuad)
        const easedProgress =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        const currentNumber = Math.floor(
          startValue + (endValue - startValue) * easedProgress
        );
        current.innerText = `+${currentNumber
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; // Format with commas and add +

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, value, duration]);

  return (
    <motion.div ref={countRef} className="text-5xl font-bold">
      {`+${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
    </motion.div>
  );
};

export default ScrollingNumber;
