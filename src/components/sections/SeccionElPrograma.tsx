import { useIdioma } from "@/i18n/ContextoIdioma"

// bloque "el programa" sobre fondo navy, con foto al lado
export default function SeccionElPrograma() {
  const { textos } = useIdioma()
  return (
    <section
      id="programa"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "#0D2B4D" }}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ color: "#FFFFFF", fontFamily: "Lil Grotesk Bold, sans-serif" }}
          >
            {textos.about.title}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#FFFFFF", opacity: 0.85 }}
          >
            {textos.about.body}
          </p>
        </div>
        <img
          src="/img/stock1.jpg"
          alt="Emprende180"
          className="rounded-2xl w-full object-cover"
        />
      </div>
    </section>
  )
}
