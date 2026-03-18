import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Bytte regnskapsfører i Oslo — slik gjør du det',
  description: 'Steg-for-steg guide for å bytte regnskapsfører i Oslo. Når du bør bytte, hvordan du gjør det, og hva du bør tenke på.',
  path: '/bytte-regnskapsforer-oslo/',
});

export default function BytteRegnskapsforerOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Bytte regnskapsfører i Oslo — slik gjør du det',
    url: 'https://osloregnskap.no/bytte-regnskapsforer-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Kan jeg bytte regnskapsfører når som helst?', a: 'Ja, du kan bytte når som helst. Sjekk oppsigelsestiden i avtalen — typisk 1–3 måneder. Årsskiftet er vanligst tidspunkt.' },
        { q: 'Hva koster det å bytte regnskapsfører?', a: 'Normalt ingenting ekstra. Noen nye regnskapsførere tar et oppstarthonorar på 2 000–5 000 kr for å sette seg inn i regnskapet.' },
        { q: 'Må den gamle regnskapsføreren utlevere dokumenter?', a: 'Ja, den gamle regnskapsføreren er pliktig til å utlevere all regnskapsdokumentasjon til deg eller din nye regnskapsfører.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Bytte regnskapsfører i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Bytte regnskapsfører i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Hvert år bytter rundt 4 500 bedrifter i Oslo regnskapsfører. Grunnene varierer —
          misnøye med kvalitet, for høy pris, manglende rådgivning, eller at bedriften har
          vokst forbi regnskapsførerens kapasitet. Å bytte er enklere enn mange tror.
        </p>

        <h2>Når bør du bytte?</h2>
        <p>
          Varselsignaler inkluderer gjentatte feil i regnskapet, oversittede frister,
          regnskapsfører som er vanskelig å få tak i, manglende proaktiv rådgivning,
          og priser som har steget uten tilsvarende økning i tjenester.
        </p>

        <h2>Slik bytter du — steg for steg</h2>
        <p>
          <strong>1. Finn ny regnskapsfører først.</strong> Ikke si opp den gamle før du
          har avtale med en ny. Innhent tilbud fra minst tre aktører.
          <Link href="/hvordan-velge-regnskapsforer-oslo/"> Les vår velgeguide</Link>.
        </p>
        <p>
          <strong>2. Si opp avtalen.</strong> Sjekk oppsigelsestiden i kontrakten —
          typisk 1–3 måneder. Send skriftlig oppsigelse.
        </p>
        <p>
          <strong>3. Den nye regnskapsføreren tar over.</strong> De vil innhente
          dokumentasjon, saldolister og åpne poster fra den gamle regnskapsføreren.
          Den gamle er pliktig til å utlevere dette.
        </p>
        <p>
          <strong>4. Beste tidspunkt.</strong> Årsskiftet er vanligst, men du kan bytte
          når som helst. Unngå å bytte midt i MVA-terminen dersom mulig.
        </p>

        <h2>Hva koster det å bytte?</h2>
        <p>
          Selve byttet koster normalt ingenting ekstra. Den nye regnskapsføreren kan ta
          et oppstarthonorar for å sette seg inn i regnskapet, typisk 2 000–5 000 kroner.
          Noen tilbyr gratis oppstart for å vinne kunden.
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

      <InternalLinks exclude={`/bytte-regnskapsforer-oslo/`} />
    </div>
  );
}
