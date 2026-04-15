"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HERO, WHATSAPP_URL } from "@/lib/content";

// Emil: strong ease-out — starts instantly, feels responsive
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

// Emil: stagger helper — fadeUp from y:16 (not scale:0, nothing appears from nothing)
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE_OUT },
});

const STARS = [
  { id: 1, left: "8%",  top: "12%", size: 14, opacity: 0.35, duration: 4.2, delay: 0 },
  { id: 2, left: "18%", top: "72%", size: 10, opacity: 0.25, duration: 5.5, delay: 0.8 },
  { id: 3, left: "30%", top: "28%", size: 8,  opacity: 0.2,  duration: 6.0, delay: 1.5 },
  { id: 4, left: "55%", top: "8%",  size: 12, opacity: 0.3,  duration: 4.8, delay: 0.4 },
  { id: 5, left: "72%", top: "20%", size: 9,  opacity: 0.22, duration: 5.0, delay: 1.2 },
  { id: 6, left: "85%", top: "55%", size: 16, opacity: 0.28, duration: 6.5, delay: 0.2 },
  { id: 7, left: "90%", top: "78%", size: 10, opacity: 0.2,  duration: 4.5, delay: 2.0 },
  { id: 8, left: "42%", top: "85%", size: 13, opacity: 0.3,  duration: 5.8, delay: 0.6 },
  { id: 9, left: "65%", top: "65%", size: 8,  opacity: 0.18, duration: 7.0, delay: 1.8 },
];

const CREDENTIALS = [
  { label: "Mestrado USP", color: "bg-brand-yellow-pale text-brand-text" },
  { label: "+20 anos de experiência", color: "bg-brand-teal-light text-brand-text" },
  { label: "Professora FUNDECTO-USP", color: "bg-brand-purple-light text-brand-purple" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const animProps = (delay: number) =>
    reduceMotion ? {} : fadeUp(delay);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white pt-24 pb-16"
    >
      {/* ── Background decoration — organic blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Yellow blob — top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #FCB900 0%, transparent 70%)" }}
          animate={reduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.25, 0.3, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Teal blob — bottom left */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)" }}
          animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.2, 0.28, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Purple blob — center left */}
        <motion.div
          className="absolute top-1/3 -left-20 w-[280px] h-[280px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
          animate={reduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Orange blob — center right */}
        <div className="absolute top-1/2 -right-16 w-[200px] h-[200px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #FF6900 0%, transparent 70%)" }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#FCB900 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Purple stars */}
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute pointer-events-none"
            style={{ left: star.left, top: star.top }}
            animate={reduceMotion ? {} : {
              opacity: [star.opacity, star.opacity * 2, star.opacity],
              scale: [1, 1.3, 1],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          >
            <StarDecor size={star.size} />
          </motion.div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative container-max section-padding py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Tag pill */}
            <motion.div {...animProps(0.05)}>
              <span className="inline-flex items-center gap-2 bg-brand-yellow-pale border border-brand-yellow/30
                               text-brand-text text-sm font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0 animate-bounce-slow" />
                Especialista em Saúde Bucal Infantil
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[52px] xl:text-6xl font-extrabold
                         text-brand-text leading-[1.1] tracking-tight text-balance"
              {...animProps(0.12)}
            >
              Seu filho pode{" "}
              <span className="relative inline-block">
                <span className="relative z-10">adorar</span>
                {/* Underline decoration */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-3 bg-brand-yellow rounded-full -z-0 opacity-50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
              ir ao dentista.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg text-brand-muted leading-relaxed max-w-lg"
              {...animProps(0.2)}
            >
              {HERO.subheadline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base text-brand-muted/80 leading-relaxed max-w-md"
              {...animProps(0.26)}
            >
              {HERO.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              {...animProps(0.32)}
            >
              {/* Primary CTA — WhatsApp */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5
                           bg-brand-teal text-white font-bold text-base
                           px-7 py-4 rounded-full shadow-card
                           transition-colors duration-150
                           hover:opacity-90"
                whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
                /* Emil: scale(0.97) on press */
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                {HERO.ctaPrimary}
              </motion.a>

              {/* Secondary CTA — anchor */}
              <motion.a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2
                           border-2 border-brand-yellow text-brand-text font-semibold text-base
                           px-7 py-4 rounded-full
                           transition-colors duration-150
                           hover:bg-brand-yellow-pale"
                whileHover={reduceMotion ? {} : { scale: 1.02 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
              >
                {HERO.ctaSecondary}
                <ArrowDownIcon className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Credential pills — staggered */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              initial={reduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {CREDENTIALS.map((cred, i) => (
                <motion.span
                  key={cred.label}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cred.color}`}
                  initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  /* Emil: start from 0.9, not 0 — nothing appears from nothing */
                  transition={{ delay: 0.55 + i * 0.07, ease: EASE_OUT, duration: 0.35 }}
                >
                  {cred.label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            /* Emil: scale from 0.95+opacity — never from 0 */
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          >
            {/* Decorative background circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]
                           rounded-full opacity-20"
                style={{ background: "radial-gradient(circle at 40% 40%, #8b5cf6 0%, #4ecdc4 55%, transparent 80%)" }}
                animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] lg:w-[450px] lg:h-[450px]
                           rounded-full border-[3px] border-dashed opacity-40"
                style={{ borderColor: "#4ecdc4" }}
              />
            </div>

            {/* Photo container */}
            <div className="relative z-10 w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] lg:w-[400px] lg:h-[500px]">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-strong">
                <Image
                  src="/images/nadia-e-criancas.jpg"
                  alt="Dra. Nadia Salem com crianças — Odontopediatra"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                  priority
                />
              </div>

              {/* Floating badge — 20 anos (teal) */}
              <motion.div
                className="absolute -left-6 top-12 bg-white rounded-2xl shadow-card px-4 py-3
                           flex items-center gap-3 border border-gray-100"
                animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#4ecdc4" }}>
                  <StarIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Experiência</p>
                  <p className="text-sm font-bold text-brand-text leading-none">+20 anos</p>
                </div>
              </motion.div>

              {/* Floating badge — USP (amarelo) */}
              <motion.div
                className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-card px-4 py-3
                           flex items-center gap-3 border border-gray-100"
                animate={reduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center flex-shrink-0">
                  <GraduationIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Mestrado</p>
                  <p className="text-sm font-bold text-brand-text leading-none">USP</p>
                </div>
              </motion.div>

              {/* Floating badge — Ambiente lúdico (roxo) */}
              <motion.div
                className="absolute -bottom-4 left-8 rounded-2xl shadow-card px-4 py-3
                           flex items-center gap-2"
                style={{ backgroundColor: "#8b5cf6" }}
                animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <HeartIcon className="w-4 h-4 text-white" />
                <p className="text-sm font-bold text-white whitespace-nowrap">Ambiente lúdico</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Wave divider ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z"
            fill="#FFF8E1"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GraduationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function StarDecor({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#8b5cf6"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
