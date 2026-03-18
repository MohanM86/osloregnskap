import { getAllFirms } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskap for enkeltpersonforetak i Oslo — Komplett guide',
  description: 'Alt om regnskap for enkeltpersonforetak (ENK) i Oslo. Hva du trenger, hva det koster, og når du bør bruke regnskapsfører. Praktisk guide med tips.',
  path: '/regnskap-for-enkeltpersonforetak-oslo/',
});

export default function RegnskapENKPage() {
  const firms = getAllFirms();
  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', name: 'Regnskap for enkeltpersonforetak i Oslo', url: 'https://osloregnskap.no/regnskap-for-enkeltpersonforetak-oslo/', author: { '@type': 'Organization', name: 'OsloRegnskap.no' } }) }} />

      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Regnskap for ENK i Oslo' }]} />
      <section className="hero">
      
      <h1>Regnskap for enkeltpersonforetak i Oslo</h1>
      
      <p >
        Enkeltpersonforetak (ENK) er den vanligste selskapsformen i Norge. Som enkeltpersonforetak i Oslo
        har du plikt til å føre regnskap, men reglene er enklere enn for aksjeselskaper. Her finner du
        alt du trenger å vite om regnskap for ENK.
      </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapsplikt for enkeltpersonforetak</h2>
        <p style={{ marginBottom: '1rem' }}>
          Alle enkeltpersonforetak har bokføringsplikt. Det betyr at du må dokumentere alle
          økonomiske transaksjoner i virksomheten. Bokføringsplikten gjelder uansett omsetning.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Enkeltpersonforetak med mindre enn 50 000 kroner i omsetning kan velge å bruke
          en forenklet bokføringsmetode. For de fleste ENK med høyere omsetning gjelder
          standard bokføringsregler.
        </p>
        <p>
          Enkeltpersonforetak har normalt ikke regnskapsplikt etter regnskapsloven med mindre
          omsetningen overstiger 7 millioner kroner eller det har mer enn 10 ansatte. Men
          bokføringsplikten gjelder uansett.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva må du rapportere som ENK?</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Skattemelding med næringsoppgave:</strong> Alle ENK med næringsinntekt
          må levere skattemelding med næringsoppgave innen 31. mai hvert år. Næringsoppgaven
          viser inntekter, kostnader og resultat.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>MVA-oppgave:</strong> Dersom du er MVA-registrert (omsetning over 50 000 kr
          i løpet av 12 måneder), må du levere MVA-melding annenhver måned.
        </p>
        <p>
          <strong>A-melding:</strong> Hvis du har ansatte, må du levere a-melding hver måned
          med informasjon om lønn, skattetrekk og arbeidsgiveravgift.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Trenger jeg regnskapsfører som ENK?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Du er ikke pålagt å bruke regnskapsfører som enkeltpersonforetak. Mange ENK med
          lav omsetning og få transaksjoner velger å føre regnskapet selv ved hjelp av
          regnskapsprogrammer som Fiken, Visma eller Tripletex.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Det kan lønne seg å bruke regnskapsfører dersom du har høy omsetning, mange
          transaksjoner, er MVA-registrert, har ansatte, driver i en bransje med komplekse
          regler, eller rett og slett ønsker å bruke tiden din på kjernevirksomheten.
        </p>
        <p>
          Oslo har <Link href="/firmaer/">{firms.length} regnskapsfirmaer</Link> du kan velge mellom.
          <Link href="/hva-koster-regnskapsforer-oslo/"> Typisk pris for ENK er 1 000–3 000 kroner per måned</Link>.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }} className="prose">
        <h2>Tips for regnskap som ENK i Oslo</h2>
        <p>
          Hold bilagene organisert fra dag én. Skann kvitteringer og fakturaer digitalt,
          og kategoriser dem fortløpende. Å samle opp bilag til årets slutt gjør jobben
          mye vanskeligere og øker risikoen for feil. Bruk en app som EZcollect, Fiken
          eller Tripletex sin mobilapp for å ta bilde av kvitteringer med en gang.
        </p>
        <p>
          Ha separate kontoer for privat og næring. En egen bedriftskonto gjør bokføringen
          mye enklere og gir bedre oversikt over virksomhetens økonomi. De fleste banker
          tilbyr bedriftskonto til enkeltpersonforetak med lave eller ingen månedskostnader.
        </p>
        <p>
          Sett av penger til skatt løpende. Som selvstendig næringsdrivende betaler du
          forskuddsskatt fire ganger i året. En god tommelfingerregel er å sette av
          30–40 prosent av overskuddet til skatt. Da unngår du restskatt og
          likviditetsproblemer.
        </p>

        <h2>Regnskapsprogrammer for ENK i Oslo</h2>
        <p>
          Dersom du velger å føre regnskapet selv, finnes det flere gode
          regnskapsprogrammer tilpasset enkeltpersonforetak. <strong>Fiken</strong> er
          et av de mest populære valgene for ENK — det er brukervennlig, har god
          mobilapp og koster fra 0 kroner per måned for den enkleste versjonen.
        </p>
        <p>
          <strong>Tripletex</strong> er et kraftigere alternativ som passer ENK
          med mer aktivitet. Systemet har gode integrasjoner med banker og andre
          verktøy, og tilbyr automatisk bankavstemmming som sparer mye tid.
        </p>
        <p>
          <strong>Visma eAccounting</strong> er et annet populært valg med god
          brukervennlighet og bred funksjonalitet. Systemet passer godt for ENK
          som trenger fakturering, bokføring og MVA-rapportering i ett.
        </p>
        <p>
          Uansett hvilket program du velger, sørg for at det er godkjent etter
          bokføringsforskriften og at det kan levere MVA-melding direkte til
          Skatteetaten via Altinn.
        </p>

        <h2>MVA-registrering for ENK i Oslo</h2>
        <p>
          Du må MVA-registrere enkeltpersonforetaket ditt når omsetningen av
          MVA-pliktige varer og tjenester overstiger 50 000 kroner i løpet av
          en 12-månedersperiode. MVA-registrering innebærer at du legger 25 prosent
          MVA på dine fakturaer (eller 15/12/0 prosent avhengig av type vare/tjeneste),
          og at du kan trekke fra MVA på dine innkjøp.
        </p>
        <p>
          MVA-meldingen leveres annenhver måned — i februar, april, juni, august,
          oktober og desember. Fristen er den 10. i leveringsmåneden. Dersom du
          har omsetning under 1 million kroner, kan du søke om å levere årlig
          MVA-melding i stedet.
        </p>

        <h2>Fradrag du bør kjenne til som ENK</h2>
        <p>
          Som selvstendig næringsdrivende i Oslo kan du trekke fra alle kostnader
          som er nødvendige for å drive virksomheten. Vanlige fradrag inkluderer
          kontorrekvisita og utstyr, fagbøker og kurs, reisekostnader i forbindelse
          med jobb, telefon og internett (forholdsmessig andel), forsikringer knyttet
          til virksomheten, og markedsføringskostnader.
        </p>
        <p>
          Dersom du jobber fra hjemmekontor, kan du trekke fra en forholdsmessig andel
          av husleie, strøm og forsikring basert på kontorets andel av boligens totale
          areal. Standardfradraget for hjemmekontor er 1 850 kroner per år, men du
          kan velge å bruke faktiske kostnader dersom de er høyere.
        </p>
        <p>
          En regnskapsfører kan hjelpe deg med å identifisere alle fradrag du har rett på
          og sørge for at de dokumenteres korrekt. Mange ENK-eiere går glipp av
          legitime fradrag fordi de ikke kjenner reglene — en kostnad som ofte
          overstiger honoraret til regnskapsføreren.
        </p>
      </section>

      <SchemaFAQ items={[
        { q: 'Må enkeltpersonforetak føre regnskap?', a: 'Ja, alle enkeltpersonforetak har bokføringsplikt. Du må dokumentere alle økonomiske transaksjoner. ENK med omsetning under 50 000 kr kan bruke forenklet bokføring.' },
        { q: 'Hva koster regnskapsfører for ENK i Oslo?', a: 'Typisk 1 000–3 000 kroner per måned for et enkeltpersonforetak med moderat aktivitet. Prisen avhenger av antall bilag og om du er MVA-registrert.' },
        { q: 'Kan jeg føre regnskapet selv som ENK?', a: 'Ja, mange enkeltpersonforetak fører regnskapet selv. Bruk et godkjent regnskapsprogram som Fiken, Visma eller Tripletex. Vurder regnskapsfører hvis du har høy omsetning eller komplekse forhold.' },
        { q: 'Når må ENK levere skattemelding?', a: 'Skattemeldingen med næringsoppgave har frist 31. mai for enkeltpersonforetak. MVA-meldinger leveres annenhver måned.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Må enkeltpersonforetak føre regnskap?', a: 'Ja, alle enkeltpersonforetak har bokføringsplikt. Du må dokumentere alle økonomiske transaksjoner. ENK med omsetning under 50 000 kr kan bruke forenklet bokføring.' },
        { q: 'Hva koster regnskapsfører for ENK i Oslo?', a: 'Typisk 1 000–3 000 kroner per måned for et enkeltpersonforetak med moderat aktivitet. Prisen avhenger av antall bilag og om du er MVA-registrert.' },
        { q: 'Kan jeg føre regnskapet selv som ENK?', a: 'Ja, mange enkeltpersonforetak fører regnskapet selv. Bruk et godkjent regnskapsprogram som Fiken, Visma eller Tripletex. Vurder regnskapsfører hvis du har høy omsetning eller komplekse forhold.' },
        { q: 'Når må ENK levere skattemelding?', a: 'Skattemeldingen med næringsoppgave har frist 31. mai for enkeltpersonforetak. MVA-meldinger leveres annenhver måned.' },
      ]} />

      <InternalLinks exclude="/regnskap-for-enkeltpersonforetak-oslo/" />
    </div>
  );
}
