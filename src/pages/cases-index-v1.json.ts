import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { CASES_INDEX_VERSION } from "@/lib/cases-index";

export const prerender = true;

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
        i: d.implicado,
        c: d.cargo,
        e: d.estado,
        r: d.region || "",
        d: d.delito,
        f: d.fuente_tipo,
        p: d.puesto_politico || "",
        ce: d.cargo_estado || "",
        s: d.sector_politico || "",
        pa: d.partido || "",
        ca: d.caso?.id || "",
        m: d.monto_clp || 0,
        t: d.fecha_actualizacion.getTime(),
        q: searchText,
      };
    })
    .sort((a, b) => b.t - a.t);

  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Version": CASES_INDEX_VERSION,
    },
  });
};
