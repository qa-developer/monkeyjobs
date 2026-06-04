#!/usr/bin/env node
/**
 * IndexNow — notifica a Bing, Yandex y Seznam que las URLs del sitio
 * cambiaron, para que las indexen en horas en lugar de días/semanas.
 *
 * Uso (tras desplegar):
 *   node scripts/indexnow.mjs
 *
 * Lee dist/sitemap-0.xml para obtener las URLs. Corre el build antes.
 * Google no usa IndexNow (usa Search Console), pero Bing y Yandex sí,
 * y Google descubre vía sitemap igualmente.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = 'www.monkeyjobs.co';
const KEY = 'd19f3edb3b9d4a4b97f82690f6c41342';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = join(__dirname, '..', 'dist', 'sitemap-0.xml');

async function getUrls() {
  const xml = await readFile(SITEMAP, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  let urlList;
  try {
    urlList = await getUrls();
  } catch {
    console.error('No se pudo leer dist/sitemap-0.xml. Corre `npm run build` primero.');
    process.exit(1);
  }

  if (!urlList.length) {
    console.error('Sitemap sin URLs.');
    process.exit(1);
  }

  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow → ${res.status} ${res.statusText} (${urlList.length} URLs enviadas)`);
  if (!res.ok && res.status !== 202) {
    const text = await res.text().catch(() => '');
    if (text) console.error(text);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
