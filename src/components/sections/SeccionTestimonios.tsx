import { useIdioma } from "@/i18n/ContextoIdioma"
import MarcadorDeFoto from "@/components/ui/MarcadorDeFoto"

// testimonios de embajadores en 3 tarjetas
export default function SeccionTestimonios() {
  const { textos } = useIdioma()
  return (
    <section className="py-16 px-6" style={{ background: "#F2F4F7" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl mb-8"
          style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {textos.testimonials.items.map((testimonio, indice) => (
            <div
              key={indice}
              className="flex flex-col gap-5 p-6 rounded-2xl"
              style={{
                background: "white",
                border: "1.5px solid rgba(13,43,77,0.07)",
                boxShadow: "0 2px 12px rgba(13,43,77,0.05)",
              }}
            >
              {/* subrayado decorativo */}
              <div className="w-6 h-0.5" style={{ background: "#11A79D" }} />
              <p
                className="text-lg leading-relaxed flex-1"
                style={{ color: "#0D2B4D" }}
              >
                {testimonio.text}
              </p>
              <div
                className="flex items-center gap-3 pt-3"
                style={{ borderTop: "1px solid rgba(13,43,77,0.07)" }}
              >
                {/* circulo con las iniciales */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "#0D2B4D", color: "#FFFFFF" }}
                >
                  {testimonio.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#0D2B4D" }}
                  >
                    {testimonio.name}
                  </div>
                  <div className="text-xs" style={{ color: "#11A79D" }}>
                    {testimonio.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MarcadorDeFoto etiqueta={textos.photoLabels.success} />
      </div>
    </section>
  )
}
