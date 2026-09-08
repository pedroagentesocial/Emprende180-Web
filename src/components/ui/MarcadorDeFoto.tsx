type PropsMarcadorDeFoto = {
  // texto que indica que foto va ahi
  etiqueta: string
  // mas alto si es para foto vertical
  esAlta?: boolean
}

// caja punteada que marca donde va una foto de verdad
export default function MarcadorDeFoto({ etiqueta, esAlta = false }: PropsMarcadorDeFoto) {
  return (
    <div
      className={`marcador-foto rounded-2xl flex flex-col items-center justify-center gap-3 ${
        esAlta ? "min-h-80" : "min-h-56"
      }`}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="8"
          width="32"
          height="24"
          rx="4"
          stroke="#11A79D"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="15"
          cy="19"
          r="4"
          stroke="#11A79D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M4 28 L12 20 L18 26 L25 18 L36 28"
          stroke="#11A79D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#11A79D" }}
      >
        {etiqueta}
      </span>
    </div>
  )
}
