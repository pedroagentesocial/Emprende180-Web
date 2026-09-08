import { useEffect, useState } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import irALaSeccion from "@/lib/irALaSeccion"

// barra fija; cambia a fondo solido con blur despues de 50px de scroll
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
        background: estaDesplazada ? "rgba(242,244,247,0.95)" : "transparent",
        backdropFilter: estaDesplazada ? "blur(12px)" : "none",
        borderBottom: estaDesplazada ? "1px solid rgba(13,43,77,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/img/logo_hor.png" alt="Emprende180" className="h-10" />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => cambiarIdioma(idioma === "es" ? "en" : "es")}
            className="px-3 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: "#0D2B4D",
              color: "#0D2B4D",
              background: "transparent",
            }}
          >
            {textos.nav.lang}
          </button>
          {/* "unete" lleva al boton con id="join" del hero */}
          <button
            onClick={() => irALaSeccion("join")}
            className="boton-cta px-5 py-2 rounded-full text-sm font-bold hidden sm:block"
            style={{ background: "#0D2B4D", color: "#FFFFFF" }}
          >
            {textos.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  )
}
