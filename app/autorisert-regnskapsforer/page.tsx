import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Autorisert regnskapsfører Oslo — Hva betyr autorisasjon?',
  description: 'Alt du trenger å vite om autorisert regnskapsfører i Oslo. Krav til autorisasjon, hvorfor det er viktig, og oversikt over autoriserte regnskapsførere.',
  path: '/autorisert-regnskapsforer/',
});

export default function AutorisertPage() {
  const firms = getAllFirms();

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Regnskapsfører Oslo', url: 'https://osloregnskap.no/regnskapsforer/', isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Autorisert regnskapsfører Oslo' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Autorisert regnskapsfører Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        En autorisert regnskapsfører har godkjenning fra Finanstilsynet til å føre regnskap for
        andre virksomheter. I Oslo finnes det {firms.filter(f => f.naeringskode === '69.202').length} registrerte
        regnskapsfirmaer. Her forklarer vi hva autorisasjon innebærer og hvorfor det er viktig.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva er en autorisert regnskapsfører?</h2>
        <p style={{ marginBottom: '1rem' }}>
          En autorisert regnskapsfører er en fagperson som har fått godkjenning fra Finanstilsynet
          til å drive regnskapsføring for andre. Autorisasjonen er lovpålagt for alle som tilbyr
          regnskapstjenester eksternt, og sikrer at regnskapsføreren har nødvendig kompetanse
          og oppfyller strenge kvalitetskrav.
        </p>
        <p>
          Autorisasjonsordningen ble innført for å beskytte næringslivet mot inkompetent
          regnskapsføring, som kan føre til feil i skatte- og avgiftsrapportering, mangelfulle
          årsregnskap og potensielt økonomiske tap.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Krav for å bli autorisert regnskapsfører</h2>
        <p style={{ marginBottom: '1rem' }}>
          For å oppnå autorisasjon som regnskapsfører i Norge må du oppfylle følgende krav:
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Utdanning:</strong> Du må ha bachelorgrad i økonomi og administrasjon med
          spesialisering i regnskap, eller tilsvarende utdanning som inkluderer emner innen
          finansregnskap, skatterett, rettslære og regnskapsorganisering.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Praksis:</strong> Minimum to års relevant yrkespraksis med regnskapsføring
          som hovedoppgave. Praksisen må være utført etter fullført utdanning.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Vandel:</strong> Du må fremlegge politiattest som viser plettfri vandel i
          forhold til økonomisk kriminalitet.
        </p>
        <p>
          <strong>Etterutdanning:</strong> Autoriserte regnskapsførere må gjennomføre minimum
          77 timer etterutdanning over tre år for å opprettholde autorisasjonen. Dette sikrer
          at kompetansen holdes oppdatert i takt med regelverksendringer.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hvorfor velge autorisert regnskapsfører?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Å velge en autorisert regnskapsfører gir deg flere fordeler. For det første vet du at
          regnskapsføreren har dokumentert kompetanse innen regnskap, skatt og lovverk. For det
          andre er autoriserte regnskapsførere underlagt tilsyn fra Finanstilsynet, noe som gir
          en ekstra kvalitetssikring.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Autoriserte regnskapsførere er også pålagt å ha forsikring som dekker eventuelle feil
          i regnskapsføringen. Dette betyr at du som kunde er bedre beskyttet dersom det skulle
          oppstå feil som fører til økonomisk tap.
        </p>
        <p>
          Det er faktisk ulovlig å tilby regnskapstjenester uten autorisasjon. Dersom du bruker
          en regnskapsfører uten autorisasjon, risikerer du at regnskapet ikke oppfyller lovens
          krav, noe som kan få konsekvenser ved bokettersyn.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Sjekk autorisasjon</h2>
        <p style={{ marginBottom: '1rem' }}>
          Du kan sjekke om en regnskapsfører er autorisert via Finanstilsynets register over
          autoriserte regnskapsførere. Registeret er offentlig tilgjengelig og oppdateres løpende.
        </p>
        <p>
          Alle regnskapsfirmaer i vår oversikt er hentet  og er registrert
          med næringskode for regnskapsføring og bokføring (69.202) eller revisjon (69.201).
          Vi anbefaler likevel å sjekke autorisasjonsstatusen direkte hos Finanstilsynet.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <p style={{ textAlign: 'center' }}>
          <Link href="/firmaer/" style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--border)', display: 'inline-block' }}>
            Se alle {firms.length} regnskapsfirmaer i Oslo →
          </Link>
        </p>
      </section>

      <SchemaFAQ items={[
        { q: 'Er det lovpålagt å bruke autorisert regnskapsfører?', a: 'Det er lovpålagt at den som tilbyr regnskapstjenester til andre er autorisert. Du er ikke pålagt å bruke regnskapsfører, men dersom du velger å bruke en, må vedkommende være autorisert.' },
        { q: 'Hva skjer hvis regnskapsføreren min mister autorisasjonen?', a: 'Dersom regnskapsføreren mister autorisasjonen, må vedkommende slutte å tilby regnskapstjenester. Du bør da finne en ny autorisert regnskapsfører. Finanstilsynet publiserer vedtak om tilbakekalt autorisasjon.' },
        { q: 'Hvordan sjekker jeg om regnskapsføreren er autorisert?', a: 'Du kan sjekke autorisasjon i Finanstilsynets offentlige register over autoriserte regnskapsførere. Søk på navn eller organisasjonsnummer.' },
        { q: 'Hva er forskjellen på autorisert regnskapsfører og statsautorisert revisor?', a: 'En autorisert regnskapsfører fører regnskapet, mens en statsautorisert revisor kontrollerer og attesterer regnskapet. Revisor har høyere utdanningskrav og en uavhengig kontrollfunksjon.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Er det lovpålagt å bruke autorisert regnskapsfører?', a: 'Det er lovpålagt at den som tilbyr regnskapstjenester til andre er autorisert. Du er ikke pålagt å bruke regnskapsfører, men dersom du velger å bruke en, må vedkommende være autorisert.' },
        { q: 'Hva skjer hvis regnskapsføreren min mister autorisasjonen?', a: 'Dersom regnskapsføreren mister autorisasjonen, må vedkommende slutte å tilby regnskapstjenester. Du bør da finne en ny autorisert regnskapsfører. Finanstilsynet publiserer vedtak om tilbakekalt autorisasjon.' },
        { q: 'Hvordan sjekker jeg om regnskapsføreren er autorisert?', a: 'Du kan sjekke autorisasjon i Finanstilsynets offentlige register over autoriserte regnskapsførere. Søk på navn eller organisasjonsnummer.' },
        { q: 'Hva er forskjellen på autorisert regnskapsfører og statsautorisert revisor?', a: 'En autorisert regnskapsfører fører regnskapet, mens en statsautorisert revisor kontrollerer og attesterer regnskapet. Revisor har høyere utdanningskrav og en uavhengig kontrollfunksjon.' },
      ]} />

      <InternalLinks exclude="/autorisert-regnskapsforer/" />
    </div>
  );
}
