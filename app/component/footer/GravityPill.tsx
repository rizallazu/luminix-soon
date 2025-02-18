"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GravityPill = ({ label }: { label: string }) => {
  const pillRef: any = useRef(null);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const [hasStartedFalling, setHasStartedFalling] = useState(false); // Track if falling has started

  const gravity = 0.5;
  const bounceDamping = 0.7;

  useEffect(() => {
    const containerHeight = 0.35 * window.innerHeight;
    const pillHeight: any = pillRef.current?.clientHeight || 0;

    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page.
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;

      // Adjust the threshold (e.g., `scrollHeight - clientHeight - 100`) as needed.
      if (scrollTop + clientHeight >= scrollHeight - 100 && !hasStartedFalling) {
        setHasStartedFalling(true); // Start falling only once.

        const fall = () => {
          let velocity = 0;
          let position = 0;

          const updatePosition = () => {
            velocity += gravity;
            position += velocity;

            if (position + pillHeight >= containerHeight) {
              position = containerHeight - pillHeight;
              velocity = -velocity * bounceDamping;

              if (Math.abs(velocity) < 1) {
                velocity = 0;
              }
            }

            y.set(position);
            rotate.set(Math.sin(position * 0.05) * 10);

            if (velocity !== 0) {
              requestAnimationFrame(updatePosition);
            }
          };

          updatePosition();
        };

        fall();
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    handleScroll(); // Check on initial load if already at bottom

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove listener on unmount
    };
  }, [y, rotate, hasStartedFalling]); // Add hasStartedFalling to dependency array

  // ... rest of the component remains the same
  return (
    <motion.div
      ref={pillRef}
      style={{
        y,
        rotate,
        position: "absolute",
        left: `${Math.random() * 80 + 10}%`,
        padding: "8px 16px",
        borderRadius: "9999px",
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid white",
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.1 }}
    >
      {label}
    </motion.div>
  );
};

export default function GravityPillContainer() {
    const socmedLabels = ["Twitter", "Instagram", "Facebook", "LinkedIn", "YouTube"];
  
    return (
      <div style={{ position: "relative", height: "36vh", overflow: "hidden" }}>
        {socmedLabels.map((label, index) => (
          <GravityPill key={index} label={label} />
        ))}
      </div>
    );
  }