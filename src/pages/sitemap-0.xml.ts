import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { sectionSlug } from "../site.config";

const origin = "https://www.naszpoznan.info";

export const GET: APIRoute = async () => {
  const posts = await getCollection("artykuly");
  const cats = [...new Set(posts.map((p) => p.data.category).filter(Boolean))] as string[];
  const pages = ["/", "/artykuly/", "/dzielnice/", "/redakcja/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...cats.map((c) => `${origin}/dzielnice/${sectionSlug(c)}/`),
    ...posts.map((p) => `${origin}/artykuly/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
