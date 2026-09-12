import { useIdioma } from "@/i18n/ContextoIdioma"
import RevelarAlDesplazar from "@/components/ui/RevelarAlDesplazar"

// foto descriptiva de cada fase, en el orden en que aparecen
const FOTOS_FASES = [
  "/img/fase1.jpg",
  "/img/fase2.jpg",
  "/img/fase3.jpg",
  "/img/fase4.jpg",
]

// las 4 fases del programa en filas tipo zig-zag: la foto va a sangre,
// pegada a una orilla de la pantalla, y el texto al lado; el lado de la
// foto se alterna en cada fila (1 izq, 2 der, 3 izq, 4 der)
export default function SeccionFases() {
  const { textos } = useIdioma()
  return (
    <section
      id="fases"
      className="py-16 scroll-mt-24"
      style={{ background: "#F2F4F7" }}
    >
      <div className="max-w-5xl mx-auto [800px]">
        <RevelarAlDesplazar className="mb-10">
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
        </RevelarAlDesplazar>
      </div>

      <div>
        {textos.phases.items.map((fase, indice) => {
          // filas impares: foto a la izquierda; pares: foto a la derecha
          const fotoIzquierda = indice % 2 === 0
          return (
            <RevelarAlDesplazar key={indice} retraso={100 + indice * 100}>
              <div className="grid md:grid-cols-2">
                {/* foto a sangre, pegada a la orilla de la pantalla */}
                <div
                  className={`relative h-56 md:h-auto md:min-h-[20rem] ${
                    fotoIzquierda ? "" : "md:order-2"
                  }`}
                >
                  <img
                    src={FOTOS_FASES[indice]}
                    alt={fase.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* bloque de texto con padding en las orillas */}
                <div className="flex items-center px-6 py-8 md:px-16 md:py-10 lg:px-20">
                  <div className="max-w-xl mx-auto">
                    {/* numero decorativo + rango de dias */}
                    <div className="flex flex-row items-center gap-4 mb-4">
                      <span
                        className="text-5xl font-black opacity-30"
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
                    <h3
                      className="text-2xl mb-1"
                      style={{
                        color: "#0D2B4D",
                        fontFamily: "Lil Grotesk Bold, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {fase.name}
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
            </RevelarAlDesplazar>
          )
        })}
      </div>
    </section>
  )
}
