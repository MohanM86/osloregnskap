import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, FAQ, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Beste regnskapskontor i Oslo — Slik finner du riktig kontor',
  description: 'Hvordan finne det beste regnskapskontoret i Oslo for din bedrift. Oversikt over 386 regnskapskontor fordelt på 15 bydeler med tips for valg.',
  path: '/beste-regnskapskontor-oslo/',
});

export default function BesteRegnskapsKontorPage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();

  return (
    <div className="container">
      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Beste regnskapskontor Oslo' }]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Beste regnskapskontor i Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Oslo har {firms.length} registrerte regnskapskontor. Det «beste» kontoret avhenger av
        dine behov — bransje, bedriftsstørrelse, beliggenhet og budsjett. Her hjelper vi deg
        med å finne det rette regnskapskontoret for akkurat din situasjon.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Hva kjennetegner et godt regnskapskontor?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Et godt regnskapskontor i Oslo kjennetegnes av autoriserte regnskapsførere med
          relevant bransjeerfaring, moderne regnskapssystemer, god tilgjengelighet og
          transparent prising. Kontoret bør også ha gode rutiner for kvalitetssikring
          og etterutdanning.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          De beste regnskapskontorene er proaktive rådgivere som gir deg løpende innsikt
          i bedriftens økonomi, ikke bare passive bilagsprosessorer. De varsler om
          frister, foreslår optimaliseringer og holder deg oppdatert på regelverksendringer.
        </p>
        <p>
          Det er viktig å understreke at det «beste» regnskapskontoret er subjektivt.
          Et kontor som er perfekt for et stort konsern, er ikke nødvendigvis det beste
          valget for et lite enkeltpersonforetak — og omvendt.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Regnskapskontor per bydel i Oslo</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--muted)' }}>
          Beliggenhet kan være viktig dersom du foretrekker fysiske møter med regnskapsføreren.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`}
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', border: '1px solid var(--border)' }}>
                <span>{b.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{b.count} kontor</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Kriterier for å vurdere regnskapskontor</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Autorisasjon og kvalifikasjon:</strong> Sjekk at kontoret har autoriserte
          regnskapsførere via Finanstilsynets register. Dette er et absolutt minimumskrav.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Spesialisering:</strong> Noen regnskapskontor spesialiserer seg på bestemte
          bransjer som IT, restaurant, bygg eller eiendom. Bransjekunnskap gir ofte bedre
          kvalitet og mer relevant rådgivning.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Teknologi:</strong> De beste kontorene bruker moderne skybaserte systemer
          og tilbyr digitale løsninger for bilagslevering, kommunikasjon og rapportering.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Stabilitet:</strong> Et regnskapskontor som har eksistert i mange år
          har bevist at det leverer kvalitet over tid. Sjekk stiftelsesdato i
          Brønnøysundregistrene.
        </p>
        <p>
          <strong>Kapasitet:</strong> Sjekk at kontoret har kapasitet til å ta på seg
          ditt oppdrag uten at kvaliteten går ned. For mange kunder per regnskapsfører
          kan gi dårligere oppfølging.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Statistikk om regnskapskontor i Oslo</h2>
        <p style={{ marginBottom: '1rem' }}>
          Av {firms.length} registrerte regnskapsfirmaer i Oslo er {firms.filter(f => f.naeringskode === '69.202').length} registrert
          under næringskode 69.202 (regnskapsføring og bokføring)
          og {firms.filter(f => f.naeringskode === '69.201').length} under 69.201 (revisjon).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          {firms.filter(f => f.mvaRegistrert).length} av firmaene er MVA-registrerte, noe som
          tyder på at de har over 50 000 kroner i omsetning og driver aktiv næringsvirksomhet.
        </p>
        <p>
          Flest regnskapsfirmaer finner du i {bydeler[0]?.name} ({bydeler[0]?.count} stk)
          og {bydeler[1]?.name} ({bydeler[1]?.count} stk).
        </p>
      </section>

      <FAQ items={[
        { q: 'Hvilket regnskapskontor i Oslo er best?', a: `Det beste regnskapskontoret avhenger av dine behov. Oslo har ${firms.length} registrerte regnskapsfirmaer. Vurder bransjeerfaring, pris, beliggenhet og tilgjengelighet for å finne det rette kontoret for din bedrift.` },
        { q: 'Hvor finner jeg regnskapskontor nær meg i Oslo?', a: 'Bruk vår bydelsoversikt for å finne regnskapskontor i din bydel. Vi har listet alle registrerte regnskapsfirmaer per bydel med adresse og kontaktinfo.' },
        { q: 'Skal jeg velge et stort eller lite regnskapskontor?', a: 'Store kontorer tilbyr bredere kompetanse og mer kapasitet, mens mindre kontorer ofte gir tettere personlig oppfølging og lavere pris. Velg basert på dine konkrete behov.' },
        { q: 'Kan jeg stole på anmeldelser av regnskapskontor på nett?', a: 'Anmeldelser kan gi nyttig innsikt, men bør tas med en klype salt. Be heller om referanser direkte fra regnskapskontoret og kontakt eksisterende kunder.' },
      ]} />

      <InternalLinks exclude="/beste-regnskapskontor-oslo/" />
    </div>
  );
}
