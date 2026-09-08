import { useState, useEffect, useRef } from "react"
import logoSvg from "./assets/emprende180-logo.svg"

type Lang = "es" | "en"

const content = {
  es: {
    nav: { cta: "Únete", lang: "EN" },
    hero: {
      headline: "Tu Giro de 180°",
      headline2: "Empieza Aquí",
      sub: "Un programa de 90 días para construir un negocio propio con método, constancia y acompañamiento real.",
      cta: "Comenzar el Día 1",
      note: "Solo 2 horas al día. Sin inversión inicial.",
    },
    about: {
      title: "El programa",
      body: "Emprende180 es un plan estructurado de prospección diaria para embajadores. En 90 días construyes una base de contactos organizada, un sistema de seguimiento que funciona solo y fuentes de referidos que trabajan para ti — todo sin dejar de vivir tu vida.",
    },
    stats: [
      { value: 90, label: "días de programa", suffix: "" },
      { value: 2, label: "horas al día", suffix: "h" },
      { value: 150, label: "contactos organizados", suffix: "+" },
      { value: 4, label: "fases de crecimiento", suffix: "" },
    ],
    phases: {
      title: "Los 90 Días Que Cambian Tu Rutina",
      sub: "Cuatro fases. Un hilo conductor: construir base, sistematizar, generar fuentes que trabajan solas y sostener lo que hiciste.",
      items: [
        {
          num: "01",
          days: "Días 1–20",
          name: "Fundación",
          sub: "60 min prospección · 45 min seguimiento · 15 min cierre",
          desc: "Empiezas desde cero y eso está bien. Construyes tu lista de 100 contactos, la cargas al CRM y aprendes a sostener conversaciones reales. Al final de esta fase tienes más de 150 contactos organizados y 25 conversaciones profundas.",
        },
        {
          num: "02",
          days: "Días 21–45",
          name: "Sistematización",
          sub: "50 min prospección · 55 min seguimiento · 15 min cierre",
          desc: "Dejas de improvisar. Ningún contacto se pierde. Construyes tu sistema de seguimiento automático, tus tres mensajes base y tus plantillas personales. La suerte se convierte en método.",
        },
        {
          num: "03",
          days: "Días 46–70",
          name: "Red y Base Viva",
          sub: "40 min prospección · 65 min seguimiento · 15 min cierre",
          desc: "Construyes fuentes que te mandan personas sin que tengas que buscarlas. Cierras alianzas con negocios locales que te refieren de forma recurrente. Tu red empieza a trabajar para ti.",
        },
        {
          num: "04",
          days: "Días 71–90",
          name: "Consolidación",
          sub: "35 min prospección · 70 min seguimiento · 15 min cierre",
          desc: "Demuestras que lo que construiste se sostiene solo. El Día 78 empiezas a escribir tus propias tareas. El Día 90 no es un final — es el punto de partida para los siguientes 90.",
        },
      ],
    },
    values: {
      title: "Lo que nos define",
      items: [
        {
          name: "Enfoque",
          desc: "Sin distracciones. Un mensaje, una persona, un resultado a la vez.",
        },
        {
          name: "Acción",
          desc: "La constancia vence a la intensidad. Dos horas diarias construyen algo real.",
        },
        {
          name: "Comunidad",
          desc: "No trabajas solo. Tienes una red activa de embajadores en cada fase.",
        },
        {
          name: "Crecimiento",
          desc: "Cada fase te acerca un paso más a dejar de improvisar.",
        },
        {
          name: "Transformación",
          desc: "El Día 90 eres una versión diferente de quien empezó el Día 1.",
        },
      ],
    },
    testimonials: {
      title: "Embajadores Emprende180",
      items: [
        {
          name: "María G.",
          role: "Embajadora · 6 meses",
          text: "En 90 días construí algo que hoy se sostiene solo. Las fases te dan claridad en momentos donde antes improvisaba todo.",
          initials: "MG",
        },
        {
          name: "Sofía R.",
          role: "Embajadora · fase 4",
          text: "El Día 78 fue un cambio real. Por primera vez decidí mis propias tareas y supe exactamente qué priorizar.",
          initials: "SR",
        },
        {
          name: "Carlos M.",
          role: "Embajador activo",
          text: "La metodología de seguimiento es lo que lo cambia todo. Ningún contacto se pierde y cada conversación tiene un siguiente paso.",
          initials: "CM",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito experiencia previa?",
          a: "No. El programa empieza desde cero y te guía paso a paso para construir conversaciones reales sin técnicas de venta invasivas.",
        },
        {
          q: "¿Cuánto tiempo requiere al día?",
          a: "Dos horas al día. El programa está diseñado para encajar en tu rutina sin reemplazarla.",
        },
        {
          q: "¿Hay inversión inicial?",
          a: "Solo necesitas tu tiempo y ganas de construir algo real. Tu herramienta principal es un mensaje directo y honesto.",
        },
        {
          q: "¿Qué ocurre después del Día 90?",
          a: "Eliges tu camino: seguir como embajador con metas más altas, subir de esquema o empezar a formar a otros embajadores.",
        },
      ],
    },
    finalCta: {
      headline: "¿Listo para el Día 1?",
      sub: "La constancia vence a la intensidad. Dos horas al día durante 90 días.",
      cta: "Comenzar Ahora",
    },
    footer: {
      tagline: "Tu Giro de 180° Empieza Aquí",
      copy: "© 2024 Emprende180. Todos los derechos reservados.",
    },
    photoLabels: {
      community: "Comunidad Emprende180",
      team: "Nuestros Embajadores",
      success: "Historias de Éxito",
    },
  },
  en: {
    nav: { cta: "Join", lang: "ES" },
    hero: {
      headline: "Your 180° Turn",
      headline2: "Starts Here",
      sub: "A 90-day program to build your own business with method, consistency, and real support.",
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
  },
}

function useCountUp(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, active])
  return count
}

