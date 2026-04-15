"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CTA_FINAL, WHATSAPP_URL, CONTACT } from "@/lib/content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Wave topo */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V0H0V32Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Fundo gradiente */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #FCB900 0%, #FF6900 100%)" }}
        aria-hidden="true"
      />

      {/* Blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
          animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
          animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Estrelinhas decorativas */}
        {[
          { top: "15%", left: "8%", size: 18, delay: 0 },
          { top: "70%", left: "5%", size: 12, delay: 1 },
          { top: "25%", right: "10%", size: 14, delay: 0.5 },
          { top: "65%", right: "7%", size: 20, delay: 1.5 },
          { top: "45%", left: "20%", size: 10, delay: 0.8 },
          { top: "55%", right: "22%", size: 10, delay: 1.2 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: star.top,
              left: "left" in star ? star.left : undefined,
              right: "right" in star ? star.right : undefined,
              width: star.size,
              height: star.size,
              opacity: 0.35,
            }}
            animate={reduceMotion ? {} : {
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
          >
            <StarIcon style={{ color: "#ffffff", width: star.size, height: star.size }} />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="section-padding container-max relative">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

          {/* Ícone */}
          <motion.div
            className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-card"
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            animate-float={!reduceMotion ? "true" : undefined}
          >
            <ToothIcon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Título */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
          >
            {CTA_FINAL.title}
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-base md:text-lg text-white/85 leading-relaxed max-w-lg"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
          >
            {CTA_FINAL.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-bold text-base
                         px-8 py-4 rounded-full shadow-strong transition-opacity duration-150
                         hover:opacity-95"
              style={{ backgroundColor: "#ffffff", color: "#FF6900" }}
              whileHover={reduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
            >
              <WhatsAppIcon />
              {CTA_FINAL.cta}
            </motion.a>

            <motion.a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm text-white/90
                         border border-white/40 px-6 py-4 rounded-full
                         hover:bg-white/10 transition-colors duration-150"
              whileHover={reduceMotion ? {} : { scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
            >
              <MapPinIcon className="w-4 h-4" />
              Como chegar
            </motion.a>
          </motion.div>

          {/* Info do endereço */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8
                       bg-white/15 rounded-2xl px-6 py-4 backdrop-blur-sm border border-white/20"
            initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE_OUT }}
          >
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span>{CONTACT.address}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/30" />
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <PhoneIcon className="w-4 h-4 flex-shrink-0" />
              <span>{CONTACT.whatsappDisplay}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave base */}
      <div className="w-full overflow-hidden leading-none mt-8" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z" fill="#1A1A1A" />
        </svg>
      </div>
    </section>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5 5.5 3.5 3.5 2 3 2 1.3 2 0 3.8 0 6c0 3 1.5 5.5 3 7.5.5 4.5 1.5 8.5 3 8.5.8 0 1.5-1 2-3 .4-1.5.8-2.5 1-2.5h.5c.2 0 .6 1 1 2.5.5 2 1.2 3 2 3 1.5 0 2.5-4 3-8.5 1.5-2 3-4.5 3-7.5 0-2.2-1.3-4-3-4-.5 0-2.5 1.5-3.5 3.5C13.5 3.5 11.5 2 12 2z" />
    </svg>
  );
}

function StarIcon({ style }: { style?: React.CSSProperties & { width?: number; height?: number } }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
