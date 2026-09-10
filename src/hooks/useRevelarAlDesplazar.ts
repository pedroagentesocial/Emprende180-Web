import { useEffect, useRef, useState } from "react"

// revela un bloque la primera vez que entra en pantalla
export default function useRevelarAlDesplazar(umbral = 0.15) {
  const [estaVisible, setEstaVisible] = useState(false)
  const referencia = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = referencia.current
    // sin IntersectionObserver dejamos el contenido visible para no ocultarlo
    if (!elemento || !("IntersectionObserver" in window)) {
      setEstaVisible(true)
      return
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstaVisible(true)
          observador.disconnect()
        }
      },
      { threshold: umbral },
    )
    observador.observe(elemento)
    return () => observador.disconnect()
  }, [umbral])

  return { referencia, estaVisible }
}
