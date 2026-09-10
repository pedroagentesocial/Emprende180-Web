import { useIdioma } from "@/i18n/ContextoIdioma"
import RevelarAlDesplazar from "@/components/ui/RevelarAlDesplazar"

// mapa de google sin api key, con la direccion de las oficinas
const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(
  "1515 East Fort Union Blvd, Cottonwood Heights, UT 84121",
)}&output=embed`

// direccion de las oficinas a la izquierda, mapa de google a la derecha
export default function SeccionUbicacion() {
  const { textos } = useIdioma()
  return (
    <section
      id="ubicacion"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "#F2F4F7" }}
    >
      <RevelarAlDesplazar className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* informacion de las oficinas */}
          <div
            className="flex flex-col gap-4 p-8 rounded-2xl"
            style={{
              background: "white",
              border: "1.5px solid rgba(13,43,77,0.08)",
              boxShadow: "0 2px 8px rgba(13,43,77,0.04)",
            }}
          >
            <div className="w-8 h-0.5" style={{ background: "#11A79D" }} />
            <h2
              className="text-4xl md:text-5xl mb-2"
              style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
            >
              {textos.ubicacion.titulo}
            </h2>
            <div className="flex items-start gap-3">
              {/* pin de ubicacion */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 mt-1"
              >
                <path
                  d="M12 21 C12 21 5 15.5 5 10 A7 7 0 0 1 19 10 C19 15.5 12 21 12 21 Z"
                  stroke="#11A79D"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                  stroke="#11A79D"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#0D2B4D", opacity: 0.75 }}
              >
                {textos.ubicacion.direccion}
              </p>
            </div>
          </div>

          {/* mapa de google */}
          <iframe
            src={urlMapa}
            title="Mapa de la ubicacion"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full min-h-80 md:min-h-full rounded-2xl"
            style={{ border: "1.5px solid rgba(13,43,77,0.08)" }}
          />
        </div>
      </RevelarAlDesplazar>
    </section>
  )
}
