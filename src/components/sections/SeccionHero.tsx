import { useIdioma } from "@/i18n/ContextoIdioma"
import irALaSeccion from "@/lib/irALaSeccion"

// primera pantalla: titular, subtitulo, cta y foto
export default function SeccionHero() {
  const { textos } = useIdioma()
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* resplandor decorativo de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #A7E1DA 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-[3fr_2fr] gap-10 items-center py-12">
        <div>
          <h1
            className="mb-5"
            style={{
              fontFamily: "Lil Grotesk Heavy, sans-serif",
              fontWeight: 900,
              color: "#0D2B4D",
              fontSize: "clamp(40px,6.5vw,78px)",
              lineHeight: 1.05,
            }}
          >
            {textos.hero.headline}
            <br />
            <span style={{ color: "#11A79D" }}>{textos.hero.headline2}</span>
          </h1>
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ color: "#0D2B4D", opacity: 0.65 }}
          >
            {textos.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            {/* destino del cta "unete" de la barra */}
            <button
              id="join"
              onClick={() => irALaSeccion("phases")}
              className="boton-cta px-8 py-4 rounded-full text-base font-bold"
              style={{ background: "#11A79D", color: "#F2F4F7" }}
            >
              {textos.hero.cta}
            </button>
            <span
              className="self-center text-base"
              style={{ color: "#0D2B4D", opacity: 0.5 }}
            >
              {textos.hero.note}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/img/stock1.jpg"
            alt="Emprende180"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
