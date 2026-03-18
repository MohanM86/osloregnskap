import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for IT-selskaper i Oslo',
  description: 'Finn regnskapsfører med erfaring innen IT og teknologi i Oslo. Skattefunn, immaterielle verdier, internasjonale transaksjoner.',
  path: '/regnskapsforer-it-oslo/',
});

export default function RegnskapsforerItOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for IT-selskaper i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-it-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Kan regnskapsfører hjelpe med Skattefunn?', a: 'Ja, en erfaren regnskapsfører kan identifisere kvalifiserende FoU-aktiviteter, dokumentere timeverk og kostnader korrekt, og sikre at du får maksimalt Skattefunn-fradrag.' },
        { q: 'Hva koster regnskapsfører for IT-selskap i Oslo?', a: 'Typisk 3 000–12 000 kr/mnd avhengig av størrelse og kompleksitet. Selskaper med internasjonale transaksjoner eller Skattefunn betaler gjerne i øvre sjikt.' },
        { q: 'Hvordan håndteres SaaS-inntekter i regnskapet?', a: 'Abonnementsinntekter periodiseres over avtaleperioden. Forskuddsbetaling skal bokføres som uopptjent inntekt og inntektsføres løpende. En regnskapsfører med SaaS-erfaring håndterer dette korrekt.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for IT-selskaper i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for IT-selskaper i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Oslo er Norges teknologihovedstad, og IT-selskaper har regnskapsbehov som
          skiller seg vesentlig fra andre bransjer. Immaterielle verdier, Skattefunn,
          opsjonsordninger for ansatte, internasjonale transaksjoner og abonnementsmodeller
          krever spesialistkompetanse.
        </p>

        <h2>Spesielle utfordringer for IT-selskaper</h2>
        <p>
          <strong>Skattefunn:</strong> Mange IT-selskaper i Oslo kvalifiserer for Skattefunn —
          en statlig ordning som gir 19 prosent skattefradrag for forsknings- og
          utviklingskostnader. En regnskapsfører med Skattefunn-erfaring kan hjelpe deg
          med å dokumentere prosjekter korrekt og maksimere fradraget.
        </p>
        <p>
          <strong>Immaterielle verdier:</strong> Programvare, patenter og merkevarer er
          ofte IT-selskapets viktigste eiendeler, men regnskapsbehandlingen er kompleks.
          Egen utvikling kan balanseføres under visse vilkår, og avskrivningssatsene
          varierer.
        </p>
        <p>
          <strong>Internasjonale transaksjoner:</strong> Mange IT-selskaper i Oslo har kunder
          og leverandører i utlandet. Valutahåndtering, internprising og MVA ved
          grenseoverskridende tjenester krever presis bokføring.
        </p>
        <p>
          <strong>Opsjoner og aksjeprogram:</strong> For å tiltrekke talent tilbyr mange
          IT-selskaper opsjoner eller aksjer til ansatte. Den skattemessige behandlingen
          av slike ordninger er kompleks og krever riktig rapportering.
        </p>

        <h2>Velg riktig regnskapsfører for IT</h2>
        <p>
          Se etter en regnskapsfører som har andre IT-kunder, forstår SaaS-modeller og
          abonnementsinntekter, og har erfaring med Skattefunn-dokumentasjon. Mange
          IT-selskaper i Oslo foretrekker regnskapsførere som selv bruker moderne
          systemer og forstår teknologibedrifters tenkemåte.
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

      <InternalLinks exclude={`/regnskapsforer-it-oslo/`} />
    </div>
  );
}
