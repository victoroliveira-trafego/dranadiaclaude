import Link from "next/link";
import { CONTACT, WHATSAPP_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-gray-200 py-12 px-4">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-brand-text text-base">Dra. Nadia Salem — Odontopediatra</p>
            <p className="text-brand-muted text-sm mt-1">{CONTACT.address}</p>
            <p className="text-brand-muted text-sm">{CONTACT.city} · {CONTACT.reference}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <Link
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted text-sm hover:text-brand-orange transition-colors"
            >
              {CONTACT.instagramHandle}
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted text-sm hover:text-brand-orange transition-colors"
            >
              {CONTACT.whatsappDisplay}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} Dra. Nadia Salem — Odontopediatria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
