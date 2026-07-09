import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import {
  DELITO_LABELS,
  FUENTE_TIPO_LABELS,
  STATUS_COLORS,
  STATUS_LABELS,
} from "@/lib/constants";

export const prerender = true;

const estadoAbbr: Record<string, string> = {
  active: "Activo",
  investigation: "Invest.",
  pending: "Pend.",
  resolved: "Resuelto",
  archived: "Archiv.",
};

const fuenteAbbr: Record<string, string> = {
  oficial: "Oficial",
  prensa: "Prensa",
  investigacion: "Inv.",
};

const fuenteColorMap: Record<string, string> = {
  oficial: "bg-status-investigation",
  prensa: "bg-status-pending",
  investigacion: "bg-status-active",
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export const GET: APIRoute = async () => {
  const cases = await getCollection("cases");
  const payload = cases
    .map((c) => {
      const d = c.data;
      const searchText = normalizeText(
        [
          d.implicado,
          d.cargo,
          d.delito,
          d.ruc,
          d.rit,
          d.partido,
          ...(d.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
      );

      return {
        id: c.id,
        href: `/casos/${c.id}`,
        implicado: d.implicado,
        cargo: d.cargo,
        estado: d.estado,
        estadoLabel: STATUS_LABELS[d.estado] || d.estado,
        estadoAbbr: estadoAbbr[d.estado] || STATUS_LABELS[d.estado] || d.estado,
        estadoColor: STATUS_COLORS[d.estado] || "bg-status-archived",
        region: d.region || "",
        delito: d.delito,
        delitoLabel: DELITO_LABELS[d.delito] || d.delito,
        fuente: d.fuente_tipo,
        fuenteLabel: FUENTE_TIPO_LABELS[d.fuente_tipo] || d.fuente_tipo,
        fuenteAbbr: fuenteAbbr[d.fuente_tipo] || FUENTE_TIPO_LABELS[d.fuente_tipo] || d.fuente_tipo,
        fuenteColor: fuenteColorMap[d.fuente_tipo] || "bg-status-investigation",
        puesto: d.puesto_politico || "",
        cargoEstado: d.cargo_estado || "",
        sector: d.sector_politico || "",
        partido: d.partido || "",
        caso: d.caso?.id || "",
        monto: d.monto_clp || 0,
        fecha: d.fecha_actualizacion.toISOString(),
        fechaLabel: d.fecha_actualizacion.toLocaleDateString("es-CL", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        searchText,
      };
    })
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
    },
  });
};
