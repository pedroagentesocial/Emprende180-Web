import { useIdioma } from "@/i18n/ContextoIdioma"
import PreguntaFrecuente from "@/components/ui/PreguntaFrecuente"

// preguntas frecuentes en acordeon
export default function SeccionPreguntasFrecuentes() {
  const { textos } = useIdioma()
  return (
    <section className="py-16 px-6" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-5xl mb-8"
          style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.faq.title}
        </h2>
        <div>
          {textos.faq.items.map((pregunta, indice) => (
            <PreguntaFrecuente
              key={indice}
              pregunta={pregunta.q}
              respuesta={pregunta.a}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
