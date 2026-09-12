import { useIdioma } from "@/i18n/ContextoIdioma"
import PreguntaFrecuente from "@/components/ui/PreguntaFrecuente"
import RevelarAlDesplazar from "@/components/ui/RevelarAlDesplazar"

// preguntas frecuentes en acordeon
export default function SeccionPreguntasFrecuentes() {
  const { textos } = useIdioma()
  // el titulo viene en dos renglones desde las traducciones; el segundo
  // renglon se resalta en verde fuerte
  const [linea1, linea2] = textos.faq.title.split("\n")
  return (
    <section
      id="preguntas"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "white" }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 md:gap-16">
        {/* titulo a la izquierda, ocupando la mitad de la seccion y
            centrado verticalmente a la altura del acordeon */}
        <RevelarAlDesplazar className="md:flex md:items-center">
          <h2
            className="text-5xl md:text-6xl mb-8 md:mb-0"
            style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {linea1}
            <br />
            <span style={{ color: "#11A79D", fontFamily: "Lil Grotesk Bold, sans-serif" }}>{linea2}</span>
          </h2>
        </RevelarAlDesplazar>
        <div>
          {textos.faq.items.map((pregunta, indice) => (
            <RevelarAlDesplazar key={indice} retraso={100 + indice * 100}>
              <PreguntaFrecuente pregunta={pregunta.q} respuesta={pregunta.a} />
            </RevelarAlDesplazar>
          ))}
        </div>
      </div>
    </section>
  )
}
