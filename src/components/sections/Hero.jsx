import React from 'react';
import Section from '../common/Section';
import { Title, Subtitle, Paragraph } from '../common/Typography';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, ArrowDown, User } from 'lucide-react';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="welcome" className="min-h-screen flex items-center justify-center pt-24 sm:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        {/* Columna Izquierda: Información Principal */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">

          {/* Tag de Especialidad */}
          <div className="inline-flex items-center gap-2 bg-cyber-violet/10 border border-cyber-violet/30 rounded-md px-3.5 py-1.5 w-fit">
            <User size={14} className="text-cyber-violet" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyber-violet font-semibold">
              {personalInfo.title}
            </span>
          </div>

          {/* Saludo y Nombre */}
          <div className="space-y-2">
            <span className="font-mono text-sm text-cyber-emerald uppercase tracking-widest block">
              // HOLA MUNDO, MI NOMBRE ES
            </span>
            <Title className="text-5xl sm:text-6xl md:text-7xl font-black leading-snug pb-2">
              {personalInfo.name}
            </Title>
          </div>

          {/* Breve descripción */}
          <Paragraph className="max-w-lg">
            {personalInfo.shortBio}
          </Paragraph>

          {/* Acciones */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contactar
            </Button>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Terminal Interactiva */}
        <div className="aura aura-dual lg:col-span-5 hidden lg:block">
          <div className="card bg-base-100">
            <div className="relative group select-none">

              {/* Ventana de Terminal */}
              <div className="relative bg-slate-950/90 border border-slate-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-cyber-violet/50 transition-shadow duration-300 ">
                {/* Encabezado */}
                <div className="h-8 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                    <Terminal size={10} /> datos.json
                  </span>
                  <span className="w-10" />
                </div>

                {/* Contenido en formato de objeto de código */}
                <div className="p-6 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                  <p className="text-slate-500">// Propiedades del Desarrollador</p>
                  <p><span className="text-cyber-violet">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-cyber-emerald">nombre</span>: <span className="text-yellow-200">"{personalInfo.firstName}"</span>,</p>
                  <p className="pl-4"><span className="text-cyber-emerald">apellido</span>: <span className="text-yellow-200">"{personalInfo.lastName}"</span>,</p>
                  <p className="pl-4"><span className="text-cyber-emerald">enfoque</span>: <span className="text-yellow-200">"Crear Software Revolucionario"</span>,</p>
                  <p className="pl-4"><span className="text-cyber-emerald">experiencia</span>: <span className="text-yellow-200">"{personalInfo.yearsCoding}"</span>,</p>
                  <p className="pl-4"><span className="text-cyber-emerald">estado</span>: <span className="text-cyber-emerald">"{personalInfo.status}"</span>,</p>
                  <p className="pl-4"><span className="text-cyber-emerald">habilidades</span>: [</p>
                  <p className="pl-8"><span className="text-yellow-200">"React.js"</span>, <span className="text-yellow-200">"TailwindCSS"</span>,</p>
                  <p className="pl-8"><span className="text-yellow-200">"JavaScript"</span>, <span className="text-yellow-200">"C#"</span></p>
                  <p className="pl-8"><span className="text-yellow-200">"Docker"</span>, <span className="text-yellow-200">"Java"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>

      {/* Indicador de desplazamiento inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => scrollToSection('about')}>
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Desplazarse</span>
        <ArrowDown size={14} className="text-cyber-emerald animate-bounce" />
      </div>
    </Section>
  );
};

export default Hero;
