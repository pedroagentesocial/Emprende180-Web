import { useEffect } from "react"
import BotonContactoFlotante from "@/components/ui/BotonContactoFlotante"
import ProveedorIdioma from "@/i18n/ContextoIdioma"
import ProveedorRutas, { useRutas } from "@/lib/ContextoRutas"
import Inicio from "@/pages/Inicio"
import PaginaBlog from "@/pages/PaginaBlog"
import PaginaPoliticaPrivacidad from "@/pages/PaginaPoliticaPrivacidad"

// muestra la pagina segun la ruta actual; al volver al inicio puede saltar a una seccion
function PaginaActual() {
  const { ruta, seccionDestino } = useRutas()

  useEffect(() => {
    if (seccionDestino) {
      document.getElementById(seccionDestino)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo(0, 0)
    }
  }, [ruta, seccionDestino])

  if (ruta === "/blog") return <PaginaBlog />
  if (ruta === "/privacy") return <PaginaPoliticaPrivacidad />
  return <Inicio />
}

// estructura de la aplicacion: idioma, rutas simples y la pagina actual
export default function App() {
  return (
    <ProveedorIdioma>
      <ProveedorRutas>
        <PaginaActual />
        {/* boton de contacto flotante: visible en todas las paginas */}
        <BotonContactoFlotante />
      </ProveedorRutas>
    </ProveedorIdioma>
  )
}
