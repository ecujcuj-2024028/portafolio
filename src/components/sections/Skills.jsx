import React, { useState } from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { Card } from '../common/Card';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, CheckCircle2, Gamepad2, Zap, Trophy, Shield } from 'lucide-react';

const getLevelInfo = (level) => {
  switch (level) {
    case 'Experto':
      return {
        label: 'LVL MAX • EXPERTO',
        shortLabel: 'EXPERTO',
        blocks: 4,
        colorText: 'text-amber-400',
        badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
        barGradient: 'from-amber-500 via-emerald-400 to-emerald-300',
        shadowColor: 'shadow-amber-500/20',
      };
    case 'Alto':
      return {
        label: 'LVL 3 • ALTO',
        shortLabel: 'ALTO',
        blocks: 3,
        colorText: 'text-cyber-emerald',
        badgeBg: 'bg-cyber-emerald/10 border-cyber-emerald/30 text-cyber-emerald',
        barGradient: 'from-cyber-emerald to-teal-400',
        shadowColor: 'shadow-cyber-emerald/20',
      };
    case 'Medio':
      return {
        label: 'LVL 2 • MEDIO',
        shortLabel: 'MEDIO',
        blocks: 2,
        colorText: 'text-cyber-violet',
        badgeBg: 'bg-cyber-violet/10 border-cyber-violet/30 text-cyber-violet',
        barGradient: 'from-cyber-violet to-purple-400',
        shadowColor: 'shadow-cyber-violet/20',
      };
    case 'Bajo':
    default:
      return {
        label: 'LVL 1 • BAJO',
        shortLabel: 'BAJO',
        blocks: 1,
        colorText: 'text-sky-400',
        badgeBg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
        barGradient: 'from-sky-500 to-blue-400',
        shadowColor: 'shadow-sky-500/20',
      };
  }
};

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

  const currentLevelInfo = getLevelInfo(selectedSkill.level || 'Medio');

  return (
    <Section id="skills">
      {/* Encabezado */}
      <SectionHeader
        num="02"
        title="Habilidades & Nivel Gamer"
        subtitle="MATRIZ DE PROGRESO & STATS DE DOMINIO"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

        {/* Lado Izquierdo: Matriz de Tecnologías */}
        <div className="lg:col-span-7 flex flex-col space-y-6">

          {/* Controles de Categoría (Pestañas) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/65 border border-slate-900 rounded-lg w-fit">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeCategory === 'all' ? 'bg-cyber-violet/25 text-slate-100 border border-cyber-violet/40 shadow-sm' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeCategory === cat.id ? 'bg-cyber-violet/25 text-slate-100 border border-cyber-violet/40 shadow-sm' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Grilla de habilidades filtradas (Sleek Gamer Badges Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {getFilteredSkills().map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              const skillLevel = getLevelInfo(skill.level || 'Medio');

              return (
                <button
                  type="button"
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`bg-slate-950/45 border rounded-xl p-4 cursor-pointer transition-all duration-300 select-none flex flex-col justify-between items-center text-center relative overflow-hidden group min-h-[105px] ${isSelected ? 'border-cyber-emerald bg-slate-950/90 shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02]' : 'border-slate-900/60 hover:border-slate-800/80 hover:bg-slate-950/60 hover:scale-[1.01]'}`}
                >
                  {/* Pequeña línea superior de acento al seleccionar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-emerald" />
                  )}

                  {/* Badge de Nivel Gamer superior */}
                  <div className="w-full flex justify-between items-center mb-1">
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${skillLevel.badgeBg}`}>
                      {skill.level || 'MEDIO'}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500 font-semibold">
                      {skill.progress || 70}%
                    </span>
                  </div>

                  <span className={`font-sans font-bold text-sm sm:text-base my-1 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {skill.name}
                  </span>

                  {/* Segmentos de Nivel RPG (4 bloques) */}
                  <div className="w-full flex items-center justify-center gap-1 mt-2">
                    {[1, 2, 3, 4].map((blockNum) => (
                      <span
                        key={blockNum}
                        className={`h-1.5 flex-1 rounded-sm transition-all duration-300 ${
                          blockNum <= skillLevel.blocks
                            ? `${skillLevel.colorText.replace('text-', 'bg-')} opacity-90 shadow-sm`
                            : 'bg-slate-900 border border-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lado Derecho: Monitor HUD Gamer de Habilidad Seleccionada */}
        <div className="lg:col-span-5 flex">
          <Card className="w-full border-slate-800/50 flex flex-col justify-between relative overflow-hidden">
            {/* Orbe decorativo de fondo */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyber-violet/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Encabezado del monitor HUD */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                <div className="flex items-center gap-2">
                  <Gamepad2 size={16} className="text-cyber-violet animate-pulse" />
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    HUD // TELEMETRÍA GAMER
                  </span>
                </div>
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${currentLevelInfo.badgeBg}`}>
                  {currentLevelInfo.label}
                </span>
              </div>

              {/* Nombre de la Habilidad y barra de estado */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                  Tecnología Seleccionada
                </span>
                <h3 className="font-sans font-black text-3xl text-white tracking-tight flex items-center gap-2">
                  {selectedSkill.name}
                </h3>
              </div>

              {/* Barra de Progreso XP RPG / Gaming HUD */}
              <div className="bg-slate-950/80 border border-slate-900 rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5">
                    <Zap size={12} className={currentLevelInfo.colorText} /> PROGRESO DE DOMINIO (XP)
                  </span>
                  <span className={`font-bold ${currentLevelInfo.colorText}`}>
                    {selectedSkill.progress || 70} / 100 XP ({selectedSkill.progress || 70}%)
                  </span>
                </div>

                {/* Barra de carga animada */}
                <div className="w-full h-3 bg-bg-dark border border-slate-900 rounded-full overflow-hidden p-0.5 relative">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${currentLevelInfo.barGradient} transition-all duration-700 ease-out shadow-lg`}
                    style={{ width: `${selectedSkill.progress || 70}%` }}
                  />
                </div>

                {/* Marcas de verificación de nivel abajo de la barra */}
                <div className="flex justify-between font-mono text-[8px] text-slate-600 uppercase tracking-widest pt-0.5">
                  <span>[0% BAJO]</span>
                  <span>[50% MEDIO]</span>
                  <span>[75% ALTO]</span>
                  <span>[100% EXPERTO]</span>
                </div>
              </div>

              {/* Especificaciones de diagnóstico Gamer */}
              <div className="space-y-4">
                <div className="bg-bg-dark/70 border border-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 space-y-2.5">
                  <p className="flex justify-between border-b border-slate-900 pb-1.5 text-[10px]">
                    <span className="text-slate-500">ATRIBUTO</span>
                    <span className="text-slate-500">VALOR GAMER</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Nivel de Rango:</span>
                    <span className={`font-bold ${currentLevelInfo.colorText}`}>
                      {selectedSkill.level || 'Medio'}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Puntos de XP:</span>
                    <span className="text-slate-200 font-semibold">
                      {selectedSkill.progress || 70} / 100 PTS
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Categoría de Skill:</span>
                    <span className="text-cyber-violet font-semibold">
                      {getSkillCategoryTitle(selectedSkill.name)}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Estado en Proyectos:</span>
                    <span className="text-cyber-emerald font-semibold flex items-center gap-1">
                      Integrado Activo
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

