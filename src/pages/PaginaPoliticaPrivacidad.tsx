import { useIdioma } from "@/i18n/ContextoIdioma"
import DisposicionPagina from "@/layouts/DisposicionPagina"

// pagina de politica de privacidad; por ahora solo el titulo, lista para agregar contenido
export default function PaginaPoliticaPrivacidad() {
  const { textos } = useIdioma()
  return (
    <DisposicionPagina>
      <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl md:text-5xl"
          style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.privacidad.titulo}
        </h1>
      </div>
    </DisposicionPagina>
  )
}
