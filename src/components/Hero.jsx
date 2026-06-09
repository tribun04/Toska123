import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex items-center">

      {/* 1. Background Video Layer */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out scale-110"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://video-previews.elements.envatousercontent.com/files/b1d652a0-7822-4ea9-95ff-e9d46f044712/video_preview_h264.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Light Cinematic Overlays */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      {/* 2. Floating Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-stone-200 z-10 hidden md:block" />
      <div className="absolute bottom-20 left-12 z-20 hidden md:block">
        <div className="flex flex-col gap-6 text-[#bc0108]/50 text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-lr]">
          <span className="hover:text-[#bc0108] cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-[#bc0108] cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-[#bc0108] cursor-pointer transition-colors">LinkedIn</span>
        </div>
      </div>

      {/* 3. Main Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6 overflow-hidden">
            <div className="w-12 h-[1px] bg-[#bc0108] animate-slide-right" />
            <span className="text-[#bc0108] text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold">
              Bâtir l'exceptionnel — Haute-Savoie
            </span>
          </div>

          <h1 className="text-stone-900 font-serif text-6xl md:text-[120px] leading-[0.9] flex flex-col">
            <span className="block overflow-hidden">
              <span className="block animate-reveal pb-6">Imaginer.</span>
            </span>
            <span className="block overflow-hidden ml-12 md:ml-24">
              <span className="block italic text-[#bc0108] animate-reveal [animation-delay:0.2s]">Concevoir.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal [animation-delay:0.4s]">Réaliser.</span>
            </span>
          </h1>

          <div className="mt-12 md:ml-24 flex flex-col md:flex-row md:items-end gap-10">
            <p className="text-stone-500 max-w-xs text-sm leading-relaxed tracking-wide font-light">
              L'art de la construction haute couture. Nous transformons vos visions en résidences de prestige durables.
            </p>

            <div className="flex gap-6">
              <Link
                to="/services"
                className="group relative overflow-hidden bg-[#bc0108] px-10 py-5 text-white text-[11px] font-bold tracking-[0.3em] uppercase transition-all"
              >
                <span className="relative z-10 group-hover:text-[#bc0108] transition-colors duration-300">Projets</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                to="/contact"
                className="group border border-stone-300 px-10 py-5 text-stone-800 text-[11px] font-bold tracking-[0.3em] uppercase hover:border-[#bc0108] hover:text-[#bc0108] transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Scroll Indicator */}

    </section>
  );
};

export default Hero;