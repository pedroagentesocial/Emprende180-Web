import { useIdioma } from "@/i18n/ContextoIdioma"

// las 4 fases del programa en tarjetas
export default function SeccionFases() {
  const { idioma, textos } = useIdioma()
  return (
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
            {textos.phases.title}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#0D2B4D", opacity: 0.6 }}
          >
            {textos.phases.sub}
          </p>
        </div>

        <div className="space-y-4">
          {textos.phases.items.map((fase, indice) => (
            <div
              key={indice}
              className="tarjeta-fase p-6 md:p-7 rounded-2xl"
              style={{
                background: "white",
                border: "1.5px solid rgba(13,43,77,0.08)",
                boxShadow: "0 2px 8px rgba(13,43,77,0.04)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* numero decorativo + rango de dias */}
                <div className="flex-shrink-0 flex flex-row md:flex-col gap-3 items-center md:items-start">
                  <span
                    className="text-5xl font-black opacity-15"
                    style={{ color: "#11A79D", fontFamily: "Lil Grotesk Heavy, sans-serif", fontWeight: 900 }}
                  >
                    {fase.num}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(17,167,157,0.1)",
                      color: "#11A79D",
                    }}
                  >
                    {fase.days}
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
                    {idioma === "es" ? "Fase " : "Phase "}
                    {indice + 1} — {fase.name}
                  </h3>
                  {/* distribucion diaria de tiempo de la fase */}
                  <p
                    className="text-xs mb-3 tracking-wide"
                    style={{ color: "#11A79D" }}
                  >
                    {fase.sub}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#0D2B4D", opacity: 0.65 }}
                  >
                    {fase.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
