import { useIdioma } from "@/i18n/ContextoIdioma"

// ENLACE DEL BOTON DE CONTACTO: cambialo aqui cuando tengas el definitivo
// ejemplos: "https://wa.me/5215512345678" (WhatsApp) o "tel:+15551234567" (llamada)
const ENLACE_CONTACTO = "#"

// boton redondo con telefono, fijo en la esquina inferior derecha y visible en toda la app
// el resplandor blanco y la sombra le dan contraste sobre fondos claros y oscuros por igual
export default function BotonContactoFlotante() {
  const { textos } = useIdioma()

  return (
    <a
      href={ENLACE_CONTACTO}
      aria-label={textos.contacto.aria}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 md:right-8 md:bottom-8 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
      style={{
        background: "#11A79D",
        // resplandor blanco suave alrededor + sombra para separarlo del fondo
        
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 md:h-7 md:w-7"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
  )
}
