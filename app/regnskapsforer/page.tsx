import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Oslo — Komplett liste over regnskapsførere',
  description: 'Finn regnskapsfører i Oslo. Komplett oversikt med 326 autoriserte regnskapsførere fordelt på 15 bydeler. ',
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
      <section className="hero">
      

      <h1>Regnskapsfører Oslo</h1>
      

      <p >
        Det finnes {firms.length} registrerte regnskapsførere i Oslo. En regnskapsfører hjelper bedrifter
        med løpende bokføring, fakturering, lønnskjøring, MVA-rapportering og årsoppgjør. Her finner du
        komplett oversikt over alle regnskapsførere i Oslo, sortert etter bydel.
      </p>
      </section>

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
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }} className="prose">
        <h2>Hva gjør en regnskapsfører?</h2>
        <p>
          En regnskapsfører er en fagperson som har ansvar for å føre regnskapet til en bedrift i henhold
          til norsk lov. I Oslo tilbyr regnskapsførere et bredt spekter av tjenester tilpasset bedrifter
          i alle størrelser og bransjer.
        </p>
        <p>
          <strong>Løpende bokføring</strong> innebærer registrering av alle økonomiske transaksjoner,
          inkludert inntekter, utgifter, kjøp og salg. Dette er grunnlaget for alt regnskap og
          rapportering. Bokføringen skal gjøres i henhold til bokføringsloven og god bokføringsskikk,
          og danner grunnlaget for MVA-oppgaver, skattemelding og årsregnskap.
        </p>
        <p>
          <strong>MVA-rapportering</strong> er obligatorisk for alle MVA-registrerte virksomheter.
          Regnskapsføreren sørger for korrekt beregning og innrapportering av merverdiavgift til
          Skatteetaten, normalt annenhver måned. Feil i MVA-rapporteringen kan føre til
          tilleggsavgift og renter, så presisjon er avgjørende.
        </p>
        <p>
          <strong>Lønnskjøring</strong> omfatter beregning av lønn, feriepenger, arbeidsgiveravgift
          og skattetrekk for ansatte. Regnskapsføreren rapporterer a-meldingen til myndighetene
          hver måned. For bedrifter med ansatte er dette en av de mest tidkrevende
          regnskapsoppgavene, med strenge krav til korrekthet og tidsfrister.
        </p>
        <p>
          <strong>Årsoppgjør og skattemelding</strong> gjøres ved årets slutt. Regnskapsføreren
          utarbeider årsregnskap med resultatregnskap, balanse og noter for aksjeselskaper,
          samt næringsoppgave og skattemelding for alle selskapsformer. Dette er den mest
          komplekse delen av regnskapsarbeidet og krever god oversikt over årets bokføring.
        </p>

        <h2>Når bør du bruke regnskapsfører i Oslo?</h2>
        <p>
          Det er flere situasjoner der det lønner seg å bruke regnskapsfører fremfor å føre
          regnskapet selv. Dersom du driver aksjeselskap, er det nærmest en forutsetning
          — kravene til rapportering er for komplekse for de fleste å håndtere uten faglig
          bistand. Selv for enkeltpersonforetak kan en regnskapsfører være verdt investeringen
          dersom du har mer enn 20–30 bilag per måned, er MVA-registrert, har ansatte, eller
          driver i en bransje med spesielle regnskapsregler.
        </p>
        <p>
          En regnskapsfører i Oslo kan også fungere som en økonomisk rådgiver. Mange bedriftseiere
          undervurderer verdien av å ha noen som ser det store bildet i økonomien — noen som kan
          varsle om likviditetsproblemer før de oppstår, foreslå skatteoptimalisering innenfor
          lovens rammer, og gi råd om investeringer og vekststrategi.
        </p>
        <p>
          Kostnaden ved å bruke regnskapsfører er som regel lavere enn verdien av tiden du
          frigjør. For mange bedriftseiere i Oslo er de 10–20 timene i måneden de ville brukt
          på regnskap langt mer verdifulle brukt på salg, kunderelasjoner eller produktutvikling.
        </p>

        <h2>Autorisasjon og kvalitetskrav</h2>
        <p>
          Alle regnskapsførere i Norge som tilbyr tjenester til andre må ha autorisasjon fra
          Finanstilsynet. Autorisasjonen sikrer at regnskapsføreren har gjennomført relevant
          utdanning (minimum bachelorgrad med fordypning i regnskap), har minst to års
          relevant praksis, og har plettfri vandel. I tillegg må autoriserte regnskapsførere
          gjennomføre minimum 77 timer etterutdanning over en treårsperiode for å holde
          kompetansen oppdatert.
        </p>
        <p>
          <Link href="/autorisert-regnskapsforer/">Les mer om autorisasjon og hva det innebærer</Link>.
        </p>

        <h2>Regnskapsfører for ulike bransjer i Oslo</h2>
        <p>
          Oslo har et mangfoldig næringsliv, og mange regnskapsførere har spesialisert seg
          på bestemte bransjer. Innen restaurant og uteliv gjelder spesielle regler for tips,
          kontanthåndtering og personalbespisning. Eiendomsbransjen har komplekse regler
          for avskrivninger, justeringsrett for MVA og utleievirksomhet. IT og teknologi
          har ofte utfordringer knyttet til internasjonale transaksjoner, valuta og
          immaterielle verdier. Byggebransjen må håndtere anordningsprinsippet for
          tilvirkningskontrakter og solidaransvar for lønn.
        </p>
        <p>
          Ved å velge en regnskapsfører med bransjekunnskap slipper du å betale for
          at regnskapsføreren må lære seg regelverket i din bransje. En erfaren
          bransjespesialist kan også gi mer relevant rådgivning og varsle om
          bransjesspesifikke fallgruver.
        </p>

        <h2>Priser for regnskapsfører i Oslo</h2>
        <p>
          Prisene for regnskapsfører i Oslo varierer basert på tjenestebehov og bedriftsstørrelse.
          Timeprisen ligger typisk mellom 500 og 1 500 kroner. For enkeltpersonforetak med
          enkel drift er månedsprisen vanligvis 1 000–3 000 kroner. Aksjeselskaper uten ansatte
          betaler typisk 2 000–5 000 kroner per måned, mens AS med ansatte ofte ligger på
          5 000–15 000 kroner avhengig av antall ansatte og bilagsvolum.
          <Link href="/hva-koster-regnskapsforer-oslo/"> Les vår komplette prisguide</Link>.
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
        { q: 'Hvor mange regnskapsførere finnes i Oslo?', a: `Det er ${firms.length} registrerte regnskapsførere i Oslo.` },
        { q: 'Hva koster regnskapsfører i Oslo?', a: 'Timeprisen ligger mellom 500 og 1 500 kroner. Månedlig fastpris for ENK er vanligvis 1 000–3 000 kr, mens AS med ansatte betaler 5 000–15 000 kr/mnd.' },
        { q: 'Må regnskapsfører være autorisert?', a: 'Ja, alle som driver regnskapsføring for andre må ha autorisasjon fra Finanstilsynet. Autorisasjon krever relevant utdanning, praksis og vandelsattest.' },
        { q: 'Kan jeg bytte regnskapsfører?', a: 'Ja, du kan bytte når som helst. Den nye regnskapsføreren bistår med overgangsarbeidet.' },
        { q: 'Hva er forskjellen på regnskapsfører og økonom?', a: 'En regnskapsfører er spesialisert på å føre regnskap og sørge for at lovpålagte rapporteringskrav oppfylles. En økonom har bredere utdanning innen økonomi og kan jobbe med alt fra finans til strategisk planlegging. En autorisert regnskapsfører har spesifikk kompetanse og godkjenning for regnskapsføring.' },
        { q: 'Hva skjer hvis regnskapsføreren gjør feil?', a: 'Autoriserte regnskapsførere er pålagt å ha ansvarsforsikring som dekker eventuelle feil. Dersom feilen fører til økonomisk tap for deg, kan du kreve erstatning gjennom forsikringen. Du bør dokumentere feilen og kontakte regnskapsføreren skriftlig.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsførere finnes i Oslo?', a: `Det er ${firms.length} registrerte regnskapsførere i Oslo.` },
        { q: 'Hva koster regnskapsfører i Oslo?', a: 'Timeprisen ligger mellom 500 og 1 500 kroner. Månedlig fastpris for ENK er vanligvis 1 000–3 000 kr, mens AS med ansatte betaler 5 000–15 000 kr/mnd.' },
        { q: 'Må regnskapsfører være autorisert?', a: 'Ja, alle som driver regnskapsføring for andre må ha autorisasjon fra Finanstilsynet. Autorisasjon krever relevant utdanning, praksis og vandelsattest.' },
        { q: 'Kan jeg bytte regnskapsfører?', a: 'Ja, du kan bytte når som helst. Den nye regnskapsføreren bistår med overgangsarbeidet.' },
        { q: 'Hva er forskjellen på regnskapsfører og økonom?', a: 'En regnskapsfører er spesialisert på å føre regnskap og sørge for at lovpålagte rapporteringskrav oppfylles. En økonom har bredere utdanning og kan jobbe med finans, strategi og analyse. En autorisert regnskapsfører har spesifikk kompetanse og godkjenning for regnskapsføring.' },
        { q: 'Hva skjer hvis regnskapsføreren gjør feil?', a: 'Autoriserte regnskapsførere er pålagt å ha ansvarsforsikring som dekker feil. Dersom feilen fører til økonomisk tap, kan du kreve erstatning gjennom forsikringen.' },
      ]} />

      <InternalLinks exclude="/regnskapsforer/" />
    </div>
  );
}
