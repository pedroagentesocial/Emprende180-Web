import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

type ValorRutas = {
  // ruta actual de la aplicacion (ej. "/", "/blog", "/privacy")
  ruta: string
  // seccion de la pagina de inicio a la que hacer scroll al llegar
  seccionDestino: string | null
  // cambia la pagina actual y actualiza la url del navegador
  navegar: (ruta: string, seccionDestino?: string) => void
}

const ContextoRutas = createContext<ValorRutas | null>(null)

// las rutas de la url siempre van en ingles
const rutasConocidas = ["/", "/blog", "/privacy"]

// lee la ruta desde la url del navegador; si no coincide con ninguna, devuelve "/"
function rutaDeLaUrl() {
  const ruta = window.location.pathname.replace(/\/$/, "") || "/"
  return rutasConocidas.includes(ruta) ? ruta : "/"
}

// enrutador minimo con la history api del navegador, sin dependencias
export default function ProveedorRutas({ children }: { children: ReactNode }) {
  const [ruta, setRuta] = useState(rutaDeLaUrl)
  const [seccionDestino, setSeccionDestino] = useState<string | null>(null)

  // mantiene la ruta sincronizada con el boton atras/adelante del navegador
  useEffect(() => {
    const alCambiarHistorial = () => {
      setSeccionDestino(null)
      setRuta(rutaDeLaUrl())
    }
    window.addEventListener("popstate", alCambiarHistorial)
    return () => window.removeEventListener("popstate", alCambiarHistorial)
  }, [])

  const navegar = (nuevaRuta: string, seccion?: string) => {
    window.history.pushState({}, "", nuevaRuta)
    setSeccionDestino(seccion ?? null)
    setRuta(nuevaRuta)
  }

  return (
    <ContextoRutas.Provider value={{ ruta, seccionDestino, navegar }}>
      {children}
    </ContextoRutas.Provider>
  )
}

// hook para leer la ruta actual y navegar entre paginas
export function useRutas() {
  const contexto = useContext(ContextoRutas)
  if (!contexto) {
    throw new Error("useRutas debe usarse dentro de ProveedorRutas")
  }
  return contexto
}
