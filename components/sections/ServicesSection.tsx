"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SERVICES, SERVICES_TITLE, SERVICES_SUBTITLE, WHATSAPP_URL } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CARD_COLORS = [
  { bg: "#FFF8E1", border: "#FCB900", accent: "#92700A" },
  { bg: "#ccf7f4", border: "#4ecdc4", accent: "#0e7a75" },
  { bg: "#ede9fe", border: "#8b5cf6", accent: "#6d28d9" },
  { bg: "#CCFAEC", border: "#00D084", accent: "#065f46" },
  { bg: "#FFE0CC", border: "#FF6900", accent: "#9a3412" },
  { bg: "#ccf7f4", border: "#4ecdc4", accent: "#0e7a75" },
  { bg: "#FFF8E1", border: "#FCB900", accent: "#92700A" },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="servicos" className="relative bg-brand-gray overflow-hidden">
      {/* Wave topo */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
      </div>

      <div ref={ref} className="section-padding container-max relative">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#4ecdc4" }}>
            O que oferecemos
          </span>
          <h2 className="section-title text-balance max-w-2xl mx-auto">
            {SERVICES_TITLE}
          </h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            {SERVICES_SUBTITLE}
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const color = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <motion.div
                key={service.id}
                className="relative flex flex-col gap-3 p-6 rounded-3xl border-2 bg-white
                           shadow-soft transition-shadow duration-200 hover:shadow-card group"
                style={{ borderColor: color.border }}
                initial={reduceMotion ? {} : { opacity: 0, y: 24, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
                whileHover={reduceMotion ? {} : { y: -4 }}
              >
                {/* Ícone */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: color.bg }}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Título */}
                <h3 className="text-base font-bold text-brand-text leading-snug">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-brand-muted leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Linha de cor na base */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0
                             group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: color.border }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65, ease: EASE_OUT }}
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-bold text-base text-white
                       px-8 py-4 rounded-full shadow-card transition-opacity duration-150 hover:opacity-90"
            style={{ backgroundColor: "#4ecdc4" }}
            whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
          >
            <WhatsAppIcon />
            Agendar consulta pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Wave base */}
      <div className="w-full overflow-hidden leading-none mt-8" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
