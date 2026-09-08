import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import espanol from "./espanol"
import ingles from "./ingles"

export type Idioma = "es" | "en"

const textosPorIdioma = { es: espanol, en: ingles }

type ValorContextoIdioma = {
  // idioma actual de la pagina
  idioma: Idioma
  // cambia el idioma de toda la pagina
  cambiarIdioma: (idioma: Idioma) => void
  // textos del idioma activo, listos para renderizar
  textos: typeof espanol
}

const ContextoIdioma = createContext<ValorContextoIdioma | null>(null)

// guarda el idioma elegido y reparte los textos a toda la pagina
export default function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>("es")

  return (
    <ContextoIdioma.Provider
      value={{ idioma, cambiarIdioma: setIdioma, textos: textosPorIdioma[idioma] }}
    >
      {children}
    </ContextoIdioma.Provider>
  )
}

// hook para leer el idioma y los textos desde cualquier componente
export function useIdioma() {
  const contexto = useContext(ContextoIdioma)
  if (!contexto) {
    throw new Error("useIdioma debe usarse dentro de ProveedorIdioma")
  }
  return contexto
}
