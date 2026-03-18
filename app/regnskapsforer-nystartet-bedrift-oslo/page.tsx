import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for nystartet bedrift i Oslo',
  description: 'Starte bedrift i Oslo? Slik velger du regnskapsfører for oppstartsbedriften din. Hva du trenger fra dag én.',
  path: '/regnskapsforer-nystartet-bedrift-oslo/',
});

export default function RegnskapsforerNystartetBedriftOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for nystartet bedrift i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-nystartet-bedrift-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Når bør nystartet bedrift engasjere regnskapsfører?', a: 'Helst før du stifter selskapet. En regnskapsfører kan hjelpe med valg av selskapsform, oppsett av system og registreringer.' },
        { q: 'Hva koster regnskapsfører for oppstartsbedrift?', a: 'Mange tilbyr oppstartspakker fra 1 000–3 000 kr/mnd det første året. Spør etter dette når du innhenter tilbud.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for nystartet bedrift i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for nystartet bedrift i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Hvert år registreres tusenvis av nye bedrifter i Oslo. Som gründer har du nok
          å tenke på — å velge riktig regnskapsfører fra starten kan spare deg for
          kostbare feil og frigjøre tid til det du egentlig brenner for.
        </p>

        <h2>Hva trenger du fra dag én?</h2>
        <p>
          <strong>Valg av selskapsform:</strong> ENK eller AS? Valget påvirker skatt,
          ansvar og regnskapskrav. En regnskapsfører kan hjelpe deg med å velge riktig
          basert på dine planer.
        </p>
        <p>
          <strong>Regnskapssystem:</strong> Sett opp et skybasert system fra starten.
          Å føre regnskap i Excel og rydde opp senere er mye dyrere enn å gjøre det
          riktig fra dag én.
        </p>
        <p>
          <strong>MVA-registrering:</strong> Registrer deg når omsetningen nærmer seg
          50 000 kroner. Regnskapsføreren kan bistå med tidspunkt og søknad.
        </p>

        <h2>Oppstartspakker</h2>
        <p>
          Mange regnskapsførere i Oslo tilbyr spesielle oppstartspakker for nye bedrifter —
          lavere pris det første året, gratis oppsett av regnskapssystem, og ekstra
          rådgivning i etableringsfasen. Spør etter dette når du innhenter tilbud.
        </p>
        <p>
          <Link href="/regnskap-for-as-oslo/">Les mer om regnskap for AS</Link> eller
          <Link href="/regnskap-for-enkeltpersonforetak-oslo/"> regnskap for ENK</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-nystartet-bedrift-oslo/`} />
    </div>
  );
}
