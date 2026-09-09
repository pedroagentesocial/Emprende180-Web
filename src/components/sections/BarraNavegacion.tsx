import { useEffect, useState } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import { useRutas } from "@/lib/ContextoRutas"
import irALaSeccion from "@/lib/irALaSeccion"

type PropsBarraNavegacion = {
  // false en paginas sin video de fondo, para que la barra siempre use fondo claro
  sobreVideo?: boolean
}

// barra fija con blur; sobre el video usa tinte navy y al bajar pasa a fondo claro
export default function BarraNavegacion({ sobreVideo = true }: PropsBarraNavegacion) {
  const { idioma, cambiarIdioma, textos } = useIdioma()
  const { ruta, navegar } = useRutas()
  const [estaDesplazada, setEstaDesplazada] = useState(false)
  const fondoClaro = estaDesplazada || !sobreVideo

  useEffect(() => {
    const alHacerScroll = () => setEstaDesplazada(window.scrollY > 50)
    window.addEventListener("scroll", alHacerScroll, { passive: true })
    return () => window.removeEventListener("scroll", alHacerScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: fondoClaro ? "rgba(242,244,247,0.95)" : "rgba(9,31,56,0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: fondoClaro
          ? "1px solid rgba(13,43,77,0.08)"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: fondoClaro
          ? "0 1px 8px rgba(13,43,77,0.08)"
          : "0 2px 14px rgba(9,31,56,0.28)",
      }}
    >
      {/* mismo padding horizontal que el texto del hero, para que queden alineados */}
      <div className="px-8 md:px-16 lg:px-24 py-3.5 flex items-center justify-between">
        {/* el logo va en blanco sobre el video y al tocarlo vuelve al inicio */}
        <button
          onClick={() =>
            ruta === "/"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : navegar("/")
          }
          aria-label="Volver al inicio"
          className="cursor-pointer"
        >
          <img
            src="/img/logo_hor.png"
            alt="Emprende180"
            className="h-12 transition-all duration-300"
            style={{ filter: fondoClaro ? "none" : "brightness(0) invert(1)" }}
          />
        </button>
        {/* enlaces a secciones de esta pagina o a otras paginas */}
        <div className="hidden xl:flex items-center gap-6">
          {textos.nav.links.map((enlace) => (
            <button
              key={enlace.titulo}
              onClick={() => {
                if (enlace.ruta) navegar(enlace.ruta)
                else if (ruta !== "/") navegar("/", enlace.id)
                else if (enlace.id) irALaSeccion(enlace.id)
              }}
              className="enlace-navegacion text-sm cursor-pointer"
              style={{ color: fondoClaro ? "#0D2B4D" : "#FFFFFF" }}
            >
              {enlace.titulo}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => cambiarIdioma(idioma === "es" ? "en" : "es")}
            className="px-3.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: fondoClaro ? "#0D2B4D" : "rgba(255,255,255,0.7)",
              color: fondoClaro ? "#0D2B4D" : "#FFFFFF",
              background: "transparent",
            }}
          >
            {textos.nav.lang}
          </button>
          {/* "unete" lleva al boton con id="join" del hero */}
          <button
            onClick={() => (ruta !== "/" ? navegar("/", "join") : irALaSeccion("join"))}
            className="boton-cta px-5 py-2 rounded-full text-sm font-bold hidden sm:block"
            style={{
              background: fondoClaro ? "#0D2B4D" : "#11A79D",
              color: "#FFFFFF",
            }}
          >
            {textos.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  )
}
