# CorrupcionDB

Plataforma ciudadana y base de datos de código abierto que centraliza, estructura y hace accesible la información sobre casos de corrupción en Chile.

## Propósito

CorrupcionDB nace de la convicción de que la información sobre corrupción debe ser:

- **Pública** — sin muros de pago ni suscripciones
- **Estructurada** — datos normalizados, reutilizables y comparables
- **Verificable** — cada caso cita sus fuentes originales (judiciales, prensa, Contraloría)
- **Colaborativa** — construida por una comunidad de periodistas, abogados, desarrolladores y ciudadanos

## Cómo contribuir

### Agregar un caso nuevo

1. Crea un archivo `.md` en `src/content/cases/` con nombre en **kebab-case** (ej: `juan-perez.md`)
2. Sigue el schema definido en `src/content.config.ts` — todos los campos requeridos deben estar presentes
3. Incluye `fuente_url` con un enlace verificable a la fuente original (Poder Judicial, Contraloría, CIPER, etc.)
4. Envía un Pull Request usando la plantilla de caso nuevo

Al abrir el PR, un workflow de GitHub ejecuta `npm run check` para validar el schema automáticamente. Si pasa, se puede mergear. Al mergear a `main`, Vercel redeploya el sitio y el caso aparece en línea sin intervención manual.

## Stack técnico

- [Astro](https://astro.build) — sitio estático (SSG)
- [Tailwind CSS v4](https://tailwindcss.com) — estilos utilitarios
- [TypeScript](https://www.typescriptlang.org)
- Fuentes: Fraunces, Work Sans, JetBrains Mono
- Despliegue estático en `dist/`

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar servidor de desarrollo (`localhost:4321`) |
| `npm run build` | Compilar sitio a `dist/` |
| `npm run preview` | Vista previa del build |
| `npm run check` | Linter / type-check |

## Licencia

Apache 2.0 &mdash; ver [LICENSE](./LICENSE).
