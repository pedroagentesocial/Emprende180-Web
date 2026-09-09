import { useEffect, useState } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import irALaSeccion from "@/lib/irALaSeccion"

// barra fija con blur; sobre el video usa tinte navy y al bajar pasa a fondo claro
export default function BarraNavegacion() {
  const { idioma, cambiarIdioma, textos } = useIdioma()
  const [estaDesplazada, setEstaDesplazada] = useState(false)

  useEffect(() => {
    const alHacerScroll = () => setEstaDesplazada(window.scrollY > 50)
    window.addEventListener("scroll", alHacerScroll, { passive: true })
    return () => window.removeEventListener("scroll", alHacerScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: estaDesplazada ? "rgba(242,244,247,0.95)" : "rgba(9,31,56,0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: estaDesplazada
          ? "1px solid rgba(13,43,77,0.08)"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: estaDesplazada
          ? "0 1px 8px rgba(13,43,77,0.08)"
          : "0 2px 14px rgba(9,31,56,0.28)",
      }}
    >
      {/* mismo padding horizontal que el texto del hero, para que queden alineados */}
      <div className="px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between">
        {/* el logo va en blanco sobre el video y al tocarlo vuelve al inicio */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver al inicio"
          className="cursor-pointer"
        >
          <img
            src="/img/logo_hor.png"
            alt="Emprende180"
            className="h-12 transition-all duration-300"
            style={{ filter: estaDesplazada ? "none" : "brightness(0) invert(1)" }}
          />
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => cambiarIdioma(idioma === "es" ? "en" : "es")}
            className="px-4 py-2 rounded-full text-base font-semibold border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: estaDesplazada ? "#0D2B4D" : "rgba(255,255,255,0.7)",
              color: estaDesplazada ? "#0D2B4D" : "#FFFFFF",
              background: "transparent",
            }}
          >
            {textos.nav.lang}
          </button>
          {/* "unete" lleva al boton con id="join" del hero */}
          <button
            onClick={() => irALaSeccion("join")}
            className="boton-cta px-6 py-2.5 rounded-full text-base font-bold hidden sm:block"
            style={{
              background: estaDesplazada ? "#0D2B4D" : "#11A79D",
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
