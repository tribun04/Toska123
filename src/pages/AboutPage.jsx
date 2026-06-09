import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#060604] text-white font-sans selection:bg-[#C9A96E] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#060604]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="block mb-4 text-xs md:text-sm tracking-[0.5em] uppercase text-[#C9A96E] font-medium">
            Toska Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight">
            L'Art de Bâtir <br />
            <span className="italic text-[#C9A96E]">l'Exceptionnel</span>
          </h1>
        </div>
      </section>

      {/* --- MAIN STORY SECTION (Your original content) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#C9A96E]" />
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
                Notre histoire
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8">
              Qui sommes-<br />
              <span className="italic text-[#C9A96E]">nous ?</span>
            </h2>

            <div className="space-y-6 text-[#a8a29e] text-base md:text-lg leading-relaxed font-light">
              <p>
                Depuis 14 ans, <span className="text-white">Toska</span> est un leader reconnu dans le domaine de la construction et la rénovation de maisons de haut standing en Haute-Savoie.
              </p>
              <p>
                Grâce à notre expertise et à notre savoir-faire éprouvé, nous réalisons des projets qui dépassent les attentes les plus élevées. Chaque maison est une œuvre alliant design contemporain et matériaux de qualité supérieure.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
              {[
                ["14", "ans d'expérience"],
                ["200+", "projets réalisés"],
                ["100%", "clients satisfaits"]
              ].map(([num, label], i) => (
                <div key={i} className="border-t border-[#C9A96E]/20 pt-6">
                  <div className="text-3xl md:text-5xl font-serif text-[#C9A96E] mb-2">{num}</div>
                  <div className="text-[9px] md:text-[11px] tracking-widest uppercase text-[#a8a29e]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Decorative Elements */}
          <div className="relative order-1 lg:order-2 px-4 md:px-0">
            <div className="relative z-10 aspect-[4/5] bg-[#141412] border border-[#C9A96E]/10 flex items-center justify-center overflow-hidden">
               {/* Replace with actual <img> tag */}
              <span className="font-serif italic text-[#a8a29e]">Architecture Signature</span>
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Decorative offset border */}
            <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 inset-0 border border-[#C9A96E]/20 -z-0" />
            
            {/* Gold badge */}
            <div className="absolute -left-6 md:-left-12 bottom-12 bg-[#C9A96E] p-6 md:p-8 shadow-2xl z-20">
              <div className="text-3xl md:text-4xl font-bold text-[#060604] leading-none">14</div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#060604] uppercase mt-2">
                Années<br />d'Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="bg-[#0c0c0a] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-6 block">Engagement</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-20">
            Une vision sans <span className="italic text-[#C9A96E]">compromis</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A96E]/10">
            {[
              { t: "Excellence", d: "Nous sélectionnons les meilleurs artisans et matériaux pour garantir une finition irréprochable sur chaque chantier." },
              { t: "Proximité", d: "Ancrés en Haute-Savoie, nous connaissons parfaitement les spécificités techniques de notre territoire alpin." },
              { t: "Innovation", d: "Nous intégrons les dernières technologies éco-responsables pour des maisons durables et intelligentes." }
            ].map((v, i) => (
              <div key={i} className="bg-[#0c0c0a] p-10 md:p-16 text-left hover:bg-[#11110f] transition-colors group">
                <div className="w-8 h-8 border border-[#C9A96E] text-[#C9A96E] flex items-center justify-center text-xs mb-8 group-hover:bg-[#C9A96E] group-hover:text-black transition-all">
                  0{i+1}
                </div>
                <h3 className="text-2xl font-serif text-[#C9A96E] mb-6">{v.t}</h3>
                <p className="text-[#a8a29e] leading-relaxed font-light">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 leading-tight">
            Prêt à réaliser votre <br />
            <span className="italic text-[#C9A96E]">maison de rêve ?</span>
          </h2>
          <p className="text-[#a8a29e] text-lg mb-12 max-w-2xl mx-auto font-light">
            Contactez nos experts pour une étude personnalisée de votre projet de construction ou rénovation en Haute-Savoie.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#C9A96E] text-[#060604] px-10 py-5 text-xs tracking-[0.2em] font-bold uppercase hover:bg-white transition-colors duration-300"
          >
            Commencer mon projet
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;