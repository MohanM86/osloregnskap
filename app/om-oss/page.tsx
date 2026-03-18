import { getAllFirms, getBydeler } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Om OsloRegnskap.no — Uavhengig informasjonsside om regnskap i Oslo',
  description: 'OsloRegnskap.no er en uavhengig informasjonsside drevet av IT-Firma.no. Vi gir norske bedrifter gratis tilgang til komplett oversikt over regnskapstjenester i Oslo.',
  path: '/om-oss/',
});

export default function OmOssPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Om OsloRegnskap.no',
    url: 'https://osloregnskap.no/om-oss/',
    mainEntity: {
      '@type': 'Organization',
      name: 'OsloRegnskap.no',
      url: 'https://osloregnskap.no',
      parentOrganization: {
        '@type': 'Organization',
        name: 'IT-Firma.no',
        url: 'https://it-firma.no',
      },
      foundingDate: '2026',
      areaServed: { '@type': 'City', name: 'Oslo' },
      description: 'Uavhengig informasjonsside som gir norske bedrifter gratis tilgang til komplett oversikt over regnskapstjenester i Oslo.',
      knowsAbout: ['Regnskap', 'Regnskapsfører', 'Revisjon', 'Bokføring', 'MVA', 'Årsoppgjør', 'Skattemelding'],
    },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Om oss' },
      ]} />

      <section className="hero">
        <h1 className="animate-in animate-in-1">Om OsloRegnskap.no</h1>
        <p className="animate-in animate-in-2">
          En uavhengig informasjonsside som gir norske bedrifter gratis tilgang
          til komplett oversikt over regnskapstjenester i Oslo.
        </p>
      </section>

      <section className="prose animate-in animate-in-3">
        <h2>Hvem står bak?</h2>
        <p>
          OsloRegnskap.no er utviklet og driftet av <a href="https://it-firma.no" target="_blank" rel="noopener">IT-Firma.no</a>,
          et norsk teknologiselskap som bygger digitale verktøy og informasjonsplattformer
          for norske bedrifter. Vi har ingen kommersiell tilknytning til regnskapsfirmaene
          som er listet på siden — vi mottar ikke betaling for å liste, fremheve eller
          anbefale enkeltfirmaer.
        </p>

        <h2>Vår redaksjonelle tilnærming</h2>
        <p>
          Alt innhold på OsloRegnskap.no er skrevet av redaksjonen i IT-Firma.no med
          støtte fra AI-verktøy for research og tekstproduksjon. Hvert faktapåstand
          er verifisert mot offentlige kilder. Vi oppdaterer innholdet regelmessig
          for å sikre at informasjonen er korrekt og aktuell.
        </p>
        <p>
          Våre guider om priser, valg av regnskapsfører, bransjespesifikke behov og
          regnskapsregler er basert på offentlig tilgjengelig informasjon, bransjerapporter
          og generell kunnskap om det norske regnskapsmarkedet. De er ment som veiledning
          og erstatter ikke individuell rådgivning fra en kvalifisert regnskapsfører.
        </p>

        <h2>Datakilder</h2>
        <p>
          Firmadatabasen på OsloRegnskap.no er basert på offentlige registerdata fra
          norske myndigheter. Vi bruker følgende kilder:
        </p>
        <p>
          <strong>Enhetsregisteret</strong> — grunndata om alle registrerte virksomheter
          i Norge, inkludert organisasjonsnummer, selskapsform, næringskode, adresse og
          stiftelsesdato. <strong>Foretaksregisteret</strong> — tilleggsdata om
          aksjeselskaper og andre registreringspliktige foretak. Firmaene er filtrert
          på næringskode 69.201 (revisjon) og 69.202 (regnskapsføring og bokføring)
          med forretningsadresse i Oslo.
        </p>

        <h2>Hva vi dekker</h2>
        <p>
          OsloRegnskap.no gir oversikt over {firms.length} registrerte regnskapsfirmaer
          i Oslo, fordelt på {bydeler.length} bydeler. Siden inneholder {firms.length} individuelle
          firmasider, {bydeler.length} bydelsider, og en rekke guider om emner som priser,
          valg av regnskapsfører, bransjespesifikke behov, MVA-rapportering, årsoppgjør
          og skattemelding.
        </p>
        <p>
          Vi har ingen redaksjonell innflytelse fra regnskapsfirmaene som er listet.
          Rekkefølgen i kataloger og lister er basert på alfabetisk sortering,
          bydel eller stiftelsesdato — aldri på betaling eller partnerskap.
        </p>

        <h2>Oppdateringsfrekvens</h2>
        <p>
          Firmadatabasen oppdateres periodisk mot offentlige registre. Redaksjonelt
          innhold gjennomgås og oppdateres kvartalsvis. Dersom du oppdager feil
          eller utdatert informasjon, setter vi pris på tilbakemelding.
        </p>

        <h2>Kontakt</h2>
        <p>
          OsloRegnskap.no driftes av IT-Firma.no. For spørsmål, tilbakemeldinger
          eller feilmeldinger kan du kontakte oss via <a href="https://it-firma.no" target="_blank" rel="noopener">it-firma.no</a>.
        </p>
      </section>

      <SchemaFAQ items={[
        { q: 'Hvem står bak OsloRegnskap.no?', a: 'OsloRegnskap.no er utviklet og driftet av IT-Firma.no, et norsk teknologiselskap. Siden er uavhengig og mottar ikke betaling fra regnskapsfirmaer.' },
        { q: 'Hvor kommer dataene fra?', a: 'Firmadatabasen er basert på offentlige registerdata fra Enhetsregisteret og Foretaksregisteret, filtrert på næringskode for regnskap og revisjon i Oslo.' },
        { q: 'Er OsloRegnskap.no gratis?', a: 'Ja, all informasjon på OsloRegnskap.no er gratis tilgjengelig. Vi tar ikke betaling for oppføring eller synlighet.' },
        { q: 'Hvordan velger dere rekkefølgen på firmaer?', a: 'Firmaer sorteres alfabetisk, etter bydel eller stiftelsesdato. Vi bruker aldri betalt plassering eller sponsede oppføringer.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvem står bak OsloRegnskap.no?', a: 'OsloRegnskap.no er utviklet og driftet av IT-Firma.no, et norsk teknologiselskap. Siden er uavhengig og mottar ikke betaling fra regnskapsfirmaer.' },
        { q: 'Hvor kommer dataene fra?', a: 'Firmadatabasen er basert på offentlige registerdata fra Enhetsregisteret og Foretaksregisteret, filtrert på næringskode for regnskap og revisjon i Oslo.' },
        { q: 'Er OsloRegnskap.no gratis?', a: 'Ja, all informasjon på OsloRegnskap.no er gratis tilgjengelig. Vi tar ikke betaling for oppføring eller synlighet.' },
        { q: 'Hvordan velger dere rekkefølgen på firmaer?', a: 'Firmaer sorteres alfabetisk, etter bydel eller stiftelsesdato. Vi bruker aldri betalt plassering eller sponsede oppføringer.' },
      ]} />

      <InternalLinks exclude="/om-oss/" />
    </div>
  );
}
