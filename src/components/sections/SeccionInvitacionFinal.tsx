import { useIdioma } from "@/i18n/ContextoIdioma"

// banda final: logo flotante y boton comenzar ahora
export default function SeccionInvitacionFinal() {
  const { textos } = useIdioma()
  return (
    <section
      className="py-16 px-6 text-center"
      style={{ background: "#11A79D" }}
    >
      <div className="max-w-2xl mx-auto">
        <img
          src="/img/logo_ver.png"
          alt="Emprende180"
          className="h-16 mx-auto mb-6 animacion-flotar"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <h2
          className="text-4xl md:text-6xl mb-4"
          style={{ color: "#F2F4F7", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.finalCta.headline}
        </h2>
        <p
          className="text-xl mb-6"
          style={{ color: "rgba(242,244,247,0.8)" }}
        >
          {textos.finalCta.sub}
        </p>
        <button
          className="boton-cta px-10 py-5 rounded-full text-base font-bold"
          style={{ background: "#0D2B4D", color: "#FFFFFF" }}
        >
          {textos.finalCta.cta}
        </button>
      </div>
    </section>
  )
}
