import { useIdioma } from "@/i18n/ContextoIdioma"
import { useRutas } from "@/lib/ContextoRutas"

// pie de pagina: logo, enlace a privacidad y copyright
export default function PieDePagina() {
  const { textos } = useIdioma()
  const { navegar } = useRutas()
  return (
    <footer className="py-8 px-6" style={{ background: "#091f38" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        {/* logo con las redes sociales debajo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="/img/logo_hor.png"
            alt="Emprende180"
            className="h-8"
            style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
          />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/emprende180academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icono-social"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Emprende180s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="icono-social"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
              </svg>
            </a>
          </div>
        </div>
        {/* privacidad y copyright */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navegar("/privacy")}
            className="text-xs hover:underline cursor-pointer"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {textos.footer.privacidad}
          </button>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            {textos.footer.copy}
          </p>
        </div>
      </div>
    </footer>
  )
}
