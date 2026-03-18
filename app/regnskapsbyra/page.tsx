import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsbyrå Oslo — Finn regnskapsbyrå i Oslo',
  description: 'Oversikt over regnskapsbyråer i Oslo. 386 registrerte regnskapsfirmaer med tjenester som bokføring, lønn, MVA og årsoppgjør.',
  path: '/regnskapsbyra/',
});

export default function RegnskapsByraPage() {
  const firms = getAllFirms();
  const mvaFirms = firms.filter(f => f.mvaRegistrert);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Regnskapsbyrå Oslo', url: 'https://osloregnskap.no/regnskapsbyra/', isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsbyrå Oslo' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsbyrå Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Et regnskapsbyrå i Oslo tilbyr profesjonelle regnskapstjenester til bedrifter i alle størrelser.
        Oslo har {firms.length} registrerte regnskapsfirmaer, hvorav {mvaFirms.length} er MVA-registrerte.
        Her finner du komplett oversikt over regnskapsbyråer i Oslo.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva tilbyr et regnskapsbyrå?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Et regnskapsbyrå er en virksomhet som tilbyr regnskapstjenester til eksterne kunder.
          Begrepet brukes ofte om større regnskapsfirmaer med flere ansatte og et bredt spekter
          av tjenester. I Oslo finnes det regnskapsbyråer i alle størrelser.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Typiske tjenester fra et regnskapsbyrå inkluderer løpende bokføring og bilagsbehandling,
          fakturering og innbetalingskontroll, lønnskjøring med a-melding, MVA-oppgaver annenhver
          måned, årsoppgjør med resultatregnskap og balanse, skattemelding og næringsoppgave,
          samt økonomisk rådgivning og budsjettering.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Mange regnskapsbyråer i Oslo har spesialisert seg på bestemte bransjer. Du finner byråer
          som fokuserer på restaurant og uteliv, eiendom, IT og teknologi, helse, håndverk, transport
          og mange andre bransjer. Bransjekunnskap kan være avgjørende for kvaliteten på regnskapet.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapsbyrå vs. regnskapsfører vs. regnskapskontor</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Regnskapsbyrå</strong> er et vanlig begrep for en virksomhet som tilbyr regnskapstjenester.
          Ordet «byrå» antyder gjerne et litt større firma med flere ansatte og bredere kompetanse.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Regnskapsfører</strong> refererer til den individuelle fagpersonen som utfører
          regnskapsarbeidet. En autorisert regnskapsfører har godkjenning fra Finanstilsynet.
        </p>
        <p>
          <strong>Regnskapskontor</strong> brukes ofte synonymt med regnskapsbyrå og refererer
          til det fysiske kontoret der regnskapstjenestene utføres.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Finn regnskapsbyrå per bydel</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {getBydeler().map(b => {
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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapsbyråer i Oslo ({firms.length})</h2>
        {firms.slice(0, 30).map(f => <Link href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
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
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/firmaer/" style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--border)', display: 'inline-block' }}>
            Se alle {firms.length} regnskapsbyråer →
          </Link>
        </p>
      </section>

      <SchemaFAQ items={[
        { q: 'Hva er et regnskapsbyrå?', a: 'Et regnskapsbyrå er en virksomhet som tilbyr regnskapstjenester til andre bedrifter. Tjenestene inkluderer typisk bokføring, lønnskjøring, MVA-rapportering og årsoppgjør.' },
        { q: 'Hvor mye koster et regnskapsbyrå i Oslo?', a: 'Prisen varierer basert på tjenester og omfang. For enkeltpersonforetak koster det typisk 1 000–3 000 kroner per måned, mens AS med ansatte betaler 5 000–15 000 kroner per måned.' },
        { q: 'Trenger jeg et lokalt regnskapsbyrå i Oslo?', a: 'Ikke nødvendigvis. Med skybaserte regnskapssystemer kan et regnskapsbyrå jobbe for deg uansett beliggenhet. Mange foretrekker likevel et lokalt byrå for enklere kommunikasjon.' },
        { q: 'Hvordan bytter jeg regnskapsbyrå?', a: 'Du kan bytte regnskapsbyrå når som helst. Si opp avtalen med eksisterende byrå, og det nye byrået vil normalt bistå med å innhente dokumentasjon og sørge for en smidig overgang.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hva er et regnskapsbyrå?', a: 'Et regnskapsbyrå er en virksomhet som tilbyr regnskapstjenester til andre bedrifter. Tjenestene inkluderer typisk bokføring, lønnskjøring, MVA-rapportering og årsoppgjør.' },
        { q: 'Hvor mye koster et regnskapsbyrå i Oslo?', a: 'Prisen varierer basert på tjenester og omfang. For enkeltpersonforetak koster det typisk 1 000–3 000 kroner per måned, mens AS med ansatte betaler 5 000–15 000 kroner per måned.' },
        { q: 'Trenger jeg et lokalt regnskapsbyrå i Oslo?', a: 'Ikke nødvendigvis. Med skybaserte regnskapssystemer kan et regnskapsbyrå jobbe for deg uansett beliggenhet. Mange foretrekker likevel et lokalt byrå for enklere kommunikasjon.' },
        { q: 'Hvordan bytter jeg regnskapsbyrå?', a: 'Du kan bytte regnskapsbyrå når som helst. Si opp avtalen med eksisterende byrå, og det nye byrået vil normalt bistå med å innhente dokumentasjon og sørge for en smidig overgang.' },
      ]} />

      <InternalLinks exclude="/regnskapsbyra/" />
    </div>
  );
}
