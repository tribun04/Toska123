import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const ImaginerPage = () => {
  return (
    <div className="bg-white min-h-screen text-stone-900 overflow-hidden selection:bg-[#bc0108] selection:text-white">

      {/* 1. LAYERED HERO: THE VOID TO VISION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        {/* Massive Background Text */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.04, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute font-serif text-[20vw] whitespace-nowrap pointer-events-none select-none text-stone-900"
        >
          GENÈSE GENÈSE
        </motion.h2>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-[#bc0108]" />
            <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc0108]">Phase Alpha</span>
            <span className="w-12 h-px bg-[#bc0108]" />
          </motion.div>

          <h1 className="font-serif text-7xl md:text-[140px] leading-none mb-12 text-stone-900">
            L'esprit <br />
            <span className="italic text-[#bc0108]">créatif.</span>
          </h1>

          <div className="flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-[#bc0108] to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. THE "BLUEPRINT REVEAL" SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left: The Interactive Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-crosshair"
          >
            <img
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070"
              className="w-full h-[600px] object-cover grayscale opacity-50 border border-stone-200"
              alt="Blueprint"
            />
            <div className="absolute inset-0 overflow-hidden transition-all duration-700 w-0 group-hover:w-full border-r-2 border-[#bc0108]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                className="w-full h-[600px] object-cover grayscale-0 max-w-none"
                style={{ width: "100%" }}
                alt="Finished Project"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] tracking-widest uppercase border border-stone-200 text-stone-700">
              Survolez pour bâtir
            </div>
          </motion.div>

          {/* Right: The Text */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-stone-900">
              De l'esquisse <br />
              <span className="italic text-[#bc0108]">au réel.</span>
            </h2>
            <p className="text-stone-500 font-light leading-loose text-lg">
              Imaginer n'est pas seulement dessiner des murs. C'est anticiper la course du soleil dans votre salon, le craquement du bois noble, et la fluidité de vos matins.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-stone-200">
              <div>
                <h4 className="text-[#bc0108] font-serif text-xl mb-2">01. Immersion</h4>
                <p className="text-xs text-stone-400 tracking-wider leading-relaxed">Lecture sensorielle du terrain et de son environnement.</p>
              </div>
              <div>
                <h4 className="text-[#bc0108] font-serif text-xl mb-2">02. Symbiose</h4>
                <p className="text-xs text-stone-400 tracking-wider leading-relaxed">Fusion entre vos besoins privés et l'audace architecturale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "MOODBOARD" MASONRY */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-serif text-5xl italic text-stone-900">
              Matières à <span className="not-italic text-[#bc0108]">Rêver</span>
            </h2>
            <span className="text-stone-400 text-[10px] tracking-[0.4em] uppercase hidden md:block">Inspirations — 2024</span>
          </div>

          <div className="grid grid-cols-12 gap-6 h-[800px]">
            <div className="col-span-8 overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="col-span-4 flex flex-col gap-6">
              <div className="h-1/2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="h-1/2 bg-[#bc0108] p-10 flex flex-col justify-end">
                <p className="text-white font-serif text-2xl leading-snug">
                  "L'architecture est le jeu savant, correct et magnifique des volumes sous la lumière."
                </p>
                <span className="text-white/60 text-[10px] mt-6 font-bold uppercase">— Le Corbusier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: TRANSITION */}
      <section className="h-screen flex items-center justify-center relative bg-white">
        <div className="text-center z-10">
          
          <Link
            to="/services"
            className="text-[10px] tracking-[0.5em] uppercase border-b border-[#bc0108] pb-2 text-[#bc0108] hover:text-stone-900 hover:border-stone-900 transition-all"
          >
            <h2 className="font-serif text-6xl md:text-9xl mb-12 text-stone-900 opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">
            Concevoir <span className="text-[#bc0108]">→</span>
          </h2>
            Suivre le processus
          </Link>
        </div>
        {/* Decorative Geometric Shape */}
        <div className="absolute w-[500px] h-[500px] border border-stone-200 rotate-45 -z-0 pointer-events-none" />
      </section>
    </div>
  );
};

export default ImaginerPage;