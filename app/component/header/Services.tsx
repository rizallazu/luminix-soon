"use client";

import React, { useEffect, useRef } from "react";
import ChipService from "./ChipService";

const services = [
  "Web Design",
  "Web UI",
  "Web Development",
  "Mobile App Design",
  "UI/UX Design",
  "Branding",
  "Graphic Design",
  "SEO Optimization",
  "E-commerce Solutions",
  "Content Creation",
];

const Services = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel: any = carouselRef.current;

    // Duplicate the services to create a seamless loop
    const duplicatedServices = [...services, ...services];

    // Calculate the total width of the carousel
    const totalWidth = duplicatedServices.length * 150; // Adjust 150px to match your chip width

    // Apply the width to the carousel
    carousel.style.width = `${totalWidth}px`;

    // Animate the carousel
    let animation: number;
    const animate = () => {
      carousel.style.transition = "transform 20s linear";
      carousel.style.transform = `translateX(-${totalWidth / 2}px)`;

      animation = requestAnimationFrame(animate);
    };

    animate();

    // Reset the carousel position when it reaches the end
    carousel.addEventListener("transitionend", () => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      setTimeout(() => {
        carousel.style.transition = "transform 20s linear";
      }, 0);
    });

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);
  return (
    <div className="w-full min-h-[50px] h-[3vh] px-4 py-2 flex items-center gap-5 overflow-hidden relative">
      <div className="absolute aspect-square min-h-[50px] bg-black blur-lgl top-0 left-0"></div>
      <div ref={carouselRef} className="flex gap-5">
        {[...services, ...services].map((service, index) => (
          <ChipService key={index} service={service} />
        ))}
      </div>
      <div className="absolute aspect-square min-h-[50px] bg-black blur-xl top-0 right-0"></div>
    </div>
  );
};

export default Services;
