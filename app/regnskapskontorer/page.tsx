import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, FirmCard, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapskontorer i Oslo — Komplett katalog',
  description: 'Oversikt over alle regnskapskontorer i Oslo. 386 registrerte firmaer med adresser, kontaktinfo og bydel fra Brønnøysundregistrene.',
  path: '/regnskapskontorer/',
});

export default function RegnskapskontorerPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  return (
    <div className="container">
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
        {firms.map(f => <FirmCard key={f.orgnr} firm={f} />)}
      </section>

      <InternalLinks exclude="/regnskapskontorer/" />
    </div>
  );
}
