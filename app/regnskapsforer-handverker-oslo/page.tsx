import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for håndverkere i Oslo',
  description: 'Finn regnskapsfører for håndverkerbedrifter i Oslo. Prosjektregnskap, solidaransvar, underentreprise og bransjekrav.',
  path: '/regnskapsforer-handverker-oslo/',
});

export default function RegnskapsforerHandverkerOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for håndverkere i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-handverker-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Trenger håndverkere regnskapsfører?', a: 'Det er ikke pålagt, men sterkt anbefalt for håndverkere med ansatte eller mange prosjekter. Prosjektregnskap og solidaransvar krever presis bokføring.' },
        { q: 'Hva koster regnskapsfører for håndverker?', a: 'Typisk 3 000–10 000 kr/mnd. ENK uten ansatte fra 1 500 kr/mnd. Prisen øker med antall ansatte og prosjekter.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for håndverkere i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for håndverkere i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Håndverkerbedrifter i Oslo — elektriker, rørlegger, snekker, maler og andre fag —
          har regnskapsbehov som krever bransjekunnskap. Prosjektregnskap, solidaransvar for
          lønn, håndtering av underentreprenører og bransjespesifikke MVA-regler gjør at
          en generell regnskapsfører ofte ikke er tilstrekkelig.
        </p>

        <h2>Bransjekrav for håndverkere</h2>
        <p>
          <strong>Prosjektregnskap:</strong> Mange håndverkerjobber strekker seg over måneder.
          Anordningsprinsippet krever at inntekter og kostnader periodiseres riktig over
          prosjektets varighet. En regnskapsfører med prosjekterfaring kan sette opp
          rapportering per jobb slik at du ser lønnsomheten på hvert oppdrag.
        </p>
        <p>
          <strong>Solidaransvar:</strong> Når du bruker underentreprenører er du solidarisk
          ansvarlig for at deres ansatte får korrekt lønn. Dokumentasjonskravene er strenge
          og brudd kan gi bøter.
        </p>
        <p>
          <strong>Materialkostnader:</strong> Håndverkere har ofte store materialinnkjøp
          der MVA-fradraget er viktig. Korrekt bokføring av materialer som inngår i
          kundeprosjekter vs. eget bruk er avgjørende.
        </p>

        <h2>Typiske priser</h2>
        <p>
          Regnskapsfører for håndverker i Oslo koster typisk 3 000–10 000 kr/mnd avhengig
          av antall ansatte og prosjekter. Enkeltpersonforetak uten ansatte betaler fra
          1 500 kr/mnd. <Link href="/hva-koster-regnskapsforer-oslo/">Se full prisguide</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-handverker-oslo/`} />
    </div>
  );
}