function StatCard({
  value,
  label,
  suffix,
  active,
}: {
  value: number
  label: string
  suffix: string
  active: boolean
}) {
  const num = useCountUp(value, 1200, active)
  return (
    <div className="flex flex-col items-center gap-2 py-6 px-6">
      <span
        className="text-5xl md:text-6xl font-black"
        style={{ color: "#11A79D", fontFamily: "Lil Grotesk Heavy, sans-serif", fontWeight: 900 }}
      >
        {num}
        {suffix}
      </span>
      <span
        className="text-base font-medium text-center"
        style={{ color: "#0D2B4D", opacity: 0.6 }}
      >
        {label}
      </span>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgba(13,43,77,0.12)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-semibold text-base" style={{ color: "#0D2B4D" }}>
          {q}
        </span>
        <span
          className="text-xl flex-shrink-0 transition-transform duration-200"
          style={{
            color: "#11A79D",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>
      {open && (
        <div
          className="pb-5 text-base leading-relaxed"
          style={{ color: "#0D2B4D", opacity: 0.65 }}
        >
          {a}
        </div>
      )}
    </div>
  )
}

function PhotoSlot({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`photo-slot rounded-2xl flex flex-col items-center justify-center gap-3 ${
        tall ? "min-h-80" : "min-h-56"
      }`}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="8"
          width="32"
          height="24"
          rx="4"
          stroke="#11A79D"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="15"
          cy="19"
          r="4"
          stroke="#11A79D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M4 28 L12 20 L18 26 L25 18 L36 28"
          stroke="#11A79D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#11A79D" }}
      >
        {label}
      </span>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>("es")
  const [statsVisible, setStatsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const t = content[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="min-h-full" style={{ background: "#F2F4F7" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(242,244,247,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(13,43,77,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="\img\logo_hor.png" alt="Emprende180" className="h-10" />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="px-3 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
              style={{
                borderColor: "#0D2B4D",
                color: "#0D2B4D",
                background: "transparent",
              }}
            >
              {t.nav.lang}
            </button>
            <button
              onClick={() => scrollTo("join")}
              className="cta-btn px-5 py-2 rounded-full text-sm font-bold hidden sm:block"
              style={{ background: "#0D2B4D", color: "#FFFFFF" }}
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #A7E1DA 0%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-[3fr_2fr] gap-10 items-center py-12">
          <div>
            <h1
              className="mb-5"
              style={{
                fontFamily: "Lil Grotesk Heavy, sans-serif",
                fontWeight: 900,
                color: "#0D2B4D",
                fontSize: "clamp(40px,6.5vw,78px)",
                lineHeight: 1.05,
              }}
            >
              {t.hero.headline}
              <br />
              <span style={{ color: "#11A79D" }}>{t.hero.headline2}</span>
            </h1>
            <p
              className="text-xl mb-6 leading-relaxed"
              style={{ color: "#0D2B4D", opacity: 0.65 }}
            >
              {t.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <button
                id="join"
                onClick={() => scrollTo("phases")}
                className="cta-btn px-8 py-4 rounded-full text-base font-bold"
                style={{ background: "#11A79D", color: "#F2F4F7" }}
              >
                {t.hero.cta}
              </button>
              <span
                className="self-center text-base"
                style={{ color: "#0D2B4D", opacity: 0.5 }}
              >
                {t.hero.note}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src="\img\stock1.jpg" className="rounded-2xl w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6" style={{ background: "#0D2B4D" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ color: "#FFFFFF", fontFamily: "Lil Grotesk Bold, sans-serif" }}
            >
              {t.about.title}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#FFFFFF", opacity: 0.85 }}
            >
              {t.about.body}
            </p>
          </div>
          <PhotoSlot label={t.photoLabels.team} tall />
        </div>
      </section>

      {/* STATS */}
      <div
        ref={statsRef}
        style={{
          background: "#F2F4F7",
          borderBottom: "1px solid rgba(13,43,77,0.08)",
        }}
      >
        <div
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ borderColor: "rgba(13,43,77,0.08)" }}
        >
          {t.stats.map((s, i) => (
            <StatCard
              key={i}
              value={s.value}
              label={s.label}
              suffix={s.suffix}
              active={statsVisible}
            />
          ))}
        </div>
      </div>

      {/* PHASES */}
      <section
        id="phases"
        className="py-16 px-6"
        style={{ background: "#F2F4F7" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
            >
              {t.phases.title}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#0D2B4D", opacity: 0.6 }}
            >
              {t.phases.sub}
            </p>
          </div>

          <div className="space-y-4">
            {t.phases.items.map((phase, i) => (
              <div
                key={i}
                className="phase-card p-6 md:p-7 rounded-2xl"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(13,43,77,0.08)",
                  boxShadow: "0 2px 8px rgba(13,43,77,0.04)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex flex-row md:flex-col gap-3 items-center md:items-start">
                    <span
                      className="text-5xl font-black opacity-15"
                      style={{ color: "#11A79D", fontFamily: "Lil Grotesk Heavy, sans-serif", fontWeight: 900 }}
                    >
                      {phase.num}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(17,167,157,0.1)",
                        color: "#11A79D",
                      }}
                    >
                      {phase.days}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl mb-1"
                      style={{
                        color: "#0D2B4D",
                        fontFamily: "Lil Grotesk Bold, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {lang === "es" ? "Fase " : "Phase "}
                      {i + 1} — {phase.name}
                    </h3>
                    <p
                      className="text-xs mb-3 tracking-wide"
                      style={{ color: "#11A79D" }}
                    >
                      {phase.sub}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#0D2B4D", opacity: 0.65 }}
                    >
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6" style={{ background: "#0D2B4D" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-center mb-8"
            style={{ color: "#FFFFFF", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {t.values.title}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
            style={{
              background: "rgba(167,225,218,0.1)",
              border: "1px solid rgba(167,225,218,0.1)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {t.values.items.map((v, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-6"
                style={{ background: "#0D2B4D" }}
              >
                <div className="w-8 h-0.5" style={{ background: "#11A79D" }} />
                <h4
                  className="font-bold text-base"
                  style={{ color: "#FFFFFF" }}
                >
                  {v.name}
                </h4>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#FFFFFF", opacity: 0.8 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + PHOTO */}
      <section className="py-16 px-6" style={{ background: "#F2F4F7" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {t.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-6 rounded-2xl"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(13,43,77,0.07)",
                  boxShadow: "0 2px 12px rgba(13,43,77,0.05)",
                }}
              >
                <div className="w-6 h-0.5" style={{ background: "#11A79D" }} />
                <p
                  className="text-lg leading-relaxed flex-1"
                  style={{ color: "#0D2B4D" }}
                >
                  {item.text}
                </p>
                <div
                  className="flex items-center gap-3 pt-3"
                  style={{ borderTop: "1px solid rgba(13,43,77,0.07)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "#0D2B4D", color: "#FFFFFF" }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "#0D2B4D" }}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs" style={{ color: "#11A79D" }}>
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PhotoSlot label={t.photoLabels.success} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {t.faq.title}
          </h2>
          <div>
            {t.faq.items.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "#11A79D" }}
      >
        <div className="max-w-2xl mx-auto">
          <img
            src= "\img\logo_ver.png"
            alt="Emprende180"
            className="h-16 mx-auto mb-6 animate-float"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <h2
            className="text-4xl md:text-6xl mb-4"
            style={{ color: "#F2F4F7", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {t.finalCta.headline}
          </h2>
          <p
            className="text-xl mb-6"
            style={{ color: "rgba(242,244,247,0.8)" }}
          >
            {t.finalCta.sub}
          </p>
          <button
            className="cta-btn px-10 py-5 rounded-full text-base font-bold"
            style={{ background: "#0D2B4D", color: "#FFFFFF" }}
          >
            {t.finalCta.cta}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6" style={{ background: "#091f38" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="\img\logo_hor.png"
            alt="Emprende180"
            className="h-8"
            style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
          />
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            {t.footer.copy}
          </p>
        </div>
      </footer>
    </div>
  )
}
