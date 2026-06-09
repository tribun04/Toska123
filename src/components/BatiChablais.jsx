import React, { useState, useEffect } from "react";

/* ─── GOOGLE FONTS & STYLES ─────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Barlow+Condensed:wght@300;400;500;600;700;800;900&display=swap');
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    :root {
      --gold: #C9A96E;
      --gold-light: #E8D5B0;
      --dark: #0A0A08;
      --dark-2: #111110;
      --dark-3: #1A1A18;
      --stone: #8A8A80;
      --stone-light: #B8B8B0;
      --off-white: #F2EDE6;
      --font-display: 'Cormorant Garamond', serif;
      --font-body: 'Barlow Condensed', sans-serif;
    }

    body { background: var(--dark); color: var(--off-white); font-family: var(--font-body); }
    ::selection { background: rgba(201,169,110,0.25); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes lineGrow {
      from { transform: scaleX(0); } to { transform: scaleX(1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-8px); }
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 1; transform: translateY(0); }
      50%       { opacity: .4; transform: translateY(6px); }
    }
  `}</style>
);

/* ─── NAV ───────────────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Accueil","Imaginer","Concevoir","Réaliser","Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: scrolled ? "14px 48px" : "28px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10,10,8,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
      transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
    }}>
      {/* Logo */}
      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: 2, cursor: "pointer" }}>
        Toska<span style={{ color: "var(--gold)" }}></span>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        {links.slice(0,4).map(l => (
          <a key={l} href="#" style={{
            fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 3,
            textTransform: "uppercase", color: "var(--stone-light)",
            textDecoration: "none", fontWeight: 500,
            transition: "color 0.3s",
          }}
          onMouseEnter={e => e.target.style.color = "var(--gold)"}
          onMouseLeave={e => e.target.style.color = "var(--stone-light)"}
          >{l}</a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" style={{
        fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 3,
        textTransform: "uppercase", fontWeight: 700,
        padding: "12px 28px",
        border: "1px solid var(--gold)",
        color: "var(--gold)",
        textDecoration: "none",
        transition: "all 0.3s",
        background: "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--dark)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
      >Contact</a>
    </nav>
  );
};

/* ─── HERO ──────────────────────────────────────────────────────────── */
const Hero = () => (
  <section style={{
    position: "relative", height: "100vh", minHeight: 700,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(160deg, #0f0f0d 0%, #1a1812 50%, #0A0A08 100%)",
  }}>
    {/* Decorative grid lines */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}/>

    {/* Large background text */}
    <div style={{
      position: "absolute", fontSize: "clamp(120px,18vw,260px)",
      fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
      color: "rgba(201,169,110,0.04)", letterSpacing: -8,
      userSelect: "none", pointerEvents: "none",
      top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      whiteSpace: "nowrap",
    }}>CONSTRUCTION</div>

    {/* Gold horizontal lines */}
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, animation: "fadeIn 1.2s 0.3s both" }}>
      <div style={{ width: 60, height: 1, background: "var(--gold)", transformOrigin: "left", animation: "lineGrow 1s 0.6s both" }}/>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 5, color: "var(--gold)", textTransform: "uppercase" }}>Depuis 14 ans</span>
      <div style={{ width: 60, height: 1, background: "var(--gold)", transformOrigin: "right", animation: "lineGrow 1s 0.6s both" }}/>
    </div>

    {/* Main heading */}
    <h1 style={{
      fontFamily: "var(--font-display)", fontWeight: 300,
      fontSize: "clamp(52px, 8vw, 110px)",
      lineHeight: 1.0, letterSpacing: -1, textAlign: "center",
      animation: "fadeUp 1s 0.2s both",
    }}>
      Imaginer.<br/>
      <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Concevoir.</span><br/>
      Réaliser.
    </h1>

    {/* Sub */}
    <p style={{
      marginTop: 32, fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: 3,
      color: "var(--stone-light)", textTransform: "uppercase", textAlign: "center",
      maxWidth: 420, lineHeight: 1.8,
      animation: "fadeUp 1s 0.5s both",
    }}>
      Construction & rénovation de maisons<br/>de haut standing en Haute-Savoie
    </p>

    {/* Buttons */}
    <div style={{ display: "flex", gap: 16, marginTop: 52, animation: "fadeUp 1s 0.7s both" }}>
      <GoldButton>Nos Réalisations</GoldButton>
      <OutlineButton>Nous Contacter</OutlineButton>
    </div>

    {/* Scroll indicator */}
    <div style={{
      position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      animation: "fadeIn 1.5s 1.2s both",
    }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: 4, color: "var(--stone)", textTransform: "uppercase" }}>Défiler</span>
      <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--gold), transparent)", animation: "scrollPulse 2s infinite" }}/>
    </div>
  </section>
);

