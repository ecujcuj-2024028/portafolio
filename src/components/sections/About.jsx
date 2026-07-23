import React from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { Card } from '../common/Card';
import { portfolioData } from '../../data/portfolioData';
import { User, Mail, MapPin, Calendar, Award, BookOpen, ChevronRight } from 'lucide-react';

const GOALS = [
  "Diseñar interfaces no convencionales que sorprendan al usuario.",
  "Crear un Backend robusto y escalable.",
  "Colaborar en proyectos tecnológicos innovadores.",
];

const About = () => {
  const { personalInfo } = portfolioData;

  // Estructura de datos generales con iconos correspondientes
  const generalSpecs = [
    { label: "Nombre", value: personalInfo.name, icon: User },
    { label: "Correo", value: personalInfo.email, icon: Mail },
    { label: "Ubicación", value: personalInfo.location, icon: MapPin },
    { label: "Experiencia", value: personalInfo.yearsCoding, icon: Award },
    { label: "Formación", value: personalInfo.currentFocus, icon: BookOpen },
    { label: "Contacto", value: personalInfo.phone, icon: Calendar },
  ];

  return (
    <Section id="about">
      {/* Encabezado de Sección */}
      <SectionHeader
        num="01"
        title="Sobre Mí"
        subtitle="IDENTIDAD & ESPECIFICACIONES"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

        {/* Subsección A: Descripción, Metas e Inspiración (Lado Izquierdo) */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl text-slate-100 tracking-tight">
              ¿Quién es <span className="text-cyber-emerald">{personalInfo.firstName}</span>?
            </h3>

            <Paragraph>
              {personalInfo.detailedBio}
            </Paragraph>

            <Paragraph>
              Mi propósito principal en cada proyecto es ir más allá de lo usual, buscando soluciones que no solo cumplan con los requisitos, sino que también sorprendan y deleiten al usuario final.
            </Paragraph>
          </div>

          {/* Metas y Aspiraciones */}
          <div className="bg-slate-950/45 border border-slate-900/60 rounded-xl p-6 mt-6">
            <h4 className="font-mono text-xs font-bold text-cyber-violet tracking-widest uppercase mb-4">
              // METAS Y ASPIRACIONES
            </h4>
            <ul className="space-y-3.5">
              {GOALS.map((goal) => (
                <li key={goal} className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-emerald" />
                  <span className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subsección B: Panel de Especificaciones / Datos Generales (Lado Derecho) */}
        <div className="lg:col-span-6 flex">
          <Card className="w-full flex flex-col justify-between border-slate-800/50">
            <div>
              <h3 className="font-mono text-xs font-bold text-cyber-emerald tracking-widest uppercase mb-6">
                // DATOS GENERALES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {generalSpecs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={spec.label}
                      className="bg-bg-dark/65 border border-slate-900/80 rounded-lg p-4 flex flex-col gap-2.5 transition-colors duration-300 hover:border-cyber-violet/20 hover:bg-bg-dark/90 group"
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-cyber-violet group-hover:text-cyber-emerald transition-colors duration-300" />
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                          {spec.label}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-slate-200 font-semibold group-hover:text-white transition-colors duration-300">
                        {spec.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banner de Contacto directo */}
            <div className="mt-8 border-t border-slate-900/80 pt-6 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-slate-500 uppercase">Estado Actual</span>
                <span className="font-sans text-xs text-slate-300 font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
                  {personalInfo.status}
                </span>
              </div>
              <a
                href={personalInfo.cv || '/CV.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="font-mono text-xs text-cyber-violet hover:text-cyber-emerald flex items-center gap-1 uppercase tracking-wider transition-colors duration-300"
              >
                Descargar CV Completo
                <ChevronRight size={14} />
              </a>
            </div>

          </Card>
        </div>

      </div>
    </Section>
  );
};

export default About;
