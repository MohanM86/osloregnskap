import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapskontor Oslo — Oversikt over alle regnskapskontor',
  description: 'Komplett oversikt over regnskapskontor i Oslo. 386 registrerte regnskapsfirmaer med adresser, kontaktinfo og bydel. Data fra Brønnøysundregistrene.',
  path: '/regnskapskontor/',
});

export default function RegnskapsKontorPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();
  const withAddress = firms.filter(f => f.adresse);

  return (
    <div className="container">
      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapskontor Oslo' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapskontor Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Oslo har {firms.length} registrerte regnskapskontor. Et regnskapskontor er et fysisk kontor
        der regnskapsførere og eventuelt andre fagpersoner jobber med regnskapstjenester for bedrifter.
        Her finner du oversikt over alle regnskapskontor i Oslo med adresser og kontaktinformasjon.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapskontor i Oslo</span>
        </div>
        <div className="stat-box">
          <span className="num">{withAddress.length}</span>
          <span className="label">Med registrert adresse</span>
        </div>
        <div className="stat-box">
          <span className="num">{bydeler.length}</span>
          <span className="label">Bydeler</span>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva er et regnskapskontor?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Et regnskapskontor er en virksomhet som tilbyr regnskapstjenester til andre bedrifter.
          Regnskapskontoret kan ha én eller flere ansatte regnskapsførere og tilbyr typisk en
          bredde av tjenester innen økonomi og regnskap.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Mange regnskapskontor i Oslo spesialiserer seg på bestemte bransjer eller bedriftsstørrelser.
          Noen fokuserer på enkeltpersonforetak og små AS, mens andre betjener mellomstore og store
          selskaper med mer komplekse behov.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Typiske tjenester fra et regnskapskontor i Oslo inkluderer løpende bokføring, fakturering,
          lønnskjøring, MVA-rapportering, årsoppgjør, skattemelding, budsjettering og økonomisk
          rådgivning. Noen tilbyr også revisjon, juridisk rådgivning og bistand ved oppstart av selskap.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapskontor per bydel</h2>
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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Slik velger du regnskapskontor i Oslo</h2>
        <p style={{ marginBottom: '1rem' }}>
          Når du skal velge regnskapskontor i Oslo, bør du vurdere flere faktorer. Det viktigste er
          at kontoret har erfaring med din type bedrift og bransje. Et regnskapskontor som kjenner
          regelverket innen din bransje kan spare deg for tid og penger.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Beliggenhet kan også spille en rolle, spesielt hvis du foretrekker fysiske møter. Med
          {firms.length} regnskapskontor fordelt over hele Oslo er det stor sannsynlighet for at
          du finner et kontor i nærheten av din virksomhet.
        </p>
        <p>
          Pris er naturligvis viktig, men bør ikke være det eneste kriteriet. Et dyrere
          regnskapskontor som gir god rådgivning kan spare deg for langt mer enn prisforskjellen
          i skatt og avgifter.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Alle regnskapskontor i Oslo ({firms.length})</h2>
        {firms.slice(0, 40).map(f => <Link href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
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
            Se alle {firms.length} regnskapskontor →
          </Link>
        </p>
      </section>

      <FAQAccordion items={[
        { q: 'Hvor mange regnskapskontor er det i Oslo?', a: `Det er ${firms.length} registrerte regnskapskontor i Oslo ifølge Brønnøysundregistrene.` },
        { q: 'Hva er forskjellen på regnskapskontor og regnskapsbyrå?', a: 'I praksis brukes begrepene regnskapskontor og regnskapsbyrå om hverandre. Et regnskapsbyrå er gjerne et litt større kontor med flere ansatte og bredere tjenestetilbud, men det finnes ingen formell forskjell.' },
        { q: 'Hvordan finner jeg regnskapskontor nær meg i Oslo?', a: 'Du kan finne regnskapskontor i din bydel ved å bruke vår bydelsoversikt. Vi har listet alle regnskapskontor per bydel i Oslo, basert på registrert forretningsadresse.' },
        { q: 'Kan jeg bruke regnskapskontor utenfor Oslo?', a: 'Ja, det er ingenting i veien for å bruke et regnskapskontor utenfor Oslo. Med moderne skybaserte regnskapssystemer kan regnskapsføreren jobbe fra hvor som helst. Mange velger likevel et lokalt kontor for enklere kommunikasjon og møter.' },
      ]} />

      <InternalLinks exclude="/regnskapskontor/" />
    </div>
  );
}
