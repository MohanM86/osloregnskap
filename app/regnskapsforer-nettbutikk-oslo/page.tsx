import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for nettbutikk i Oslo',
  description: 'Finn regnskapsfører med e-handel-erfaring i Oslo. Integrasjoner, varelager, MVA ved salg til utlandet.',
  path: '/regnskapsforer-nettbutikk-oslo/',
});

export default function RegnskapsforerNettbutikkOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for nettbutikk i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-nettbutikk-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Trenger nettbutikker spesialisert regnskapsfører?', a: 'Ikke nødvendigvis, men det hjelper. Integrasjon med nettbutikkplattformen og kunnskap om MVA ved eksport sparer tid og forhindrer feil.' },
        { q: 'Hva koster regnskapsfører for nettbutikk?', a: 'Typisk 3 000–8 000 kr/mnd. Prisen avhenger av transaksjonsvolum, varelager og eventuell utenlandsomsetning.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for nettbutikk i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for nettbutikk i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Nettbutikker i Oslo har unike regnskapsbehov — høyt transaksjonsvolum, integrasjon
          mellom nettbutikkplattform og regnskapssystem, varelager, og komplekse MVA-regler
          ved salg til utlandet.
        </p>

        <h2>Viktige hensyn for nettbutikker</h2>
        <p>
          <strong>Integrasjoner:</strong> Regnskapssystemet bør kobles direkte til Shopify,
          WooCommerce, eller den plattformen du bruker. Automatisk overføring av ordre og
          betalinger reduserer manuelt arbeid dramatisk.
        </p>
        <p>
          <strong>Varelager:</strong> Korrekt bokføring av varelager påvirker både resultat
          og skatt. Varetelling, svinn og nedskrivning av ukurant lager krever presis
          håndtering.
        </p>
        <p>
          <strong>MVA ved eksport:</strong> Salg til kunder i EU og utenfor EU har forskjellige
          MVA-regler. VOEC-ordningen for småforsendelser og OSS-ordningen for digitale
          tjenester krever spesialistkunnskap.
        </p>

        <h2>Priser</h2>
        <p>
          Regnskapsfører for nettbutikk i Oslo koster typisk 3 000–8 000 kr/mnd avhengig av
          transaksjonsvolum og om du har ansatte. Nettbutikker med internasjonal omsetning
          betaler gjerne mer.
          <Link href="/hva-koster-regnskapsforer-oslo/"> Se prisguide</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-nettbutikk-oslo/`} />
    </div>
  );
}
