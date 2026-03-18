import { getAllFirms, getBydeler } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { AnimatedStat, FirmExplorer } from '@/lib/client-components';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Alle regnskapsfirmaer i Oslo — Komplett katalog (386 firmaer)',
  description: 'Komplett katalog over alle 386 registrerte regnskapsfirmaer i Oslo. Søk, filtrer og sorter. ',
  path: '/firmaer/',
});

export default function FirmaerPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: 'Regnskapsfirmaer i Oslo',
    description: `Komplett liste over ${firms.length} registrerte regnskapsfirmaer i Oslo`,
    numberOfItems: firms.length,
    itemListElement: firms.slice(0, 50).map((f, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'AccountingService', name: f.navn, address: { '@type': 'PostalAddress', addressLocality: 'Oslo', postalCode: f.postnummer } },
    })),
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Alle regnskapsfirmaer' }]} />

      <section className="hero" style={{ padding: '2rem 0 2.5rem' }}>
        <h1 className="animate-in animate-in-1">Alle regnskapsfirmaer i Oslo</h1>
        <p className="animate-in animate-in-2">
          Komplett katalog med {firms.length} registrerte firmaer. Søk, filtrer etter bydel og sorter etter navn eller stiftelsesår.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} label="Totalt" />
        <AnimatedStat value={firms.filter(f => f.naeringskode === '69.202').length} label="Regnskapsføring" />
        <AnimatedStat value={firms.filter(f => f.naeringskode === '69.201').length} label="Revisjon" />
        <AnimatedStat value={firms.filter(f => f.mvaRegistrert).length} label="MVA-registrerte" />
      </div>

      <section className="animate-in animate-in-4">
        <FirmExplorer firms={firms} bydeler={bydeler} initialLimit={30} />
      </section>

      <InternalLinks exclude="/firmaer/" />
    </div>
  );
}
