import { useState } from "react"

type PropsPreguntaFrecuente = {
  // la pregunta que se ve siempre
  pregunta: string
  // la respuesta que aparece al abrir
  respuesta: string
}

// pregunta desplegable del acordeon de FAQ
export default function PreguntaFrecuente({ pregunta, respuesta }: PropsPreguntaFrecuente) {
  const [estaAbierta, setEstaAbierta] = useState(false)
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgba(13,43,77,0.12)" }}
      onClick={() => setEstaAbierta(!estaAbierta)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-semibold text-base" style={{ color: "#0D2B4D" }}>
          {pregunta}
        </span>
        <span
          className="text-xl flex-shrink-0 transition-transform duration-200"
          style={{
            color: "#11A79D",
            transform: estaAbierta ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>
      {estaAbierta && (
        <div
          className="pb-5 text-base leading-relaxed"
          style={{ color: "#0D2B4D", opacity: 0.65 }}
        >
          {respuesta}
        </div>
      )}
    </div>
  )
}
