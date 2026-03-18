import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører som bruker Fiken i Oslo',
  description: 'Finn regnskapsfører i Oslo som bruker Fiken. Ideelt for enkeltpersonforetak og små AS.',
  path: '/regnskapsforer-fiken-oslo/',
});

export default function RegnskapsforerFikenOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører som bruker Fiken i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-fiken-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Er Fiken bra nok for AS?', a: 'Ja, Fiken støtter AS med full regnskapsplikt, årsregnskap og skattemelding. For større AS med mange ansatte kan Tripletex eller Visma passe bedre.' },
        { q: 'Kan regnskapsfører jobbe i mitt Fiken-regnskap?', a: 'Ja, du gir regnskapsføreren tilgang til ditt Fiken-regnskap. Dere jobber i sanntid i samme system.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører med Fiken i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører med Fiken i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Fiken er et populært norsk regnskapsprogram kjent for sin brukervennlighet og
          lave pris. Systemet er spesielt populært blant enkeltpersonforetak og små AS
          i Oslo. Stadig flere regnskapsførere tilbyr tjenester i Fiken.
        </p>

        <h2>Fordeler med Fiken</h2>
        <p>
          Veldig brukervennlig — du kan føre mye av regnskapet selv og la regnskapsføreren
          ta seg av rapportering og årsoppgjør. Lav systemkostnad (fra 0 kr/mnd for enkleste
          versjon). God mobilapp for bilagsskanning. Automatisk bankavstemmming.
        </p>

        <h2>Hybridmodell med Fiken</h2>
        <p>
          Mange frilansere og småbedriftseiere i Oslo bruker Fiken i en hybridmodell —
          de fører daglig bokføring selv, og regnskapsføreren tar MVA-oppgaver, årsoppgjør
          og gir råd ved behov. Denne modellen gir lavest mulig regnskapskostnad.
        </p>
        <p>
          <Link href="/regnskapsforer-frilanser-oslo/">Les mer for frilansere</Link> eller
          <Link href="/billig-regnskapsforer-oslo/"> finn billig regnskapsfører</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-fiken-oslo/`} />
    </div>
  );
}
