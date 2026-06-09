import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HERO SECTION --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#bc0108]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#bc0108]">Contact</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-light mb-8 text-stone-900">
            Parlons de votre <br />
            <span className="italic text-[#bc0108]">projet d'exception</span>
          </h1>
          <p className="max-w-2xl text-stone-500 text-lg font-light leading-relaxed">
            Que ce soit pour une construction neuve ou une rénovation de prestige en Haute-Savoie,
            notre équipe est à votre écoute pour transformer vos rêves en architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* --- LEFT SIDE: INFO --- */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#bc0108] mb-8">Coordonnées</h3>
              <div className="space-y-8 font-serif text-3xl font-light text-stone-900">
                <div className="group cursor-pointer">
                  <p className="text-stone-400 text-xs tracking-widest uppercase mb-2 font-sans">Téléphone</p>
                  <a href="tel:+33450000000" className="hover:text-[#bc0108] transition-colors">
                    +33 (0)4 50 00 00 00
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-stone-400 text-xs tracking-widest uppercase mb-2 font-sans">Email</p>
                  <a href="mailto:contact@.com" className="hover:text-[#bc0108] transition-colors">
                    contact@.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#bc0108] mb-8">Notre Bureau</h3>
              <p className="font-serif text-3xl font-light leading-snug text-stone-900">
                124 Avenue du Léman<br />
                74200 Thonon-les-Bains<br />
                Haute-Savoie, France
              </p>
            </div>

            <div className="flex gap-8 items-center pt-8 border-t border-stone-200">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-600 hover:text-[#bc0108] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="bg-stone-50 p-8 md:p-12 border border-stone-200 shadow-sm relative">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase text-stone-400">Nom complet</label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-stone-300 py-3 focus:border-[#bc0108] outline-none transition-all font-light text-stone-900 placeholder:text-stone-300"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase text-stone-400">Email</label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-stone-300 py-3 focus:border-[#bc0108] outline-none transition-all font-light text-stone-900 placeholder:text-stone-300"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-stone-400">Type de projet</label>
                <select className="bg-transparent border-b border-stone-300 py-3 focus:border-[#bc0108] outline-none transition-all font-light text-stone-900 appearance-none cursor-pointer">
                  <option className="bg-white">Construction Neuve</option>
                  <option className="bg-white">Rénovation Haute-Savoie</option>
                  <option className="bg-white">Aménagement Intérieur</option>
                  <option className="bg-white">Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-stone-400">Votre message</label>
                <textarea
                  rows="4"
                  className="bg-transparent border-b border-stone-300 py-3 focus:border-[#bc0108] outline-none transition-all font-light text-stone-900 placeholder:text-stone-300 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button className="w-full bg-[#bc0108] text-white py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-stone-900 transition-all mt-4">
                Envoyer ma demande
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;