import firmsData from '@/data/firms.json';
import bydelerData from '@/data/bydeler.json';

export interface Firm {
  orgnr: string;
  navn: string;
  slug: string;
  orgform: string;
  orgformKode: string;
  naeringskode: string;
  naeringsbeskrivelse: string;
  adresse: string;
  postnummer: string;
  poststed: string;
  bydel: string;
  hjemmeside: string;
  epost: string;
  telefon: string;
  stiftet: string;
  ansatte: boolean;
  mvaRegistrert: boolean;
}

export interface Bydel {
  name: string;
  slug: string;
  count: number;
}

export const firms: Firm[] = firmsData as Firm[];

export function getAllFirms(): Firm[] {
  return firms;
}

export function getFirmBySlug(slug: string): Firm | undefined {
  return firms.find(f => f.slug === slug);
}

export function getFirmsByBydel(bydel: string): Firm[] {
  return firms.filter(f => f.bydel === bydel);
}

export function getBydeler(): Bydel[] {
  const map = new Map<string, number>();
  for (const f of firms) {
    map.set(f.bydel, (map.get(f.bydel) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({
      name,
      slug: slugify(name),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function slugify(s: string): string {
  return s.toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
    .replace(/ü/g, 'u').replace(/é/g, 'e')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getBydelerMap(): Record<string, { count: number; slug: string; firms: string[] }> {
  return bydelerData as Record<string, { count: number; slug: string; firms: string[] }>;
}

export const BYDELER_INFO: Record<string, { urlSlug: string; displayName: string }> = {
  'Sentrum': { urlSlug: 'sentrum', displayName: 'Sentrum' },
  'Frogner': { urlSlug: 'frogner', displayName: 'Frogner' },
  'Østensjø': { urlSlug: 'ostensjo', displayName: 'Østensjø' },
  'Grünerløkka': { urlSlug: 'grunerlokka', displayName: 'Grünerløkka' },
  'Nordstrand': { urlSlug: 'nordstrand', displayName: 'Nordstrand' },
  'Ullern': { urlSlug: 'ullern', displayName: 'Ullern' },
  'Nordre Aker': { urlSlug: 'nordre-aker', displayName: 'Nordre Aker' },
  'Gamle Oslo': { urlSlug: 'gamle-oslo', displayName: 'Gamle Oslo' },
  'Søndre Nordstrand': { urlSlug: 'sondre-nordstrand', displayName: 'Søndre Nordstrand' },
  'Stovner': { urlSlug: 'stovner', displayName: 'Stovner' },
  'Vestre Aker': { urlSlug: 'vestre-aker', displayName: 'Vestre Aker' },
  'Alna': { urlSlug: 'alna', displayName: 'Alna' },
  'Grorud': { urlSlug: 'grorud', displayName: 'Grorud' },
  'Sagene': { urlSlug: 'sagene', displayName: 'Sagene' },
  'St. Hanshaugen': { urlSlug: 'st-hanshaugen', displayName: 'St. Hanshaugen' },
  'Bjerke': { urlSlug: 'bjerke', displayName: 'Bjerke' },
};

export function getBydelsSlugMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [name, info] of Object.entries(BYDELER_INFO)) {
    map[info.urlSlug] = name;
  }
  return map;
}
