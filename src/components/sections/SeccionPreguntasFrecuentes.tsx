import { useIdioma } from "@/i18n/ContextoIdioma"
import PreguntaFrecuente from "@/components/ui/PreguntaFrecuente"
import RevelarAlDesplazar from "@/components/ui/RevelarAlDesplazar"

// preguntas frecuentes en acordeon
export default function SeccionPreguntasFrecuentes() {
  const { textos } = useIdioma()
  return (
    <section
      id="preguntas"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "white" }}
    >
      <div className="max-w-3xl mx-auto">
        <RevelarAlDesplazar>
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {textos.faq.title}
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
