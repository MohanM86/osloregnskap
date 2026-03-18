import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører som bruker Tripletex i Oslo',
  description: 'Finn regnskapsfører i Oslo som bruker Tripletex. Fordeler med Tripletex og hvordan du finner riktig match.',
  path: '/regnskapsforer-tripletex-oslo/',
});

export default function RegnskapsforerTripletexOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører som bruker Tripletex i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-tripletex-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Er Tripletex gratis?', a: 'Tripletex har en gratis prøveperiode. Deretter koster det fra 399 kr/mnd for grunnpakken. Mange regnskapsførere inkluderer systemkostnaden i sine priser.' },
        { q: 'Kan jeg bytte til Tripletex fra et annet system?', a: 'Ja, regnskapsførere som bruker Tripletex kan bistå med migrering fra andre systemer. Historiske data kan ofte importeres.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører med Tripletex i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører med Tripletex i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Tripletex er et av Norges mest brukte skybaserte regnskapssystemer. Mange bedrifter
          i Oslo foretrekker å bruke en regnskapsfører som jobber i Tripletex — enten fordi
          de allerede bruker systemet selv, eller fordi de ønsker fordelene med et moderne
          skybasert system.
        </p>

        <h2>Fordeler med Tripletex</h2>
        <p>
          Automatisk bankavstemmming, digital bilagsflyt, sanntidsrapportering, prosjekt-
          og timeregistrering, og bred integrasjon med andre systemer. Tripletex passer
          alt fra enkeltpersonforetak til mellomstore bedrifter med 50+ ansatte.
        </p>

        <h2>Slik finner du Tripletex-regnskapsfører</h2>
        <p>
          Spør potensielle regnskapsførere direkte om de jobber med Tripletex. Mange har
          sertifisering som Tripletex-partner. Du kan også sjekke Tripletex sin egen
          partnerside for å finne sertifiserte regnskapsførere i Oslo.
        </p>
        <p>
          <Link href="/firmaer/">Se alle regnskapsfirmaer i Oslo</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-tripletex-oslo/`} />
    </div>
  );
}
