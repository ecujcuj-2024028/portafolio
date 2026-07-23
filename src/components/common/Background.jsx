import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full bg-bg-dark overflow-hidden pointer-events-none">
      {/* Cuadrícula técnica de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Capa de ruido o textura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07090e_80%)]" />
    </div>
  );
};

export default Background;

