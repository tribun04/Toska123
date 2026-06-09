import React, { useEffect } from "react";
import { MoveRight } from "lucide-react";

// ============================================================
//  ADD / EDIT PROJECTS HERE — just copy-paste a block below
// ============================================================
//  size options:
//    "wide"   → spans 8 of 12 columns  (landscape hero card)
//    "tall"   → spans 4 cols, 2 rows   (portrait tall card)
//    "normal" → spans 4 cols, 1 row    (square-ish card)
// ============================================================
const projects = [
  {
    title: "Villa Leman",
    location: "Évian-les-Bains",
    category: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    size: "wide",
  },
  {
    title: "Chalet Horizon",
    location: "Morzine",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",
    size: "tall",
  },
  {
    title: "Résidence Quartz",
    location: "Thonon",
    category: "Aménagement",
    image: "https://images.unsplash.com/photo-1600607687940-4e2a09615d3b?q=80&w=2070",
    size: "normal",
  },
  {
    title: "Le Belvédère",
    location: "Messery",
    category: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070",
    size: "normal",
  },
  // ── ADD MORE PROJECTS BELOW ────────────────────────────────
  // {
  //   title: "Villa Rosa",
  //   location: "Genève",
  //   category: "Rénovation",
  //   image: "https://your-image-url.com/photo.jpg",  // URL or import path
  //   size: "wide",   // "wide" | "tall" | "normal"
  // },
  // ──────────────────────────────────────────────────────────
];

// Automatic layout: after every 3 "normal" cards, a new wide+tall pair begins.
// The grid reflows naturally — just keep adding entries to the array above.

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-stone-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-24">
          <span className="text-[#bc0108] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">
            Portfolio
          </span>
          <h1 className="font-serif text-6xl md:text-8xl leading-none text-stone-900">
            Nos <br />
            <span className="italic text-[#bc0108]">Réalisations</span>
          </h1>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-stone-100 transition-all duration-700
                ${
                  project.size === "wide"
                    ? "lg:col-span-8"
                    : project.size === "tall"
                    ? "lg:col-span-4 lg:row-span-2"
                    : "lg:col-span-4"
                }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[320px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[#bc0108] text-[10px] tracking-widest uppercase mb-2 block font-bold">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-serif mb-1 text-white">{project.title}</h3>
                      <p className="text-white/70 text-sm italic">{project.location}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <MoveRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 text-center">
          <p className="text-stone-400 mb-8 font-light">
            Chaque projet est une pièce unique conçue avec passion.
          </p>
          <div className="h-px w-24 bg-[#bc0108] mx-auto opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;