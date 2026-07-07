# CorrupcionDB

Plataforma ciudadana y base de datos de código abierto que centraliza, estructura y hace accesible la información sobre casos de corrupción en Chile.

## Propósito

CorrupcionDB nace de la convicción de que la información sobre corrupción debe ser:

- **Pública** — sin muros de pago ni suscripciones
- **Estructurada** — datos normalizados, reutilizables y comparables
- **Verificable** — cada caso cita sus fuentes originales (judiciales, prensa, Contraloría)
- **Colaborativa** — construida por una comunidad de periodistas, abogados, desarrolladores y ciudadanos

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
