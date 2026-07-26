import React from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { portfolioData } from '../../data/portfolioData';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, GmailIcon } from '../common/CustomIcons';

const Contact = () => {
  const { personalInfo } = portfolioData;

  const contactLinks = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Mensaje Directo',
      description: 'Escríbeme directamente por WhatsApp para consultas rápidas o iniciar una conversación.',
      url: personalInfo.whatsapp || 'https://wa.me/50233381140',
      icon: WhatsappIcon,
      actionText: 'Chat en WhatsApp',
      badge: 'Mensajería',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
      bgColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      btnBg: 'bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white',
    },
    {
      id: 'gmail',
      title: 'Gmail',
      subtitle: 'Correo Electrónico',
      description: 'Envíame un correo directo a edvincuej9@gmail.com para propuestas laborales o colaboraciones.',
      url: `mailto:${personalInfo.email}`,
      icon: GmailIcon,
      actionText: 'Enviar Correo',
      badge: 'Correo Directo',
      borderColor: 'border-rose-500/30 hover:border-rose-400',
      bgColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      btnBg: 'bg-rose-600/20 text-rose-300 hover:bg-rose-600 hover:text-white',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Perfil Profesional',
      description: 'Conecta conmigo profesionalmente y explora mi trayectoria laboral en LinkedIn.',
      url: personalInfo.linkedin,
      icon: LinkedinIcon,
      actionText: 'Visitar LinkedIn',
      badge: 'Red Profesional',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      bgColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      btnBg: 'bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white',
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Repositorios de Código',
      description: 'Explora mi código fuente, proyectos personales y contribuciones en GitHub.',
      url: personalInfo.github,
      icon: GithubIcon,
      actionText: 'Ver GitHub',
      badge: 'Código Fuente',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      bgColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      btnBg: 'bg-purple-600/20 text-purple-300 hover:bg-purple-600 hover:text-white',
    },
    {
      id: 'cv',
      title: 'Currículum Vitae (CV)',
      subtitle: 'Documento PDF',
      description: 'Descarga una copia de mi CV completo con mis habilidades y trayectoria detallada.',
      url: personalInfo.cv || '/CV.pdf',
      icon: FileText,
      actionText: 'Descargar CV',
      download: true,
      badge: 'Hoja de Vida',
      borderColor: 'border-cyber-emerald/30 hover:border-cyber-emerald',
      bgColor: 'bg-cyber-emerald/10 text-cyber-emerald border-cyber-emerald/20',
      btnBg: 'bg-cyber-emerald/20 text-cyber-emerald hover:bg-cyber-emerald hover:text-black',
    },
  ];

  return (
    <Section id="contact" className="pb-32">
      {/* Encabezado */}
      <SectionHeader 
        num="05" 
        title="Conexión & Enlaces" 
        subtitle="REDES PROFESIONALES & CURRÍCULUM" 
      />

      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            ¿Quieres <span className="text-cyber-emerald">conectar</span> o conocer más sobre mí?
          </h3>
          <Paragraph className="text-slate-400 text-sm sm:text-base">
            Puedes encontrarme de forma directa en mis canales de contacto, redes profesionales o revisar mi Currículum Vitae.
          </Paragraph>
        </div>

        {/* Tarjetas de Contacto y Conexiones (Diseño de Triángulo Invertido: 3 arriba, 2 abajo centradas) */}
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                download={item.download ? true : undefined}
                className={`group relative flex flex-col justify-between p-6 bg-slate-950/60 border ${item.borderColor} rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] max-w-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-xl border ${item.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-xl text-slate-100 group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[11px] text-slate-400 block mb-3 font-medium">
                    {item.subtitle}
                  </span>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${item.btnBg}`}>
                  <span>{item.actionText}</span>
                  {item.download ? <Download size={14} /> : <ExternalLink size={14} />}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;

