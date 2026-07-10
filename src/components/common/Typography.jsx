import React from 'react';

// Título principal con degradado y peso fuerte
export const Title = ({ children, className = "", gradient = "primary" }) => {
  const gradientClass = 
    gradient === "primary" ? "text-gradient-primary" :
    gradient === "emerald" ? "text-gradient-emerald" :
    gradient === "violet" ? "text-gradient-violet" : "";

  return (
    <h1 className={`font-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl ${gradientClass} ${className}`}>
      {children}
    </h1>
  );
};

// Subtítulos
export const Subtitle = ({ children, className = "" }) => {
  return (
    <h3 className={`font-sans font-semibold tracking-wide text-lg sm:text-xl text-slate-300 ${className}`}>
      {children}
    </h3>
  );
};

// Texto de párrafo con excelente legibilidad y color suavizado
export const Paragraph = ({ children, className = "" }) => {
  return (
    <p className={`font-sans text-slate-400 font-light leading-relaxed text-base sm:text-lg ${className}`}>
      {children}
    </p>
  );
};

// Encabezado de sección asimétrico y tecnológico
export const SectionHeader = ({ num, title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 md:mb-16 select-none ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs sm:text-sm text-cyber-emerald tracking-widest font-semibold">
          {num} //
        </span>
        <div className="h-[1px] w-8 bg-cyber-violet/30" />
      </div>
      <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight mt-2 uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-widest">
          {subtitle}
        </p>
      )}
    </div>
  );
};
