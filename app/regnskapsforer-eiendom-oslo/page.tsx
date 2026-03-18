import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { SectionLabel, IconBuilding } from '@/lib/icons';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører for eiendom i Oslo',
  description: 'Finn regnskapsfører spesialisert på eiendom i Oslo. Avskrivninger, MVA-justeringer, utleie, kjøp og salg av eiendom.',
  path: '/regnskapsforer-eiendom-oslo/',
});

export default function RegnskapsforerEiendomOsloPage() {
  const firms = getAllFirms();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Regnskapsfører for eiendom i Oslo',
    url: 'https://osloregnskap.no/regnskapsforer-eiendom-oslo/',
    author: { '@type': 'Organization', name: 'OsloRegnskap.no' },
  };

  const faqItems = [
        { q: 'Trenger eiendomsselskaper spesialisert regnskapsfører?', a: 'Ja, eiendom har komplekse regler for avskrivninger, MVA-justeringer og transaksjoner. En generell regnskapsfører kan overse fradragsmuligheter som er verdt hundretusener.' },
        { q: 'Hva koster regnskapsfører for eiendom i Oslo?', a: 'Typisk 3 000–15 000 kr/mnd avhengig av antall eiendommer og transaksjonsvolum. Større porteføljer krever mer arbeid.' },
        { q: 'Bør eiendomsselskapet være frivillig MVA-registrert?', a: 'Det avhenger av leietakerne. Utleie til MVA-registrerte virksomheter gir rett til fradrag for inngående MVA. En regnskapsfører kan beregne om frivillig registrering lønner seg.' }
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører for eiendom i Oslo' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskapsfører for eiendom i Oslo</h1>
      </section>

      <section className="prose animate-in animate-in-2">

        <p>
          Eiendomsbransjen i Oslo har spesielle regnskapskrav som krever spisskompetanse.
          Avskrivningsregler, MVA-justeringsrett ved utleie, forskjellen mellom privat og
          næringseiendom, og håndtering av kjøp og salg av eiendom er alle områder der
          feil kan koste hundretusener.
        </p>

        <h2>Spesielle regnskapskrav for eiendom</h2>
        <p>
          <strong>Avskrivninger:</strong> Næringseiendom avskrives skattemessig med ulike
          satser avhengig av type — forretningsbygg med 2 prosent, bygg og anlegg med 4
          prosent, og tekniske installasjoner med opptil 10 prosent. Korrekt klassifisering
          og fordeling mellom bygning og tomt er avgjørende for skattebelastningen.
        </p>
        <p>
          <strong>MVA-justeringsrett:</strong> Ved frivillig MVA-registrering for utleie av
          næringseiendom kan du trekke fra inngående MVA på oppføringskostnader. Men
          justeringsreglene strekker seg over 10 år, og endret bruk av eiendommen kan
          utløse tilbakeføring av fradragsført MVA.
        </p>
        <p>
          <strong>Utleie:</strong> Forskjellen mellom utleie til MVA-registrerte og
          ikke-MVA-registrerte leietakere har store konsekvenser for MVA-behandlingen.
          Blandet bruk krever forholdsmessig fordeling som må dokumenteres nøye.
        </p>
        <p>
          <strong>Kjøp og salg:</strong> Ved kjøp og salg av eiendom eller eiendomsselskaper
          er det avgjørende å forstå skattekonsekvensene — fritaksmetoden for aksjesalg,
          dokumentavgift, og tinglysingsgebyr påvirker den reelle kostnaden.
        </p>

        <h2>Velg riktig regnskapsfører</h2>
        <p>
          For eiendom i Oslo bør du velge en regnskapsfører som har håndtert lignende
          porteføljer. Be om referanser fra andre eiendomsselskaper. Regnskapsføreren
          bør forstå justeringsreglene for MVA, kunne optimalisere avskrivningsplanen,
          og ha erfaring med eiendomstransaksjoner.
        </p>
        <p>
          <Link href="/firmaer/">Se alle regnskapsfirmaer i Oslo</Link> eller
          <Link href="/hvordan-velge-regnskapsforer-oslo/"> les vår velgeguide</Link>.
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

      <InternalLinks exclude={`/regnskapsforer-eiendom-oslo/`} />
    </div>
  );
}
