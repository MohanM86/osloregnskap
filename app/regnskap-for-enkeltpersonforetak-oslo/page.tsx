import { getAllFirms } from '@/lib/data';
import { Breadcrumb, FAQ, InternalLinks } from '@/lib/components';
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
      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Regnskap for ENK i Oslo' }]} />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskap for enkeltpersonforetak i Oslo</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Enkeltpersonforetak (ENK) er den vanligste selskapsformen i Norge. Som enkeltpersonforetak i Oslo
        har du plikt til å føre regnskap, men reglene er enklere enn for aksjeselskaper. Her finner du
        alt du trenger å vite om regnskap for ENK.
      </p>

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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Tips for regnskap som ENK i Oslo</h2>
        <p style={{ marginBottom: '1rem' }}>
          Hold bilagene organisert fra dag én. Skann kvitteringer og fakturaer digitalt,
          og kategoriser dem fortløpende. Å samle opp bilag til årets slutt gjør jobben
          mye vanskeligere og øker risikoen for feil.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Ha separate kontoer for privat og næring. En egen bedriftskonto gjør bokføringen
          mye enklere og gir bedre oversikt over virksomhetens økonomi.
        </p>
        <p>
          Sett av penger til skatt løpende. Som selvstendig næringsdrivende betaler du
          forskuddsskatt fire ganger i året. Beregn forventet skatt og sett av midler
          fortløpende for å unngå overraskelser.
        </p>
      </section>

      <FAQ items={[
        { q: 'Må enkeltpersonforetak føre regnskap?', a: 'Ja, alle enkeltpersonforetak har bokføringsplikt. Du må dokumentere alle økonomiske transaksjoner. ENK med omsetning under 50 000 kr kan bruke forenklet bokføring.' },
        { q: 'Hva koster regnskapsfører for ENK i Oslo?', a: 'Typisk 1 000–3 000 kroner per måned for et enkeltpersonforetak med moderat aktivitet. Prisen avhenger av antall bilag og om du er MVA-registrert.' },
        { q: 'Kan jeg føre regnskapet selv som ENK?', a: 'Ja, mange enkeltpersonforetak fører regnskapet selv. Bruk et godkjent regnskapsprogram som Fiken, Visma eller Tripletex. Vurder regnskapsfører hvis du har høy omsetning eller komplekse forhold.' },
        { q: 'Når må ENK levere skattemelding?', a: 'Skattemeldingen med næringsoppgave har frist 31. mai for enkeltpersonforetak. MVA-meldinger leveres annenhver måned.' },
      ]} />

      <InternalLinks exclude="/regnskap-for-enkeltpersonforetak-oslo/" />
    </div>
  );
}
