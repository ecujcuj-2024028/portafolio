import { useState } from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { Sparkles, BookOpen, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../common/CustomIcons';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const activeProject = projects[activeProjectIdx];

  // Obtener todas las imágenes válidas para el proyecto actual
  const slides = [];
  if (activeProject.images?.ui1) {
    slides.push({ id: 'ui1', type: 'web', url: activeProject.images.ui1, label: 'Vista Principal' });
  }
  if (activeProject.images?.ui2) {
    slides.push({ id: 'ui2', type: 'web', url: activeProject.images.ui2, label: 'Vista Secundaria' });
  }
  if (activeProject.images?.ui3) {
    slides.push({ id: 'ui3', type: 'mobile', url: activeProject.images.ui3, label: 'Vista Móvil' });
  }

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
                    setCurrentSlideIdx(0);
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

              {/* Selector de Vista: Pestañas de diapositivas */}
              {slides.length > 1 && (
                <div className="flex gap-1.5 bg-bg-dark/80 p-1 border border-slate-800/80 rounded-md">
                  {slides.map((slide, sIdx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlideIdx(sIdx)}
                      className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${currentSlideIdx === sIdx ? 'bg-cyber-violet/20 text-slate-100 border border-cyber-violet/30' : 'text-slate-400 hover:text-slate-200 border border-transparent'}`}
                    >
                      {slide.id === 'ui1' ? 'Web 1' : slide.id === 'ui2' ? 'Web 2' : 'Móvil'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contenido del Visor */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-6">

                {/* Carrusel de Diapositivas */}
                <div className="relative w-full border border-slate-900 bg-slate-950/20 rounded-xl p-4 md:p-6 flex flex-col items-center">
                  <div className="relative w-full flex items-center justify-center h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden">
                    {slides.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                        <div className="w-12 h-12 rounded-full bg-cyber-violet/10 border border-cyber-violet/30 flex items-center justify-center text-cyber-violet">
                          <Sparkles size={22} className="animate-pulse" />
                        </div>
                        <span className="font-mono text-sm text-slate-300 font-medium">Capturas de pantalla próximamente</span>
                        <span className="font-mono text-xs text-slate-500 max-w-sm">Próximamente se integrarán las capturas y vistas de la interfaz para este proyecto.</span>
                      </div>
                    ) : (
                      slides.map((slide, sIdx) => {
                        const isActive = currentSlideIdx === sIdx;
                        return (
                          <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 scale-100 pointer-events-auto z-10' : 'opacity-0 scale-95 pointer-events-none z-0'}`}
                          >
                            {slide.type === 'web' ? (
                              /* VISTA WEB */
                              <button
                                type="button"
                                className="mockup-browser border border-slate-800 bg-slate-950/40 w-full cursor-zoom-in group transition-colors duration-300 hover:border-slate-700/80 text-left max-w-2xl"
                                onClick={() => openPreview(slide.url)}
                              >
                                <div className="mockup-browser-toolbar">
                                  <div className="input border border-slate-800/80 bg-slate-900 text-slate-400 font-mono text-[10px] select-none">
                                    {activeProject.demoUrl || "vista.local"}
                                  </div>
                                </div>
                                <div className="aspect-video relative overflow-hidden bg-slate-950 border-t border-slate-800">
                                  <img
                                    src={slide.url}
                                    alt={`${slide.label} de ${activeProject.title}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                                  />
                                </div>
                              </button>
                            ) : (
                              /* VISTA MÓVIL */
                              <div className="flex justify-center items-center py-2 h-full max-h-full">
                                <button
                                  type="button"
                                  className="mockup-phone border-slate-900 shadow-2xl max-w-[200px] sm:max-w-[220px] w-full cursor-zoom-in group shrink-0 !rounded-3xl text-left bg-transparent p-0 border-0"
                                  onClick={() => openPreview(slide.url)}
                                >
                                  <div className="mockup-phone-camera"></div>
                                  <div className="mockup-phone-display bg-slate-950 !rounded-[20px]">
                                    <div className="relative aspect-[9/19] w-full overflow-hidden">
                                      <img
                                        src={slide.url}
                                        alt={`${slide.label} de ${activeProject.title}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                                      />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}

                    {/* Flechas de Navegación */}
                    {slides.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setCurrentSlideIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                          className="absolute left-2 z-20 p-2 rounded-full border border-slate-800 bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 transition duration-300 hover:scale-110 active:scale-95 shadow-lg group cursor-pointer"
                          aria-label="Diapositiva anterior"
                        >
                          <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentSlideIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                          className="absolute right-2 z-20 p-2 rounded-full border border-slate-800 bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 transition duration-300 hover:scale-110 active:scale-95 shadow-lg group cursor-pointer"
                          aria-label="Diapositiva siguiente"
                        >
                          <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Indicadores de Puntos (Dots) */}
                  {slides.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4 z-20">
                      {slides.map((_, sIdx) => {
                        const isActive = currentSlideIdx === sIdx;
                        return (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => setCurrentSlideIdx(sIdx)}
                            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${isActive ? 'w-6 bg-cyber-violet' : 'w-2 bg-slate-800 hover:bg-slate-700'}`}
                            aria-label={`Ir a la diapositiva ${sIdx + 1}`}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

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
