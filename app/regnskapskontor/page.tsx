import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapskontor Oslo — Oversikt over alle regnskapskontor',
  description: 'Komplett oversikt over regnskapskontor i Oslo. 386 registrerte regnskapsfirmaer med adresser og bydel. ',
  path: '/regnskapskontor/',
});

export default function RegnskapsKontorPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();
  const withAddress = firms.filter(f => f.adresse);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Regnskapskontor Oslo', url: 'https://osloregnskap.no/regnskapskontor/', isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapskontor Oslo' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapskontor Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Oslo har {firms.length} registrerte regnskapskontor. Et regnskapskontor er et fysisk kontor
        der regnskapsførere og eventuelt andre fagpersoner jobber med regnskapstjenester for bedrifter.
        Her finner du oversikt over alle regnskapskontor i Oslo med adresser og bydelsinformasjon.
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

      <section style={{ marginTop: '2rem' }} className="prose">
        <h2>Hva er et regnskapskontor?</h2>
        <p>
          Et regnskapskontor er en virksomhet som tilbyr regnskapstjenester til andre bedrifter.
          Regnskapskontoret kan ha én eller flere ansatte regnskapsførere og tilbyr typisk en
          bredde av tjenester innen økonomi og regnskap. I Oslo varierer regnskapskontorene
          fra enkeltpersonforetak med én regnskapsfører til store byråer med hundrevis av ansatte.
        </p>
        <p>
          Mange regnskapskontor i Oslo spesialiserer seg på bestemte bransjer eller bedriftsstørrelser.
          Noen fokuserer på enkeltpersonforetak og små AS, mens andre betjener mellomstore og store
          selskaper med mer komplekse behov. Denne spesialiseringen gjør at du kan finne et kontor
          som kjenner akkurat din bransje og dine utfordringer.
        </p>
        <p>
          Typiske tjenester fra et regnskapskontor i Oslo inkluderer løpende bokføring, fakturering,
          lønnskjøring, MVA-rapportering, årsoppgjør, skattemelding, budsjettering og økonomisk
          rådgivning. Noen tilbyr også revisjon, juridisk rådgivning og bistand ved oppstart av selskap.
        </p>

        <h2>Tjenester et regnskapskontor i Oslo tilbyr</h2>
        <p>
          <strong>Bokføring og bilagsbehandling:</strong> Grunnsteinen i ethvert regnskapsoppdrag.
          Regnskapskontoret registrerer alle økonomiske transaksjoner — inntekter, utgifter, kjøp
          og salg — i henhold til bokføringsloven. Med moderne skybaserte systemer skjer mye av
          bilagsbehandlingen digitalt, der fakturaer og kvitteringer skannes og bokføres automatisk.
        </p>
        <p>
          <strong>Lønn og personaladministrasjon:</strong> For bedrifter med ansatte er lønnskjøring
          en av de mest krevende oppgavene. Regnskapskontoret beregner lønn, skattetrekk, feriepenger,
          sykepenger og arbeidsgiveravgift, og rapporterer a-meldingen til myndighetene hver måned.
          Mange kontorer hjelper også med arbeidsavtaler, personalregistre og OTP-administrasjon.
        </p>
        <p>
          <strong>MVA og avgiftsrapportering:</strong> MVA-registrerte virksomheter må levere
          MVA-melding annenhver måned. Regnskapskontoret sørger for korrekt beregning av inngående
          og utgående merverdiavgift, håndterer spesielle MVA-regler for ulike bransjer, og
          leverer meldingen innen fristen.
        </p>
        <p>
          <strong>Årsoppgjør og skattemelding:</strong> Ved årets slutt utarbeider regnskapskontoret
          årsregnskap med resultatregnskap, balanse og noter for aksjeselskaper, samt skattemelding
          og næringsoppgave for alle selskapsformer. Dette er den mest komplekse delen av
          regnskapsarbeidet og krever grundig gjennomgang av hele årets bokføring.
        </p>
        <p>
          <strong>Økonomisk rådgivning:</strong> Stadig flere regnskapskontor i Oslo tilbyr
          rådgivningstjenester utover det rent regnskapsfaglige. Dette kan inkludere budsjettering
          og likviditetsstyring, lønnsomhetsanalyser, rådgivning om selskapsstruktur og skatt,
          bistand ved finansiering og banksøknader, og controller-tjenester der kontoret
          fungerer som en ekstern økonomiavdeling.
        </p>

        <h2>Stort vs. lite regnskapskontor</h2>
        <p>
          I Oslo finnes det regnskapskontor i alle størrelser. Store byråer som BDO, KPMG og
          Deloitte har hundrevis av ansatte og tilbyr spisskompetanse innen internasjonale
          skatteregler, konsernregnskap og kompleks rapportering. De passer best for større
          selskaper med avanserte behov.
        </p>
        <p>
          Mellomstore kontorer med 5–30 ansatte tilbyr ofte en god balanse mellom bred
          kompetanse og personlig oppfølging. De har gjerne spesialisering innen utvalgte
          bransjer og kan håndtere de fleste regnskapsbehov effektivt.
        </p>
        <p>
          Små kontorer med 1–5 ansatte gir typisk den tetteste personlige oppfølgingen.
          Du snakker direkte med regnskapsføreren din uten mellomledd. Ulempen kan være
          sårbarhet ved sykdom eller ferie, og begrenset bredde i kompetansen.
        </p>
        <p>
          Valget mellom stort og lite avhenger av dine prioriteringer. Trenger du en
          regnskapsfører som kjenner deg og bedriften din inn og ut? Da kan et lite kontor
          passe. Trenger du tilgang til spesialister innen internasjonal skatt eller
          transaksjonsrådgivning? Da bør du vurdere et større byrå.
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

      <SchemaFAQ items={[
        { q: 'Hvor mange regnskapskontor er det i Oslo?', a: `Det er ${firms.length} registrerte regnskapskontor i Oslo .` },
        { q: 'Hva er forskjellen på regnskapskontor og regnskapsbyrå?', a: 'I praksis brukes begrepene regnskapskontor og regnskapsbyrå om hverandre. Et regnskapsbyrå er gjerne et litt større kontor med flere ansatte og bredere tjenestetilbud, men det finnes ingen formell forskjell.' },
        { q: 'Hvordan finner jeg regnskapskontor nær meg i Oslo?', a: 'Du kan finne regnskapskontor i din bydel ved å bruke vår bydelsoversikt. Vi har listet alle regnskapskontor per bydel i Oslo, basert på registrert forretningsadresse.' },
        { q: 'Kan jeg bruke regnskapskontor utenfor Oslo?', a: 'Ja, det er ingenting i veien for å bruke et regnskapskontor utenfor Oslo. Med moderne skybaserte regnskapssystemer kan regnskapsføreren jobbe fra hvor som helst. Mange velger likevel et lokalt kontor for enklere kommunikasjon og møter.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapskontor er det i Oslo?', a: `Det er ${firms.length} registrerte regnskapskontor i Oslo .` },
        { q: 'Hva er forskjellen på regnskapskontor og regnskapsbyrå?', a: 'I praksis brukes begrepene regnskapskontor og regnskapsbyrå om hverandre. Et regnskapsbyrå er gjerne et litt større kontor med flere ansatte og bredere tjenestetilbud, men det finnes ingen formell forskjell.' },
        { q: 'Hvordan finner jeg regnskapskontor nær meg i Oslo?', a: 'Du kan finne regnskapskontor i din bydel ved å bruke vår bydelsoversikt. Vi har listet alle regnskapskontor per bydel i Oslo, basert på registrert forretningsadresse.' },
        { q: 'Kan jeg bruke regnskapskontor utenfor Oslo?', a: 'Ja, det er ingenting i veien for å bruke et regnskapskontor utenfor Oslo. Med moderne skybaserte regnskapssystemer kan regnskapsføreren jobbe fra hvor som helst. Mange velger likevel et lokalt kontor for enklere kommunikasjon og møter.' },
      ]} />

      <InternalLinks exclude="/regnskapskontor/" />
    </div>
  );
}
