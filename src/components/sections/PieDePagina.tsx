import { useIdioma } from "@/i18n/ContextoIdioma"

// pie de pagina: logo y copyright
export default function PieDePagina() {
  const { textos } = useIdioma()
  return (
    <footer className="py-8 px-6" style={{ background: "#091f38" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="/img/logo_hor.png"
          alt="Emprende180"
          className="h-8"
          style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
        />
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
          {textos.footer.copy}
        </p>
      </div>
    </footer>
  )
}
