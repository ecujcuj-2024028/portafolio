import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = "", 
  containerClassName = "",
  fullWidth = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 relative w-full ${className}`}
    >
      <div className={`mx-auto ${fullWidth ? 'w-full' : 'max-w-6xl px-6 sm:px-8 md:px-12'} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
