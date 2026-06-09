import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-white text-stone-900 font-sans selection:bg-[#bc0108] selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-6">
          <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase mb-4 block">Excellence & Tradition</span>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight text-white">
            Nos <span className="italic text-[#bc0108]">Services</span>
          </h1>
        </div>
      </section>

      {/* --- SECTION 1: PHILOSOPHY --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-8 leading-relaxed text-stone-900">
          "Nous ne construisons pas seulement des maisons, nous érigeons des cadres de vie qui traversent le temps."
        </h2>
        <p className="text-stone-500 text-lg font-light leading-loose">
          Basée au cœur du Chablais, notre entreprise s'engage à transformer vos rêves en réalité architecturale.
          Que ce soit pour une construction neuve ou une rénovation de prestige, nous allions savoir-faire artisanal et technologies modernes.
        </p>
      </section>

      {/* --- SECTION 2: THE 3 MAIN PILLARS --- */}
      <section className="bg-stone-50 py-32 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* IMAGINER */}
            <div id="imaginer" className="scroll-mt-32 group">
              <span className="text-6xl font-serif text-stone-900/5 group-hover:text-[#bc0108]/20 transition-colors duration-500 block mb-4">01</span>
              <h3 className="text-3xl font-serif mb-6 text-[#bc0108]">Imaginer</h3>
              <p className="text-stone-500 leading-relaxed font-light mb-6">
                Chaque projet commence par une page blanche et votre vision. Nous créons des concepts uniques, des plans architecturaux et des rendus 3D pour donner vie à vos idées.
              </p>
              <ul className="text-sm space-y-2 text-[#bc0108]/80 tracking-wide uppercase">
                <li>• Analyse du terrain</li>
                <li>• Études de faisabilité</li>
                <li>• Concepts architecturaux</li>
              </ul>
            </div>

            {/* CONCEVOIR */}
            <div id="concevoir" className="scroll-mt-32 group">
              <span className="text-6xl font-serif text-stone-900/5 group-hover:text-[#bc0108]/20 transition-colors duration-500 block mb-4">02</span>
              <h3 className="text-3xl font-serif mb-6 text-[#bc0108]">Concevoir</h3>
              <p className="text-stone-500 leading-relaxed font-light mb-6">
                La précision technique au service de l'esthétique. Nous gérons les permis de construire, le choix des matériaux et la planification rigoureuse de chaque corps de métier.
              </p>
              <ul className="text-sm space-y-2 text-[#bc0108]/80 tracking-wide uppercase">
                <li>• Dossier administratif</li>
                <li>• Sélection des matériaux</li>
                <li>• Ingénierie technique</li>
              </ul>
            </div>

            {/* RÉALISER */}
            <div id="realiser" className="scroll-mt-32 group">
              <span className="text-6xl font-serif text-stone-900/5 group-hover:text-[#bc0108]/20 transition-colors duration-500 block mb-4">03</span>
              <h3 className="text-3xl font-serif mb-6 text-[#bc0108]">Réaliser</h3>
              <p className="text-stone-500 leading-relaxed font-light mb-6">
                Le passage à l'action. Nos équipes assurent un suivi de chantier quotidien pour garantir une exécution parfaite, dans le respect des délais et des budgets.
              </p>
              <ul className="text-sm space-y-2 text-[#bc0108]/80 tracking-wide uppercase">
                <li>• Direction de travaux</li>
                <li>• Contrôle qualité</li>
                <li>• Remise des clés</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: MATERIALS / MATIÈRES --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
              alt="Matières"
              className="grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[600px] w-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase mb-4 block">Qualité Supérieure</span>
            <h2 className="text-4xl font-serif mb-8 text-stone-900">Les Matières Nobles</h2>
            <p className="text-stone-500 text-lg font-light leading-loose mb-8">
              Nous sélectionnons nos partenaires pour la qualité exceptionnelle de leurs produits. Pierre naturelle, bois brossé, béton poli et verre haute performance.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
              <div>
                <h4 className="text-[#bc0108] font-bold mb-2">Durabilité</h4>
                <p className="text-sm text-stone-500">Matériaux certifiés éco-responsables.</p>
              </div>
              <div>
                <h4 className="text-[#bc0108] font-bold mb-2">Esthétique</h4>
                <p className="text-sm text-stone-500">Finitions faites à la main par nos artisans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: STATISTICS --- */}
      <section className="bg-[#bc0108] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-white text-center">
          {[
            { label: "Projets Livrés", val: "150+" },
            { label: "Années d'Expérience", val: "25" },
            { label: "Artisans Partenaires", val: "40" },
            { label: "Clients Satisfaits", val: "100%" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-serif mb-2">{stat.val}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: FAQ --- */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-16 text-center text-stone-900">Questions Fréquentes</h2>
        <div className="space-y-8">
          {[
            { q: "Quels sont vos délais moyens ?", a: "Pour une construction neuve, comptez entre 10 et 14 mois selon la complexité du projet." },
            { q: "Travaillez-vous hors du Chablais ?", a: "Notre zone d'intervention principale est le Chablais, mais nous étudions toute proposition en région lémanique." },
            { q: "Proposez-vous des garanties ?", a: "Tous nos travaux sont couverts par la garantie décennale et une assurance dommage-ouvrage." },
          ].map((item, i) => (
            <div key={i} className="border-b border-stone-200 pb-8">
              <h3 className="text-xl font-serif mb-4 text-[#bc0108]">{item.q}</h3>
              <p className="text-stone-500 font-light">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 bg-stone-50 text-center border-t border-stone-200">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 text-stone-900">
          Prêt à <span className="italic text-[#bc0108]">construire</span>?
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#bc0108] text-white px-12 py-5 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-stone-900 transition-colors duration-500"
        >
          Demander une étude gratuite
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;