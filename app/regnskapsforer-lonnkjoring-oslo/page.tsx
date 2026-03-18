import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører med lønnskjøring i Oslo',
  description: 'Finn regnskapsfører som håndterer lønnskjøring i Oslo. A-melding, feriepenger, sykepenger og arbeidsgiveravgift.',
  path: '/regnskapsforer-lonnkjoring-oslo/',
});

export default function RegnskapsforerLonnkjoringOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører med lønnskjøring i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-lonnkjoring-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Hva koster lønnskjøring hos regnskapsfører?', a: 'Typisk 200–500 kr per ansatt per måned, inkludert a-melding og feriepenger.' },
        { q: 'Kan jeg kjøre lønn selv?', a: 'Ja, med systemer som Tripletex eller Visma kan du gjøre det selv. Men feil i lønnskjøring kan bli dyrt — mange velger å la regnskapsføreren håndtere det.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Lønnskjøring — regnskapsfører i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Lønnskjøring — regnskapsfører i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Lønnskjøring er en av de mest tidkrevende og feilsensitive oppgavene i regnskapet.
          Skattetrekk, feriepenger, sykepenger, arbeidsgiveravgift og a-melding — alt må
          stemme, og fristene er strenge. De fleste regnskapsførere i Oslo tilbyr lønnskjøring
          som en del av sine tjenester.
        </p>

        <h2>Hva inngår i lønnskjøring?</h2>
        <p>
          Beregning av bruttolønn, skattetrekk og nettoutbetaling for hver ansatt.
          Beregning av feriepenger (minimum 10,2 prosent, 12 prosent for over 60 år).
          Beregning og innbetaling av arbeidsgiveravgift (14,1 prosent i Oslo).
          Rapportering av a-melding til Skatteetaten innen den 5. hver måned.
          Håndtering av sykepenger, foreldrepenger og andre refusjoner fra NAV.
          Årsavslutning med lønns- og trekkoppgaver.
        </p>

        <h2>Priser for lønnskjøring</h2>
        <p>
          De fleste regnskapsførere priser lønnskjøring per ansatt per måned — typisk
          200–500 kroner per ansatt. For en bedrift med 5 ansatte blir det 1 000–2 500
          kr/mnd i tillegg til øvrige regnskapstjenester.
        </p>
        <p>
          <Link href="/hva-koster-regnskapsforer-oslo/">Se full prisguide</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-lonnkjoring-oslo/`} />
    </div>
  );
}
