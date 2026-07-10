import React, { useState } from 'react';
import Background from './components/common/Background';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import SplashScreen from './components/common/SplashScreen';

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen w-full selection:bg-cyber-violet/30 selection:text-white">
      {/* Pantalla de Carga / Intro */}
      {!isIntroComplete && (
        <SplashScreen onComplete={() => setIsIntroComplete(true)} />
      )}
      {/* Fondo Dinámico Común */}
      <Background />

      {/* Menú de Navegación Flotante Inteligente */}
      <Navbar />

      {/* Contenedor Principal de Secciones */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Sección de Bienvenida */}
        <Hero />

        {/* Sección Acerca de Mí */}
        <About />

        {/* Sección de Habilidades */}
        <Skills />

        {/* Sección de Trayectoria / Educación y Experiencia */}
        <Resume />

        {/* Sección de Proyectos y Capturas */}
        <Projects />

        {/* Sección de Contacto e Integración de Redes */}
        <Contact />
      </main>

      {/* Footer Decorativo Técnico */}
      <footer className="relative z-10 w-full py-8 border-t border-slate-900 bg-bg-dark/50 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
        <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">
          Diseñado & Desarrollado por Edvin © {new Date().getFullYear()}
        </span>
        <span className="font-mono text-[8px] text-slate-700">
          React + Tailwind CSS v4 + Vite
        </span>
      </footer>
    </div>
  );
}

export default App;