/* ─── BUTTONS ───────────────────────────────────────────────────────── */
const GoldButton = ({ children }) => (
  <button style={{
    background: "var(--gold)", color: "var(--dark)",
    border: "none", padding: "16px 36px",
    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
    letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
    transition: "all 0.3s",
  }}
  onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
  onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; }}
  >{children}</button>
);

const OutlineButton = ({ children }) => (
  <button style={{
    background: "transparent", color: "var(--off-white)",
    border: "1px solid rgba(242,237,230,0.3)", padding: "16px 36px",
    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
    letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
    transition: "all 0.3s",
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(242,237,230,0.3)"; e.currentTarget.style.color = "var(--off-white)"; }}
  >{children}</button>
);

/* ─── 3 CARDS SECTION ───────────────────────────────────────────────── */
const cardData = [
  { label: "01", title: "Imaginer", sub: "Conception & Architecture", desc: "Chaque projet commence par un rêve. Nous donnons vie à vos idées avec des croquis, plans 3D et conseils architecturaux personnalisés.", color: "#1E1C18" },
  { label: "02", title: "Concevoir", sub: "Plans & Ingénierie", desc: "De la esquisse au dossier technique complet. Notre équipe d'ingénieurs traduit votre vision en réalité constructible.", color: "#161614" },
  { label: "03", title: "Réaliser", sub: "Construction & Finitions", desc: "Nous orchestrons chaque chantier avec rigueur — gestion des corps de métier, respect des délais et finitions haut de gamme.", color: "#1A1816" },
];

const ThreeCards = () => (
  <section style={{ background: "var(--dark-2)", padding: "120px 48px" }}>
    {/* Section header */}
    <div style={{ textAlign: "center", marginBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
        <div style={{ width: 40, height: 1, background: "var(--gold)" }}/>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase" }}>Notre approche</span>
        <div style={{ width: 40, height: 1, background: "var(--gold)" }}/>
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, letterSpacing: -1 }}>
        Une méthode en <em style={{ color: "var(--gold)", fontStyle: "italic" }}>trois actes</em>
      </h2>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, maxWidth: 1200, margin: "0 auto" }}>
      {cardData.map((c, i) => (
        <div key={i}
          style={{
            background: c.color, padding: "64px 40px", cursor: "pointer",
            borderTop: "2px solid transparent", transition: "all 0.4s",
            position: "relative", overflow: "hidden",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderTopColor = "var(--gold)";
            e.currentTarget.style.transform = "translateY(-6px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderTopColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontSize: 80, fontWeight: 700, color: "rgba(201,169,110,0.08)", position: "absolute", top: 16, right: 24, lineHeight: 1 }}>{c.label}</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>{c.sub}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 300, letterSpacing: -1, marginBottom: 24 }}>{c.title}</h3>
          <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 24 }}/>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--stone-light)", lineHeight: 1.7, fontWeight: 300 }}>{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ─── ABOUT ─────────────────────────────────────────────────────────── */
const About = () => (
  <section style={{ background: "var(--dark)", padding: "140px 48px", maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
    {/* Left */}
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <div style={{ width: 32, height: 1, background: "var(--gold)" }}/>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase" }}>Notre histoire</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,60px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 32 }}>
        Qui sommes-<br/><em style={{ color: "var(--gold)" }}>nous ?</em>
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--stone-light)", lineHeight: 1.9, fontWeight: 300, marginBottom: 24 }}>
        Depuis 14 ans,  est un leader reconnu dans le domaine de la construction et la rénovation de maisons de haut standing en Haute-Savoie.
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--stone-light)", lineHeight: 1.9, fontWeight: 300, marginBottom: 48 }}>
        Grâce à notre expertise et à notre savoir-faire éprouvé, nous réalisons des projets qui dépassent les attentes les plus élevées. Chaque maison est une œuvre alliant design contemporain et matériaux de qualité supérieure.
      </p>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
        {[["14","ans d'expérience"],["200+","projets réalisés"],["100%","clients satisfaits"]].map(([n,l],i) => (
          <div key={i} style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: 20 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 2, color: "var(--stone)", textTransform: "uppercase", marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right - image placeholder with decorative frame */}
    <div style={{ position: "relative" }}>
      <div style={{
        width: "100%", aspectRatio: "4/5",
        background: "var(--dark-3)",
        border: "1px solid rgba(201,169,110,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "var(--stone)" }}>Votre photo ici</span>
      </div>
      {/* Decorative offset border */}
      <div style={{
        position: "absolute", top: 20, left: 20, right: -20, bottom: -20,
        border: "1px solid rgba(201,169,110,0.2)", zIndex: -1,
        pointerEvents: "none",
      }}/>
      {/* Gold badge */}
      <div style={{
        position: "absolute", bottom: 40, left: -40,
        background: "var(--gold)", padding: "24px 32px",
        fontFamily: "var(--font-body)",
      }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: "var(--dark)", lineHeight: 1 }}>14</div>
        <div style={{ fontSize: 10, letterSpacing: 3, color: "var(--dark)", textTransform: "uppercase", marginTop: 4 }}>Années<br/>d'Excellence</div>
      </div>
    </div>
  </section>
);

/* ─── SERVICES ──────────────────────────────────────────────────────── */
const services = [
  { icon: "🏠", title: "Construction sur mesure", items: ["Design & architecture personnalisés", "Gestion complète de A à Z", "Remise des clés incluse"] },
  { icon: "✦", title: "Rénovation haut de gamme", items: ["Modernisation & restauration", "Transformation d'espaces", "Respect du patrimoine"] },
  { icon: "◈", title: "Aménagement intérieur", items: ["Intérieurs élégants & pratiques", "Finitions, peinture, carrelage", "Électricité & plomberie"] },
  { icon: "◎", title: "Solutions éco-responsables", items: ["Constructions basse consommation", "Matériaux durables & certifiés", "Isolation thermique avancée"] },
];

const Services = () => (
  <section style={{ background: "var(--dark-2)", padding: "140px 48px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 100, alignItems: "start" }}>
        {/* Left heading */}
        <div style={{ position: "sticky", top: 120 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }}/>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase" }}>Ce que nous faisons</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,72px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 40 }}>
            Nos<br/><em style={{ color: "var(--gold)" }}>Services</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--stone-light)", lineHeight: 1.9, fontWeight: 300, marginBottom: 48 }}>
            Une gamme complète de prestations pour tous vos projets de construction et rénovation en Haute-Savoie.
          </p>
          <GoldButton>Demander un devis</GoldButton>
        </div>

        {/* Right service cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              padding: "40px 48px", background: "var(--dark-3)",
              borderLeft: "2px solid transparent", transition: "all 0.3s", cursor: "pointer",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderLeftColor = "var(--gold)"; e.currentTarget.style.paddingLeft = "56px"; }}
            onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.paddingLeft = "48px"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <span style={{ fontSize: 18, color: "var(--gold)" }}>{s.icon}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400 }}>{s.title}</h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--stone-light)", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--gold)", fontSize: 8 }}>◆</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── WHY US ─────────────────────────────────────────────────────────── */
const reasons = [
  ["Expérience éprouvée", "Plus d'une décennie au service de clients exigeants en Haute-Savoie."],
  ["Qualité exceptionnelle", "Standards les plus élevés — chaque détail compte dans nos réalisations."],
  ["Service clé en main", "Un interlocuteur unique du premier croquis à la remise des clés."],
  ["Suivi de A à Z", "Transparence totale, comptes-rendus réguliers, respect des budgets."],
];

const WhyUs = () => (
  <section style={{
    background: "var(--dark)",
    padding: "140px 48px",
    position: "relative", overflow: "hidden",
  }}>
    {/* Large watermark */}
    <div style={{
      position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)",
      fontFamily: "var(--font-display)", fontSize: 240, fontWeight: 700, fontStyle: "italic",
      color: "rgba(201,169,110,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none",
      whiteSpace: "nowrap",
    }}>EXCELLENCE</div>

    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ width: 40, height: 1, background: "var(--gold)" }}/>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase" }}>Pourquoi nous</span>
          <div style={{ width: 40, height: 1, background: "var(--gold)" }}/>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300 }}>
          L'excellence comme <em style={{ color: "var(--gold)" }}>standard</em>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, marginBottom: 80 }}>
        {reasons.map(([title, desc], i) => (
          <div key={i} style={{
            padding: "48px 52px", background: "var(--dark-3)",
            borderBottom: "1px solid rgba(201,169,110,0.1)",
            transition: "background 0.3s", cursor: "default",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#1c1c1a"}
          onMouseLeave={e => e.currentTarget.style.background = "var(--dark-3)"}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 300, color: "rgba(201,169,110,0.2)", lineHeight: 1, marginBottom: 16 }}>0{i + 1}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400, marginBottom: 16 }}>{title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--stone-light)", lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div style={{
        background: "var(--gold)", padding: "60px 80px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 32,
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 3, color: "rgba(10,10,8,0.6)", textTransform: "uppercase", marginBottom: 8 }}>Prêt à démarrer ?</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 400, color: "var(--dark)", lineHeight: 1.1 }}>
            Parlons de votre<br/><em>projet ensemble</em>
          </div>
        </div>
        <button style={{
          background: "var(--dark)", color: "var(--gold)",
          border: "none", padding: "20px 48px",
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
          letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
          transition: "all 0.3s", whiteSpace: "nowrap",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--dark)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >Contactez-nous →</button>
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer style={{ background: "#060604", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "80px 48px 40px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 80 }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>
            BATI<span style={{ color: "var(--gold)" }}>CHABLAIS</span>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--stone)", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
            Construction & rénovation de maisons haut standing en Haute-Savoie depuis 2010.
          </p>
          {/* Socials */}
          <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
            {["Facebook","Instagram","Youtube"].map(s => (
              <a key={s} href="#" style={{
                fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: 2,
                color: "var(--stone)", textDecoration: "none", textTransform: "uppercase",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = "var(--stone)"}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          ["Navigation", ["Accueil","Imaginer","Concevoir","Réaliser"]],
          ["Services", ["Construction","Rénovation","Aménagement","Éco-responsable"]],
          ["Contact", ["Nous écrire","Devis gratuit","Téléphone","Adresse"]],
        ].map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 24 }}>{title}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map(item => (
                <li key={item}>
                  <a href="#" style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--stone)",
                    textDecoration: "none", transition: "color 0.3s", fontWeight: 300,
                  }}
                  onMouseEnter={e => e.target.style.color = "var(--off-white)"}
                  onMouseLeave={e => e.target.style.color = "var(--stone)"}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "var(--font-body)", fontSize: 12, color: "var(--stone)",
        letterSpacing: 1,
      }}>
        <span>© 2025 BatiChablais. Tous droits réservés.</span>
        <span style={{ color: "rgba(201,169,110,0.5)" }}>Haute-Savoie, France</span>
      </div>
    </div>
  </footer>
);

/* ─── MAIN APP ───────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <FontLoader />
      <div style={{ background: "var(--dark)", minHeight: "100vh" }}>
        <Nav />
        <Hero />
        <ThreeCards />
        <About />
        <Services />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
}
