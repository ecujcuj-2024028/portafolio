import React from 'react';

// Pixel Art SVGs para decoración flotante de fondo
const PixelStar = ({ className }) => (
  <svg className={`${className} pointer-events-none select-none`} width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z" />
  </svg>
);

const PixelCube = ({ className }) => (
  <svg className={`${className} pointer-events-none select-none`} width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 2 L21 6.5 V17.5 L12 22 L3 17.5 V6.5 Z" />
    <path d="M12 12 V22 M12 12 L21 6.5 M12 12 L3 6.5" />
  </svg>
);

const PixelRing = ({ className }) => (
  <svg className={`${className} pointer-events-none select-none`} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M8 3 H16 L21 8 V16 L16 21 H8 L3 16 V8 Z" />
  </svg>
);

const PixelDiamond = ({ className }) => (
  <svg className={`${className} pointer-events-none select-none`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 4 L20 12 L12 20 L4 12 Z" />
  </svg>
);

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-bg-dark overflow-hidden pointer-events-none select-none">
      {/* Cuadrícula técnica de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Capa de ruido o textura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07090e_80%)]" />

      {/* Elementos Decorativos Pixel-Art Flotantes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Lado Izquierdo */}
        <PixelCube className="absolute top-[12%] left-[10%] text-cyber-emerald/30 animate-drift-slow" />
        <PixelStar className="absolute top-[45%] left-[5%] text-cyber-emerald/30 animate-drift-medium" />
        <PixelRing className="absolute bottom-[18%] left-[8%] text-cyber-emerald/35 animate-drift-fast" />
        
        {/* Centro / Superior */}
        <PixelRing className="absolute top-[6%] left-[30%] text-cyber-emerald/20 animate-drift-medium" />
        
        {/* Lado Derecho */}
        <PixelCube className="absolute top-[10%] right-[38%] text-cyber-emerald/30 animate-drift-slow" />
        <PixelStar className="absolute top-[20%] right-[15%] text-cyber-emerald/30 animate-drift-medium" />
        <PixelRing className="absolute top-[45%] right-[5%] text-cyber-emerald/30 animate-drift-fast" />
        <PixelStar className="absolute bottom-[25%] right-[10%] text-cyber-emerald/30 animate-drift-slow" />
        <PixelDiamond className="absolute bottom-[10%] right-[25%] text-cyber-emerald/35 animate-drift-medium" />
      </div>
    </div>
  );
};

export default Background;
