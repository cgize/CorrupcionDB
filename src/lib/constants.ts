export const SITE = {
  name: "CorrupcionDB",
  description:
    "Plataforma ciudadana y base de datos de código abierto que centraliza, estructura y hace accesible la información sobre casos de corrupción, faltas a la probidad y delitos contra el patrimonio público que involucran a figuras políticas en Chile.",
  url: "https://corrupciondb.org",
  repo: "https://github.com/cgize/CorrupcionDB",
};

export const STATUS_LABELS: Record<string, string> = {
  active: "Activo",
  investigation: "En investigación",
  pending: "Pendiente",
  resolved: "Resuelto",
  archived: "Archivado",
};

export const STATUS_COLORS: Record<string, string> = {
  active: "bg-status-active",
  investigation: "bg-status-investigation",
  pending: "bg-status-pending",
  resolved: "bg-status-resolved",
  archived: "bg-status-archived",
};

export const STATUS_RING: Record<string, string> = {
  active: "before:bg-status-active",
  investigation: "before:bg-status-investigation",
  pending: "before:bg-status-pending",
  resolved: "before:bg-status-resolved",
  archived: "before:bg-status-archived",
};

export const PUESTO_POLITICO = [
  "presidente",
  "ministro",
  "senador",
  "diputado",
  "alcalde",
  "concejal",
  "gobernador",
  "intendente",
  "seremi",
  "embajador",
  "core",
  "funcionario_publico",
  "ejecutivo_privado",
  "abogado",
  "carabinero",
  "militar",
  "otro",
] as const;

export const PUESTO_POLITICO_LABELS: Record<(typeof PUESTO_POLITICO)[number], string> = {
  presidente: "Presidente",
  ministro: "Ministro",
  senador: "Senador",
  diputado: "Diputado",
  alcalde: "Alcalde",
  concejal: "Concejal",
  gobernador: "Gobernador",
  intendente: "Intendente",
  seremi: "Seremi",
  embajador: "Embajador",
  core: "Miembro CORE",
  funcionario_publico: "Funcionario público",
  ejecutivo_privado: "Ejecutivo privado",
  abogado: "Abogado",
  carabinero: "Carabinero",
  militar: "Militar",
  otro: "Otro",
};

export const CARGO_ESTADO = ["con_funciones", "sin_funciones"] as const;

export const CARGO_ESTADO_LABELS: Record<(typeof CARGO_ESTADO)[number], string> = {
  con_funciones: "Activo (con funciones)",
  sin_funciones: "Sin funciones",
};

export const SECTOR_POLITICO = [
  "derecha",
  "centro_derecha",
  "centro",
  "centro_izquierda",
  "izquierda",
  "independiente",
  "diversos",
  "no_aplica",
] as const;

export const SECTOR_POLITICO_LABELS: Record<(typeof SECTOR_POLITICO)[number], string> = {
  derecha: "Derecha",
  centro_derecha: "Centro derecha",
  centro: "Centro",
  centro_izquierda: "Centro izquierda",
  izquierda: "Izquierda",
  independiente: "Independiente",
  diversos: "Diversos",
  no_aplica: "No aplica",
};

export const PARTIDOS = [
  "UDI",
  "RN",
  "Evópoli",
  "PRI",
  "PC",
  "PS",
  "PPD",
  "PDC",
  "PRSD",
  "PH",
  "FRVS",
  "PDG",
  "Comunes",
  "Independiente",
  "Diversos",
] as const;

export const PARTIDO_SECTOR_MAP: Record<string, (typeof SECTOR_POLITICO)[number]> = {
  UDI: "centro_derecha",
  RN: "centro_derecha",
  Evópoli: "centro_derecha",
  PRI: "centro_derecha",
  PC: "izquierda",
  PS: "centro_izquierda",
  PPD: "centro_izquierda",
  PDC: "centro_izquierda",
  PRSD: "centro_izquierda",
  PH: "izquierda",
  FRVS: "izquierda",
  PDG: "centro_izquierda",
  Comunes: "centro_izquierda",
  Independiente: "independiente",
  Diversos: "diversos",
};

export const REGIONES = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Metropolitana",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes",
  "Nacional",
] as const;

export const DELITOS = [
  "fraude_al_fisco",
  "malversacion",
  "cohecho",
  "trafico_influencias",
  "negociacion_incompatible",
  "asociacion_ilícita",
  "lavado_activos",
  "apropiacion_indebida",
  "estafa",
  "prevaricacion",
  "espionaje_ilegal",
  "enriquecimiento_ilicito",
  "soborno",
  "financiamiento_ilegal",
  "otro",
] as const;

