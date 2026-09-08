# Emprende180-Web

Landing page del programa **Emprende180**: un plan de 90 días para construir un negocio propio con método, constancia y acompañamiento. Sitio de una sola página, bilingüe (español/inglés) y responsive.

## Stack

- **React 19** + **TypeScript** (modo strict)
- **Vite 8**
- **Tailwind CSS v4** (vía plugin de Vite, sin archivo de configuración)
- Entorno de desarrollo y deploy: **Figma Make** (`.figma/make/`)

## Desarrollo

El proyecto corre dentro de Figma Make, que mantiene un dev server en el puerto `8443` con hot reload. Fuera de ese entorno:

```bash
pnpm install
pnpm dev      # dev server
pnpm build    # build de producción → dist/
pnpm format   # oxfmt
```

## Estructura

```
src/
├── App.tsx                              # composición de secciones dentro del ProveedorIdioma
├── main.tsx                             # entrypoint
├── index.css                            # Tailwind, fuentes, tokens y animaciones
├── i18n/
│   ├── espanol.ts                       # textos en español (exporta el tipo Traduccion)
│   ├── ingles.ts                        # textos en inglés, tipado contra espanol.ts
│   └── ContextoIdioma.tsx               # ProveedorIdioma + hook useIdioma()
├── hooks/
│   └── useContadorAnimado.ts            # animación de contadores al entrar en viewport
├── lib/
│   └── irALaSeccion.ts                  # scroll suave hasta una sección por id
├── components/
│   ├── ui/                              # piezas reutilizables
│   │   ├── TarjetaEstadistica.tsx       # contador animado + etiqueta
│   │   ├── PreguntaFrecuente.tsx        # pregunta desplegable del acordeón
│   │   └── MarcadorDeFoto.tsx           # caja que marca dónde irá una foto
│   └── sections/                        # un archivo por bloque de la página
│       ├── BarraNavegacion.tsx          # barra fija con logo, idioma y CTA
│       ├── SeccionHero.tsx              # primera pantalla con titular y CTA
│       ├── SeccionElPrograma.tsx        # "El programa"
│       ├── SeccionEstadisticas.tsx      # franja de 4 contadores animados
│       ├── SeccionFases.tsx             # las 4 fases en tarjetas
│       ├── SeccionValores.tsx           # los 5 valores
│       ├── SeccionTestimonios.tsx       # testimonios de embajadores
│       ├── SeccionPreguntasFrecuentes.tsx # preguntas frecuentes (acordeón)
│       ├── SeccionInvitacionFinal.tsx   # banda final de invitación
│       └── PieDePagina.tsx              # pie de página
└── assets/fonts/                        # Lil Grotesk (woff2 local)
public/img/                              # logos y foto del hero, servidos tal cual
.figma/make/                             # configuración de Figma Make (SEO, deploy)
```

**Convención de nombres**: las carpetas usan los nombres estándar del ecosistema (`components`, `sections`, `ui`, `i18n`, `lib`, `hooks`) y los componentes, funciones y variables están en español (`SeccionHero`, `irALaSeccion`, `cambiarIdioma`...). Los comentarios del código son simples y sin tildes. Únicas excepciones por reglas de React o de la plataforma: los hooks empiezan con `use` (`useIdioma`, `useContadorAnimado`) y el entrypoint conserva los nombres documentados por Figma Make (`App.tsx`, `main.tsx`, `index.css`).

## Internacionalización

- El copy vive completo en `src/i18n/espanol.ts` y `src/i18n/ingles.ts`.
- `ingles.ts` está tipado como `Traduccion = typeof espanol` — si agregas un texto en un idioma y olvidas el otro, TypeScript falla.
- Desde cualquier componente: `const { textos, idioma, cambiarIdioma } = useIdioma()`.

## Estilos

Paleta de marca (definida como tokens `@theme inline` en `src/index.css`):

| Token             | Color     |
| ----------------- | --------- |
| `--color-marino`  | `#0D2B4D` |
| `--color-turquesa`| `#11A79D` |
| `--color-menta`   | `#A7E1DA` |
| `--color-blanco-hueso` | `#F2F4F7` |

Fuentes: **Lil Grotesk** para títulos (woff2 local) y **DM Sans** para el cuerpo (Google Fonts). Las clases compartidas (`.boton-cta`, `.tarjeta-fase`, `.marcador-foto`) y las animaciones están en `src/index.css`.

## Notas

- `.figma/make/site.json` tiene `robots.index: false` — la página no se indexa en buscadores hasta cambiarlo.
- El copyright del footer dice 2024 — actualizar cuando corresponda.
