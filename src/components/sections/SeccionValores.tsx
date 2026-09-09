import { useIdioma } from "@/i18n/ContextoIdioma"

// los 5 valores en rejilla sobre fondo navy
export default function SeccionValores() {
  const { textos } = useIdioma()
  return (
    <section
      id="valores"
      className="py-16 px-6 scroll-mt-24"
      style={{ background: "#0D2B4D" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-8"
          style={{ color: "#FFFFFF", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.values.title}
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
          {textos.values.items.map((valor, indice) => (
            <div
              key={indice}
              className="flex flex-col gap-3 p-6"
              style={{ background: "#0D2B4D" }}
            >
              {/* subrayado decorativo */}
              <div className="w-8 h-0.5" style={{ background: "#11A79D" }} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
