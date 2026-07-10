import React, { useState, useEffect } from 'react';
import { Home, User, Cpu, FileText, FolderGit2, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './common/CustomIcons';

const navItems = [
  { id: 'welcome', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Sobre Mí', icon: User },
  { id: 'skills', label: 'Habilidades', icon: Cpu },
  { id: 'resume', label: 'Trayectoria', icon: FileText },
  { id: 'projects', label: 'Proyectos', icon: FolderGit2 },
  { id: 'contact', label: 'Contacto', icon: Send },
];

const Navbar = () => {
  const { personalInfo } = portfolioData;
  const [activeSection, setActiveSection] = useState('welcome');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detectar scroll para efectos de fondo e indicar la última sección al llegar al final
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Observer inteligente para detectar qué sección está en pantalla
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Activa cuando la sección ocupa la parte central
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Navbar Superior  */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center ${isScrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-slate-900/80 shadow-lg' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-slate-400 font-semibold uppercase hidden sm:inline-block">
            // El trabajo bien Hecho
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-cyber-blue transition-colors border border-slate-700 hover:border-cyber-blue rounded-md px-3 py-1.5 text-xs font-mono uppercase tracking-wider shadow-sm"
          >
            <GithubIcon />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-cyber-blue transition-colors border border-slate-700 hover:border-cyber-blue rounded-md px-3 py-1.5 text-xs font-mono uppercase tracking-wider shadow-sm"
          >
            <LinkedinIcon />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>

      </header>

      {/* Menú de Navegación Flotante */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4">
        <div className="glass-panel rounded-full px-4 py-2.5 flex items-center gap-2 sm:gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-slate-800/60 relative">

          {/* Fondo difuso e indicador detrás del elemento activo */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-2.5 sm:p-3 rounded-full transition-all duration-300 group cursor-pointer ${isActive ? 'text-cyber-emerald scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                aria-label={item.label}
              >
                {/* Icono */}
                <Icon size={18} className="relative z-10 transition-transform duration-300 group-hover:scale-105" />

                {/* Resplandor trasero activo */}
                {isActive && (
                  <span className="absolute inset-0 bg-cyber-emerald/10 border border-cyber-emerald/20 rounded-full scale-100 animate-pulse-slow" />
                )}

                {/* Tooltip personalizado */}
                <span className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl whitespace-nowrap font-mono uppercase tracking-wider">
                  {item.label}
                  {/* Flecha del tooltip */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
