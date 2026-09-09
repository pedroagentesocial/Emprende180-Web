import type { ReactNode } from "react"
import BarraNavegacion from "@/components/sections/BarraNavegacion"
import PieDePagina from "@/components/sections/PieDePagina"

// estructura comun de las paginas internas: barra clara, contenido y pie
export default function DisposicionPagina({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-col" style={{ background: "#F2F4F7" }}>
      <BarraNavegacion sobreVideo={false} />
      <main className="flex-1 pt-28 pb-16">{children}</main>
      <PieDePagina />
    </div>
  )
}
