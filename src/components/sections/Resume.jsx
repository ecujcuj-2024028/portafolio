import React from 'react';
import Section from '../common/Section';
import { SectionHeader, Subtitle, Paragraph } from '../common/Typography';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Resume = () => {
  const { education, experience } = portfolioData.resume;

  return (
    <Section id="resume">
      {/* Encabezado */}
      <SectionHeader 
        num="03" 
        title="Trayectoria" 
        subtitle="EDUCACIÓN & EXPERIENCIA" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Columna de Educación */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
            <div className="p-2 bg-cyber-violet/10 border border-cyber-violet/20 rounded-lg text-cyber-violet">
              <GraduationCap size={18} />
            </div>
            <h3 className="font-sans font-bold text-xl text-slate-100 uppercase tracking-wide">
              Educación en Programación
            </h3>
          </div>

          <div className="relative border-l border-slate-800/80 ml-4 pl-6 sm:pl-8 space-y-10">
            {education.map((item) => (
              <div key={item.title} className="relative group">
                
                {/* Nodo de la línea de tiempo */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-cyber-violet group-hover:border-cyber-emerald transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-violet group-hover:bg-cyber-emerald transition-colors duration-300" />
                </span>

                {/* Contenido */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[10px] text-cyber-violet font-semibold uppercase tracking-widest bg-cyber-violet/10 border border-cyber-violet/20 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                      <Calendar size={12} /> {item.institution}
                    </span>
                  </div>

                  <Subtitle className="text-base sm:text-lg text-slate-100 group-hover:text-cyber-violet transition-colors duration-300">
                    {item.title}
                  </Subtitle>
                  
                  <Paragraph className="text-sm font-light text-slate-400">
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Columna de Experiencia */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
            <div className="p-2 bg-cyber-emerald/10 border border-cyber-emerald/20 rounded-lg text-cyber-emerald">
              <Briefcase size={18} />
            </div>
            <h3 className="font-sans font-bold text-xl text-slate-100 uppercase tracking-wide">
              Experiencia & Prácticas
            </h3>
          </div>

          <div className="relative border-l border-slate-800/80 ml-4 pl-6 sm:pl-8 space-y-10">
            {experience.map((item) => (
              <div key={`${item.company}-${item.title}`} className="relative group">
                
                {/* Nodo de la línea de tiempo */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-cyber-emerald group-hover:border-cyber-violet transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald group-hover:bg-cyber-violet transition-colors duration-300" />
                </span>

                {/* Contenido */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[10px] text-cyber-emerald font-semibold uppercase tracking-widest bg-cyber-emerald/10 border border-cyber-emerald/20 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                      <Calendar size={12} /> {item.company}
                    </span>
                  </div>

                  <Subtitle className="text-base sm:text-lg text-slate-100 group-hover:text-cyber-emerald transition-colors duration-300">
                    {item.title}
                  </Subtitle>
                  
                  <Paragraph className="text-sm font-light text-slate-400">
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>

        

      </div>
    </Section>
  );
};

export default Resume;
