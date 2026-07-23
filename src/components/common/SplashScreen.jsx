import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowDown } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  const { personalInfo } = portfolioData;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let triggered = false;

    // 1. Bloquear scroll al inicio y asegurar estar al tope de la página
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const triggerExit = () => {
      if (triggered) return;
      triggered = true;
      setVisible(false);
      
      // Espera a que la animacion termine para dejar hacer scroll normal
      setTimeout(() => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 700);
    };

    // 2. Detectar rueda del mouse
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        triggerExit();
      }
    };

    // 3. Detectar deslizamiento táctil en móviles
    const handleTouchMove = () => {
      triggerExit();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 bg-[#07090e] transition-all duration-700 ease-in-out select-none ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
      }`}
    >
      {/* Patrón de cuadrícula decorativa */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Cabecera Técnica */}
      <div className="flex justify-between items-center w-full font-mono text-[9px] text-slate-500 tracking-widest relative z-10">
        <span>SISTEMA // Portafolio</span>
      </div>

      {/* Contenido Central: Frase de Filosofía */}
      <div className="max-w-2xl mx-auto text-left space-y-6 relative z-10 flex flex-col justify-center flex-1">
        <div className="space-y-3">
          <span className="font-mono text-xs text-cyber-emerald uppercase tracking-widest block">
            &gt; Frase que define la filosofía de mi desarrollo de Software
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight">
            "{personalInfo.phrase}"
            <span className="text-slate-400 font-mono text-base block mt-4 tracking-widest uppercase">— {personalInfo.phraseAuthor}</span>
          </h1>
        </div>
      </div>

      {/* Pie: Indicador de Desplazamiento */}
      <div className="w-full flex flex-col items-center justify-center gap-2 relative z-10 py-4">
        <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest animate-pulse">
          Desplázate hacia abajo para ingresar
        </span>
        <ArrowDown size={16} className="text-cyber-emerald animate-pulse mt-1" />
      </div>
    </div>
  );
};

export default SplashScreen;
