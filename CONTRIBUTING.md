# Contribuir a CorrupcionDB

Gracias por tu interés en contribuir. Esta guía describe cómo participar en el proyecto.

---

## Agregar un caso de corrupción

### Requisitos previos

- Una **fuente verificable** (Poder Judicial, Contraloría, Ministerio Público, CIPER, Interferencia, prensa nacional, etc.).
- El caso debe referirse a **una persona física** como `implicado`. El schema rechaza nombres de "caso paraguas". Usa el campo `caso` para agrupar varias personas en un mismo escándalo.

### Paso 1: Crear el archivo

Crea un archivo `src/content/cases/{nombre-persona}.md` con el nombre de la persona en **kebab-case** (minúsculas, sin acentos, guiones en lugar de espacios). Ejemplos:

- `juan-perez-gonzalez.md`
- `cathy-barriga-guerra.md`
- `sebastian-davalos-bachelet.md`

El archivo usa **frontmatter YAML** entre delimitadores `---`. El cuerpo del archivo (debajo del frontmatter) es opcional.

### Paso 2: Completar el frontmatter

#### Campos requeridos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `implicado` | `string` | Nombre completo de la persona investigada. **Debe ser una persona física**, no un nombre genérico de caso. |
| `cargo` | `string` | Cargo que ostentaba al momento de los hechos (ej: "Ex alcalde de Maipú"). |
| `delito` | `enum` | Tipo de delito. Ver [tipos de delito](#tipos-de-delito). |
| `estado` | `enum` | Fase del caso: `active` \| `investigation` \| `pending` \| `resolved` \| `archived`. |
| `fuente` | `string` | Nombre de la fuente principal (ej: "CIPER Chile", "Poder Judicial de Chile"). |
| `fuente_url` | `string` (URL) | Enlace verificable a la fuente. Debe ser una URL válida. |
| `fuente_tipo` | `enum` | Tipo de fuente: `oficial` \| `prensa` \| `investigacion`. |
| `fecha_inicio` | `date` | Fecha de inicio del caso en formato `YYYY-MM-DD`. |
| `fecha_actualizacion` | `date` | Fecha de última actualización en formato `YYYY-MM-DD`. |

#### Campos opcionales

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `caso` | `{id: string, nombre: string}` | Agrupa personas investigadas en el mismo escándalo (ej: `{id: "penta", nombre: "Caso Penta"}`). Omitir si la persona actuó sola. |
| `coimplicados` | `string[]` | Otras personas formalizadas o investigadas en la misma causa. |
| `puesto_politico` | `enum` | Ver [puestos políticos](#puestos-politicos). |
| `cargo_estado` | `enum` | Situación funcional: `con_funciones` \| `sin_funciones`. |
| `partido` | `string` | Partido político (UDI, RN, Evópoli, PRI, PC, PS, PPD, PDC, PRSD, PH, FRVS, PDG, Comunes, Independiente, Diversos). |
| `sector_politico` | `enum` | Ver [sectores políticos](#sectores-politicos). |
| `region` | `enum` | Región de Chile. Ver [regiones](#regiones). |
| `monto` | `string` | Descripción del monto en texto (ej: "Crédito por $6.500 millones"). |
| `monto_clp` | `number` | Monto numérico en pesos chilenos. |
| `tipo_proceso` | `enum` | Ver [tipos de proceso](#tipos-de-proceso). |
| `ruc` | `string` | Rol Unico de Causa. |
| `rit` | `string` | Rol Interno del Tribunal. |
| `abogado` | `string` | Nombre del abogado defensor. |
| `querellante` | `string` | Parte querellante. |
| `fiscalia` | `string` | Fiscalía a cargo. |
| `resumen_corto` | `string` | Resumen de máximo 220 caracteres. |
| `extracto` | `string` | Resumen extendido del caso. |
| `tags` | `string[]` | Lista de etiquetas (tags). |
| `fuentes_adicionales` | `array` | Cada elemento: `{nombre: string, url: string (URL), tipo?: enum}`. |
| `periodistas` | `string[]` | Periodistas que investigaron o cubrieron el caso. |
| `fecha_publicacion` | `date` | Fecha de publicación original en formato `YYYY-MM-DD`. |
| `hitos` | `array` | Cronología de eventos. Cada hito: `{fecha: date, titulo: string, descripcion?: string, tipo?: enum}`. Ver [tipos de hito](#tipos-de-hito). |

### Tipos de delito

```
fraude_al_fisco          → Fraude al Fisco
malversacion             → Malversación de caudales públicos
cohecho                  → Cohecho
trafico_influencias      → Tráfico de influencias
negociacion_incompatible → Negociación incompatible
asociacion_ilícita       → Asociación ilícita
lavado_activos           → Lavado de activos
apropiacion_indebida     → Apropiación indebida
estafa                   → Estafa
prevaricacion            → Prevaricación
espionaje_ilegal         → Espionaje ilegal
enriquecimiento_ilicito  → Enriquecimiento ilícito
soborno                  → Soborno
financiamiento_ilegal    → Financiamiento ilegal de la política
otro                     → Otro
```

### Tipos de proceso

```
formalizacion           → Formalización
acusacion               → Acusación
juicio_oral             → Juicio oral
juicio_abreviado        → Juicio abreviado
investigacion_reservada → Investigación reservada
condena                 → Condena
sobreseimiento          → Sobreseimiento
```

### Puestos políticos

```
presidente, ministro, senador, diputado, alcalde, concejal,
gobernador, intendente, seremi, embajador, core,
funcionario_publico, ejecutivo_privado, abogado,
carabinero, militar, otro
```

### Sectores políticos

```
derecha, centro_derecha, centro, centro_izquierda,
izquierda, independiente, diversos, no_aplica
```

### Regiones

```
Arica y Parinacota, Tarapacá, Antofagasta, Atacama, Coquimbo,
Valparaíso, Metropolitana, O'Higgins, Maule, Ñuble, Biobío,
La Araucanía, Los Ríos, Los Lagos, Aysén, Magallanes, Nacional
```

### Tipos de hito

```
formalizacion, acusacion, sentencia, resolucion,
allanamiento, audiencia, investigacion, otro
```

### Tipos de fuente

```
oficial       → Fuente oficial (Poder Judicial, Contraloría, Ministerio Público)
prensa        → Prensa nacional
investigacion → Periodismo de investigación (CIPER, Interferencia)
```

### Fuentes pre-registradas

Puedes usar esta tabla como referencia. El campo `fuente` debe contener el nombre descriptivo, no el ID.

| ID | Nombre | Tipo | URL |
|----|--------|------|-----|
| `poder_judicial` | Poder Judicial de Chile | `oficial` | pjud.cl |
| `contraloria` | Contraloría General de la República | `oficial` | contraloria.cl |
| `ministerio_publico` | Ministerio Público | `oficial` | fiscaliadechile.cl |
| `latercera` | La Tercera | `prensa` | latercera.com |
| `biobio` | BioBioChile | `prensa` | biobiochile.cl |
| `cooperativa` | Cooperativa | `prensa` | cooperativa.cl |
| `ciper` | CIPER Chile | `investigacion` | ciperchile.cl |
| `interferencia` | INTERFERENCIA | `investigacion` | interferencia.cl |

### Paso 3: Ejemplo completo

```markdown
---
implicado: Juan Pérez González
cargo: Ex alcalde de San Clemente
caso:
  id: fraude-san-clemente
  nombre: Fraude Municipal San Clemente
coimplicados:
  - Ana María Rojas
  - Carlos Tapia Leiva
puesto_politico: alcalde
cargo_estado: sin_funciones
partido: UDI
sector_politico: centro_derecha
region: Maule
delito: fraude_al_fisco
monto: Contratos por $320 millones sin licitación
monto_clp: 320000000
estado: investigation
tipo_proceso: formalizacion
ruc: "1910034567-8"
rit: "1234-2024"
fuente: CIPER Chile
fuente_url: https://www.ciperchile.cl/2024/05/15/fraude-san-clemente-investigacion
fuente_tipo: investigacion
fuentes_adicionales:
  - nombre: Poder Judicial de Chile
    url: https://www.pjud.cl/consulta-unificada-de-causas
    tipo: oficial
periodistas:
  - Pedro Ramírez
fecha_inicio: 2024-05-01
fecha_publicacion: 2024-05-15
fecha_actualizacion: 2026-07-07
extracto: Juan Pérez, alcalde de San Clemente entre 2016 y 2024, fue formalizado por fraude al fisco por la adjudicación irregular de contratos municipales por $320 millones sin licitación pública. La investigación surgió a partir de un reportaje de CIPER Chile que reveló pagos a empresas vinculadas a familiares del edil.
resumen_corto: Ex alcalde de San Clemente formalizado por fraude al fisco por $320 millones en contratos sin licitación.
tags:
  - fraude-municipal
  - san-clemente
  - maule
abogado: Francisco Pérez
querellante: Consejo de Defensa del Estado
fiscalia: Fiscalía Regional del Maule
hitos:
  - fecha: 2024-05-01
    titulo: Investigación revela irregularidades
    descripcion: CIPER publica reportaje que documenta contratos sin licitación por $320 millones.
    tipo: investigacion
  - fecha: 2024-08-15
    titulo: Formalización de cargos
    descripcion: Fiscalía Regional del Maule formaliza a Juan Pérez por fraude al fisco.
    tipo: formalizacion
  - fecha: 2024-12-10
    titulo: Ampliación del plazo de investigación
    descripcion: El Juzgado de Garantía otorga 120 días adicionales para la investigación.
    tipo: resolucion
---
```

### Paso 4: Validación local

```bash
npm install
npm run check
```

`npm run check` ejecuta `astro check`, que valida todos los archivos `.md` en `src/content/cases/` contra el schema Zod definido en `src/content.config.ts`. Si hay errores, el comando te indicará exactamente qué campo falla y por qué.

### Paso 5: Enviar el Pull Request

1. Crea una rama desde `main`:

```bash
git checkout -b feat/nuevo-caso-juan-perez
```

2. Agrega y haz commit usando [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add src/content/cases/juan-perez-gonzalez.md
git commit -m "feat(content): agrega caso Juan Pérez"
```

3. Sube la rama y abre un Pull Request usando la [plantilla de caso nuevo](.github/PULL_REQUEST_TEMPLATE/caso_nuevo.md).

4. Al abrir el PR, un **GitHub Action** ([validate-cases.yml](.github/workflows/validate-cases.yml)) ejecuta automáticamente:

   - `npm ci`
   - `npm run check`
   - Si la validación pasa, el PR recibe una auto-aprobación.

5. Un mantenedor revisa y hace **merge**. Al mergear a `main`, **Vercel** redeploya el sitio automáticamente y el caso aparece en línea sin intervención manual.

---

## Schema Zod (referencia técnica)

El contenido de cada caso se valida contra un schema definido con **Astro Content Collections** y **Zod** en [`src/content.config.ts`](src/content.config.ts). Los valores de los enums (delitos, regiones, tipos de proceso, etc.) se mantienen en [`src/lib/constants.ts`](src/lib/constants.ts).

```typescript
// Definición resumida del schema
const casesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases" }),
  schema: z.object({
    implicado: z.string(),
    cargo: z.string(),
    caso: z.object({ id: z.string(), nombre: z.string() }).optional(),
    coimplicados: z.array(z.string()).optional(),
    puesto_politico: z.enum(PUESTO_POLITICO).optional(),
    cargo_estado: z.enum(CARGO_ESTADO).optional(),
    partido: z.string().optional(),
    sector_politico: z.enum(SECTOR_POLITICO).optional(),
    region: z.enum(REGIONES).optional(),
    delito: z.enum(DELITOS),
    monto: z.string().optional(),
    monto_clp: z.number().optional(),
    estado: z.enum(["active", "investigation", "pending", "resolved", "archived"]),
    tipo_proceso: z.enum(TIPO_PROCESO).optional(),
    ruc: z.string().optional(),
    rit: z.string().optional(),
    fuente: z.string(),
    fuente_url: z.string().url(),
    fuente_tipo: z.enum(FUENTES_TIPOS),
    fuentes_adicionales: z.array(
      z.object({ nombre: z.string(), url: z.string().url(), tipo: z.enum(FUENTES_TIPOS).optional() })
    ).optional(),
    periodistas: z.array(z.string()).optional(),
    fecha_inicio: z.date(),
    fecha_publicacion: z.date().optional(),
    fecha_actualizacion: z.date(),
    extracto: z.string().optional(),
    resumen_corto: z.string().max(220).optional(),
    tags: z.array(z.string()).default([]),
    abogado: z.string().optional(),
    querellante: z.string().optional(),
    fiscalia: z.string().optional(),
    hitos: z.array(
      z.object({
        fecha: z.date(),
        titulo: z.string(),
        descripcion: z.string().optional(),
        tipo: z.enum(HITO_TIPO).default("otro"),
      })
    ).default([]),
  }),
});
```

**Fechas**: todas las fechas en YAML deben escribirse como `YYYY-MM-DD` sin comillas. Zod las convierte automáticamente a objetos `Date` de JavaScript.

**Enums**: todos los valores de enum van sin comillas en el frontmatter (`delito: fraude_al_fisco`, no `delito: "fraude_al_fisco"`). YAML los interpreta como strings literales y Zod valida que coincidan con los valores del enum.

---

## Reportar bugs o sugerir mejoras

Abre un [Issue](https://github.com/cgize/CorrupcionDB/issues) describiendo el problema o la mejora.

---

## Desarrollo

1. Haz fork del repositorio.
2. Clona tu fork e instala dependencias:

```bash
npm install
npm run dev       # Inicia servidor en http://localhost:4321
```

3. Comandos disponibles:

| Comando | Acción |
|---------|--------|
| `npm run dev` | Iniciar servidor de desarrollo (`localhost:4321`) |
| `npm run build` | Compilar sitio a `dist/` |
| `npm run preview` | Vista previa del build |
| `npm run check` | Type-check y validación de schema de contenido |
| `npm run lint` | Igual que `npm run check` |

---

## Convenciones

- **Commits:** usar [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.).
- **Ramas:** `feat/`, `fix/`, `docs/` seguido de nombre descriptivo en kebab-case.
- **Código:** seguir el estilo existente (TypeScript, Astro, Tailwind).
- **Contenido:** no uses emojis en los archivos de datos. Usa lenguaje objetivo y verificable.
- **Fechas:** siempre en formato `YYYY-MM-DD`.
- **Nombres de archivo:** kebab-case, sin acentos ni caracteres especiales.

---

## Licencia de contribuciones

Al enviar un Pull Request aceptas que:

- Tus aportes al **código** se publican bajo [`PolyForm Noncommercial 1.0.0`](LICENSE).
- Tus aportes a **datos de casos** (`src/content/cases/`) se publican bajo [`CC BY 4.0`](src/content/cases/LICENSE).
- Mantienes la titularidad de tu contribución, pero otorgas una licencia no exclusiva, mundial, perpetua e irrevocable al proyecto para distribuirla bajo las licencias indicadas.

---

## Código de conducta

Este proyecto sigue un código de conducta basado en el respeto y la colaboración abierta. No se tolera discriminación, acoso ni malas prácticas de atribución de fuentes.
