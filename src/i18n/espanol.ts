export type AlineacionPortada = "izquierda" | "derecha"

export type Portada = {
  video: string
  alineacion: AlineacionPortada
  titulo: string
  // segunda linea del titulo (en menta) y parrafo de apoyo, ambos opcionales
  titulo2?: string
  sub?: string
}

const espanol = {
  nav: { cta: "Únete", lang: "EN" },
  hero: {
    // un video de fondo con su propio texto; agregar una portada mas aca es suficiente
    portadas: [
      {
        video: "/img/Portada_1.mp4",
        alineacion: "izquierda",
        titulo: "Tu Giro de 180°",
        titulo2: "Empieza Aquí",
        sub: "Un programa de 90 días para construir un negocio propio con método, constancia y acompañamiento real.",
      },
      {
        video: "/img/Portada_2.mp4",
        alineacion: "derecha",
        titulo: "Emprende mientras tu Bebé Descansa",
      },
      {
        video: "/img/Portada_3.mp4",
        alineacion: "izquierda",
        titulo: "Tu Familia Primero",
        titulo2: "Tu Negocio También",
        sub: "Construye tu fuente de ingresos propia al ritmo de tu casa: entre desayunos, tareas y todo lo que haces todos los días.",
      },
    ] as Portada[],
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
}

export type Traduccion = typeof espanol
export default espanol
