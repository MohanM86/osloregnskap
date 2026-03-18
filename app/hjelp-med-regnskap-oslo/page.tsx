import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', name: 'Hjelp med regnskap i Oslo', url: 'https://osloregnskap.no/hjelp-med-regnskap-oslo/', author: { '@type': 'Organization', name: 'OsloRegnskap.no' } }) }} />

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

      <section style={{ marginTop: '2rem' }} className="prose">
        <h2>Viktige frister for regnskap</h2>
        <p>
          Alle næringsdrivende i Oslo må forholde seg til en rekke frister gjennom året.
          MVA-meldingen leveres annenhver måned for MVA-registrerte virksomheter, med frist
          den 10. i leveringsmåneden. A-meldingen med lønnsinformasjon leveres hver måned
          senest den 5. i måneden etter lønnsutbetaling. Skattemeldingen for både
          enkeltpersonforetak og aksjeselskaper har frist 31. mai. Årsregnskapet for
          aksjeselskaper skal sendes til Regnskapsregisteret innen 31. juli.
          Aksjonærregisteroppgaven har frist 31. januar.
        </p>
        <p>
          Å oversitte frister kan bli dyrt. Skatteetaten ilegger tvangsmulkt for forsinket
          levering av MVA-melding og a-melding. Forsinket innsending av årsregnskap medfører
          forsinkelsesgebyr fra Regnskapsregisteret. En regnskapsfører sørger for at alle
          frister overholdes og varsler deg i god tid dersom dokumentasjon trengs.
        </p>

        <h2>Regnskap for nyetablerte i Oslo</h2>
        <p>
          Mange nyetablerte bedrifter i Oslo er usikre på hvor de skal begynne med
          regnskapet. Det viktigste første steget er å velge et regnskapssystem og
          etablere gode rutiner for bilagshåndtering fra starten. Det er mye enklere
          å holde regnskapet oppdatert løpende enn å rydde opp i ettertid.
        </p>
        <p>
          For <Link href="/regnskap-for-enkeltpersonforetak-oslo/">enkeltpersonforetak</Link> kan
          du starte med et gratis eller rimelig regnskapsprogram og eventuelt engasjere
          regnskapsfører senere når behovet vokser. For <Link href="/regnskap-for-as-oslo/">aksjeselskaper</Link> anbefaler
          vi å engasjere regnskapsfører allerede ved stiftelsen — kravene er for
          komplekse til at de fleste bør håndtere dem selv.
        </p>

        <h2>Opprydding i rotete regnskap</h2>
        <p>
          Dersom du har kommet på etterskudd med regnskapet, er det viktig å ta tak i
          situasjonen så raskt som mulig. Jo lenger du venter, jo mer arbeid blir det
          — og jo større blir risikoen for bøter og tilleggsskatt. Mange
          regnskapsførere i Oslo tilbyr oppryddingstjenester der de går gjennom og
          korrigerer tidligere bokføring, rekonstruerer manglende dokumentasjon der det
          er mulig, og sørger for at rapportering kommer ajour.
        </p>
        <p>
          Kostnaden for opprydding avhenger av hvor mye som mangler og hvor langt
          tilbake i tid det strekker seg. Forvent å betale timepriser for denne typen
          arbeid, typisk 800–1 500 kroner per time. For et helt år med manglende
          bokføring kan kostnaden bli 15 000–40 000 kroner, avhengig av omfanget.
        </p>

        <h2>Digitale verktøy som forenkler regnskapet</h2>
        <p>
          Moderne teknologi har gjort det mye enklere å holde orden på regnskapet.
          Skybaserte regnskapssystemer lar deg registrere bilag, sende fakturaer og
          følge med på økonomien fra mobilen. Automatisk bankavstemmming kobler
          transaksjoner i regnskapssystemet med kontoutskriften din, noe som
          dramatisk reduserer manuelt arbeid.
        </p>
        <p>
          Bilagsapper lar deg ta bilde av kvitteringer med mobilen og sende dem
          direkte til regnskapssystemet. Integrasjoner mellom fakturasystemer,
          nettbutikkplattformer og regnskapsprogrammer gjør at data flyter
          automatisk uten manuell registrering.
        </p>
        <p>
          Selv om du bruker regnskapsfører, kan disse verktøyene spare tid og
          penger ved at rutinemessig arbeid automatiseres. Snakk med
          <Link href="/regnskapsforer/">regnskapsføreren din</Link> om hvilke
          verktøy som passer best for din bedrift.
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

      <SchemaFAQ items={[
        { q: 'Trenger jeg regnskapsfører?', a: 'Du er ikke pålagt å bruke regnskapsfører, men alle næringsdrivende har bokføringsplikt. For AS anbefales det sterkt å bruke autorisert regnskapsfører. ENK med lav omsetning kan vurdere å føre regnskapet selv.' },
        { q: 'Kan jeg føre regnskapet selv?', a: 'Ja, det finnes brukervennlige regnskapsprogrammer som Fiken, Tripletex og Visma. For enkle forhold med få transaksjoner kan du fint føre regnskapet selv. Ved større omsetning eller komplekse forhold anbefales regnskapsfører.' },
        { q: 'Hva koster det å få hjelp med regnskap i Oslo?', a: 'Regnskapsfører i Oslo koster typisk 1 000–15 000 kr/mnd avhengig av bedriftstype og omfang. Regnskapsprogrammer koster fra 0–500 kr/mnd for grunnleggende versjoner.' },
        { q: 'Hva gjør jeg hvis regnskapet er rot?', a: 'Kontakt en regnskapsfører som kan hjelpe deg med å rydde opp. Mange regnskapsførere tilbyr oppryddingstjenester der de går gjennom og korrigerer tidligere bokføring.' },
      ]} />
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
