import Link from 'next/link';
import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { FAQ, InternalLinks } from '@/lib/components';
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OsloRegnskap.no',
    url: 'https://osloregnskap.no',
    description: 'Komplett oversikt over regnskapstjenester i Oslo',
    publisher: {
      '@type': 'Organization',
      name: 'OsloRegnskap.no',
    },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
        Regnskap Oslo — Finn regnskapsfører i Oslo
      </h1>

      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '700px' }}>
        Oslo har {firms.length} registrerte regnskapsfirmaer fordelt på {bydeler.length} bydeler.
        Her finner du komplett oversikt over regnskapsførere, regnskapskontor og regnskapsbyråer i hele Oslo,
        med data direkte fra Brønnøysundregistrene.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Oslo</span>
        </div>
        <div className="stat-box">
          <span className="num">{regnskapForere.length}</span>
          <span className="label">Regnskapsførere</span>
        </div>
        <div className="stat-box">
          <span className="num">{revisorer.length}</span>
          <span className="label">Revisjonsfirmaer</span>
        </div>
        <div className="stat-box">
          <span className="num">{bydeler.length}</span>
          <span className="label">Bydeler dekket</span>
        </div>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Regnskapsfører i Oslo per bydel</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Regnskapsfirmaer i Oslo er spredt over hele byen. De fleste holder til i Sentrum og på Frogner,
          men du finner kvalifiserte regnskapsførere i alle bydeler.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link
                key={b.slug}
                href={`/regnskapsforer-${info.urlSlug}/`}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem 1rem', border: '1px solid var(--border)',
                  transition: 'border-color 0.15s',
                }}
              >
                <span>{b.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{b.count} firmaer</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Typer regnskapstjenester i Oslo</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          <Link href="/regnskapsforer/" style={{ padding: '1.25rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Regnskapsfører Oslo</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
              Finn autorisert regnskapsfører i Oslo. Komplett liste med {regnskapForere.length} registrerte regnskapsførere.
            </p>
          </Link>
          <Link href="/regnskapskontor/" style={{ padding: '1.25rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Regnskapskontor Oslo</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
              Oversikt over regnskapskontor i Oslo med adresser, kontaktinfo og bydel.
            </p>
          </Link>
          <Link href="/regnskapsbyra/" style={{ padding: '1.25rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Regnskapsbyrå Oslo</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
              Regnskapsbyråer i Oslo tilbyr alt fra løpende bokføring til årsoppgjør og rådgivning.
            </p>
          </Link>
          <Link href="/autorisert-regnskapsforer/" style={{ padding: '1.25rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Autorisert regnskapsfører Oslo</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
              Hva betyr autorisasjon og hvorfor det er viktig å velge autorisert regnskapsfører.
            </p>
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Guider om regnskap i Oslo</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/hva-koster-regnskapsforer-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Hva koster regnskapsfører i Oslo? →
          </Link>
          <Link href="/hvordan-velge-regnskapsforer-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Hvordan velge regnskapsfører i Oslo →
          </Link>
          <Link href="/beste-regnskapskontor-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Beste regnskapskontor i Oslo →
          </Link>
          <Link href="/regnskap-for-enkeltpersonforetak-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Regnskap for enkeltpersonforetak i Oslo →
          </Link>
          <Link href="/regnskap-for-as-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Regnskap for AS i Oslo →
          </Link>
          <Link href="/hjelp-med-regnskap-oslo/" style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
            Hjelp med regnskap i Oslo →
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Om regnskap i Oslo</h2>
        <p style={{ marginBottom: '1rem' }}>
          Oslo er Norges største by og det naturlige senteret for regnskapstjenester i landet.
          Med {firms.length} registrerte regnskapsfirmaer har Oslo et bredt utvalg av tilbydere,
          fra enkeltpersonforetak som spesialiserer seg på spesifikke bransjer til store
          regnskapsbyråer som betjener alt fra oppstartsbedrifter til etablerte selskaper.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          De fleste regnskapsfirmaene i Oslo holder til i Sentrum ({bydeler.find(b => b.name === 'Sentrum')?.count || 0} firmaer)
          og på Frogner ({bydeler.find(b => b.name === 'Frogner')?.count || 0} firmaer),
          men du finner også mange regnskapsførere i bydeler som Østensjø, Grünerløkka og Nordstrand.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Regnskapsførere i Oslo tilbyr typisk tjenester som løpende bokføring, fakturering,
          lønnskjøring, MVA-rapportering, årsoppgjør og skattemelding. Mange tilbyr også
          rådgivning innen økonomi, skatt og selskapsstruktur.
        </p>
        <p>
          Alle regnskapsfirmaer i vår oversikt er hentet fra Brønnøysundregistrene og er
          registrert med næringskode for regnskapsføring og bokføring (69.202) eller revisjon (69.201).
        </p>
      </section>

      <FAQ items={[
        {
          q: 'Hvor mange regnskapsfirmaer finnes det i Oslo?',
          a: `Per i dag er det ${firms.length} registrerte regnskapsfirmaer i Oslo ifølge Brønnøysundregistrene. Av disse driver ${regnskapForere.length} med regnskapsføring og bokføring, mens ${revisorer.length} er revisjonsfirmaer.`,
        },
        {
          q: 'Hvilken bydel i Oslo har flest regnskapsfirmaer?',
          a: `Sentrum har flest regnskapsfirmaer med ${bydeler.find(b => b.name === 'Sentrum')?.count || 0} registrerte selskaper, etterfulgt av Frogner med ${bydeler.find(b => b.name === 'Frogner')?.count || 0} firmaer.`,
        },
        {
          q: 'Hva koster en regnskapsfører i Oslo?',
          a: 'Prisen for regnskapsfører i Oslo varierer typisk fra 500 til 1 500 kroner per time. For enkeltpersonforetak med få transaksjoner kan månedskosten ligge mellom 1 000 og 3 000 kroner, mens AS med ansatte ofte betaler 5 000–15 000 kroner per måned.',
        },
        {
          q: 'Trenger jeg regnskapsfører i Oslo?',
          a: 'Du er ikke pålagt å bruke regnskapsfører, men alle næringsdrivende er pålagt å føre regnskap. For AS med ansatte og mer enn 5 millioner i omsetning anbefales det sterkt å bruke autorisert regnskapsfører. Enkeltpersonforetak med lav omsetning kan vurdere å føre regnskapet selv.',
        },
        {
          q: 'Hva er forskjellen på regnskapsfører og revisor?',
          a: 'En regnskapsfører fører det løpende regnskapet, inkludert bokføring, fakturering og MVA-rapportering. En revisor kontrollerer og attesterer årsregnskapet. Ikke alle selskaper har revisjonsplikt, men alle plikter å føre regnskap.',
        },
      ]} />

      <InternalLinks />
    </div>
  );
}
