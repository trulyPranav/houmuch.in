"use client";

import { useEffect, useRef, useState } from "react";

const Browse = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation
  const browseRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting); // Set visibility when in the viewport
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (browseRef.current) {
      observer.observe(browseRef.current);
    }

    return () => {
      if (browseRef.current) {
        observer.unobserve(browseRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="flex text-white font-inter text-center w-[80vw] justify-evenly z-10">
        <div>
          <div className="font-bold text-3xl mb-4">0146</div>
          <p className="font-light">
            Hotels, Resorts & HomeStays
            <br />
            that we are partnered with
          </p>
        </div>
        <div>
          <div className="font-bold text-3xl mb-4">238</div>
          <p className="font-light">Number of Bookings</p>
        </div>
        <div>
          <div className="font-bold text-3xl mb-4">1,394</div>
          <p className="font-light">Number of Downloads</p>
        </div>
      </div>
      
      {/* Apply fade-in animation dynamically when the element is visible */}
      <div
        ref={browseRef}
        className={`text-white/[0.2] absolute font-antonio font-black text-[25rem] ${isVisible ? "fade-in-bottom" : "text-black"}`}
      >
        TRUST
      </div>
    </div>
  );
};

export default Browse;
