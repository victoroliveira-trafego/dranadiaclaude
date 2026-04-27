import type {
  Service,
  Testimonial,
  FAQItem,
  Credential,
  Differential,
  Formation,
} from "@/types";

// ─── CONTATO ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  whatsapp: "5511913141625",
  whatsappDisplay: "(11) 91314-1625",
  whatsappMessage: "Olá, Dra. Nadia! Gostaria de agendar uma consulta.",
  instagram: "https://www.instagram.com/dra_nadia_odontopediatra",
  instagramHandle: "@dra_nadia_odontopediatra",
  address: "Rua Fernando Falcão, 1111, Edifício Bernini, Sala 810, 8° andar",
  city: "Mooca, São Paulo",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Fernando+Falcão,+1111,+Edifício+Bernini,+Sala+810,+São+Paulo,+SP",
  reference: "Próximo ao Hospital Villa Lobos",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HERO = {
  headline: "Seu filho pode adorar ir ao dentista.",
  subheadline:
    "A Dra. Nadia Salem é odontopediatra especializada em transformar a primeira experiência do seu filho com o dentista em algo positivo, para o resto da vida.",
  description:
    "Clínica especializada em atendimentos de bebês, crianças e adolescentes. Ambiente lúdico e acolhedor para uma experiência positiva.",
  ctaPrimary: "Agendar Consulta pelo WhatsApp",
  ctaSecondary: "Conheça a Dra. Nadia",
} as const;

// ─── CREDENCIAIS ──────────────────────────────────────────────────────────────
export const CREDENTIALS: Credential[] = [
  { id: "usp", label: "Mestrado pela USP" },
  { id: "experience", label: "+20 anos de experiência" },
  { id: "professor", label: "Professora FUNDECTO-USP" },
  { id: "laser", label: "Habilitada em Laserterapia" },
];

// ─── PROBLEMA ─────────────────────────────────────────────────────────────────
export const PROBLEM = {
  title: 'Seu filho chora só de ouvir a palavra "dentista"?',
  paragraphs: [
    "Isso é mais comum do que você imagina, e tem solução.",
    "Muitas crianças desenvolvem medo depois de uma primeira experiência ruim. E aí cada consulta vira uma batalha.",
    "Quando a primeira visita é acolhedora, a criança aprende que o dentista é um lugar seguro. Isso muda tudo, para ela e para você.",
  ],
} as const;

// ─── SOBRE ────────────────────────────────────────────────────────────────────
export const ABOUT = {
  title: "Um consultório pensado para crianças.",
  titleHighlight: "Uma dentista apaixonada pelo que faz.",
  subtitle:
    "A Dra. Nadia construiu sua carreira inteira em torno de um objetivo: que toda criança tenha uma experiência positiva no dentista.",
  body: [
    "Com Mestrado em Odontopediatria pela USP e mais de 20 anos de experiência, a Dra. Nadia combina uma formação técnica sólida com um jeito acolhedor e paciente de atender.",
    "Professora colaboradora do Curso de Bebês da FUNDECTO-USP e habilitada em Laserterapia, ela oferece recursos modernos para que seu filho se sinta confortável, mesmo nos procedimentos mais delicados.",
  ],
} as const;

export const FORMATION: Formation[] = [
  { id: "f1", text: "Graduação em Odontologia pela UNICID (2002–2006)" },
  { id: "f2", text: "Aperfeiçoamento em Odontopediatria pela SOESP (2006–2007)" },
  {
    id: "f3",
    text: "Especialização em Odontopediatria pela FUNDECTO-USP (2008–2009)",
  },
  {
    id: "f4",
    text: "Mestrado em Odontopediatria pela Faculdade de Odontologia USP (2010–2012)",
  },
  {
    id: "f5",
    text: "Pós-graduação em Ortodontia Infantil pelo CETAO, NEO, CEREO e FUNDECTO-USP",
  },
  { id: "f6", text: "Habilitação em Sedação com Óxido Nitroso pelo NEOM" },
  { id: "f7", text: "Habilitação em Laserterapia pela FUNDECTO-USP" },
  {
    id: "f8",
    text: "Professora colaboradora do Curso de Bebês da FUNDECTO-USP (jan/2025 – atual)",
  },
  {
    id: "f9",
    text: "Primeiros Socorros com RCP e DEA pelo Instituto Albert Einstein (set/2025)",
  },
];

