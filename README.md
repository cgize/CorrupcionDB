# CorrupcionDB

Plataforma ciudadana y base de datos que centraliza, estructura y hace accesible la información sobre casos de corrupción en Chile.

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

Este proyecto usa un **esquema dual** que separa el código de los datos:

### Código y plataforma — PolyForm Noncommercial 1.0.0

El código fuente del sitio, los componentes, los layouts, los scripts de build
y la infraestructura están licenciados bajo **PolyForm Noncommercial 1.0.0**.
Esto permite ver, estudiar, modificar y colaborar, pero **prohíbe cualquier uso
comercial** sin autorización expresa del titular. El titular de los derechos es
`cgize <cgize@aol.com>`.

Ver [LICENSE](./LICENSE) (raíz del repo) para el texto completo.

### Datos de casos — Creative Commons Atribución 4.0 Internacional (CC BY 4.0)

Los archivos en `src/content/cases/` y, en general, toda la información
fáctica sobre casos de corrupción (estructurada como Markdown con frontmatter,
JSON derivado o cualquier formato de datos) se publican bajo **CC BY 4.0**.
Cualquiera puede compartirlos, adaptarlos y usarlos incluso comercialmente,
**mientras atribuya** a CorrupcionDB como fuente.

Ver [`src/content/cases/LICENSE`](./src/content/cases/LICENSE) y el texto legal
en <https://creativecommons.org/licenses/by/4.0/legalcode>.

### Para contribuidores

Al enviar un Pull Request aceptas que:

- Tus aportes al **código** se publican bajo PolyForm Noncommercial 1.0.0.
- Tus aportes a **datos de casos** se publican bajo CC BY 4.0.
- Mantienes la titularidad de tu contribución, pero otorgas una licencia
  no exclusiva, mundial, perpetua e irrevocable al proyecto para distribuirla
  bajo las licencias indicadas.

Si en el futuro necesitas usar el código con fines comerciales, contáctame para
negociar una licencia comercial aparte.
