import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Årsoppgjør i Oslo — hva du trenger å vite',
  description: 'Komplett guide til årsoppgjør for bedrifter i Oslo. Frister, krav, og hva regnskapsføreren gjør.',
  path: '/arsoppgjor-oslo/',
});

export default function ArsoppgjorOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Årsoppgjør i Oslo — hva du trenger å vite',
    url: 'https://osloregnskap.no/arsoppgjor-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Når er fristen for årsoppgjøret?', a: 'Skattemeldingen: 31. mai. Årsregnskap for AS: 31. juli. Aksjonærregisteroppgave: 31. januar.' },
        { q: 'Hva koster årsoppgjør?', a: 'Typisk 5 000–20 000 kr som separat tjeneste, men mange regnskapsførere inkluderer det i månedsprisen.' },
        { q: 'Kan jeg gjøre årsoppgjøret selv?', a: 'For ENK med enkel drift er det mulig med et godt regnskapsprogram. For AS anbefales det å bruke regnskapsfører — kravene er komplekse.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Årsoppgjør i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Årsoppgjør i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Årsoppgjøret er den viktigste regnskapsoppgaven i løpet av året. For aksjeselskaper
          innebærer det utarbeidelse av årsregnskap med resultatregnskap, balanse og noter,
          samt skattemelding og næringsoppgave. For enkeltpersonforetak er det skattemelding
          med næringsoppgave.
        </p>

        <h2>Frister</h2>
        <p>
          Skattemeldingen for både ENK og AS har frist 31. mai. Årsregnskapet for AS skal
          sendes til Regnskapsregisteret innen 31. juli. Aksjonærregisteroppgaven har frist
          31. januar.
        </p>

        <h2>Hva gjør regnskapsføreren?</h2>
        <p>
          Avstemming av alle balansekonti, periodisering av inntekter og kostnader,
          beregning av skatt og utsatt skatt, utarbeidelse av noter, og innsending av
          årsregnskap og skattemelding. For mange bedrifter er årsoppgjøret den mest
          tidkrevende enkeltoppgaven regnskapsføreren utfører.
        </p>

        <h2>Hva koster årsoppgjør?</h2>
        <p>
          Mange regnskapsførere inkluderer årsoppgjøret i månedsprisen. Noen fakturerer det
          separat — typisk 5 000–20 000 kr avhengig av selskapets størrelse. Spør alltid
          om årsoppgjøret er inkludert når du sammenligner tilbud.
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

      <InternalLinks exclude={`/arsoppgjor-oslo/`} />
    </div>
  );
}
