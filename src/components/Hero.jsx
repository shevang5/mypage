import React, { useEffect, useRef } from "react";
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const Hero = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const randomColors = (count) =>
      new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));

    if (canvasRef.current && !appRef.current) {
      appRef.current = TubesCursor(canvasRef.current, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
          }
        }
      });
    }

    const handleCanvasClick = () => {
      if (appRef.current) {
        const colors = randomColors(3);
        const lightsColors = randomColors(4);
        appRef.current.tubes.setColors(colors);
        appRef.current.tubes.setLightsColors(lightsColors);
      }
    };

    window.addEventListener("click", handleCanvasClick);

    return () => {
      window.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <div id="app" style={containerStyle} className="relative bg-white">
      <canvas ref={canvasRef} id="canvas" className="absolute inset-0 w-full h-full opacity-100"></canvas>
      <div className="relative z-10 flex flex-col items-center md:justify-center justify-start pt-40 md:pt-0 h-full gap-4 text-white">
        <img src="/web-page-images/hero-svg.svg" alt="Hero illustration" className="max-w-[920px] w-[80%]" />
        <p className="max-w-[920px] w-[80%]">I design and develop fast, responsive, and user-friendly websites and web applications that help individuals and businesses build a strong online presence.</p>
      </div>
    </div>
  );
};

const containerStyle = {
  margin: 0,
  width: "100%",
  height: "100vh",
  overflow: "hidden"
};

export default Hero;
