import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for restaurant og uteliv i Oslo',
  description: 'Finn regnskapsfører med erfaring innen restaurant, kafé og uteliv i Oslo. Spesielle krav til kontanthåndtering, tips, MVA og personalbespisning.',
  path: '/regnskapsforer-restaurant-oslo/',
});

export default function RegnskapsforerRestaurantOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for restaurant og uteliv i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-restaurant-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Hva koster regnskapsfører for restaurant i Oslo?', a: 'Typisk 8 000–20 000 kr/mnd avhengig av antall ansatte og omsetning. Restauranter har høyere regnskapskostnader enn mange andre bransjer på grunn av komplekse MVA-regler og høyt bilagsvolum.' },
        { q: 'Må restauranter ha kassasystem?', a: 'Ja, alle serveringssteder er pålagt å bruke godkjent kassasystem med SAF-T-eksport. Kontantomsetning skal dokumenteres med daglig z-rapport.' },
        { q: 'Hvordan håndteres tips i regnskapet?', a: 'Tips er skattepliktig inntekt for ansatte. Arbeidsgiveren skal rapportere tips i a-meldingen og trekke skatt. Mange restauranter gjør dette feil — en erfaren regnskapsfører sikrer korrekt håndtering.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for restaurant og uteliv i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for restaurant og uteliv i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Restaurant- og utelivsbransjen i Oslo har noen av de mest komplekse regnskapskravene
          blant alle bransjer. Kontanthåndtering, tipshåndtering, personalbespisning, delte
          MVA-satser og høy personalomsetning gjør at du trenger en regnskapsfører som kjenner
          bransjen inn og ut.
        </p>

        <h2>Spesielle regnskapskrav for restaurant i Oslo</h2>
        <p>
          <strong>Kontanthåndtering og kassesystem:</strong> Alle serveringssteder er pålagt å
          bruke godkjent kassasystem med SAF-T-eksport. Kontantomsetning må dokumenteres
          daglig med z-rapport. Avvik mellom kassasystem og bokføring er et rødt flagg ved
          bokettersyn fra Skatteetaten.
        </p>
        <p>
          <strong>Tipshåndtering:</strong> Tips som mottas av ansatte er skattepliktig inntekt.
          Arbeidsgiveren er ansvarlig for å rapportere tips gjennom a-meldingen og trekke
          skatt. Mange restauranter i Oslo håndterer dette feil, noe som kan føre til
          etterberegning av skatt og arbeidsgiveravgift.
        </p>
        <p>
          <strong>Delte MVA-satser:</strong> Mat til å spise på stedet har 25 prosent MVA,
          mens take-away har 15 prosent. Alkohol har alltid 25 prosent. Denne differensieringen
          krever presis registrering i kassesystemet og korrekt bokføring.
        </p>
        <p>
          <strong>Personalbespisning:</strong> Mat og drikke som ansatte konsumerer i
          arbeidstiden skal verdsettes og innberettes som naturalytelse. Reglene er
          spesifikke for serveringsbransjen og krever systematisk registrering.
        </p>

        <h2>Hva bør du se etter?</h2>
        <p>
          Velg en regnskapsfører som har erfaring med andre restauranter og kafeer i Oslo.
          Be om referanser fra sammenlignbare virksomheter. Regnskapsføreren bør kjenne
          kassasystemet du bruker, forstå reglene for tips og personalbespisning, og ha
          erfaring med de spesifikke MVA-reglene som gjelder serveringsbransjen.
        </p>
        <p>
          En god regnskapsfører for restauranter gir også løpende innsikt i driftsresultatet —
          varekostprosent, lønnskostprosent og dekningsgrad per avdeling. Denne typen
          rapportering kan være forskjellen mellom lønnsom og ulønnsom drift.
        </p>

        <h2>Typiske priser</h2>
        <p>
          Regnskapsfører for restaurant i Oslo koster typisk 8 000–20 000 kroner per måned,
          avhengig av antall ansatte, omsetningsvolum og kompleksitet. Det høye bilagsvolumet
          og de spesielle bransjekravene gjør at prisen gjerne er høyere enn for andre
          bransjer med tilsvarende omsetning.
        </p>

      </section>

      <section className="section-block-light">
        <p>
          Oslo har {firms.length} registrerte regnskapsfirmaer.
          <Link href="/firmaer/"> Se komplett katalog</Link> eller
          <Link href="/hvordan-velge-regnskapsforer-oslo/"> les vår velgeguide</Link>.
        </p>
      </section>

      <SchemaFAQ items={faqItems} />
      <FAQAccordion items={faqItems} />

      <InternalLinks exclude={`/regnskapsforer-restaurant-oslo/`} />
    </div>
  );
}
