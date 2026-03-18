import Link from 'next/link';
import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { AnimatedStat, BarChart, TimelineChart, DonutChart, FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Regnskap Oslo — Komplett oversikt over regnskapstjenester',
  description: 'Finn regnskapsfører i Oslo. Komplett katalog med 386 regnskapsfirmaer, guider, priser og oversikt per bydel. Oppdatert med data fra Brønnøysundregistrene.',
  path: '/',
});

export default function HomePage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();
  const regnskapForere = firms.filter(f => f.naeringskode === '69.202');
  const revisorer = firms.filter(f => f.naeringskode === '69.201');

  // Timeline data
  const yearBuckets: Record<string, number> = {};
  firms.forEach(f => {
    if (f.stiftet) {
      const y = parseInt(f.stiftet.substring(0, 4));
      const decade = Math.floor(y / 5) * 5;
      const label = `${decade}`;
      yearBuckets[label] = (yearBuckets[label] || 0) + 1;
    }
  });
  const timelineData = Object.entries(yearBuckets)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .filter(([y]) => parseInt(y) >= 1980)
    .map(([label, value]) => ({ label: `${label}–${parseInt(label)+4}`, value }));

  // Bydel chart data
  const bydelChartData = bydeler.slice(0, 10).map(b => ({
    label: b.name,
    value: b.count,
    href: `/regnskapsforer-${BYDELER_INFO[b.name]?.urlSlug || b.slug}/`,
  }));

  // Donut data
  const donutData = [
    { label: 'Regnskapsføring', value: regnskapForere.length, color: '#00C48C' },
    { label: 'Revisjon', value: revisorer.length, color: '#00D9A0' },
    { label: 'Annet', value: firms.length - regnskapForere.length - revisorer.length, color: '#e8e5e1' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    name: 'OsloRegnskap.no', url: 'https://osloregnskap.no',
    description: 'Komplett oversikt over regnskapstjenester i Oslo',
  };

  const faqItems = [
    { q: 'Hvor mange regnskapsfirmaer finnes det i Oslo?', a: `Per i dag er det ${firms.length} registrerte regnskapsfirmaer i Oslo ifølge Brønnøysundregistrene. Av disse driver ${regnskapForere.length} med regnskapsføring og bokføring, mens ${revisorer.length} er revisjonsfirmaer.` },
    { q: 'Hvilken bydel i Oslo har flest regnskapsfirmaer?', a: `Sentrum har flest med ${bydeler.find(b => b.name === 'Sentrum')?.count || 0} firmaer, etterfulgt av Frogner med ${bydeler.find(b => b.name === 'Frogner')?.count || 0}.` },
    { q: 'Hva koster en regnskapsfører i Oslo?', a: 'Timeprisen ligger typisk mellom 500 og 1 500 kroner. For ENK: 1 000–3 000 kr/mnd. For AS med ansatte: 5 000–15 000 kr/mnd.' },
    { q: 'Trenger jeg regnskapsfører i Oslo?', a: 'Du er ikke pålagt å bruke regnskapsfører, men alle næringsdrivende har bokføringsplikt. For AS anbefales det sterkt å bruke autorisert regnskapsfører.' },
    { q: 'Hva er forskjellen på regnskapsfører og revisor?', a: 'En regnskapsfører fører det løpende regnskapet. En revisor kontrollerer og attesterer årsregnskapet. Ikke alle selskaper har revisjonsplikt.' },
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SchemaFAQ items={faqItems} />

      {/* Hero */}
      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskap Oslo</h1>
        <p className="animate-in animate-in-2">
          Komplett oversikt over {firms.length} regnskapsfirmaer i Oslo, fordelt på {bydeler.length} bydeler.
          Data direkte fra Brønnøysundregistrene — oppdatert, uavhengig og fullstendig.
        </p>
      </section>

      {/* Stats */}
      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} label="Regnskapsfirmaer" />
        <AnimatedStat value={regnskapForere.length} label="Regnskapsførere" />
        <AnimatedStat value={revisorer.length} label="Revisjonsfirmaer" />
        <AnimatedStat value={bydeler.length} label="Bydeler dekket" />
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', margin: '2rem 0' }} className="animate-in animate-in-4">
        <BarChart title="Regnskapsfirmaer per bydel" data={bydelChartData} />
        <DonutChart title="Fordeling etter type" data={donutData} />
      </div>

      <div className="animate-in animate-in-5">
        <TimelineChart title="Stiftelsesår — vekst over tid" data={timelineData} />
      </div>

      {/* Bydeler grid */}
      <section style={{ marginTop: '3rem' }} className="animate-in animate-in-6">
        <h2 className="section-heading">Finn regnskapsfører per bydel</h2>
        <p className="section-sub">
          Regnskapsfirmaer i Oslo er spredt over hele byen. Klikk på en bydel for å se alle firmaer i området.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }} className="stagger-fade">
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`} className="bydel-card">
                <span className="bydel-name">{b.name}</span>
                <span className="bydel-count">{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Service types */}
      <section style={{ marginTop: '3rem' }}>
        <h2 className="section-heading">Typer regnskapstjenester</h2>
        <div className="card-grid">
          {[
            { href: '/regnskapsforer/', title: 'Regnskapsfører Oslo', desc: `${regnskapForere.length} registrerte regnskapsførere med autorisasjon.` },
            { href: '/regnskapskontor/', title: 'Regnskapskontor Oslo', desc: 'Oversikt med adresser, kontaktinfo og bydel.' },
            { href: '/regnskapsbyra/', title: 'Regnskapsbyrå Oslo', desc: 'Fra bokføring til årsoppgjør og rådgivning.' },
            { href: '/autorisert-regnskapsforer/', title: 'Autorisert regnskapsfører', desc: 'Hva autorisasjon betyr og hvorfor det er viktig.' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="card" style={{ textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--fg-secondary)' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section style={{ marginTop: '3rem' }}>
        <h2 className="section-heading">Guider</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="stagger-fade">
          {[
            { href: '/hva-koster-regnskapsforer-oslo/', label: 'Hva koster regnskapsfører i Oslo?' },
            { href: '/hvordan-velge-regnskapsforer-oslo/', label: 'Hvordan velge regnskapsfører i Oslo' },
            { href: '/beste-regnskapskontor-oslo/', label: 'Beste regnskapskontor i Oslo' },
            { href: '/regnskap-for-enkeltpersonforetak-oslo/', label: 'Regnskap for enkeltpersonforetak i Oslo' },
            { href: '/regnskap-for-as-oslo/', label: 'Regnskap for AS i Oslo' },
            { href: '/hjelp-med-regnskap-oslo/', label: 'Hjelp med regnskap i Oslo' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
              <span>{item.label}</span>
              <span style={{ color: 'var(--accent-warm)' }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content */}
      <section style={{ marginTop: '3rem' }} className="prose">
        <h2>Om regnskap i Oslo</h2>
        <p>
          Oslo er Norges største by og det naturlige senteret for regnskapstjenester. Med {firms.length} registrerte
          regnskapsfirmaer har Oslo et bredt utvalg av tilbydere — fra enkeltpersonforetak spesialisert på bestemte
          bransjer, til store regnskapsbyråer som betjener alt fra oppstartsbedrifter til etablerte konsern.
        </p>
        <p>
          De fleste regnskapsfirmaene holder til i Sentrum ({bydeler.find(b => b.name === 'Sentrum')?.count} firmaer)
          og på Frogner ({bydeler.find(b => b.name === 'Frogner')?.count} firmaer), men du finner regnskapsførere
          i alle bydeler.
        </p>
        <p>
          Typiske tjenester inkluderer løpende bokføring, fakturering, lønnskjøring, MVA-rapportering, årsoppgjør
          og skattemelding. Mange tilbyr også rådgivning innen økonomi, skatt og selskapsstruktur.
        </p>
        <p>
          Alle regnskapsfirmaer i vår oversikt er hentet fra Brønnøysundregistrene med næringskode 69.202
          (regnskapsføring og bokføring) eller 69.201 (revisjon).
        </p>
      </section>

      <FAQAccordion items={faqItems} />

      <InternalLinks />
    </div>
  );
}
