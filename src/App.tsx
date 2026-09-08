import ProveedorIdioma from "@/i18n/ContextoIdioma"
import BarraNavegacion from "@/components/sections/BarraNavegacion"
import SeccionHero from "@/components/sections/SeccionHero"
import SeccionElPrograma from "@/components/sections/SeccionElPrograma"
import SeccionEstadisticas from "@/components/sections/SeccionEstadisticas"
import SeccionFases from "@/components/sections/SeccionFases"
import SeccionValores from "@/components/sections/SeccionValores"
import SeccionTestimonios from "@/components/sections/SeccionTestimonios"
import SeccionPreguntasFrecuentes from "@/components/sections/SeccionPreguntasFrecuentes"
import SeccionInvitacionFinal from "@/components/sections/SeccionInvitacionFinal"
import PieDePagina from "@/components/sections/PieDePagina"

export default function App() {
  return (
    <ProveedorIdioma>
      <div className="min-h-full" style={{ background: "#F2F4F7" }}>
        <BarraNavegacion />
        <SeccionHero />
        <SeccionElPrograma />
        <SeccionEstadisticas />
        <SeccionFases />
        <SeccionValores />
        <SeccionTestimonios />
        <SeccionPreguntasFrecuentes />
        <SeccionInvitacionFinal />
        <PieDePagina />
      </div>
    </ProveedorIdioma>
  )
}
