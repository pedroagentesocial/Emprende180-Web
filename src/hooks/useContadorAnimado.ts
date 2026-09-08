import { useState, useEffect } from "react"

// anima un numero desde 0 hasta valorObjetivo, arranca cuando animar es true
export default function useContadorAnimado(
  valorObjetivo: number,
  duracion = 1200,
  animar = false,
) {
  const [valorActual, setValorActual] = useState(0)
  useEffect(() => {
    if (!animar) return
    let progreso = 0
    const incrementoPorCuadro = valorObjetivo / (duracion / 16)
    const idIntervalo = setInterval(() => {
      progreso += incrementoPorCuadro
      if (progreso >= valorObjetivo) {
        setValorActual(valorObjetivo)
        clearInterval(idIntervalo)
      } else setValorActual(Math.floor(progreso))
    }, 16)
    return () => clearInterval(idIntervalo)
  }, [valorObjetivo, animar])
  return valorActual
}
