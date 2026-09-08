// scroll suave hasta la seccion con ese id
export default function irALaSeccion(idSeccion: string) {
  document.getElementById(idSeccion)?.scrollIntoView({ behavior: "smooth" })
}
