"use client";
import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    // Fade in the logo after 500ms
    setTimeout(() => {
      setIsLoading(false); // Start the fade-in after 500ms
    }, 1000);

    // Start fade-out after 2 seconds, and then hide everything after 5 seconds
    setTimeout(() => {
      setIsFadingOut(true); // Start fade-out after 2 seconds
    }, 500);

    // Set the finish state to hide everything after 5 seconds
    setTimeout(() => {
      setIsFinish(true); // Everything becomes hidden after 5 seconds
    }, 9000);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex justify-center items-center z-50 transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      } ${isFinish ? "hidden" : "visible"}`} // Make the background hidden after finishing
    >
      <img
        src="/logo-ferrari.png"
        alt="Logo"
        className={`w-48 h-auto transition-opacity duration-1000 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${isFadingOut ? "opacity-0" : "opacity-100"} ${
          isFinish ? "hidden" : "visible"
        }`} // Hide the logo after finishing
      />
    </div>
  );
};

export default LoadingScreen;
