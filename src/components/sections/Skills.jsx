import React, { useState } from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { Card } from '../common/Card';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, CheckCircle2, Shield } from 'lucide-react';

const Skills = () => {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(categories[0].items[0]);

  // Obtener todas las habilidades en caso de seleccionar 'all'
  const getAllSkills = () => {
    return categories.flatMap(cat => cat.items);
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills();
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.items : [];
  };

  // Encontrar el título de la categoría a la que pertenece la habilidad
  const getSkillCategoryTitle = (skillName) => {
    const category = categories.find(cat => cat.items.some(item => item.name === skillName));
    return category ? category.title : "Tecnología";
  };

  return (
    <Section id="skills">
      {/* Encabezado */}
      <SectionHeader
        num="02"
        title="Habilidades"
        subtitle="MATRIZ DE TECNOLOGÍAS INTEGRADAS"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

        {/* Lado Izquierdo: Matriz de Tecnologías */}
        <div className="lg:col-span-7 flex flex-col space-y-6">

          {/* Controles de Categoría (Pestañas) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/65 border border-slate-900 rounded-lg w-fit">
            <button
              onClick={() => setActiveCategory('all')}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeCategory === 'all' ? 'bg-cyber-violet/25 text-slate-100 border border-cyber-violet/40 shadow-sm' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeCategory === cat.id ? 'bg-cyber-violet/25 text-slate-100 border border-cyber-violet/40 shadow-sm' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Grilla de habilidades filtradas (Sleek Tech Badges Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {getFilteredSkills().map((skill, index) => {
              const isSelected = selectedSkill.name === skill.name;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(skill)}
                  className={`bg-slate-950/45 border rounded-xl p-4 cursor-pointer transition-all duration-300 select-none flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[90px] ${isSelected ? 'border-cyber-emerald bg-slate-950/90 shadow-[0_0_20px_rgba(16,185,129,0.12)] scale-[1.02]' : 'border-slate-900/60 hover:border-slate-800/80 hover:bg-slate-950/60 hover:scale-[1.01]'}`}
                >
                  {/* Pequeña línea superior de acento al seleccionar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-emerald" />
                  )}

                  <span className={`font-sans font-bold text-sm sm:text-base transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {skill.name}
                  </span>

                  <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest mt-2 block">
                    {isSelected ? "[ Seleccionado ]" : "[ Ver Info ]"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lado Derecho: Monitor de Habilidad Seleccionada (Estilo Diagnóstico) */}
        <div className="lg:col-span-5 flex">
          <Card className="w-full border-slate-800/50 flex flex-col justify-between relative overflow-hidden">
            {/* Orbe decorativo de fondo */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyber-violet/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Encabezado del monitor */}
              <div className="flex items-center gap-2 border-b border-slate-900 pb-4">
                <Terminal size={14} className="text-cyber-violet" />
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  SISTEMA
                </span>
              </div>

              {/* Nombre de la Habilidad y barra de estado */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                  Tecnología Activa
                </span>
                <h3 className="font-sans font-black text-3xl text-white tracking-tight">
                  {selectedSkill.name}
                </h3>
              </div>

              {/* Especificaciones de diagnóstico */}
              <div className="space-y-4">
                <div className="bg-bg-dark/70 border border-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 space-y-2.5">
                  <p className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-500">ESPECIFICACIÓN</span>
                    <span className="text-slate-500">DETALLE</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Estado en Proyectos:</span>
                    <span className="text-cyber-emerald font-semibold flex items-center gap-1">
                      Integrado
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Categoría:</span>
                    <span className="text-cyber-violet font-semibold">
                      {getSkillCategoryTitle(selectedSkill.name)}
                    </span>
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    // Módulos & Capacidades del Core:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-center gap-2.5 text-slate-300 font-sans text-sm font-light">
                      <CheckCircle2 size={14} className="text-cyber-emerald shrink-0" />
                      Estructuración y buenas prácticas.
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-300 font-sans text-sm font-light">
                      <CheckCircle2 size={14} className="text-cyber-emerald shrink-0" />
                      Integración en proyectos funcionales.
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-300 font-sans text-sm font-light">
                      <CheckCircle2 size={14} className="text-cyber-emerald shrink-0" />
                      Optimización y legibilidad de código.
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </Card>
        </div>

      </div>
    </Section>
  );
};

export default Skills;
