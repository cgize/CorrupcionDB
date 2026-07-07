# Contribuir a CorrupcionDB

Gracias por tu interés en contribuir. Esta guía describe cómo participar en el proyecto.

## Cómo contribuir

### Reportar un caso de corrupción

1. Crea un archivo JSON o YAML con la información del caso siguiendo el esquema definido en `src/content/cases/`
2. Incluye fuentes verificables (causas judiciales, reportajes de prensa, informes de Contraloría)
3. Envía un Pull Request o abre un Issue con la propuesta

### Reportar bugs o sugerir mejoras

Abre un [Issue](https://github.com/anomalyco/CorrupcionDB/issues) describiendo el problema o la mejora.

### Desarrollo

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feat/mi-cambio`)
3. Instala dependencias (`npm install`)
4. Ejecuta el servidor de desarrollo (`npm run dev`)
5. Asegúrate de que `npm run check` pase sin errores
6. Haz commit y envía un Pull Request

## Convenciones

- **Commits:** usar [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, etc.)
- **Ramas:** `feat/`, `fix/`, `docs/` seguido de un nombre descriptivo en kebab-case
- **Código:** seguir el estilo existente (TypeScript, Astro, Tailwind)

## Código de conducta

Este proyecto sigue un código de conducta basado en el respeto y la colaboración abierta. No se tolera discriminación, acoso ni malas prácticas de atribución de fuentes.
