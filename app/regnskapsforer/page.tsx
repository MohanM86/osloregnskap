import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Oslo — Komplett liste over regnskapsførere',
  description: 'Finn regnskapsfører i Oslo. Komplett oversikt med 326 autoriserte regnskapsførere fordelt på 15 bydeler. Data fra Brønnøysundregistrene.',
  path: '/regnskapsforer/',
});

export default function RegnskapsforerPage() {
  const firms = getAllFirms().filter(f => f.naeringskode === '69.202');
  const bydeler = getBydeler().filter(b => b.count > 0);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Regnskapsfører Oslo', url: 'https://osloregnskap.no/regnskapsforer/', isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsførere i Oslo. En regnskapsfører hjelper bedrifter
        med løpende bokføring, fakturering, lønnskjøring, MVA-rapportering og årsoppgjør. Her finner du
        komplett oversikt over alle regnskapsførere i Oslo, sortert etter bydel.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsførere i Oslo</span>
        </div>
        <div className="stat-box">
          <span className="num">{firms.filter(f => f.mvaRegistrert).length}</span>
          <span className="label">MVA-registrerte</span>
        </div>
        <div className="stat-box">
          <span className="num">{bydeler.length}</span>
          <span className="label">Bydeler</span>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapsfører per bydel i Oslo</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`}
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', border: '1px solid var(--border)' }}>
                <span>Regnskapsfører {b.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Hva gjør en regnskapsfører?</h2>
        <p style={{ marginBottom: '1rem' }}>
          En regnskapsfører er en fagperson som har ansvar for å føre regnskapet til en bedrift i henhold
          til norsk lov. I Oslo tilbyr regnskapsførere typisk følgende tjenester:
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Løpende bokføring</strong> innebærer registrering av alle økonomiske transaksjoner,
          inkludert inntekter, utgifter, kjøp og salg. Dette er grunnlaget for alt regnskap og
          rapportering.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>MVA-rapportering</strong> er obligatorisk for alle MVA-registrerte virksomheter.
          Regnskapsføreren sørger for korrekt beregning og innrapportering av merverdiavgift til
          Skatteetaten, normalt annenhver måned.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Lønnskjøring</strong> omfatter beregning av lønn, feriepenger, arbeidsgiveravgift
          og skattetrekk for ansatte. Regnskapsføreren rapporterer a-meldingen til myndighetene
          hver måned.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Årsoppgjør og skattemelding</strong> gjøres ved årets slutt. Regnskapsføreren
          utarbeider årsregnskap, næringsoppgave og skattemelding basert på årets bokføring.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Alle regnskapsførere i Oslo ({firms.length})</h2>
        {firms.slice(0, 50).map(f => <Link href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
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
        {firms.length > 50 && (
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link href="/firmaer/" style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--border)', display: 'inline-block' }}>
              Se alle {firms.length} regnskapsførere →
            </Link>
          </p>
        )}
      </section>

      <SchemaFAQ items={[
        { q: 'Hvor mange regnskapsførere finnes i Oslo?', a: `Det er ${firms.length} registrerte regnskapsførere i Oslo ifølge Brønnøysundregistrene. Disse er registrert under næringskode 69.202 (regnskapsføring og bokføring).` },
        { q: 'Hva koster regnskapsfører i Oslo?', a: 'Timeprisen for regnskapsfører i Oslo ligger typisk mellom 500 og 1 500 kroner. Månedlig fastpris for enkeltpersonforetak er vanligvis 1 000–3 000 kroner, mens AS med ansatte betaler 5 000–15 000 kroner per måned.' },
        { q: 'Må regnskapsfører være autorisert?', a: 'Ja, alle som driver regnskapsføring for andre må ha autorisasjon fra Finanstilsynet. Autorisasjon krever relevant utdanning, praksis og vandelsattest. Sjekk alltid at regnskapsføreren er autorisert før du inngår avtale.' },
        { q: 'Kan jeg bytte regnskapsfører?', a: 'Ja, du kan bytte regnskapsfører når som helst. Den nye regnskapsføreren vil normalt bistå med overgangsarbeidet og innhente dokumentasjon fra din forrige regnskapsfører.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsførere finnes i Oslo?', a: `Det er ${firms.length} registrerte regnskapsførere i Oslo ifølge Brønnøysundregistrene. Disse er registrert under næringskode 69.202 (regnskapsføring og bokføring).` },
        { q: 'Hva koster regnskapsfører i Oslo?', a: 'Timeprisen for regnskapsfører i Oslo ligger typisk mellom 500 og 1 500 kroner. Månedlig fastpris for enkeltpersonforetak er vanligvis 1 000–3 000 kroner, mens AS med ansatte betaler 5 000–15 000 kroner per måned.' },
        { q: 'Må regnskapsfører være autorisert?', a: 'Ja, alle som driver regnskapsføring for andre må ha autorisasjon fra Finanstilsynet. Autorisasjon krever relevant utdanning, praksis og vandelsattest. Sjekk alltid at regnskapsføreren er autorisert før du inngår avtale.' },
        { q: 'Kan jeg bytte regnskapsfører?', a: 'Ja, du kan bytte regnskapsfører når som helst. Den nye regnskapsføreren vil normalt bistå med overgangsarbeidet og innhente dokumentasjon fra din forrige regnskapsfører.' },
      ]} />

      <InternalLinks exclude="/regnskapsforer/" />
    </div>
  );
}
