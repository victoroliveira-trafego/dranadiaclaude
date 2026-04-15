"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CARD_ACCENTS = ["#FCB900", "#4ecdc4", "#8b5cf6"];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  { bg: "#FFF8E1", text: "#92700A" },
  { bg: "#ccf7f4", text: "#0e7a75" },
  { bg: "#ede9fe", text: "#6d28d9" },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="depoimentos" className="relative bg-white overflow-hidden">
      {/* Wave topo */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#F7F7F7" />
        </svg>
      </div>

      {/* Blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FCB900 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)" }} />
      </div>

      <div ref={ref} className="section-padding container-max relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Esquerda: Foto ── */}
          <motion.div
            className="relative flex justify-center order-2 lg:order-1"
            initial={reduceMotion ? {} : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <motion.div
              className="absolute -bottom-3 -left-3 w-full h-full rounded-3xl opacity-25"
              style={{ background: "linear-gradient(135deg, #FCB900, #FF6900)" }}
              animate={reduceMotion ? {} : { rotate: [-2, -4, -2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-3 -right-3 w-full h-full rounded-3xl border-2 border-dashed opacity-20"
              style={{ borderColor: "#4ecdc4" }}
              animate={reduceMotion ? {} : { rotate: [2, 4, 2] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-strong z-10">
              <Image
                src="/images/equipe-tratando-crianca.jpg"
                alt="Equipe da Dra. Nadia atendendo uma criança"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            {/* Badge flutuante */}
            <motion.div
              className="absolute -right-4 top-10 bg-white rounded-2xl shadow-card px-4 py-3
                         flex items-center gap-3 border border-gray-100 z-20"
              animate={reduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5" style={{ color: "#FCB900" }} />
                ))}
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Avaliação</p>
                <p className="text-sm font-bold text-brand-text leading-none">5.0 no Google</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Direita: Header + Cards ── */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">

            {/* Header */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#4ecdc4" }}>
                O que as famílias dizem
              </span>
              <h2 className="section-title text-balance">
                Pais que confiaram e{" "}
                <span style={{ color: "#FCB900" }}>não se arrependeram</span>
              </h2>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {TESTIMONIALS.map((t, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            const avatar = AVATAR_COLORS[i % AVATAR_COLORS.length];
            return (
                <motion.div
                  key={t.id}
                  className="relative flex flex-col gap-3 bg-white rounded-2xl p-5
                             border border-gray-100 shadow-soft hover:shadow-card
                             transition-shadow duration-200"
                  initial={reduceMotion ? {} : { opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease: EASE_OUT }}
                  whileHover={reduceMotion ? {} : { x: 4 }}
                >
                  {/* Barra de cor lateral esquerda */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Estrelas + aspas */}
                  <div className="flex items-center justify-between pl-3">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, s) => (
                        <StarIcon key={s} className="w-3.5 h-3.5" style={{ color: "#FCB900" }} />
                      ))}
                    </div>
                    <QuoteIcon className="w-5 h-5 opacity-15" style={{ color: accent }} />
                  </div>

                  {/* Texto */}
                  <p className="text-sm leading-relaxed text-brand-muted pl-3">
                    "{t.text}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100 pl-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      {t.photo ? (
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: avatar.bg, color: avatar.text }}
                          aria-hidden="true"
                        >
                          {getInitials(t.name)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-text leading-none">{t.name}</p>
                      <p className="text-xs text-brand-muted mt-0.5 flex items-center gap-1">
                        <GoogleIcon className="w-3 h-3" />
                        Google Reviews
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
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

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function StarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
