import useContadorAnimado from "@/hooks/useContadorAnimado"

type PropsTarjetaEstadistica = {
  // numero final del contador (ej. 90 dias, 2 horas)
  valorObjetivo: number
  // texto que describe la estadistica
  etiqueta: string
  // simbolo pegado al numero ("+", "h", "")
  sufijo: string
  // arranca la animacion cuando es true
  animar: boolean
}

// contador animado de la franja de estadisticas
export default function TarjetaEstadistica({
  valorObjetivo,
  etiqueta,
  sufijo,
  animar,
}: PropsTarjetaEstadistica) {
  const valorAnimado = useContadorAnimado(valorObjetivo, 1200, animar)
  return (
    <div className="flex flex-col items-center gap-2 py-6 px-6">
      <span
        className="text-5xl md:text-6xl font-black"
        style={{ color: "#11A79D", fontFamily: "Lil Grotesk Heavy, sans-serif", fontWeight: 900 }}
      >
        {valorAnimado}
        {sufijo}
      </span>
      <span
        className="text-base font-medium text-center"
        style={{ color: "#0D2B4D", opacity: 0.6 }}
      >
        {etiqueta}
      </span>
    </div>
  )
}
