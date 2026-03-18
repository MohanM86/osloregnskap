import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskap for AS i Oslo — Krav, kostnader og tips',
  description: 'Alt om regnskap for aksjeselskap (AS) i Oslo. Regnskapsplikt, revisjonsplikt, hva det koster og hvordan velge regnskapsfører for AS.',
  path: '/regnskap-for-as-oslo/',
});

export default function RegnskapASPage() {
  const firms = getAllFirms();
  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', name: 'Regnskap for AS i Oslo', url: 'https://osloregnskap.no/regnskap-for-as-oslo/', author: { '@type': 'Organization', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Regnskap for AS i Oslo' }]} />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskap for AS i Oslo</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Aksjeselskap (AS) har strengere regnskapskrav enn enkeltpersonforetak. Som AS i Oslo
        har du full regnskapsplikt, og det anbefales sterkt å bruke autorisert regnskapsfører.
        Her finner du alt om krav, kostnader og valg av regnskapsfører for AS.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapsplikt for aksjeselskap</h2>
        <p style={{ marginBottom: '1rem' }}>
          Alle aksjeselskaper i Norge har full regnskapsplikt etter regnskapsloven. Dette
          innebærer at du må utarbeide årsregnskap bestående av resultatregnskap, balanse
          og noter. Årsregnskapet skal sendes til Regnskapsregisteret i Brønnøysund.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          I tillegg til regnskapsplikten har alle AS bokføringsplikt. Det betyr at alle
          økonomiske transaksjoner må dokumenteres og bokføres løpende gjennom året.
        </p>
        <p>
          Fristen for å sende inn årsregnskapet er 31. juli for selskaper med ordinært
          regnskapsår (1. januar – 31. desember). Skattemeldingen for AS har frist 31. mai.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Revisjonsplikt for AS</h2>
        <p style={{ marginBottom: '1rem' }}>
          Små aksjeselskaper kan velge bort revisor dersom de oppfyller alle tre vilkårene:
          driftsinntekter under 7 millioner kroner, balansesum under 27 millioner kroner,
          og gjennomsnittlig antall ansatte tilsvarende 10 eller færre årsverk.
        </p>
        <p>
          Selv om du kan velge bort revisor, trenger du fortsatt å føre regnskap og sende
          inn årsregnskapet. Mange velger å bruke regnskapsfører selv når de ikke har
          revisjonsplikt.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva koster regnskapsfører for AS i Oslo?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Kostnaden for regnskapsfører for AS i Oslo avhenger av selskapets størrelse og
          kompleksitet. Typiske prisnivåer:
        </p>
        <p style={{ marginBottom: '0.5rem' }}><strong>AS uten ansatte:</strong> 2 000–5 000 kr/mnd</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>AS med 1–5 ansatte:</strong> 5 000–10 000 kr/mnd</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>AS med 5–10 ansatte:</strong> 10 000–15 000 kr/mnd</p>
        <p style={{ marginBottom: '1rem' }}><strong>Større AS:</strong> 15 000+ kr/mnd</p>
        <p>
          Les mer om <Link href="/hva-koster-regnskapsforer-oslo/">priser for regnskapsfører i Oslo</Link>.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Rapporteringskrav for AS</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Årsregnskap:</strong> Resultatregnskap, balanse og noter. Frist 31. juli.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Skattemelding:</strong> Med næringsoppgave og skjemaer. Frist 31. mai.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>MVA-melding:</strong> Annenhver måned for MVA-registrerte selskaper.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>A-melding:</strong> Hver måned dersom du har ansatte (lønn, skatt, avgifter).
        </p>
        <p>
          <strong>Aksjonærregisteroppgave:</strong> Årlig rapport over aksjonærer og eierforhold.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <p>
          Oslo har <Link href="/firmaer/">{firms.length} regnskapsfirmaer</Link> som kan hjelpe
          ditt AS med regnskap og rapportering.
        </p>
      </section>

      <SchemaFAQ items={[
        { q: 'Trenger AS regnskapsfører?', a: 'Det er ikke lovpålagt, men sterkt anbefalt. AS har full regnskapsplikt med årsregnskap, og kravene er komplekse nok til at de fleste bør bruke autorisert regnskapsfører.' },
        { q: 'Hva koster regnskapsfører for AS i Oslo?', a: 'Typisk 2 000–5 000 kr/mnd for AS uten ansatte, og 5 000–15 000 kr/mnd for AS med ansatte. Prisen avhenger av bilagsvolum og antall ansatte.' },
        { q: 'Kan AS velge bort revisor?', a: 'Ja, små AS kan velge bort revisor dersom de har under 7 millioner i driftsinntekter, under 27 millioner i balansesum og 10 eller færre årsverk. Generalforsamlingen må vedta fravalg.' },
        { q: 'Når må AS levere årsregnskapet?', a: 'Årsregnskapet skal sendes til Regnskapsregisteret innen 31. juli for selskaper med ordinært regnskapsår. Skattemeldingen har frist 31. mai.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Trenger AS regnskapsfører?', a: 'Det er ikke lovpålagt, men sterkt anbefalt. AS har full regnskapsplikt med årsregnskap, og kravene er komplekse nok til at de fleste bør bruke autorisert regnskapsfører.' },
        { q: 'Hva koster regnskapsfører for AS i Oslo?', a: 'Typisk 2 000–5 000 kr/mnd for AS uten ansatte, og 5 000–15 000 kr/mnd for AS med ansatte. Prisen avhenger av bilagsvolum og antall ansatte.' },
        { q: 'Kan AS velge bort revisor?', a: 'Ja, små AS kan velge bort revisor dersom de har under 7 millioner i driftsinntekter, under 27 millioner i balansesum og 10 eller færre årsverk. Generalforsamlingen må vedta fravalg.' },
        { q: 'Når må AS levere årsregnskapet?', a: 'Årsregnskapet skal sendes til Regnskapsregisteret innen 31. juli for selskaper med ordinært regnskapsår. Skattemeldingen har frist 31. mai.' },
      ]} />

      <InternalLinks exclude="/regnskap-for-as-oslo/" />
    </div>
  );
}
