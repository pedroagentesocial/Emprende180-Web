import type { Traduccion } from "./espanol"

const ingles: Traduccion = {
  nav: {
    cta: "Join",
    lang: "ES",
    links: [
      { titulo: "Program", id: "programa" },
      { titulo: "Phases", id: "fases" },
      { titulo: "Values", id: "valores" },
      { titulo: "Ambassadors", id: "testimonios" },
      { titulo: "FAQ", id: "preguntas" },
    ],
  },
  hero: {
    // one background video with its own text; add another entry here for more videos
    portadas: [
      {
        video: "/img/Portada_1.mp4",
        alineacion: "izquierda",
        titulo: "Your 180° Turn",
        titulo2: "Starts Here",
        sub: "A 90-day program to build your own business with method, consistency, and real support.",
      },
      {
        video: "/img/Portada_2.mp4",
        alineacion: "derecha",
        titulo: "Build While Your Baby Rests",
      },
      {
        video: "/img/Portada_3.mp4",
        alineacion: "izquierda",
        titulo: "Family Comes First",
        titulo2: "Your Business Too",
        sub: "Build your own source of income at your family's pace: between breakfasts, homework, and everything your days already hold.",
      },
    ],
    cta: "Start Day 1",
    note: "Only 2 hours a day. No upfront investment.",
  },
  about: {
    title: "The Program",
    body: "Emprende180 is a structured daily prospecting plan for ambassadors. In 90 days you build an organized contact base, a follow-up system that runs itself, and referral sources that work for you — all without stopping your life.",
  },
  stats: [
    { value: 90, label: "day program", suffix: "" },
    { value: 2, label: "hours per day", suffix: "h" },
    { value: 150, label: "organized contacts", suffix: "+" },
    { value: 4, label: "growth phases", suffix: "" },
  ],
  phases: {
    title: "The 90 Days That Change Your Routine",
    sub: "Four phases. One thread: build a base, systematize, generate self-sustaining sources, and hold what you made.",
    items: [
      {
        num: "01",
        days: "Days 1–20",
        name: "Foundation",
        sub: "60 min prospecting · 45 min follow-up · 15 min close",
        desc: "You start from zero and that's fine. Build your list of 100 contacts, load them into the CRM, and learn to hold real conversations. By the end you have 150+ organized contacts and 25 deep conversations.",
      },
      {
        num: "02",
        days: "Days 21–45",
        name: "Systematization",
        sub: "50 min prospecting · 55 min follow-up · 15 min close",
        desc: "Stop improvising. Not a single contact slips away. Build your automatic follow-up sequences, your three base messages, and your personal templates. Luck becomes method.",
      },
      {
        num: "03",
        days: "Days 46–70",
        name: "Network & Living Base",
        sub: "40 min prospecting · 65 min follow-up · 15 min close",
        desc: "Build sources that send people to you without you having to find them. Close alliances with local businesses that refer clients regularly. Your network starts working for you.",
      },
      {
        num: "04",
        days: "Days 71–90",
        name: "Consolidation",
        sub: "35 min prospecting · 70 min follow-up · 15 min close",
        desc: "Prove that what you built sustains itself. On Day 78 you write your own tasks. Day 90 is not an ending — it's the starting point for your next 90.",
      },
    ],
  },
  values: {
    title: "What Defines Us",
    items: [
      {
        name: "Focus",
        desc: "No distractions. One message, one person, one result at a time.",
      },
      {
        name: "Action",
        desc: "Consistency beats intensity. Two hours a day builds something real.",
      },
      {
        name: "Community",
        desc: "You don't work alone. You have an active ambassador network at every phase.",
      },
      {
        name: "Growth",
        desc: "Every phase brings you one step closer to stopping the improvising.",
      },
      {
        name: "Transformation",
        desc: "On Day 90 you are a different version of who started on Day 1.",
      },
    ],
  },
  testimonials: {
    title: "Emprende180 Ambassadors",
    items: [
      {
        name: "María G.",
        role: "Ambassador · 6 months",
        text: "In 90 days I built something that now sustains itself. The phases give you clarity in moments where before I was improvising everything.",
        initials: "MG",
      },
      {
        name: "Sofía R.",
        role: "Ambassador · phase 4",
        text: "Day 78 was a real turning point. For the first time I decided my own tasks and knew exactly what to prioritize.",
        initials: "SR",
      },
      {
        name: "Carlos M.",
        role: "Active ambassador",
        text: "The follow-up methodology changes everything. No contact is ever lost and every conversation has a defined next step.",
        initials: "CM",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Do I need prior experience?",
        a: "No. The program starts from zero and guides you step by step to build real conversations without invasive sales techniques.",
      },
      {
        q: "How much time does it require per day?",
        a: "Two hours a day. The program is designed to fit into your routine without replacing it.",
      },
      {
        q: "Is there an upfront investment?",
        a: "You only need your time and the drive to build something real. Your main tool is a direct, honest message.",
      },
      {
        q: "What happens after Day 90?",
        a: "You choose your path: continue as an ambassador with higher goals, move up the scheme, or start training other ambassadors.",
      },
    ],
  },
  finalCta: {
    headline: "Ready for Day 1?",
    sub: "Consistency beats intensity. Two hours a day for 90 days.",
    cta: "Start Now",
  },
  footer: {
    tagline: "Your 180° Turn Starts Here",
    copy: "© 2024 Emprende180. All rights reserved.",
  },
  photoLabels: {
    community: "Emprende180 Community",
    team: "Our Ambassadors",
    success: "Success Stories",
  },
}

export default ingles
