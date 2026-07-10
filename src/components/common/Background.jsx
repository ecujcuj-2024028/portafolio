import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full bg-bg-dark overflow-hidden pointer-events-none">
      {/* Cuadrícula técnica de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Orbes de luz desenfocados animados */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyber-violet/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyber-emerald/8 blur-[150px] animate-float-medium" />
      <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-cyber-blue/5 blur-[100px] animate-float-slow" />

      {/* Círculos geométricos decorativos flotando sutilmente */}
      <div className="absolute top-[20%] left-[15%] w-80 h-80 rounded-full border border-cyber-violet/10 animate-orbit opacity-30" />
      <div className="absolute bottom-[25%] right-[20%] w-[450px] h-[450px] rounded-full border border-cyber-emerald/5 animate-orbit opacity-20" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />

      {/* Capa de ruido o textura (opcional, pero añade profundidad) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07090e_80%)]" />
    </div>
  );
};

export default Background;
