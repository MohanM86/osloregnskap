import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'MVA-rapportering i Oslo — komplett guide',
  description: 'Alt om MVA-rapportering for bedrifter i Oslo. Frister, satser, vanlige feil og tips for korrekt rapportering.',
  path: '/mva-rapportering-oslo/',
});

export default function MvaRapporteringOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'MVA-rapportering i Oslo — komplett guide',
    url: 'https://osloregnskap.no/mva-rapportering-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Når må MVA-meldingen leveres?', a: 'Annenhver måned, med frist den 10. i leveringsmåneden. Små bedrifter kan søke om årlig levering.' },
        { q: 'Hva skjer hvis MVA-meldingen leveres for sent?', a: 'Skatteetaten ilegger tvangsmulkt per dag forsinkelsen varer. I tillegg kan de fastsette MVA-beløpet ved skjønn.' },
        { q: 'Må alle bedrifter betale MVA?', a: 'Kun bedrifter med omsetning over 50 000 kr i løpet av 12 måneder må MVA-registreres. Under denne grensen er du fritatt.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'MVA-rapportering i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">MVA-rapportering i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Merverdiavgift (MVA) er en avgift på omsetning av varer og tjenester. Alle
          MVA-registrerte bedrifter i Oslo må levere MVA-melding til Skatteetaten
          annenhver måned. Feil i MVA-rapporteringen er en av de vanligste årsakene
          til tilleggsavgift og bokettersyn.
        </p>

        <h2>MVA-satser i Norge</h2>
        <p>
          Alminnelig sats er 25 prosent og gjelder de fleste varer og tjenester.
          Matvaresatsen er 15 prosent. Lav sats på 12 prosent gjelder persontransport,
          overnatting, kino og NRK-lisens. Nullsats gjelder eksport og visse
          finansielle tjenester.
        </p>

        <h2>Frister for MVA-melding</h2>
        <p>
          MVA-meldingen leveres annenhver måned med frist den 10. i leveringsmåneden:
          10. februar, 10. april, 10. juni, 10. august, 10. oktober og 10. desember.
          Små bedrifter med omsetning under 1 million kan søke om årlig levering.
        </p>

        <h2>Vanlige feil</h2>
        <p>
          Feil MVA-sats på faktura, manglende fradragsføring av inngående MVA,
          feil periodisering av store transaksjoner, og manglende
          omberegning ved endring i bruk av lokaler. En
          <Link href="/regnskapsforer/">regnskapsfører</Link> sikrer korrekt rapportering.
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

      <InternalLinks exclude={`/mva-rapportering-oslo/`} />
    </div>
  );
}
