import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapskontorer i Oslo — Komplett katalog',
  description: 'Oversikt over alle regnskapskontorer i Oslo. 386 registrerte firmaer med adresser og bydel ',
  path: '/regnskapskontorer/',
});

export default function RegnskapskontorerPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Regnskapskontor Oslo', url: 'https://osloregnskap.no/regnskapskontor/', isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Regnskapskontorer i Oslo' }]} />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapskontorer i Oslo</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Komplett oversikt over {firms.length} regnskapskontorer i Oslo fordelt på {bydeler.length} bydeler.
      </p>

      <section style={{ marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Per bydel</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`}
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', border: '1px solid var(--border)' }}>
                <span>{b.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Alle regnskapskontorer ({firms.length})</h2>
        {firms.map(f => <Link href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
              <div className="firm-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div className="firm-name">{f.navn}</div>
                    <div className="firm-meta">Org.nr: {f.orgnr} · {f.orgform}</div>
                  </div>
                  <span className="firm-badge">{f.bydel}</span>
                </div>
                {f.adresse && <div className="firm-detail">{f.adresse}, {f.postnummer} {f.poststed}</div>}
              </div>
            </Link>)}
      </section>

      <InternalLinks exclude="/regnskapskontorer/" />
    </div>
  );
}
