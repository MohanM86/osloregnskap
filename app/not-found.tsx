import Link from 'next/link';
import { BYDELER_INFO } from '@/lib/data';

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--accent-warm)' }}>404</h1>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Siden ble ikke funnet</h2>
      <p style={{ color: 'var(--fg-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
        Beklager, vi finner ikke siden du leter etter. Den kan ha blitt flyttet eller fjernet.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
        <Link href="/" className="card" style={{ textDecoration: 'none', textAlign: 'left' }}>
          Forsiden — Regnskap Oslo →
        </Link>
        <Link href="/firmaer/" className="card" style={{ textDecoration: 'none', textAlign: 'left' }}>
          Alle 386 regnskapsfirmaer →
        </Link>
        <Link href="/regnskapsforer/" className="card" style={{ textDecoration: 'none', textAlign: 'left' }}>
          Regnskapsfører Oslo →
        </Link>
        <Link href="/hva-koster-regnskapsforer-oslo/" className="card" style={{ textDecoration: 'none', textAlign: 'left' }}>
          Hva koster regnskapsfører? →
        </Link>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--fg-muted)', marginBottom: '0.75rem' }}>Eller finn regnskapsfører per bydel:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
          {Object.values(BYDELER_INFO).slice(0, 8).map(b => (
            <Link key={b.urlSlug} href={`/regnskapsforer-${b.urlSlug}/`} className="related-link">
              {b.displayName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
