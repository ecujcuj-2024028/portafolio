import React, { useState } from 'react';
import Section from '../common/Section';
import { SectionHeader, Paragraph } from '../common/Typography';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from '../common/CustomIcons';

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const simulateFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <Section id="contact" className="pb-32">
      {/* Encabezado */}
      <SectionHeader 
        num="05" 
        title="Conexión" 
        subtitle="REDES PROFESIONALES & MENSAJERÍA" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Lado Izquierdo: Conexiones Profesionales (LinkedIn, CompuTrabajo, Mail) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-2xl text-slate-100 tracking-tight">
              ¿Hablamos de tu <span className="text-cyber-violet">próximo proyecto</span>?
            </h3>
            <Paragraph>
              Actualmente estoy abierto a ofertas de prácticas profesionales, colaboraciones independientes y puestos de desarrollador junior. Puedes encontrarme de forma directa en mis redes profesionales principales.
            </Paragraph>
          </div>

          {/* Enlaces de Redes con Diseño de Telemetría */}
          <div className="space-y-4">
            {/* LinkedIn Card */}
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block bg-slate-950/50 border border-slate-900 rounded-xl p-5 hover:border-blue-500/30 hover:bg-slate-950/80 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                    <LinkedinIcon size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-sans font-bold text-slate-100 text-sm group-hover:text-blue-400 transition-colors duration-300">
                      LinkedIn Profesional
                    </h4>
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                      Red de talento & conexiones
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 rounded">
                  Conectar
                </span>
              </div>
            </a>

            {/* Email Direct Card */}
            <div className="bg-slate-950/50 border border-slate-900 rounded-xl p-5 shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyber-emerald/10 border border-cyber-emerald/20 text-cyber-emerald rounded-lg">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                    Correo Electrónico
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="font-sans font-bold text-slate-200 text-sm hover:text-cyber-emerald transition-colors duration-300">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario Interactivo  */}
        <div className="lg:col-span-7 flex">
          <Card className="w-full border-slate-800/50 flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="font-mono text-xs font-bold text-cyber-emerald tracking-widest uppercase mb-6 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-cyber-violet" />
                // CANAL_COMUNICACION
              </h3>

              {!isSent ? (
                /* Formulario */
                <form onSubmit={simulateFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Input Nombre */}
                    <div className="space-y-1.5 text-left">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        Nombre completo
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSending}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-bg-dark border border-slate-900 focus:border-cyber-violet focus:ring-1 focus:ring-cyber-violet outline-none rounded-lg px-4 py-3 font-sans text-sm text-slate-200 transition-all duration-300"
                      />
                    </div>
                    {/* Input Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        Correo de Contacto
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSending}
                        placeholder="Ej. juan@correo.com"
                        className="w-full bg-bg-dark border border-slate-900 focus:border-cyber-violet focus:ring-1 focus:ring-cyber-violet outline-none rounded-lg px-4 py-3 font-sans text-sm text-slate-200 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      Cuerpo del Mensaje
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSending}
                      rows={4}
                      placeholder="Escribe tu propuesta o mensaje aquí..."
                      className="w-full bg-bg-dark border border-slate-900 focus:border-cyber-violet focus:ring-1 focus:ring-cyber-violet outline-none rounded-lg px-4 py-3 font-sans text-sm text-slate-200 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    className="w-full flex items-center justify-center gap-2 mt-4" 
                    disabled={isSending}
                  >
                    <Send size={14} /> 
                    {isSending ? "Transmitiendo datos..." : "Enviar Mensaje"}
                  </Button>
                </form>
              ) : (
                /* Éxito */
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-lg text-white">¡Transmisión Exitosa!</h4>
                    <Paragraph className="text-sm">
                      Tu mensaje ha sido enviado a {personalInfo.firstName}. Se pondrá en contacto a la brevedad.
                    </Paragraph>
                  </div>
                  <Button 
                    variant="secondary" 
                    onClick={() => {
                      setIsSent(false);
                    }}
                    className="!px-4 !py-2 text-xs"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              )}
            </div>


          </Card>
        </div>

      </div>
    </Section>
  );
};

export default Contact;
