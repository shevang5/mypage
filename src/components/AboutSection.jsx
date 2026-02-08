import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
  img: "./images/shevangphoto.jpg",
  paragraphs: [
    "I'm a full-stack web developer and web designer with hands-on experience in building modern websites and full-stack web applications.I started my journey with engineering coursework, which helped me develop strong problem-solving skills. Along with development, I work with Photoshop to design clean interfaces - not just functional code. My focus: Build websites that look professional, work smoothly, and scale easily."
  ]
}

];

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const containerRef = useRef(null);

  // Handle Auto-rotation
  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [autorotate]);

  return (
    <section id="about" className="relative md:h-[50vw] h-screen flex flex-col justify-center bg-black overflow-hidden font-inter antialiased">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">
          
          <div className="w-full max-w-3xl mx-auto text-center">
            {/* Testimonial image with rotating transition */}
            <div className="relative h-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
               
                  <AnimatePresence mode="wait">
                    
                      <img 
                        className="relative w-40 top-11 left-1/2 -translate-x-1/2 " 
                        src={testimonials[active].img} 
                        
                        alt={testimonials[active].name} 
                      />
                    
                  </AnimatePresence>
                
              </div>
            </div>

            {/* About Text transition */}
            <div className="mt-28">
              <div className="relative flex flex-col items-center justify-center min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="space-y-4 text-lg text-white">
                      {testimonials[active].paragraphs.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Buttons / Navigation removed: single about section */}
          </div>

        </div>
      </div>

      {/* Footer Branding */}
      
    </section>
  );
}
