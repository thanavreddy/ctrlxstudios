import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ctrlxstudios.vercel.app";
  const pages = ["", "services", "works", "pricing", "contact"];

  const urls = pages
    .map((page) => {
      const cleaned = page ? `/${page}` : "";
      return `
      <url>
        <loc>${base}${cleaned}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
      </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "content-type": "application/xml" },
  });
}
