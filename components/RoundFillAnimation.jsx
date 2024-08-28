"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RoundFillAnimation = ({ character }) => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle();
            // observer.unobserve(section); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.1 }
    ); // Trigger when 50% of the section is in view

    observer.observe(section);
  }, []);

  const animateCircle = () => {
    const circle = circleRef.current;
    const radius = circle.getAttribute("r");
    const circumference = radius * Math.PI * 2;

    gsap.set(circle, { strokeDasharray: circumference });
    gsap.fromTo(
      circle,
      { strokeDashoffset: circumference },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );
  };
  return (
    <div ref={sectionRef} style={{ width: "100px", height: "100px", display: "inline-block" }}>
      <svg id="svg1" viewBox="0 0 48 48" height={100}>
        <defs>
          <clipPath id="circleView">
            <circle
              cx="24"
              cy="24"
              r="19"
              fill="none"
              stroke="#FF62E1"
              strokeWidth="0"
            />
          </clipPath>
        </defs>
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fontSize="16"
          fill="#202369"
          fontWeight="bold"
        >
          {character}
        </text>
        <circle
          ref={circleRef}
          id="circle"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="#202369"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default RoundFillAnimation;
