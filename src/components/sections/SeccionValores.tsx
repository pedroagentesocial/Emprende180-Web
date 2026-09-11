import type { ReactNode } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import RevelarAlDesplazar from "@/components/ui/RevelarAlDesplazar"

// icono de cada valor, en teal como el resto de detalles
const iconosDeValores: Record<string, ReactNode> = {
  enfoque: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#11A79D" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  accion: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#11A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  ),
  comunidad: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#11A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M18.5 14.5c1.8.9 3 2.8 3 5.5" />
    </svg>
  ),
  crecimiento: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#11A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-8" />
      <path d="M14 7h6v6" />
    </svg>
  ),
  transformacion: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#11A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
}

// los 5 valores en rejilla sobre fondo navy, cada uno con su icono centrado
export default function SeccionValores() {
  const { textos } = useIdioma()
  return (
    <section
      id="valores"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "#0D2B4D" }}
    >
      <div className="max-w-5xl mx-auto">
        <RevelarAlDesplazar>
          <h2
            className="text-4xl md:text-5xl text-center mb-8"
            style={{ color: "#FFFFFF", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {textos.values.title}
          </h2>
        </RevelarAlDesplazar>
        <div
          className="rejilla-valores grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{
            background: "rgba(167,225,218,0.1)",
            border: "1px solid rgba(167,225,218,0.1)",
            borderRadius: "16px",
          }}
        >
          {textos.values.items.map((valor, indice) => (
            <div
              key={indice}
              className="celda-valor p-6 text-center"
              style={{ background: "#0D2B4D" }}
            >
              {/* solo se revela el contenido: mover la celda romperia el truco
                  de los bordes de 1px de la rejilla */}
              <RevelarAlDesplazar
                retraso={indice * 100}
                className="flex flex-col items-center gap-3"
              >
                {iconosDeValores[valor.icono]}
                <h4
                  className="font-bold text-base"
                  style={{ color: "#FFFFFF" }}
                >
                  {valor.name}
                </h4>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#FFFFFF", opacity: 0.8 }}
                >
                  {valor.desc}
                </p>
              </RevelarAlDesplazar>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
