import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import {
  REGIONES,
  DELITOS,
  TIPO_PROCESO,
  FUENTES_TIPOS,
  HITO_TIPO,
  PUESTO_POLITICO,
  CARGO_ESTADO,
  SECTOR_POLITICO,
} from "@/lib/constants";

const casesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases" }),
  schema: z.object({
    // `implicado` siempre debe ser el nombre completo de una PERSONA física.
    // El validador (validate_case.py) rechaza nombres de "caso paraguas".
    // `caso` (opcional) agrupa entradas de varias personas investigadas en
    // el mismo escándalo (ej: Caso Penta, Caso SQM, Operación Huracán).
    implicado: z.string(),
    cargo: z.string(),
    caso: z
      .object({
        id: z.string(),
        nombre: z.string(),
      })
      .optional(),
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
    fuentes_adicionales: z
      .array(
        z.object({
          nombre: z.string(),
          url: z.string().url(),
          tipo: z.enum(FUENTES_TIPOS).optional(),
        })
      )
      .optional(),
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

    hitos: z
      .array(
        z.object({
          fecha: z.date(),
          titulo: z.string(),
          descripcion: z.string().optional(),
          tipo: z.enum(HITO_TIPO).default("otro"),
        })
      )
      .default([]),
  }),
});

export const collections = {
  cases: casesCollection,
};
