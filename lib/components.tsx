import Link from 'next/link';
import type { Firm } from '@/lib/data';
import { BYDELER_INFO } from '@/lib/data';

export function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
      <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          OsloRegnskap.no
        </Link>
        <nav style={{ display: 'flex', gap: '1.25rem', fontSize: '0.9rem' }}>
          <Link href="/regnskapsforer/">Regnskapsfører</Link>
          <Link href="/regnskapskontor/">Regnskapskontor</Link>
          <Link href="/firmaer/">Katalog</Link>
          <Link href="/hva-koster-regnskapsforer-oslo/">Priser</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const bydeler = Object.values(BYDELER_INFO).slice(0, 10);
  return (
    <footer>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg)' }}>Regnskap i Oslo</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Link href="/regnskapsforer/">Regnskapsfører Oslo</Link>
              <Link href="/regnskapskontor/">Regnskapskontor Oslo</Link>
              <Link href="/regnskapsbyra/">Regnskapsbyrå Oslo</Link>
              <Link href="/autorisert-regnskapsforer/">Autorisert regnskapsfører</Link>
            </div>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg)' }}>Per bydel</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {bydeler.map(b => (
                <Link key={b.urlSlug} href={`/regnskapsforer-${b.urlSlug}/`}>{b.displayName}</Link>
              ))}
            </div>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg)' }}>Guider</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Link href="/hva-koster-regnskapsforer-oslo/">Hva koster regnskapsfører?</Link>
              <Link href="/hvordan-velge-regnskapsforer-oslo/">Hvordan velge regnskapsfører</Link>
              <Link href="/beste-regnskapskontor-oslo/">Beste regnskapskontor</Link>
              <Link href="/regnskap-for-enkeltpersonforetak-oslo/">Regnskap for ENK</Link>
              <Link href="/regnskap-for-as-oslo/">Regnskap for AS</Link>
              <Link href="/hjelp-med-regnskap-oslo/">Hjelp med regnskap</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>© {new Date().getFullYear()} OsloRegnskap.no — Uavhengig informasjonsside om regnskapstjenester i Oslo</span>
          <span>Data: Brønnøysundregistrene</span>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://osloregnskap.no${item.href}` } : {}),
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Brødsmulesti">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && ' › '}
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </span>
        ))}
      </nav>
    </>
  );
}

export function FirmCard({ firm }: { firm: Firm }) {
  return (
    <div className="firm-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>
            <Link href={`/firma/${firm.slug}/`}>{firm.navn}</Link>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
            Org.nr: {firm.orgnr} · {firm.orgform}
          </p>
        </div>
        <span style={{ fontSize: '0.8rem', background: 'var(--surface)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>
          {firm.bydel}
        </span>
      </div>
      {firm.adresse && (
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          {firm.adresse}, {firm.postnummer} {firm.poststed}
        </p>
      )}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', flexWrap: 'wrap' }}>
        {firm.naeringsbeskrivelse && <span>{firm.naeringsbeskrivelse}</span>}
        {firm.stiftet && <span>Stiftet: {firm.stiftet.substring(0, 4)}</span>}
        {firm.mvaRegistrert && <span>MVA-registrert</span>}
      </div>
    </div>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <section style={{ marginTop: '3rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Ofte stilte spørsmål</h2>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>
  );
}

export function InternalLinks({ exclude }: { exclude?: string }) {
  const links = [
    { href: '/regnskapsforer/', label: 'Regnskapsfører Oslo' },
    { href: '/regnskapskontor/', label: 'Regnskapskontor Oslo' },
    { href: '/regnskapsbyra/', label: 'Regnskapsbyrå Oslo' },
    { href: '/autorisert-regnskapsforer/', label: 'Autorisert regnskapsfører Oslo' },
    { href: '/firmaer/', label: 'Alle regnskapsfirmaer' },
    { href: '/hva-koster-regnskapsforer-oslo/', label: 'Hva koster regnskapsfører?' },
    { href: '/hvordan-velge-regnskapsforer-oslo/', label: 'Hvordan velge regnskapsfører' },
    { href: '/beste-regnskapskontor-oslo/', label: 'Beste regnskapskontor Oslo' },
    { href: '/regnskap-for-enkeltpersonforetak-oslo/', label: 'Regnskap for ENK' },
    { href: '/regnskap-for-as-oslo/', label: 'Regnskap for AS' },
    { href: '/hjelp-med-regnskap-oslo/', label: 'Hjelp med regnskap' },
    ...Object.values(BYDELER_INFO).slice(0, 8).map(b => ({
      href: `/regnskapsforer-${b.urlSlug}/`,
      label: `Regnskapsfører ${b.displayName}`,
    })),
  ].filter(l => l.href !== exclude);
  
  return (
    <div className="internal-links">
      {links.map(l => (
        <Link key={l.href} href={l.href}>{l.label}</Link>
      ))}
    </div>
  );
}
