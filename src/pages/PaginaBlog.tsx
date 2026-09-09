import { useIdioma } from "@/i18n/ContextoIdioma"
import DisposicionPagina from "@/layouts/DisposicionPagina"

// pagina del blog; por ahora solo el titulo, lista para agregar contenido
export default function PaginaBlog() {
  const { textos } = useIdioma()
  return (
    <DisposicionPagina>
      <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl md:text-5xl"
          style={{ color: "#0D2B4D", fontFamily: "Lil Grotesk Bold, sans-serif" }}
        >
          {textos.blog.titulo}
        </h1>
      </div>
    </DisposicionPagina>
  )
}
