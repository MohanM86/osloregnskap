import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for frilansere i Oslo',
  description: 'Trenger du regnskapsfører som frilanser i Oslo? Hva det koster, når det lønner seg, og hva du bør se etter.',
  path: '/regnskapsforer-frilanser-oslo/',
});

export default function RegnskapsforerFrilanserOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for frilansere i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-frilanser-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Trenger frilansere regnskapsfører?', a: 'Ikke nødvendigvis. Frilansere med enkel drift kan bruke regnskapsprogram. Men med MVA-registrering eller utenlandske kunder anbefales regnskapsfører.' },
        { q: 'Hva koster regnskapsfører for frilanser?', a: 'Typisk 1 000–2 500 kr/mnd for enkel drift med bokføring, MVA og årsoppgjør.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for frilansere i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for frilansere i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Som frilanser i Oslo driver du sannsynligvis enkeltpersonforetak med varierende
          inntekt, mange småbilag og behov for fleksibilitet. Spørsmålet er om du trenger
          regnskapsfører eller om du kan føre regnskapet selv.
        </p>

        <h2>Når lønner det seg?</h2>
        <p>
          For frilansere med under 20 bilag i måneden og enkel drift kan det lønne seg å
          bruke et regnskapsprogram som Fiken eller Tripletex. Men dersom du er MVA-registrert,
          har utenlandske kunder, eller rett og slett vil bruke tiden din på å fakturere
          fremfor å bokføre, er en regnskapsfører verdt investeringen.
        </p>
        <p>
          En regnskapsfører sikrer også at du tar alle fradrag du har rett på — hjemmekontor,
          telefon, internett, faglig utvikling, reisekostnader og utstyr. Mange frilansere
          går glipp av tusenvis i fradrag årlig fordi de ikke kjenner reglene.
        </p>

        <h2>Hva koster det?</h2>
        <p>
          For en frilanser i Oslo med enkel drift koster regnskapsfører typisk 1 000–2 500
          kr/mnd. Det inkluderer vanligvis bokføring, MVA-oppgaver og årsoppgjør. Timepris
          for enkelttjenester er 500–1 000 kr/time.
        </p>
        <p>
          <Link href="/regnskap-for-enkeltpersonforetak-oslo/">Les mer om regnskap for ENK</Link> eller
          <Link href="/hva-koster-regnskapsforer-oslo/"> se full prisguide</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-frilanser-oslo/`} />
    </div>
  );
}
