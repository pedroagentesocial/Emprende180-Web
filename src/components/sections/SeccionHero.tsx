import { useEffect, useRef, useState } from "react"
import { useIdioma } from "@/i18n/ContextoIdioma"
import type { Portada } from "@/i18n/espanol"
import irALaSeccion from "@/lib/irALaSeccion"

const segundosPorVideo = 8

type PropsContenidoPortada = {
  portada: Portada
  cta: string
  nota: string
}

// columna de texto de una portada; se alinea segun la portada
function ContenidoPortada({ portada, cta, nota }: PropsContenidoPortada) {
  const esDerecha = portada.alineacion === "derecha"
  return (
    <div
      className={`relative w-full px-8 md:px-16 lg:px-24 py-24 ${
        esDerecha ? "flex justify-end" : ""
      }`}
    >
      <div className={`max-w-xl animacion-aparecer ${esDerecha ? "text-right" : ""}`}>
        <h1
          className="mb-5"
          style={{
            fontFamily: "Lil Grotesk Heavy, sans-serif",
            fontWeight: 900,
            color: "#FFFFFF",
            fontSize: "clamp(40px,6.5vw,78px)",
            lineHeight: 1.05,
          }}
        >
          {portada.titulo}
          {portada.titulo2 && (
            <>
              <br />
              <span style={{ color: "#A7E1DA" }}>{portada.titulo2}</span>
            </>
          )}
        </h1>
        {portada.sub && (
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {portada.sub}
          </p>
        )}
        <div
          className={`flex flex-col gap-3 items-start ${
            esDerecha ? "sm:flex-row-reverse" : "sm:flex-row"
          }`}
        >
          {/* destino del cta "unete" de la barra */}
          <button
            id="join"
            onClick={() => irALaSeccion("fases")}
            className="boton-cta px-8 py-4 rounded-full text-base font-bold"
            style={{ background: "#11A79D", color: "#F2F4F7" }}
          >
            {cta}
          </button>
          <span
            className="self-center text-base"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {nota}
          </span>
        </div>
      </div>
    </div>
  )
}

// hero a pantalla completa: videos de fondo que se alternan, texto encima
export default function SeccionHero() {
  const { textos } = useIdioma()
  const portadas = textos.hero.portadas
  const [indiceActivo, setIndiceActivo] = useState(0)
  const [reinicios, setReinicios] = useState(0)
  const referenciasVideos = useRef<(HTMLVideoElement | null)[]>([])
  const portadaActiva = portadas[indiceActivo]

  // cambio automatico de video; reinicios resetea el temporizador
  useEffect(() => {
    const idIntervalo = setInterval(() => {
      setIndiceActivo((anterior) => (anterior + 1) % portadas.length)
    }, segundosPorVideo * 1000)
    return () => clearInterval(idIntervalo)
  }, [reinicios])

  // solo el video activo se reproduce
  useEffect(() => {
    referenciasVideos.current.forEach((video, indice) => {
      if (!video) return
      if (indice === indiceActivo) video.play().catch(() => {})
      else video.pause()
    })
  }, [indiceActivo])

  const elegirVideo = (indice: number) => {
    setIndiceActivo(indice)
    setReinicios((valor) => valor + 1)
  }

  const cambiarVideo = (direccion: 1 | -1) => {
    elegirVideo((indiceActivo + direccion + portadas.length) % portadas.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* videos de fondo, se cruzan con un fundido */}
      {portadas.map((portada, indice) => (
        <video
          key={portada.video}
          ref={(elemento) => {
            referenciasVideos.current[indice] = elemento
          }}
          src={portada.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: indiceActivo === indice ? 1 : 0 }}
        />
      ))}

      {/* atenuado navy, mas oscuro del lado donde esta el texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            portadaActiva.alineacion === "derecha"
              ? "linear-gradient(to left, rgba(9,31,56,0.78) 0%, rgba(9,31,56,0.45) 55%, rgba(9,31,56,0.3) 100%)"
              : "linear-gradient(to right, rgba(9,31,56,0.78) 0%, rgba(9,31,56,0.45) 55%, rgba(9,31,56,0.3) 100%)",
        }}
      />

      {/* contenido sobre el video; la key reinicia la animacion al cambiar */}
      <ContenidoPortada
        key={indiceActivo}
        portada={portadaActiva}
        cta={textos.hero.cta}
        nota={textos.hero.note}
      />

      {/* flechas para cambiar de video */}
      <button
        onClick={() => cambiarVideo(-1)}
        aria-label="Video anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 5 L8 12 L15 19"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => cambiarVideo(1)}
        aria-label="Video siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5 L16 12 L9 19"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* lineas para cambiar de video */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {portadas.map((portada, indice) => (
          <button
            key={portada.video}
            onClick={() => elegirVideo(indice)}
            aria-label={`Video ${indice + 1}`}
            className="h-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: indiceActivo === indice ? "40px" : "16px",
              background: indiceActivo === indice ? "#11A79D" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  )
}
