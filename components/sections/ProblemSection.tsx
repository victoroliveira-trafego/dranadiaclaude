"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { PROBLEM, WHATSAPP_URL } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const SIGNS = [
  { emoji: "😰", text: "Choro antes de sair de casa" },
  { emoji: "😤", text: "Recusa total na cadeira" },
  { emoji: "😴", text: "Noites mal dormidas com dor de dente" },
  { emoji: "😬", text: "Trauma de uma consulta ruim" },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="problema" className="relative bg-brand-teal-pale overflow-hidden">
      {/* Wave topo */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#f0fffe" />
        </svg>
      </div>

      {/* Blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-12 w-48 h-48 rounded-full opacity-15"
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
            {/* Moldura decorativa */}
            <motion.div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #4ecdc4, #8b5cf6)" }}
              animate={reduceMotion ? {} : { rotate: [2, 4, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Foto */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-strong z-10">
              <Image
                src="/images/foto-equipe-abracando-crianca.jpg"
                alt="Equipe da Dra. Nadia acolhendo uma criança"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              {/* Overlay gradiente base */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            {/* Badge flutuante */}
            <motion.div
              className="absolute -right-4 top-10 bg-white rounded-2xl shadow-card px-4 py-3
                         flex items-center gap-3 border border-gray-100 z-20"
              animate={reduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#ccf7f4" }}>
                <ShieldHeartIcon style={{ color: "#4ecdc4" }} />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Ambiente</p>
                <p className="text-sm font-bold text-brand-text leading-none">Sem trauma</p>
              </div>
            </motion.div>

            {/* Badge flutuante 2 */}
            <motion.div
              className="absolute -left-4 bottom-14 bg-white rounded-2xl shadow-card px-4 py-3
                         flex items-center gap-3 border border-gray-100 z-20"
              animate={reduceMotion ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#ede9fe" }}>
                <SmileIcon style={{ color: "#8b5cf6" }} />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium leading-none mb-0.5">Criança</p>
                <p className="text-sm font-bold text-brand-text leading-none">Feliz e tranquila</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Direita: Texto ── */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {/* Label */}
            <motion.span
              className="inline-block text-xs font-bold tracking-widest uppercase"
              style={{ color: "#4ecdc4" }}
              initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE_OUT }}
            >
              Você reconhece essa situação?
            </motion.span>

            {/* Headline */}
            <motion.h2
              className="section-title text-balance"
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            >
              {PROBLEM.title}
            </motion.h2>

            {/* Sinais — cards pequenos */}
            <div className="grid grid-cols-2 gap-3">
              {SIGNS.map((sign, i) => (
                <motion.div
                  key={sign.text}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-soft border border-gray-100"
                  initial={reduceMotion ? {} : { opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: EASE_OUT }}
                >
                  <span className="text-xl flex-shrink-0" role="img" aria-hidden="true">
                    {sign.emoji}
                  </span>
                  <p className="text-xs font-semibold text-brand-text leading-snug">{sign.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Parágrafos */}
            <div className="flex flex-col gap-4">
              {PROBLEM.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  className={`text-base leading-relaxed ${i === 0 ? "font-semibold text-brand-text" : "text-brand-muted"}`}
                  initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.1, ease: EASE_OUT }}
                >
                  {/* Destaque no terceiro parágrafo */}
                  {i === 2 ? (
                    <>
                      <span
                        className="font-bold"
                        style={{ color: "#4ecdc4" }}
                      >
                        Quando a primeira visita é acolhedora,
                      </span>{" "}
                      a criança aprende que o dentista é um lugar seguro. Isso muda tudo — para ela e para você.
                    </>
                  ) : p}
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75, ease: EASE_OUT }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-bold text-base text-white
                           px-7 py-4 rounded-full shadow-card transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: "#4ecdc4" }}
                whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
              >
                <WhatsAppIcon />
                Quero uma primeira consulta tranquila
              </motion.a>
            </motion.div>
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

function ShieldHeartIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="w-4 h-4" style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
    </svg>
  );
}

function SmileIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="w-4 h-4" style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
