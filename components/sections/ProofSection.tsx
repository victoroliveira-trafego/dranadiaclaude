"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CREDENTIALS } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

// Cor + ícone por credencial
const CREDENTIAL_STYLES: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  usp: {
    bg: "#FFF8E1", text: "#92700A", border: "#FCB900",
    icon: <GradCapIcon />,
  },
  experience: {
    bg: "#ccf7f4", text: "#0e7a75", border: "#4ecdc4",
    icon: <CalendarIcon />,
  },
  professor: {
    bg: "#ede9fe", text: "#6d28d9", border: "#8b5cf6",
    icon: <TeacherIcon />,
  },
  laser: {
    bg: "#CCFAEC", text: "#065f46", border: "#00D084",
    icon: <LightningIcon />,
  },
  sedation: {
    bg: "#FFE0CC", text: "#9a3412", border: "#FF6900",
    icon: <HeartPlusIcon />,
  },
};

const STATS = [
  { value: "+20", label: "anos de experiência", color: "#4ecdc4" },
  { value: "USP", label: "Mestrado em Odontopediatria", color: "#8b5cf6" },
  { value: "100%", label: "atendimento humanizado", color: "#FCB900" },
];

export default function ProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const show = !reduceMotion && inView;

  return (
    <section id="prova" className="relative bg-white overflow-hidden">
      {/* Wave topo — continuidade do Hero */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#FFF8E1" fillOpacity="0.6" />
        </svg>
      </div>

      <div ref={ref} className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Esquerda: Foto ── */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={reduceMotion ? {} : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="relative">
              {/* Decoração fundo — quadrado rotacionado */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #4ecdc4 100%)", opacity: 0.18 }}
                animate={reduceMotion ? {} : { rotate: [3, 5, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-dashed opacity-30"
                style={{ borderColor: "#FCB900" }}
                animate={reduceMotion ? {} : { rotate: [-2, -4, -2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Foto */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] rounded-3xl overflow-hidden shadow-strong z-10">
                <Image
                  src="/images/nadia-rosa.png"
                  alt="Dra. Nadia Salem — Odontopediatra especialista"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, 320px"
                />
                {/* Overlay gradiente sutil na base */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

            </div>
          </motion.div>

          {/* ── Direita: Credenciais ── */}
          <div className="flex flex-col gap-6">
            {/* Título */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#8b5cf6" }}>
                Formação & Experiência
              </span>
              <h2 className="section-title text-balance">
                Uma carreira dedicada ao sorriso das crianças.
              </h2>
              <p className="section-subtitle mt-3 max-w-md">
                Formação de alto nível, prática clínica contínua e atualização constante — tudo para oferecer o que há de melhor em odontopediatria.
              </p>
            </motion.div>

            {/* Pills de credencial — stagger */}
            <div className="flex flex-col gap-3">
              {CREDENTIALS.map((cred, i) => {
                const style = CREDENTIAL_STYLES[cred.id];
                return (
                  <motion.div
                    key={cred.id}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border transition-shadow duration-200 hover:shadow-card"
                    style={{ backgroundColor: style.bg, borderColor: style.border }}
                    initial={reduceMotion ? {} : { opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE_OUT }}
                    whileHover={reduceMotion ? {} : { scale: 1.015, x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: style.border + "33" }}>
                      <span style={{ color: style.border }} className="w-5 h-5 flex items-center justify-center">
                        {style.icon}
                      </span>
                    </div>
                    <p className="font-semibold text-sm" style={{ color: style.text }}>
                      {cred.label}
                    </p>
                    <CheckCircleIcon className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: style.border }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center px-4 py-6 rounded-3xl bg-brand-gray"
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.65 + i * 0.07, ease: EASE_OUT }}
              whileHover={reduceMotion ? {} : { scale: 1.03, y: -2 }}
            >
              <span className="text-3xl font-extrabold leading-none mb-2" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="text-xs font-medium text-brand-muted leading-snug text-balance">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wave base */}
      <div className="w-full overflow-hidden leading-none mt-8" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z" fill="#f0fffe" />
        </svg>
      </div>
    </section>
  );
}

// ── SVG Icons inline ─────────────────────────────────────────────────────────

function GradCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
  );
}

function TeacherIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </svg>
  );
}

function HeartPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function CheckCircleIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function StarFillIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
