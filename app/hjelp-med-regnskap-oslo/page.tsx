import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Hjelp med regnskap i Oslo — Finn regnskapshjelp',
  description: 'Trenger du hjelp med regnskap i Oslo? Finn regnskapsfører, lær om regnskapsprogrammer og få tips for å holde orden på økonomien.',
  path: '/hjelp-med-regnskap-oslo/',
});

export default function HjelpMedRegnskapPage() {
  const firms = getAllFirms();
  return (
    <div className="container">
      <Breadcrumb items={[{ label: 'Hjem', href: '/' }, { label: 'Hjelp med regnskap i Oslo' }]} />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hjelp med regnskap i Oslo</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Trenger du hjelp med regnskapet? Oslo har {firms.length} registrerte regnskapsfirmaer
        som kan bistå med alt fra enkel bokføring til komplett økonomistyring. Her gir vi deg
        oversikt over mulighetene dine.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Når trenger du hjelp med regnskap?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Du bør vurdere å få hjelp med regnskapet dersom du bruker mye tid på bokføring og
          rapportering, er usikker på regler og frister, har fått feil i regnskapet tidligere,
          har ansatte eller er MVA-registrert, driver i en bransje med komplekse regnskapsregler,
          eller rett og slett ønsker å fokusere på kjernevirksomheten.
        </p>
        <p>
          Mange oppstartsbedrifter i Oslo starter med å føre regnskapet selv, men bytter til
          regnskapsfører etter hvert som virksomheten vokser og kravene blir mer komplekse.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Alternativer for regnskapshjelp</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Regnskapsfører:</strong> En autorisert regnskapsfører tar seg av hele
          regnskapet — bokføring, MVA, lønn, årsoppgjør og skattemelding. Dette er den
          vanligste løsningen for bedrifter som ønsker å outsource regnskapet.
          <Link href="/regnskapsforer/"> Finn regnskapsfører i Oslo →</Link>
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Regnskapsprogram:</strong> For de som ønsker å føre regnskapet selv finnes
          det flere brukervennlige programmer. Fiken er populært blant enkeltpersonforetak,
          mens Tripletex og Visma brukes av både små og mellomstore bedrifter.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Kurs og opplæring:</strong> Flere aktører i Oslo tilbyr kurs i grunnleggende
          regnskapsføring. Skatteetaten har også gratis veiledning og informasjonsmateriell.
        </p>
        <p>
          <strong>Kombinasjon:</strong> Mange bruker en kombinasjon der de fører noe av
          regnskapet selv (f.eks. bilagsregistrering) og lar regnskapsføreren håndtere
          rapportering og årsoppgjør.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Viktige frister for regnskap</h2>
        <p style={{ marginBottom: '0.5rem' }}><strong>Annenhver måned:</strong> MVA-melding (for MVA-registrerte)</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Hver måned:</strong> A-melding (for de med ansatte)</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>31. mai:</strong> Skattemelding for ENK og AS</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>31. juli:</strong> Årsregnskap til Regnskapsregisteret (AS)</p>
        <p style={{ marginBottom: '1rem' }}><strong>15. mars:</strong> Aksjonærregisteroppgave</p>
        <p>
          En regnskapsfører sørger for at alle frister overholdes og at rapporteringen er korrekt.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Finn regnskapshjelp i din bydel</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {getBydeler().slice(0, 10).map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`}
                style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                <span>{b.name}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <FAQAccordion items={[
        { q: 'Trenger jeg regnskapsfører?', a: 'Du er ikke pålagt å bruke regnskapsfører, men alle næringsdrivende har bokføringsplikt. For AS anbefales det sterkt å bruke autorisert regnskapsfører. ENK med lav omsetning kan vurdere å føre regnskapet selv.' },
        { q: 'Kan jeg føre regnskapet selv?', a: 'Ja, det finnes brukervennlige regnskapsprogrammer som Fiken, Tripletex og Visma. For enkle forhold med få transaksjoner kan du fint føre regnskapet selv. Ved større omsetning eller komplekse forhold anbefales regnskapsfører.' },
        { q: 'Hva koster det å få hjelp med regnskap i Oslo?', a: 'Regnskapsfører i Oslo koster typisk 1 000–15 000 kr/mnd avhengig av bedriftstype og omfang. Regnskapsprogrammer koster fra 0–500 kr/mnd for grunnleggende versjoner.' },
        { q: 'Hva gjør jeg hvis regnskapet er rot?', a: 'Kontakt en regnskapsfører som kan hjelpe deg med å rydde opp. Mange regnskapsførere tilbyr oppryddingstjenester der de går gjennom og korrigerer tidligere bokføring.' },
      ]} />

      <InternalLinks exclude="/hjelp-med-regnskap-oslo/" />
    </div>
  );
}
