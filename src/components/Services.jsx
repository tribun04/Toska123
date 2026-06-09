import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Construction",
    items: ["Design personnalisé", "Gestion A à Z", "Clé en main"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    id: "02",
    title: "Rénovation",
    items: ["Modernisation", "Transformation", "Patrimoine"],
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069",
  },
  {
    id: "03",
    title: "Aménagement",
    items: ["Élégance", "Finitions", "Corps d'état"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
  },
  {
    id: "04",
    title: "Éco-Solution",
    items: ["Basse consommation", "Durable", "Isolation"],
    img: "https://images.unsplash.com/photo-1518005020251-0ea5c182d9ee?q=80&w=2042",
  },
];

const Services = () => (
  <section className="bg-white py-32 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-24">

      {/* --- LEFT SIDE: EDITORIAL HEADER --- */}
      <div className="lg:sticky lg:top-40 h-fit space-y-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-[#bc0108]"></span>
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#bc0108] font-bold">Expertise</span>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl text-stone-900 leading-[0.9] mb-8">
            L'Art de <br />
            <span className="italic text-[#bc0108]">Bâtir</span>
          </h2>
          <p className="text-stone-500 max-w-sm text-sm leading-relaxed mb-10 font-light">
            De la structure brute aux finitions les plus délicates, nous orchestrons chaque détail pour créer des lieux d'exception.
          </p>
          <button className="group relative overflow-hidden border border-[#bc0108]/40 px-10 py-5 text-[#bc0108] text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:text-white">
            <span className="relative z-10">Estimation Gratuite</span>
            <div className="absolute inset-0 bg-[#bc0108] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

        {/* Minimalist Stats */}
        <div className="hidden lg:grid grid-cols-2 gap-8 border-t border-stone-200 pt-12">
          <div>
            <div className="text-2xl font-serif text-stone-900">14+</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400">Années d'expérience</div>
          </div>
          <div>
            <div className="text-2xl font-serif text-stone-900">250+</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400">Projets livrés</div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: INTERACTIVE LIST --- */}
      <div className="flex flex-col">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative border-b border-stone-200 py-12 md:py-16 transition-all duration-700 hover:border-[#bc0108]"
          >
            {/* Background Hover Image Reveal */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-40 opacity-0 scale-90 group-hover:opacity-10 group-hover:scale-100 transition-all duration-700 pointer-events-none hidden xl:block">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-start gap-8">
                <span className="font-serif text-[#bc0108] text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                  {s.id}
                </span>
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 group-hover:italic transition-all duration-500">
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#bc0108] rounded-full"></span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interaction Arrow */}
              <div className="flex items-center gap-4 self-end md:self-center">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#bc0108] group-hover:border-[#bc0108] transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Hover Slide Effect Decoration */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#bc0108] group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;