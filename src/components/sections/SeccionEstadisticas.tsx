import { useEffect, useRef, useState } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import TarjetaEstadistica from "@/components/ui/TarjetaEstadistica"

// franja de contadores; arrancan cuando entran en pantalla
export default function SeccionEstadisticas() {
  const { textos } = useIdioma()
  const [estadisticasVisibles, setEstadisticasVisibles] = useState(false)
  const referenciaEstadisticas = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) setEstadisticasVisibles(true)
      },
      { threshold: 0.2 },
    )
    if (referenciaEstadisticas.current) observador.observe(referenciaEstadisticas.current)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={referenciaEstadisticas}
      style={{
        background: "#F2F4F7",
        borderBottom: "1px solid rgba(13,43,77,0.08)",
      }}
    >
      <div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
        style={{ borderColor: "rgba(13,43,77,0.08)" }}
      >
        {textos.stats.map((estadistica, indice) => (
          <TarjetaEstadistica
            key={indice}
            valorObjetivo={estadistica.value}
            etiqueta={estadistica.label}
            sufijo={estadistica.suffix}
            animar={estadisticasVisibles}
          />
        ))}
      </div>
    </div>
  )
}
