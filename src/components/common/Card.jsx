import React from 'react';

// Tarjeta base con cristal esmerilado y efecto hover suave
export const Card = ({ children, className = "", onClick }) => {
  if (onClick) {
    return (
      <button 
        type="button"
        onClick={onClick}
        className={`glass-panel glass-panel-hover rounded-xl p-6 sm:p-8 cursor-pointer text-left w-full border-0 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <div 
      className={`glass-panel glass-panel-hover rounded-xl p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

