import React, { useState } from 'react';
import Section from '../common/Section';
import { SectionHeader, Subtitle, Paragraph } from '../common/Typography';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { portfolioData } from '../../data/portfolioData';
import { Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/CustomIcons';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [viewMode, setViewMode] = useState('web'); // 'web' o 'mobile'

  const activeProject = projects[activeProjectIdx];

  const openPreview = (imageUrl) => setPreviewImage(imageUrl);
  const closePreview = () => setPreviewImage(null);

  return (
    <Section id="projects" fullWidth={false}>
      {/* Encabezado */}
      <SectionHeader
        num="04"
        title="Proyectos"
        subtitle="PORTAFOLIO DE APLICACIONES & VISTAS"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">

        {/* Lado Izquierdo: Lista de Proyectos (Selector) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex flex-col gap-3">
            {projects.map((project, idx) => {
              const isSelected = activeProjectIdx === idx;

              return (
                <button
                  type="button"
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIdx(idx);
                    setViewMode('web');
                  }}
                  className={`border rounded-xl p-5 cursor-pointer text-left transition-all duration-300 select-none ${isSelected ? 'border-cyber-violet bg-cyber-violet/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] scale-[1.01]' : 'border-slate-900/60 bg-slate-950/30 hover:border-slate-800/80 hover:bg-slate-950/60'}`}
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    <Sparkles size={10} className={isSelected ? 'text-cyber-violet' : 'text-slate-600'} />
                    Proyecto {idx + 1}
                  </div>
                  <h4 className={`font-sans font-bold text-base transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 font-light mt-1.5 line-clamp-2">
                    {project.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-950/45 border border-slate-900/60 rounded-xl p-5">
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block mb-2">Instrucciones del Deck</span>
            <Paragraph className="text-xs">
              Haz clic en cualquiera de los proyectos para cargar su información y visualizar las capturas de pantalla de la interfaz.
            </Paragraph>
          </div>
        </div>

        {/* Lado Derecho: Proyecto Interactivo*/}
        <div className="lg:col-span-8">
          <div className="bg-slate-950/80 border border-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col">

            {/* Cabecera del Proyecto */}
            <div className="bg-slate-900 border-b border-slate-900/80 px-4 py-3 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-emerald" />
                <h3 className="font-sans font-bold text-sm text-slate-100 uppercase tracking-wide">
                  Proyecto: {activeProject.title}
                </h3>
              </div>

              {/* Selector de Vista: Web / Móvil */}
              <div className="flex gap-1.5 bg-bg-dark/80 p-1 border border-slate-800/80 rounded-md">
                <button
                  type="button"
                  onClick={() => setViewMode('web')}
                  className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${viewMode === 'web' ? 'bg-cyber-violet/20 text-slate-100 border border-cyber-violet/30' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
                >
                  Web
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('mobile')}
                  className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${viewMode === 'mobile' ? 'bg-cyber-violet/20 text-slate-100 border border-cyber-violet/30' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
                >
                  Móvil
                </button>
              </div>
            </div>

            {/* Contenido del Visor */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-6">

                {viewMode === 'web' ? (
                  /* VISTA WEB */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Imagen 1 */}
                    <button
                      type="button"
                      className="mockup-browser border border-slate-800 bg-slate-950/40 w-full cursor-zoom-in group transition-colors duration-300 hover:border-slate-700/80 text-left"
                      onClick={() => openPreview(activeProject.images.ui1)}
                    >
                      <div className="mockup-browser-toolbar">
                        <div className="input border border-slate-800/80 bg-slate-900 text-slate-400 font-mono text-[10px] select-none">
                          {activeProject.demoUrl || "vista1.local"}
                        </div>
                      </div>
                      <div className="aspect-video relative overflow-hidden bg-slate-950 border-t border-slate-800">
                        <img
                          src={activeProject.images.ui1}
                          alt={`Captura 1 de ${activeProject.title}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                      </div>
                    </button>

                    {/* Imagen 2 */}
                    <button
                      type="button"
                      className="mockup-browser border border-slate-800 bg-slate-950/40 w-full cursor-zoom-in group transition-colors duration-300 hover:border-slate-700/80 text-left"
                      onClick={() => openPreview(activeProject.images.ui2)}
                    >
                      <div className="mockup-browser-toolbar">
                        <div className="input border border-slate-800/80 bg-slate-900 text-slate-400 font-mono text-[10px] select-none">
                          {activeProject.demoUrl || "vista2.local"}
                        </div>
                      </div>
                      <div className="aspect-video relative overflow-hidden bg-slate-950 border-t border-slate-800">
                        <img
                          src={activeProject.images.ui2}
                          alt={`Captura 2 de ${activeProject.title}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                      </div>
                    </button>
                  </div>
                ) : (
                  /* VISTA MÓVIL (Imagen 3 en Mockup Vertical) */
                  <div className="flex justify-center items-center py-2">
                    <button
                      type="button"
                      className="mockup-phone border-slate-900 shadow-2xl max-w-[220px] w-full cursor-zoom-in group shrink-0 !rounded-3xl text-left bg-transparent p-0 border-0"
                      onClick={() => openPreview(activeProject.images.ui3)}
                    >
                      <div className="mockup-phone-camera"></div>
                      <div className="mockup-phone-display bg-slate-950 !rounded-[20px]">
                        <div className="relative aspect-[9/19] w-full overflow-hidden">
                          {activeProject.images.ui3 ? (
                            <img
                              src={activeProject.images.ui3}
                              alt={`Captura Móvil de ${activeProject.title}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col justify-center items-center text-slate-600 font-mono text-[9px] px-4 text-center">
                              <span>[ ui3.png ]</span>
                              <span className="mt-2 text-slate-700">Sin vista móvil</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                )}

                {/* Detalles textuales */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] text-cyber-emerald uppercase tracking-widest font-bold">
                    // Descripción del Proyecto
                  </h4>
                  <Paragraph className="text-sm text-slate-300 font-light leading-relaxed">
                    {activeProject.description}
                  </Paragraph>
                </div>
              </div>

              {/* Sección Común Inferior del Visor: Habilidades Aprendidas & Enlaces */}
              <div className="border-t border-slate-900 pt-6 flex flex-wrap justify-between items-center gap-6">

                {/* Habilidades aprendidas */}
                <div className="space-y-2 max-w-md text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <BookOpen size={10} /> Habilidades Aprendidas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] text-slate-300 bg-bg-dark border border-slate-900 rounded px-2.5 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enlaces de Acción */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    href={activeProject.repoUrl}
                    className="flex items-center gap-1.5 !px-4 !py-2.5"
                  >
                    <GithubIcon size={14} /> Repository
                  </Button>
                </div>
                {/* Enlaces de Proyecto solo si estan desplegados */}
                {activeProject.displayed && (
                  <div className="flex items-center gap-3">
                    <Button
                      variant="secondary"
                      href={activeProject.demoUrl}
                      className="flex items-center gap-1.5 !px-4 !py-2.5"
                    >
                      <ExternalLink size={14} /> Demo
                    </Button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>

      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4" onClick={closePreview} role="presentation">
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={previewImage}
              alt={`Vista amplia de ${activeProject.title}`}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            />
            <button
              type="button"
              className="absolute top-3 right-3 rounded-full bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-slate-800"
              onClick={closePreview}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
