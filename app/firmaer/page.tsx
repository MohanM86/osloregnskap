import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, FirmCard, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Alle regnskapsfirmaer i Oslo — Komplett katalog (386 firmaer)',
  description: 'Komplett katalog over alle 386 registrerte regnskapsfirmaer i Oslo. Søk etter regnskapsfører per bydel, med adresser og kontaktinfo fra Brønnøysundregistrene.',
  path: '/firmaer/',
});

export default function FirmaerPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Regnskapsfirmaer i Oslo',
    description: `Komplett liste over ${firms.length} registrerte regnskapsfirmaer i Oslo`,
    numberOfItems: firms.length,
    itemListElement: firms.slice(0, 100).map((f, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'AccountingService',
        name: f.navn,
        address: { '@type': 'PostalAddress', addressLocality: 'Oslo', postalCode: f.postnummer, streetAddress: f.adresse },
      },
    })),
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Alle regnskapsfirmaer' }]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Alle regnskapsfirmaer i Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Komplett katalog over alle {firms.length} registrerte regnskapsfirmaer i Oslo.
        Data er hentet fra Brønnøysundregistrene og inkluderer firmaer registrert under
        næringskode 69.202 (regnskapsføring og bokføring) og 69.201 (revisjon).
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Totalt</span>
        </div>
        <div className="stat-box">
          <span className="num">{firms.filter(f => f.naeringskode === '69.202').length}</span>
          <span className="label">Regnskapsføring</span>
        </div>
        <div className="stat-box">
          <span className="num">{firms.filter(f => f.naeringskode === '69.201').length}</span>
          <span className="label">Revisjon</span>
        </div>
        <div className="stat-box">
          <span className="num">{firms.filter(f => f.mvaRegistrert).length}</span>
          <span className="label">MVA-registrerte</span>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Filtrer etter bydel</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`}
                style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.85rem' }}>
                {b.name} ({b.count})
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Alle {firms.length} regnskapsfirmaer</h2>
        {firms.map(f => <FirmCard key={f.orgnr} firm={f} />)}
      </section>

      <InternalLinks exclude="/firmaer/" />
    </div>
  );
}