export const DELITO_LABELS: Record<(typeof DELITOS)[number], string> = {
  fraude_al_fisco: "Fraude al Fisco",
  malversacion: "Malversación de caudales públicos",
  cohecho: "Cohecho",
  trafico_influencias: "Tráfico de influencias",
  negociacion_incompatible: "Negociación incompatible",
  "asociacion_ilícita": "Asociación ilícita",
  lavado_activos: "Lavado de activos",
  apropiacion_indebida: "Apropiación indebida",
  estafa: "Estafa",
  prevaricacion: "Prevaricación",
  espionaje_ilegal: "Espionaje ilegal",
  enriquecimiento_ilicito: "Enriquecimiento ilícito",
  soborno: "Soborno",
  financiamiento_ilegal: "Financiamiento ilegal de la política",
  otro: "Otro",
};

export const TIPO_PROCESO = [
  "formalizacion",
  "acusacion",
  "juicio_oral",
  "juicio_abreviado",
  "investigacion_reservada",
  "condena",
  "sobreseimiento",
] as const;

export const TIPO_PROCESO_LABELS: Record<(typeof TIPO_PROCESO)[number], string> = {
  formalizacion: "Formalización",
  acusacion: "Acusación",
  juicio_oral: "Juicio oral",
  juicio_abreviado: "Juicio abreviado",
  investigacion_reservada: "Investigación reservada",
  condena: "Condena",
  sobreseimiento: "Sobreseimiento",
};

export const FUENTES_TIPOS = ["oficial", "prensa", "investigacion"] as const;

export type FuenteTipo = (typeof FUENTES_TIPOS)[number];

export const FUENTE_TIPO_LABELS: Record<FuenteTipo, string> = {
  oficial: "Fuente oficial",
  prensa: "Prensa",
  investigacion: "Periodismo de investigación",
};

export const FUENTES_REGISTRY: Record<
  string,
  { nombre: string; tipo: FuenteTipo; url: string }
> = {
  poder_judicial: {
    nombre: "Poder Judicial de Chile",
    tipo: "oficial",
    url: "https://www.pjud.cl",
  },
  contraloria: {
    nombre: "Contraloría General de la República",
    tipo: "oficial",
    url: "https://www.contraloria.cl",
  },
  ministerio_publico: {
    nombre: "Ministerio Público",
    tipo: "oficial",
    url: "https://www.fiscaliadechile.cl",
  },
  latercera: {
    nombre: "La Tercera",
    tipo: "prensa",
    url: "https://www.latercera.com",
  },
  biobio: {
    nombre: "BioBioChile",
    tipo: "prensa",
    url: "https://www.biobiochile.cl",
  },
  cooperativa: {
    nombre: "Cooperativa",
    tipo: "prensa",
    url: "https://www.cooperativa.cl",
  },
  ciper: {
    nombre: "CIPER Chile",
    tipo: "investigacion",
    url: "https://www.ciperchile.cl",
  },
  interferencia: {
    nombre: "INTERFERENCIA",
    tipo: "investigacion",
    url: "https://interferencia.cl",
  },
};

export const SOURCES = {
  poder_judicial: "Poder Judicial de Chile",
  contraloria: "Contraloría General de la República",
  ministerio_publico: "Ministerio Público",
} as const;

export const DISCLAIMER =
  "Los datos presentados provienen exclusivamente de fuentes oficiales del Estado de Chile y de investigaciones periodísticas verificables. Todo individuo se presume inocente mientras no se acredite su responsabilidad penal por sentencia firme.";

export const SORT_OPTIONS = [
  { value: "recientes", label: "Más recientes" },
  { value: "antiguos", label: "Más antiguos" },
  { value: "az", label: "A-Z por nombre" },
  { value: "monto_desc", label: "Mayor monto" },
] as const;

export const HITO_TIPO = [
  "formalizacion",
  "acusacion",
  "sentencia",
  "resolucion",
  "allanamiento",
  "audiencia",
  "investigacion",
  "otro",
] as const;

export const HITO_TIPO_COLORS: Record<(typeof HITO_TIPO)[number], string> = {
  formalizacion: "bg-accent-contrast",
  acusacion: "bg-accent-contrast",
  sentencia: "bg-status-resolved",
  resolucion: "bg-accent-info",
  allanamiento: "bg-accent-highlight",
  audiencia: "bg-accent-info",
  investigacion: "bg-status-investigation",
  otro: "bg-text-tertiary",
};
