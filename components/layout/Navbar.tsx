"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/content";

// Emil: custom cubic-bezier — strong ease-out, feels intentional
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 72);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Fixed header wrapper ── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4"
        animate={{ paddingTop: scrolled ? "10px" : "20px" }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        {/* ── Pill nav — shrinks + gains bg on scroll ── */}
        <motion.nav
          animate={{
            maxWidth: scrolled ? "760px" : "1152px",
            borderRadius: scrolled ? "9999px" : "16px",
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0)",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(0,0,0,0.04)"
              : "none",
            paddingLeft: scrolled ? "20px" : "0px",
            paddingRight: scrolled ? "20px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="w-full flex items-center justify-between py-2.5"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Dra. Nadia Salem — Odontopediatra"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
            >
              <Image
                src="/images/logo-nadia.png"
                alt="Dra. Nadia Salem — Odontopediatra"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-brand-muted
                           transition-colors duration-150"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                /* ui-ux: hover only on pointer devices */
                style={{ cursor: "pointer" }}
              >
                <span className="relative">
                  {link.label}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-brand-gray -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand-yellow
                       text-brand-text font-semibold text-sm px-5 py-2.5 rounded-full
                       shadow-soft transition-colors duration-150
                       hover:bg-brand-orange hover:text-white"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            /* Emil: button active scale feedback */
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            Agendar Consulta
          </motion.a>

          {/* Mobile hamburger — min 44×44px touch target */}
          <motion.button
            className="md:hidden w-11 h-11 flex items-center justify-center
                       rounded-full hover:bg-brand-gray transition-colors"
            onClick={() => setMobileOpen(true)}
            whileTap={{ scale: 0.92 }}
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5 text-brand-text" strokeWidth={2} />
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer — Emil: slide from right with spring */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm
                         bg-white flex flex-col shadow-strong"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/images/logo-nadia.png"
                    alt="Dra. Nadia Salem — Odontopediatra"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <motion.button
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             hover:bg-brand-gray transition-colors"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5 text-brand-text" strokeWidth={2} />
                </motion.button>
              </div>

              {/* Links — Emil: stagger 60ms per item */}
              <div className="flex flex-col gap-1 px-3 pt-4 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-4 rounded-2xl text-lg font-semibold text-brand-text
                               hover:bg-brand-yellow-pale transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06 + 0.08,
                      ease: EASE_OUT,
                      duration: 0.4,
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                className="px-4 pb-10 pt-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, ease: EASE_OUT, duration: 0.4 }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full
                             bg-brand-yellow text-brand-text font-semibold text-base
                             px-6 py-4 rounded-full shadow-soft
                             hover:bg-brand-orange hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  Agendar pelo WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Inline SVG icons (SVG > emoji — ui-ux rule) ──────────────────────────────

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C9.79 2 7.96 3.26 7 5.11 6.04 3.26 4.21 2 2 2 2 5 3.5 7.5 4.5 9.5 5 10.5 5 12 5 14c0 4.5 2 8 4 8 .83 0 1.5-.5 2-1.5S12 18 12 17c0 1 .67 2.5 1 3.5.5 1 1.17 1.5 2 1.5 2 0 4-3.5 4-8 0-2 .5-3.5 1-4.5C21 7.5 22 5 22 2c-2.21 0-4.04 1.26-5 3.11C16.04 3.26 14.21 2 12 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
