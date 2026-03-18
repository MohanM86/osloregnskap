import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Billig regnskapsfører i Oslo — slik finner du rimelig regnskap',
  description: 'Finn billig regnskapsfører i Oslo uten å gå på kompromiss med kvaliteten. Tips for å redusere regnskapskostnadene.',
  path: '/billig-regnskapsforer-oslo/',
});

export default function BilligRegnskapsforerOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Billig regnskapsfører i Oslo — slik finner du rimelig regnskap',
    url: 'https://osloregnskap.no/billig-regnskapsforer-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Hva er billigste regnskapsfører i Oslo?', a: 'ENK fra 1 000 kr/mnd, AS fra 2 000 kr/mnd med fastpris. Hybridløsning der du fører bilag selv kan gi enda lavere pris.' },
        { q: 'Er billig regnskapsfører dårligere?', a: 'Ikke nødvendigvis. Mange rimelige regnskapsførere er effektive fordi de bruker gode systemer. Men vær forsiktig med priser som virker for lave — det kan bety for lite tid per kunde.' },
        { q: 'Hvordan kan jeg redusere regnskapskostnadene?', a: 'Lever bilag digitalt og sortert, bruk skybasert regnskapssystem, be om fastpris, og vurder å gjøre enkel bokføring selv.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Billig regnskapsfører i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Billig regnskapsfører i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Mange bedriftseiere i Oslo leter etter billig regnskapsfører. Det er fullt mulig
          å finne rimelig regnskapshjelp uten å gå på kompromiss med kvaliteten — men det
          krever at du vet hva du skal se etter og hva du kan gjøre selv.
        </p>

        <h2>Hva påvirker prisen mest?</h2>
        <p>
          Den største kostnadsdriveren er antall bilag. Jo mer arbeid du gjør selv — skanne
          bilag, kategorisere utgifter, sende fakturaer — jo mindre tid bruker
          regnskapsføreren, og jo lavere blir regningen. Mange regnskapsførere i Oslo tilbyr
          rabatterte priser for kunder som leverer godt organiserte bilag digitalt.
        </p>
        <p>
          Valg av regnskapssystem spiller også inn. Systemer med automatisk bankavstemmning
          og digital bilagsflyt (Fiken, Tripletex) reduserer tiden regnskapsføreren bruker
          med 30–50 prosent sammenlignet med manuelle systemer.
        </p>

        <h2>Rimeligste alternativer i Oslo</h2>
        <p>
          <strong>For ENK med enkel drift:</strong> Fra 1 000 kr/mnd. Bruk et enkelt
          regnskapsprogram og la regnskapsføreren kun ta årsoppgjøret.
        </p>
        <p>
          <strong>For AS uten ansatte:</strong> Fra 2 000 kr/mnd med fastprisavtale.
        </p>
        <p>
          <strong>Hybridløsning:</strong> Før bilagene selv i Fiken eller Tripletex,
          og la regnskapsføreren ta MVA-oppgaver og årsoppgjør. Typisk 1 500–3 000 kr/mnd.
        </p>

        <h2>Advarsler</h2>
        <p>
          Vær forsiktig med priser som virker for gode til å være sanne. En regnskapsfører
          som tar 500 kr/mnd for et AS har sannsynligvis for mange kunder og for lite tid
          per oppdrag. Feil i regnskapet kan koste deg langt mer i tilleggsskatt enn du
          sparer på billig regnskapsfører.
        </p>
        <p>
          Sjekk alltid at regnskapsføreren har
          <Link href="/autorisert-regnskapsforer/"> gyldig autorisasjon</Link>.
          <Link href="/hva-koster-regnskapsforer-oslo/"> Se full prisguide</Link>.
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

      <InternalLinks exclude={`/billig-regnskapsforer-oslo/`} />
    </div>
  );
}
