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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the content for seamless scrolling
    const content = scrollContainer.querySelector('.scroll-content');
    if (!content) return;

    const clone = content.cloneNode(true);
    scrollContainer.appendChild(clone);

    // Add CSS animation
    scrollContainer.style.animation = 'scroll 20s linear infinite';

    // Define keyframe animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-[50px] relative overflow-hidden">
      {/* Gradient Overlay Left */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
      
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{
          willChange: 'transform'
        }}
      >
        <div className="flex gap-5 scroll-content">
          {services.map((service, idx) => (
            <ChipService key={`${service}-${idx}`} service={service} />
          ))}
        </div>
      </div>

      {/* Gradient Overlay Right */}
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default Services;