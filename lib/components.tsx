import Link from 'next/link';
import { BYDELER_INFO } from '@/lib/data';
import { MobileMenu } from '@/lib/mobile-menu';

export function Header() {
  return (
    <header className="site-header">
      <div className="container-wide">
        <div className="header-inner">
          <Link href="/" className="logo">
            OsloRegnskap.
          </Link>
          <nav className="nav-links desktop-nav">
            <Link href="/regnskapsforer/">Regnskapsfører</Link>
            <Link href="/regnskapskontor/">Regnskapskontor</Link>
            <Link href="/firmaer/">Katalog</Link>
            <Link href="/hva-koster-regnskapsforer-oslo/">Priser</Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const bydeler = Object.values(BYDELER_INFO).slice(0, 10);
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <div className="footer-heading">Regnskap i Oslo</div>
            <div className="footer-links">
              <Link href="/regnskapsforer/">Regnskapsfører Oslo</Link>
              <Link href="/regnskapskontor/">Regnskapskontor Oslo</Link>
              <Link href="/regnskapsbyra/">Regnskapsbyrå Oslo</Link>
              <Link href="/autorisert-regnskapsforer/">Autorisert regnskapsfører</Link>
              <Link href="/firmaer/">Alle regnskapsfirmaer</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">Per bydel</div>
            <div className="footer-links">
              {bydeler.map(b => (
                <Link key={b.urlSlug} href={`/regnskapsforer-${b.urlSlug}/`}>{b.displayName}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-heading">Guider</div>
            <div className="footer-links">
              <Link href="/hva-koster-regnskapsforer-oslo/">Hva koster regnskapsfører?</Link>
              <Link href="/hvordan-velge-regnskapsforer-oslo/">Hvordan velge regnskapsfører</Link>
              <Link href="/beste-regnskapskontor-oslo/">Beste regnskapskontor</Link>
              <Link href="/regnskap-for-enkeltpersonforetak-oslo/">Regnskap for ENK</Link>
              <Link href="/regnskap-for-as-oslo/">Regnskap for AS</Link>
              <Link href="/hjelp-med-regnskap-oslo/">Hjelp med regnskap</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} OsloRegnskap..no — Uavhengig informasjonsside om regnskapstjenester i Oslo</span>
          <span>Offentlig registerdata</span>
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
            {i > 0 && <span className="breadcrumb-sep">›</span>}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span style={{ color: 'var(--fg-secondary)' }}>{item.label}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

export function InternalLinks({ exclude }: { exclude?: string }) {
  const links = [
    { href: '/regnskapsforer/', label: 'Regnskapsfører Oslo' },
    { href: '/regnskapskontor/', label: 'Regnskapskontor Oslo' },
    { href: '/regnskapsbyra/', label: 'Regnskapsbyrå Oslo' },
    { href: '/autorisert-regnskapsforer/', label: 'Autorisert regnskapsfører' },
    { href: '/firmaer/', label: 'Alle firmaer' },
    { href: '/hva-koster-regnskapsforer-oslo/', label: 'Priser' },
    { href: '/hvordan-velge-regnskapsforer-oslo/', label: 'Velge regnskapsfører' },
    { href: '/beste-regnskapskontor-oslo/', label: 'Beste kontor' },
    { href: '/regnskap-for-enkeltpersonforetak-oslo/', label: 'ENK' },
    { href: '/regnskap-for-as-oslo/', label: 'AS' },
    { href: '/billig-regnskapsforer-oslo/', label: 'Billig regnskapsfører' },
    { href: '/bytte-regnskapsforer-oslo/', label: 'Bytte regnskapsfører' },
    { href: '/regnskapsforer-restaurant-oslo/', label: 'Restaurant' },
    { href: '/regnskapsforer-eiendom-oslo/', label: 'Eiendom' },
    { href: '/regnskapsforer-it-oslo/', label: 'IT-selskaper' },
    { href: '/regnskapsforer-frilanser-oslo/', label: 'Frilansere' },
    { href: '/mva-rapportering-oslo/', label: 'MVA-rapportering' },
    { href: '/arsoppgjor-oslo/', label: 'Årsoppgjør' },
    ...Object.values(BYDELER_INFO).slice(0, 6).map(b => ({
      href: `/regnskapsforer-${b.urlSlug}/`,
      label: b.displayName,
    })),
  ].filter(l => l.href !== exclude);

  return (
    <div className="related-links">
      {links.map(l => (
        <Link key={l.href} href={l.href} className="related-link">{l.label} →</Link>
      ))}
    </div>
  );
}

export function SchemaFAQ({ items }: { items: { q: string; a: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
