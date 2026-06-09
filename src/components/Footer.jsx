import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Accueil", path: "/" },
        { name: "Imaginer", path: "/imaginer" },
        { name: "Concevoir", path: "/concevoir" },
        { name: "Réaliser", path: "/realiser" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Construction", path: "/services/construction" },
        { name: "Rénovation", path: "/services/renovation" },
        { name: "Aménagement", path: "/services/amenagement" },
        { name: "Éco-responsable", path: "/services/eco" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Nous écrire", path: "/contact" },
        { name: "Devis gratuit", path: "/devis" },
        { name: "Téléphone", path: "tel:+33000000000" },
        { name: "Adresse", path: "/plan" },
      ],
    },
  ];

  const socialLinks = ["Facebook", "Instagram", "Youtube"];

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 px-6 overflow-hidden">

      {/* ── Watermark logo ── */}
  <span
  aria-hidden="true"
  className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex items-end justify-center"
  style={{
    fontFamily: "var(--font-display, serif)",
    fontSize: "clamp(50px, 12vw, 160px)", // smaller text
    fontWeight: 700,
    letterSpacing: "0.05em",
    lineHeight: 0.9,
    color: "transparent",
    WebkitTextStroke: "1px rgba(255,255,255,0.06)",
    userSelect: "none",
    zIndex: 0,
    textTransform: "uppercase",
    textAlign: "center",
  }}
>
  Idea L
  <br />
  Construction
</span>

      {/* ── Content layer ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* Brand Column */}
          <div>
            <div
              className="text-white text-2xl font-semibold tracking-widest mb-5"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              <img src="/logo.png" alt="Toska Logo" className="w-32" />
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed font-light max-w-[260px]"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              Construction & rénovation de maisons haut standing en Haute-Savoie
              depuis 2010. L'excellence au service de votre patrimoine.
            </p>
            <div className="flex gap-4 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  className="text-[10px] tracking-[0.2em] uppercase text-white/30 no-underline transition-colors duration-300 hover:text-[#bc0108]"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic map columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-[11px] tracking-[0.25em] uppercase text-[#bc0108] mb-6"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {section.title}
              </h4>
              <ul className="list-none p-0 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 font-light no-underline transition-colors duration-300 hover:text-[#bc0108]"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-5 text-[11px] tracking-wide"
          style={{ fontFamily: "var(--font-body, sans-serif)" }}
        >
          <span className="text-white/30">
            © {new Date().getFullYear()} Toska. Tous droits réservés.
          </span>

          {/* energenius credit */}
          <span className="text-white/20 text-[10px] tracking-widest uppercase">
            Créé par{" "}
            <a
              href="https://energenius.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 no-underline transition-colors duration-300 hover:text-[#bc0108]"
            >
              energenius.agency
            </a>
          </span>

          <span className="text-[#bc0108]/50 tracking-widest uppercase text-[10px]">
            Haute-Savoie, France
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;