export const DIFFERENTIALS: Differential[] = [
  { id: "d1", icon: "🏠", title: "Ambiente lúdico e acolhedor para crianças" },
  { id: "d2", icon: "💛", title: "Atendimento sem pressa, sem trauma" },
  {
    id: "d3",
    icon: "✨",
    title: "Laserterapia para procedimentos menos invasivos",
  },
  { id: "d4", icon: "📚", title: "Formação continuada, sempre atualizada" },
];

// ─── SERVIÇOS ─────────────────────────────────────────────────────────────────
export const SERVICES_TITLE = "Cuidamos do sorriso do seu filho em cada fase";
export const SERVICES_SUBTITLE =
  "Do primeiro dentinho até a adolescência, a Dra. Nadia acompanha o desenvolvimento bucal completo do seu filho.";

export const SERVICES: Service[] = [
  {
    id: "s1",
    icon: "👶",
    title: "Primeira Consulta do Bebê",
    description:
      "A saúde bucal começa antes dos primeiros dentinhos. Orientamos você desde cedo para garantir um desenvolvimento saudável e uma relação positiva com o dentista desde o início.",
  },
  {
    id: "s2",
    icon: "🦷",
    title: "Prevenção e Higiene Bucal",
    description:
      "Limpeza, fluoretos e selantes para proteger os dentes do seu filho e construir hábitos que duram a vida toda.",
  },
  {
    id: "s3",
    icon: "🔧",
    title: "Tratamento de Cárie",
    description:
      "Procedimentos realizados com cuidado e com recursos que deixam a criança tranquila.",
  },
  {
    id: "s4",
    icon: "😁",
    title: "Ortodontia Infantil",
    description:
      "Acompanhamos o desenvolvimento da mordida e, quando indicado, iniciamos o tratamento cedo, quando a correção é mais simples e os resultados são melhores.",
  },
  {
    id: "s6",
    icon: "✨",
    title: "Laserterapia",
    description:
      "Tecnologia a laser para procedimentos menos invasivos: menos desconforto, recuperação mais rápida e resultados precisos.",
  },
  {
    id: "s7",
    icon: "🚨",
    title: "Urgências Odontológicas",
    description:
      "Dente trincado, dor, queda de dente de leite? Atendemos urgências com agilidade, porque quando dói, não dá para esperar.",
  },
];

// ─── DEPOIMENTOS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Bruno Guimarães Teixeira",
    text: "Pensa em uma estrutura bacana. Profissionalismo, cuidado com os materiais, tudo bem esterilizado e lacrado, os bicos com protetor descartável plástico.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Danielle Pacheco de Souza",
    text: "Dra. Nádia e equipe super atenciosas. Um capricho e cuidado com cada detalhe. Amamos.",
    rating: 5,
    photo: "/images/Daniele Review.png",
  },
  {
    id: "t3",
    name: "Mahmmud Mashni",
    text: "Super recomendo a Dra. Nádia! Ela cuida do Abudi com muito carinho e paciência, deixando ele super à vontade durante todo o atendimento. Além de ser uma ótima profissional, é super atenciosa e explica tudo direitinho. O Abudi sai de lá super tranquilo e feliz.",
    rating: 5,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_TITLE = "Perguntas frequentes";

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "q1",
    question: "A partir de que idade meu filho deve ir ao dentista?",
    answer:
      "Assim que o primeiro dentinho aparecer, ou até antes. A primeira consulta serve para orientar os pais sobre higiene e desenvolvimento saudável desde o início.",
  },
  {
    id: "q2",
    question: "E se meu filho tiver muito medo?",
    answer:
      "A Dra. Nadia tem experiência com crianças ansiosas e usa técnicas de adaptação para que a criança se sinta segura.",
  },
  {
    id: "q3",
    question: "Como funciona o agendamento?",
    answer:
      "É simples: clique no botão e envie uma mensagem pelo WhatsApp. Nossa equipe retorna rapidamente para marcar o melhor horário para você.",
  },
];

// ─── CTA FINAL ───────────────────────────────────────────────────────────────
export const CTA_FINAL = {
  title: "Pronto para cuidar do sorriso do seu filho?",
  subtitle:
    "A primeira consulta é especial, pensada para que seu filho conheça o consultório, se sinta à vontade e saia com vontade de voltar.",
  cta: "Agendar pelo WhatsApp",
} as const;
