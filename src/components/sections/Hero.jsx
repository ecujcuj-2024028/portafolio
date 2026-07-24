import Section from '../common/Section';
import { Paragraph } from '../common/Typography';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { ArrowDown, User } from 'lucide-react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <Section id="welcome" className="min-h-dvh flex items-center justify-center pt-24 sm:pt-32 relative overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">

        {/* Columna Izquierda: Información Principal */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">

          {/* Tag de Especialidad */}
          <div className="inline-flex items-center gap-2 bg-cyber-violet/10 border border-cyber-violet/40 rounded-md px-3.5 py-1.5 w-fit">
            <User size={14} className="text-cyber-violet" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyber-violet font-semibold">
              {personalInfo.title}
            </span>
          </div>

          {/* Saludo y Nombre */}
          <div className="space-y-3">
            <span className="font-mono text-sm text-cyber-emerald uppercase tracking-widest block font-medium">
              // HOLA MUNDO, MI NOMBRE ES
            </span>
            <h1 className="retro-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-[1.1] pb-2">
              Edvin Leonel <br />
              Cujcuj Ejcalón
            </h1>
          </div>

          {/* Breve descripción */}
          <Paragraph className="max-w-lg text-slate-300">
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
        <div className="lg:col-span-5 hidden lg:block">
          <div className="card bg-transparent">
            <div className="relative group select-none">

              {/* Ventana de Terminal */}
              <div className="relative bg-slate-950/80 border border-slate-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-shadow duration-500">
                {/* Encabezado */}
                <div className="h-9 bg-slate-900/60 border-b border-slate-900/80 px-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> datos.json
                  </span>
                  <span className="w-10" />
                </div>

                {/* Contenido en formato de objeto de código */}
                <div className="p-6 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto leading-relaxed">
                  <p className="text-slate-500">// Propiedades del Desarrollador</p>
                  <p><span className="text-violet-400">const</span> <span className="text-sky-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-emerald-400">nombre</span>: <span className="text-yellow-200">"{personalInfo.firstName}"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">apellido</span>: <span className="text-yellow-200">"{personalInfo.lastName}"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">enfoque</span>: <span className="text-yellow-200">"Crear Software Revolucionario"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">experiencia</span>: <span className="text-yellow-200">"{personalInfo.yearsCoding}"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">estado</span>: <span className="text-yellow-200">"{personalInfo.status}"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">habilidades</span>: [</p>
                  <p className="pl-8"><span className="text-yellow-200">"React.js"</span>, <span className="text-yellow-200">"TailwindCSS"</span>,</p>
                  <p className="pl-8"><span className="text-yellow-200">"JavaScript"</span>, <span className="text-yellow-200">"C#"</span>,</p>
                  <p className="pl-8"><span className="text-yellow-200">"Docker"</span>, <span className="text-yellow-200">"Java"</span></p>
                  <p className="pl-4">]</p>
                  <p>&#125;;</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Indicador de desplazamiento inferior */}
      <button type="button" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 bg-transparent border-0" onClick={() => scrollToSection('about')}>
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Desplazarse</span>
        <ArrowDown size={14} className="text-cyber-emerald animate-pulse" />
      </button>
    </Section>
  );
};

export default Hero;
