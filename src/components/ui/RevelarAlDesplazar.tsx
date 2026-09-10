import type { ReactNode } from "react"
import useRevelarAlDesplazar from "@/hooks/useRevelarAlDesplazar"

type PropsRevelarAlDesplazar = {
  children: ReactNode
  // milisegundos de espera antes de entrar, para escalonar bloques hermanos
  retraso?: number
  // clases extra para colocar el bloque dentro de su rejilla
  className?: string
}

// envuelve contenido y lo revela con un fundido hacia arriba al hacer scroll
export default function RevelarAlDesplazar({
  children,
  retraso = 0,
  className = "",
}: PropsRevelarAlDesplazar) {
  const { referencia, estaVisible } = useRevelarAlDesplazar()
  return (
    <div
      ref={referencia}
      className={`revelar-al-desplazar ${
        estaVisible ? "revelar-al-desplazar--visible" : ""
      } ${className}`}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
    >
      {children}
    </div>
  )
}
