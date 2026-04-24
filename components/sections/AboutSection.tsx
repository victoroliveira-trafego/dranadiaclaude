"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ABOUT, FORMATION, DIFFERENTIALS } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const DIFFERENTIAL_STYLES: { bg: string; text: string; border: string }[] = [
  { bg: "#FFF8E1", text: "#92700A", border: "#FCB900" },
  { bg: "#ccf7f4", text: "#0e7a75", border: "#4ecdc4" },
  { bg: "#ede9fe", text: "#6d28d9", border: "#8b5cf6" },
  { bg: "#CCFAEC", text: "#065f46", border: "#00D084" },
  { bg: "#FFE0CC", text: "#9a3412", border: "#FF6900" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [formationOpen, setFormationOpen] = useState(false);

  return (
    <section id="sobre" className="relative bg-white overflow-hidden">
      {/* Wave topo */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#f0fffe" />
        </svg>
      </div>

      {/* Blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 -left-16 w-56 h-56 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FCB900 0%, transparent 70%)" }} />
      </div>

      <div ref={ref} className="section-padding container-max relative">

        {/* ── Topo: Header centrado ── */}
        <motion.div
          className="text-center mb-14"
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#4ecdc4" }}>
            Sobre a Dra. Nadia
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            {ABOUT.title}{" "}
            <span style={{ color: "#4ecdc4" }}>{ABOUT.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            {ABOUT.subtitle}
          </p>
        </motion.div>

        {/* ── Grid principal ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Esquerda: Foto + Formação ── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={reduceMotion ? {} : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {/* Foto */}
            <div className="relative flex justify-center">
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #4ecdc4 100%)" }}
                animate={reduceMotion ? {} : { rotate: [2, 4, 2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-dashed opacity-25"
                style={{ borderColor: "#FCB900" }}
                animate={reduceMotion ? {} : { rotate: [-1, -3, -1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-strong z-10">
                <Image
                  src="/images/nadia-sentada.jpeg"
                  alt="Dra. Nadia Salem e sua equipe no consultório"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -right-4 top-8 bg-white rounded-2xl shadow-card px-4 py-3
                           flex items-center gap-3 border border-gray-100 z-20"
                animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#ede9fe" }}>
                  <GradCapIcon style={{ color: "#8b5cf6" }} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Mestrado</p>
                  <p className="text-sm font-bold text-brand-text leading-none">USP</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-12 bg-white rounded-2xl shadow-card px-4 py-3
                           flex items-center gap-3 border border-gray-100 z-20"
                animate={reduceMotion ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#ccf7f4" }}>
                  <StarIcon style={{ color: "#4ecdc4" }} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Experiência</p>
                  <p className="text-sm font-bold text-brand-text leading-none">+20 anos</p>
                </div>
              </motion.div>
            </div>

            {/* Accordion de formação */}
            <motion.div
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-soft"
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT }}
            >
              <button
                onClick={() => setFormationOpen((v) => !v)}
                className="w-full flex items-center justify-between px-5 py-4 bg-brand-gray
                           text-sm font-bold text-brand-text hover:bg-gray-100 transition-colors duration-150"
                aria-expanded={formationOpen}
              >
                <span className="flex items-center gap-2">
                  <ListIcon style={{ color: "#8b5cf6" }} />
                  Formação completa
                </span>
                <motion.span
                  animate={{ rotate: formationOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                >
                  <ChevronIcon />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {formationOpen && (
                  <motion.ul
                    key="formation-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="overflow-hidden"
                  >
                    {FORMATION.map((item, i) => (
                      <li
                        key={item.id}
                        className={`flex items-start gap-3 px-5 py-3 text-sm text-brand-muted
                                    ${i < FORMATION.length - 1 ? "border-b border-gray-100" : ""}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: "#4ecdc4" }} />
                        {item.text}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* ── Direita: Texto + Diferenciais ── */}
          <div className="flex flex-col gap-7">
            {/* Parágrafos */}
            <div className="flex flex-col gap-4">
              {ABOUT.body.map((p, i) => (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed text-brand-muted"
                  initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Diferenciais */}
            <div className="flex flex-col gap-3">
              <motion.p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#8b5cf6" }}
                initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT }}
              >
                Por que escolher a Dra. Nadia
              </motion.p>

              {DIFFERENTIALS.map((diff, i) => {
                const s = DIFFERENTIAL_STYLES[i % DIFFERENTIAL_STYLES.length];
                return (
                  <motion.div
                    key={diff.id}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border"
                    style={{ backgroundColor: s.bg, borderColor: s.border }}
                    initial={reduceMotion ? {} : { opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.07, ease: EASE_OUT }}
                    whileHover={reduceMotion ? {} : { scale: 1.015, x: 4 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ backgroundColor: s.border + "22" }}
                      aria-hidden="true"
                    >
                      {diff.icon}
                    </div>
                    <p className="font-semibold text-sm" style={{ color: s.text }}>
                      {diff.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Citação */}
            <motion.blockquote
              className="relative rounded-2xl px-6 py-5 border-l-4 overflow-hidden"
              style={{ backgroundColor: "#ede9fe", borderColor: "#8b5cf6" }}
              initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: EASE_OUT }}
            >
              <QuoteIcon
                className="absolute top-4 right-5 w-8 h-8 opacity-20"
                style={{ color: "#8b5cf6" }}
              />
              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#6d28d9" }}>
                "Meu objetivo é que cada criança saia do consultório com vontade de voltar.
                Quando isso acontece, sei que fiz meu trabalho."
              </p>
              <footer className="mt-3 text-xs font-bold" style={{ color: "#8b5cf6" }}>
                — Dra. Nadia Salem, Odontopediatra
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>

      {/* Wave base */}
      <div className="w-full overflow-hidden leading-none mt-8" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z" fill="#F7F7F7" />
        </svg>
      </div>
    </section>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function GradCapIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="w-4 h-4" style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function StarIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="w-4 h-4" style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ListIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="w-4 h-4" style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4 text-brand-muted" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  );
}

function QuoteIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}
