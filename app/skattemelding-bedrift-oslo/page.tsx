import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Skattemelding for bedrift i Oslo — guide',
  description: 'Alt om skattemelding for bedrifter i Oslo. Frister, hva som skal med, og vanlige feil å unngå.',
  path: '/skattemelding-bedrift-oslo/',
});

export default function SkattemeldingBedriftOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Skattemelding for bedrift i Oslo — guide',
    url: 'https://osloregnskap.no/skattemelding-bedrift-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Når er fristen for skattemeldingen?', a: '31. mai for både ENK og AS. Utsettelse kan søkes, men innvilges sjelden for bedrifter.' },
        { q: 'Hva skjer hvis skattemeldingen har feil?', a: 'Feil kan føre til tilleggsskatt (20-60% av unndratt beløp) og renter. Frivillig retting gir normalt mildere reaksjon enn feil oppdaget ved kontroll.' },
        { q: 'Kan regnskapsfører levere skattemeldingen for meg?', a: 'Ja, regnskapsfører kan levere skattemeldingen på vegne av bedriften via Altinn med fullmakt.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Skattemelding for bedrift i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Skattemelding for bedrift i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Alle næringsdrivende i Oslo må levere skattemelding med næringsoppgave hvert år.
          Fristen er 31. mai. Skattemeldingen er grunnlaget for beregning av skatt og
          avgifter, og feil kan føre til tilleggsskatt og renter.
        </p>

        <h2>Hva skal med?</h2>
        <p>
          For AS: Skattemelding (RF-1028), næringsoppgave (RF-1167 eller RF-1175),
          avskrivningsskjema, og eventuelle tilleggsskjemaer for spesielle forhold
          som konsernbidrag eller utenlandsinntekt.
        </p>
        <p>
          For ENK: Skattemelding med næringsoppgave (RF-1175 for de fleste,
          RF-1167 for regnskapspliktige). Personinntektsskjema for beregning av
          trygdeavgift og toppskatt.
        </p>

        <h2>Vanlige feil</h2>
        <p>
          Manglende fradrag (mange glemmer å ta med alle kostnader), feil avskrivninger,
          manglende tilbakeføring av privat bruk av firmabil, og feil beregning av
          personinntekt i ENK. En <Link href="/regnskapsforer/">regnskapsfører</Link> sikrer
          at skattemeldingen er korrekt og at du betaler riktig skatt — verken for mye
          eller for lite.
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

      <InternalLinks exclude={`/skattemelding-bedrift-oslo/`} />
    </div>
  );
}
