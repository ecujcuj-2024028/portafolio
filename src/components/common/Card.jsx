import React from 'react';

// Tarjeta base con cristal esmerilado y efecto hover suave
export const Card = ({ children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel glass-panel-hover rounded-xl p-6 sm:p-8 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Tarjeta tecnológica asimétrica de estilo terminal/hardware
export const TechCard = ({ 
  children, 
  title, 
  status, 
  className = "", 
  accent = "violet" 
}) => {
  const accentBorder = accent === "emerald" ? "border-t-cyber-emerald" : "border-t-cyber-violet";
  const accentDot = accent === "emerald" ? "bg-cyber-emerald" : "bg-cyber-violet";

  return (
    <div className={`relative bg-slate-950/70 border border-slate-800/80 rounded-lg overflow-hidden shadow-2xl ${className}`}>
      {/* Barra superior de terminal decorativa */}
      <div className={`h-8 bg-slate-900/90 border-b border-slate-800/50 px-4 flex items-center justify-between`}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          {title && (
            <span className="font-mono text-[10px] text-slate-500 ml-3 uppercase tracking-widest truncate">
              {title}
            </span>
          )}
        </div>
        
        {/* Indicador de estado */}
        {status && (
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${accentDot} animate-pulse`} />
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">{status}</span>
          </div>
        )}
      </div>

      {/* Borde superior decorativo de acento */}
      <div className={`absolute top-0 left-0 w-full h-[2px] border-t-2 ${accentBorder}`} />

      {/* Contenido */}
      <div className="p-6 sm:p-8">
        {children}
      </div>

      {/* Detalles decorativos en las esquinas inferiores para romper la simetría */}
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-900 border-t border-l border-slate-800 flex items-center justify-center pointer-events-none">
        <div className="w-1 h-1 bg-slate-700 rounded-full" />
      </div>
    </div>
  );
};
