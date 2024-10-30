import React from "react";

import Image from "next/image";
import Link from "next/link";

import carouselImage1 from "@/public/images/bg-1.png";
import carouselImage2 from "@/public/images/bg-1.png";
import carouselImage3 from "@/public/images/bg-1.png";
import carouselImage4 from "@/public/images/bg-1.png";
import carouselImage5 from "@/public/images/bg-1.png";
import carouselImage6 from "@/public/images/bg-1.png";

const Carousel = () => {
  const items = [
    {
      id: 1,
      title: "High-Quality Talent",
      content:
        "Selective Recruitment & Development ensure the best candidates for partner companies",
      src: carouselImage1,
    },
    {
      id: 2,
      title: "Comprehensive Support",
      content:
        "Training Program & 3-6 months of career coaching, ensure candidates excel and grow.",
      src: carouselImage2,
    },
    {
      id: 3,
      title: "Strong Connections",
      content:
        "With 150 partners and placements in 10 major cities, GOVOKASI offers quality opportunities across Indonesia.",
      src: carouselImage3,
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide space-x-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[80vw] flex items-center justify-center overflow-hidden text-white"
          >
            <div>
              <Image
                src={item.src}
                className="object-cover object-center h-[30vh] rounded-lg"
                alt="Carousel Image 2"
              />
              <div className="mt-4">
                <p className="text-[22px] font-medium">{item.title}</p>
                <p className="text-[16px] leading-tight mt-1">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
