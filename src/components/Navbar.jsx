import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const menuItems = [
    { name: "Accueil", path: "/", id: "01" },
    { name: "Imaginer", path: "/imaginer", id: "02" },
    { name: "Concevoir", path: "/services#concevoir", id: "03" },
    { name: "Réaliser", path: "/projects", id: "04" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-700 
        ${
          scrolled
            ? "py-4 bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-sm"
            : "py-8 bg-white"
        }`}
      >
        <div className="max-w-[1800px] h-10 mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-2 z-[130]  rounded-full p-2"
          >
            <img
              src="/logo.png"
              alt="Creatio Logo"
              className="w-[150px] h-[100px] object-contain transition-transform duration-500 group-hover:rotate-12"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="relative text-[13px] tracking-[0.5em] uppercase font-bold text-stone-900 hover:text-stone-900 transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#bc0108] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}

            <Link
              to="/contact"
              className="group relative overflow-hidden ml-6 border border-stone-300 px-8 py-3 text-[13px] tracking-[0.4em] uppercase text-stone-800 hover:border-[#C9A96E] transition-colors"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Devis
              </span>
              <div className="absolute inset-0 bg-[#bc0108] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden flex flex-col gap-2 z-[130] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`h-px transition-all duration-500 ${
                isOpen
                  ? "w-8 rotate-45 translate-y-[5px] bg-stone-800"
                  : "w-8 bg-stone-800"
              }`}
            />
            <div
              className={`h-px transition-all duration-500 ${
                isOpen
                  ? "w-8 -rotate-45 -translate-y-[5px] bg-stone-800"
                  : "w-5 ml-auto bg-stone-800"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[110] bg-white transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Background Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[30vw] font-serif font-bold text-stone-100 select-none">
            CREATIO
          </span>
        </div>

        <div className="h-full flex flex-col lg:flex-row">
          {/* Left Side: Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-24 gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-6 transition-all duration-700 
                  ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <span className="text-[#C9A96E] font-serif text-lg md:text-2xl italic opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </span>
                <span className="text-4xl md:text-7xl font-serif text-stone-800 group-hover:italic group-hover:text-[#C9A96E] transition-all">
                  {item.name}
                </span>
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#C9A96E] opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Right Side: Contact Details */}
          <div
            className={`lg:w-1/3 border-t lg:border-t-0 lg:border-l border-stone-200 p-8 md:p-24 flex flex-col justify-end transition-all duration-1000 delay-500
            ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] block mb-4">
                  Bureau
                </span>
                <p className="text-stone-500 font-light leading-relaxed">
                  124 Avenue du Lac
                  <br />
                  74200 Thonon-les-Bains
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] block mb-4">
                  Contact
                </span>
                <p className="text-stone-500 font-light">
                  hello@toska-archi.com
                </p>
                <p className="text-stone-500 font-light">+33 (0)4 50 12 34 56</p>
              </div>
              <div className="flex gap-6 pt-4">
                {["Instagram", "LinkedIn"].map((social) => (
                  <span
                    key={social}
                    className="text-[10px] tracking-[0.3em] uppercase text-stone-600 hover:text-[#C9A96E] cursor-pointer transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;