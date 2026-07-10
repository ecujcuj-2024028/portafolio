import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '', 
  download,
  target,
  rel
}) => {
  // Clases base
  const baseClasses = "relative inline-flex items-center justify-center font-sans font-medium text-sm tracking-wide rounded-md transition-all duration-300 overflow-hidden cursor-pointer select-none px-6 py-3";
  
  // Clases específicas de cada variante
  const variantClasses = {
    // Primario: Fondo oscuro translúcido con borde violeta y brillo en hover
    primary: "bg-cyber-violet/10 text-slate-100 border border-cyber-violet/40 hover:border-cyber-violet hover:bg-cyber-violet/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    
    // Secundario: Borde esmeralda translúcido con efecto hover esmeralda
    secondary: "bg-cyber-emerald/5 text-slate-200 border border-cyber-emerald/30 hover:border-cyber-emerald hover:bg-cyber-emerald/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    
    // Asimétrico: Estilo tecnológico futurista con esquina cortada o borde grueso
    tech: "bg-slate-900 text-cyber-emerald border-b-2 border-r-2 border-cyber-emerald hover:bg-cyber-emerald hover:text-slate-950 font-mono text-xs uppercase tracking-widest",
    
    // Minimalista/Texto con hover de subrayado dinámico
    minimal: "text-slate-300 hover:text-white p-2 border border-transparent hover:border-slate-800 hover:bg-slate-950/40"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        download={download}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={target || href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
