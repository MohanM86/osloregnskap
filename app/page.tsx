import Link from 'next/link';
import { getAllFirms, getBydeler, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { AnimatedStat, BarChart, TimelineChart, DonutChart, FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Regnskap Oslo — Komplett oversikt over regnskapstjenester',
  description: 'Finn regnskapsfører i Oslo. Komplett katalog med 386 regnskapsfirmaer, guider, priser og oversikt per bydel. Oppdatert med data ',
  path: '/',
});

export default function HomePage() {
  const firms = getAllFirms();
  const bydeler = getBydeler();
  const regnskapForere = firms.filter(f => f.naeringskode === '69.202');
  const revisorer = firms.filter(f => f.naeringskode === '69.201');

  // Timeline data
  const yearBuckets: Record<string, number> = {};
  firms.forEach(f => {
    if (f.stiftet) {
      const y = parseInt(f.stiftet.substring(0, 4));
      const decade = Math.floor(y / 5) * 5;
      const label = `${decade}`;
      yearBuckets[label] = (yearBuckets[label] || 0) + 1;
    }
  });
  const timelineData = Object.entries(yearBuckets)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .filter(([y]) => parseInt(y) >= 1980)
    .map(([label, value]) => ({ label: `${label}–${parseInt(label)+4}`, value }));

  // Bydel chart data
  const bydelChartData = bydeler.slice(0, 10).map(b => ({
    label: b.name,
    value: b.count,
    href: `/regnskapsforer-${BYDELER_INFO[b.name]?.urlSlug || b.slug}/`,
  }));

  // Donut data
  const donutData = [
    { label: 'Regnskapsføring', value: regnskapForere.length, color: '#00C48C' },
    { label: 'Revisjon', value: revisorer.length, color: '#00D9A0' },
    { label: 'Annet', value: firms.length - regnskapForere.length - revisorer.length, color: '#e8e5e1' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    name: 'OsloRegnskap.no', url: 'https://osloregnskap.no',
    description: 'Komplett oversikt over regnskapstjenester i Oslo',
  };

  const faqItems = [
    { q: 'Hvor mange regnskapsfirmaer finnes det i Oslo?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Oslo. Av disse driver ${regnskapForere.length} med regnskapsføring og bokføring, mens ${revisorer.length} er revisjonsfirmaer. Firmaene er fordelt over ${bydeler.length} bydeler, med størst konsentrasjon i Sentrum og på Frogner.` },
    { q: 'Hva koster en regnskapsfører i Oslo?', a: 'Timeprisen for regnskapsfører i Oslo ligger typisk mellom 500 og 1 500 kroner. For enkeltpersonforetak med få transaksjoner er månedsprisen vanligvis 1 000–3 000 kroner. Aksjeselskaper uten ansatte betaler typisk 2 000–5 000 kroner per måned, mens AS med ansatte ofte ligger på 5 000–15 000 kroner per måned. Prisen avhenger av antall bilag, ansatte og kompleksiteten i regnskapet.' },
    { q: 'Trenger jeg regnskapsfører for enkeltpersonforetak?', a: 'Du er ikke pålagt å bruke regnskapsfører som enkeltpersonforetak, men du har bokføringsplikt. For ENK med lav omsetning og få transaksjoner kan det lønne seg å bruke et regnskapsprogram som Fiken eller Tripletex. Dersom du har høy omsetning, er MVA-registrert eller har ansatte, anbefales det å bruke autorisert regnskapsfører.' },
    { q: 'Hva er forskjellen på regnskapsfører, regnskapskontor og regnskapsbyrå?', a: 'En regnskapsfører er den individuelle fagpersonen som utfører regnskapsarbeidet. Et regnskapskontor og et regnskapsbyrå er begge virksomheter som tilbyr regnskapstjenester — begrepene brukes om hverandre. Et byrå kan oppfattes som noe større enn et kontor, men det finnes ingen formell forskjell.' },
    { q: 'Hva er forskjellen på regnskapsfører og revisor?', a: 'En regnskapsfører fører det løpende regnskapet — bokføring, fakturering, lønnskjøring og MVA-rapportering. En revisor kontrollerer og attesterer årsregnskapet uavhengig av regnskapsføreren. Ikke alle selskaper har revisjonsplikt. Små AS med under 7 millioner i omsetning kan velge bort revisor.' },
    { q: 'Kan jeg bytte regnskapsfører i Oslo?', a: 'Ja, du kan bytte regnskapsfører når som helst. Si opp avtalen med eksisterende regnskapsfører med avtalt oppsigelsestid, og den nye regnskapsføreren vil normalt bistå med å innhente dokumentasjon og sørge for en smidig overgang. Det er vanlig å bytte ved årsskiftet, men det er ingen krav om dette.' },
    { q: 'Hva bør jeg sjekke før jeg velger regnskapsfører?', a: 'Sjekk at regnskapsføreren har gyldig autorisasjon fra Finanstilsynet. Vurder bransjeerfaring, pris, tilgjengelighet og hvilke regnskapssystemer de bruker. Be om tilbud fra minst tre regnskapsførere og kontakt referanser. En god regnskapsfører bør fungere som en rådgiver, ikke bare en bilagsprosessor.' },
    { q: 'Hvilke regnskapssystemer brukes mest i Oslo?', a: 'De mest brukte skybaserte regnskapssystemene i Oslo er Tripletex, Fiken, Visma, PowerOffice og Xledger. Valg av system avhenger av bedriftens størrelse og behov. Fiken er populært blant enkeltpersonforetak, mens Tripletex og Visma brukes av både små og mellomstore bedrifter. Større selskaper bruker ofte Xledger eller SAP.' },
    { q: 'Må regnskapsfører være autorisert?', a: 'Ja, alle som tilbyr regnskapstjenester til andre er pålagt å ha autorisasjon fra Finanstilsynet. Autorisasjon krever relevant utdanning (bachelor i regnskap), minimum to års praksis og plettfri vandel. Autoriserte regnskapsførere må også gjennomføre 77 timer etterutdanning over tre år.' },
    { q: 'Hva skjer hvis jeg ikke leverer MVA-meldingen i tide?', a: 'Dersom du ikke leverer MVA-meldingen innen fristen, vil Skatteetaten ilegge tvangsmulkt. Mulkten er et fast beløp per dag forsinkelsen varer, og kan bli betydelig over tid. I tillegg kan Skatteetaten fastsette MVA-beløpet ved skjønn dersom du ikke leverer. En regnskapsfører sørger for at alle frister overholdes.' },
  ];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SchemaFAQ items={faqItems} />

      {/* Hero */}
      <section className="hero">
        <h1 className="animate-in animate-in-1">Regnskap Oslo</h1>
        <p className="animate-in animate-in-2">
          Komplett oversikt over {firms.length} regnskapsfirmaer i Oslo, fordelt på {bydeler.length} bydeler.
          Data direkte  — oppdatert, uavhengig og fullstendig.
        </p>
      </section>

      {/* Stats */}
      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} label="Regnskapsfirmaer" />
        <AnimatedStat value={regnskapForere.length} label="Regnskapsførere" />
        <AnimatedStat value={revisorer.length} label="Revisjonsfirmaer" />
        <AnimatedStat value={bydeler.length} label="Bydeler dekket" />
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', margin: '2rem 0' }} className="animate-in animate-in-4">
        <BarChart title="Regnskapsfirmaer per bydel" data={bydelChartData} />
        <DonutChart title="Fordeling etter type" data={donutData} />
      </div>

      <div className="animate-in animate-in-5">
        <TimelineChart title="Stiftelsesår — vekst over tid" data={timelineData} />
      </div>

      {/* Bydeler grid */}
      <section style={{ marginTop: '3rem' }} className="animate-in animate-in-6">
        <h2 className="section-heading">Finn regnskapsfører per bydel</h2>
        <p className="section-sub">
          Regnskapsfirmaer i Oslo er spredt over hele byen. Klikk på en bydel for å se alle firmaer i området.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }} className="stagger-fade">
          {bydeler.map(b => {
            const info = BYDELER_INFO[b.name];
            if (!info) return null;
            return (
              <Link key={b.slug} href={`/regnskapsforer-${info.urlSlug}/`} className="bydel-card">
                <span className="bydel-name">{b.name}</span>
                <span className="bydel-count">{b.count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Service types */}
      <section style={{ marginTop: '3rem' }}>
        <h2 className="section-heading">Typer regnskapstjenester</h2>
        <div className="card-grid">
          {[
            { href: '/regnskapsforer/', title: 'Regnskapsfører Oslo', desc: `${regnskapForere.length} registrerte regnskapsførere med autorisasjon.` },
            { href: '/regnskapskontor/', title: 'Regnskapskontor Oslo', desc: 'Oversikt med adresser og bydel.' },
            { href: '/regnskapsbyra/', title: 'Regnskapsbyrå Oslo', desc: 'Fra bokføring til årsoppgjør og rådgivning.' },
            { href: '/autorisert-regnskapsforer/', title: 'Autorisert regnskapsfører', desc: 'Hva autorisasjon betyr og hvorfor det er viktig.' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="card" style={{ textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--fg-secondary)' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section style={{ marginTop: '3rem' }}>
        <h2 className="section-heading">Guider</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="stagger-fade">
          {[
            { href: '/hva-koster-regnskapsforer-oslo/', label: 'Hva koster regnskapsfører i Oslo?' },
            { href: '/hvordan-velge-regnskapsforer-oslo/', label: 'Hvordan velge regnskapsfører i Oslo' },
            { href: '/beste-regnskapskontor-oslo/', label: 'Beste regnskapskontor i Oslo' },
            { href: '/regnskap-for-enkeltpersonforetak-oslo/', label: 'Regnskap for enkeltpersonforetak i Oslo' },
            { href: '/regnskap-for-as-oslo/', label: 'Regnskap for AS i Oslo' },
            { href: '/hjelp-med-regnskap-oslo/', label: 'Hjelp med regnskap i Oslo' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
              <span>{item.label}</span>
              <span style={{ color: 'var(--accent-warm)' }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content */}
      <section style={{ marginTop: '3rem' }} className="prose">
        <h2>Om regnskap i Oslo</h2>
        <p>
          Oslo er Norges største by og det naturlige senteret for regnskapstjenester i landet.
          Med {firms.length} registrerte regnskapsfirmaer har Oslo et bredt utvalg av tilbydere — fra
          enkeltpersonforetak som spesialiserer seg på bestemte bransjer, til store regnskapsbyråer
          som betjener alt fra oppstartsbedrifter til etablerte konsern med hundrevis av ansatte.
        </p>
        <p>
          De fleste regnskapsfirmaene holder til i Sentrum ({bydeler.find(b => b.name === 'Sentrum')?.count} firmaer)
          og på Frogner ({bydeler.find(b => b.name === 'Frogner')?.count} firmaer), men du finner
          kvalifiserte regnskapsførere i alle bydeler. Østensjø, Grünerløkka og Nordstrand har også
          betydelige konsentrasjoner av regnskapsfirmaer.
        </p>

        <h2>Hva gjør en regnskapsfører i Oslo?</h2>
        <p>
          En regnskapsfører har ansvar for å føre regnskapet til en bedrift i henhold til norsk lov.
          De vanligste tjenestene som regnskapsførere i Oslo tilbyr inkluderer løpende bokføring av
          alle økonomiske transaksjoner, fakturering og innbetalingskontroll, lønnskjøring med
          beregning av skattetrekk, feriepenger og arbeidsgiveravgift, MVA-rapportering annenhver
          måned, utarbeidelse av årsregnskap og skattemelding, samt økonomisk rådgivning.
        </p>
        <p>
          Mange regnskapsførere i Oslo tilbyr også tjenester utover det rent regnskapsfaglige.
          Dette kan inkludere bistand ved oppstart av selskap, rådgivning om selskapsstruktur,
          budsjettering og likviditetsstyring, bistand ved søknader om offentlige tilskudd,
          og rådgivning knyttet til skatt og avgifter. Noen regnskapsbyråer tilbyr også
          controller-tjenester der de fungerer som en ekstern økonomiavdeling for bedriften.
        </p>

        <h2>Regnskapstjenester for ulike selskapsformer</h2>
        <p>
          Behovet for regnskapstjenester varierer betydelig basert på selskapsform.
          <Link href="/regnskap-for-enkeltpersonforetak-oslo/"> Enkeltpersonforetak</Link> har
          bokføringsplikt, men ikke full regnskapsplikt med mindre omsetningen overstiger
          7 millioner kroner. For mange ENK-eiere kan det lønne seg å bruke et enkelt
          regnskapsprogram fremfor å ansette regnskapsfører.
        </p>
        <p>
          <Link href="/regnskap-for-as-oslo/">Aksjeselskaper</Link> har derimot full regnskapsplikt
          og må utarbeide årsregnskap med resultatregnskap, balanse og noter. For de aller fleste
          AS anbefales det å bruke autorisert regnskapsfører. Kravene til rapportering er vesentlig
          strengere, og feil kan få konsekvenser ved bokettersyn fra Skatteetaten.
        </p>
        <p>
          NUF, ANS og andre selskapsformer har egne regler. En erfaren regnskapsfører i Oslo
          kan hjelpe deg med å forstå hvilke krav som gjelder for din virksomhet og sikre at
          du oppfyller alle lovpålagte forpliktelser.
        </p>

        <h2>Hva koster regnskapsfører i Oslo?</h2>
        <p>
          Prisen for regnskapsfører i Oslo varierer basert på bedriftens størrelse, antall
          transaksjoner og hvilke tjenester du trenger. Typiske prisnivåer er 500–1 500 kroner
          per time, eller fastpris fra 1 000 kroner per måned for enkeltpersonforetak til
          15 000 kroner og oppover for aksjeselskaper med ansatte. Les vår
          <Link href="/hva-koster-regnskapsforer-oslo/"> komplette prisguide</Link> for detaljert
          informasjon om hva som påvirker prisen.
        </p>

        <h2>Slik velger du regnskapsfører i Oslo</h2>
        <p>
          Med {firms.length} regnskapsfirmaer å velge mellom kan det være vanskelig å vite
          hvor du skal starte. Det viktigste er å sjekke at regnskapsføreren har gyldig
          <Link href="/autorisert-regnskapsforer/"> autorisasjon fra Finanstilsynet</Link>,
          og at vedkommende har erfaring med din bransje og bedriftsstørrelse. Be om tilbud
          fra minst tre regnskapsførere, og sammenlign både pris, tjenester og tilgjengelighet.
          Les vår <Link href="/hvordan-velge-regnskapsforer-oslo/">guide for valg av regnskapsfører</Link> for
          en komplett sjekkliste.
        </p>

        <h2>Regnskapsbransjen i Oslo</h2>
        <p>
          Regnskapsbransjen i Oslo har gjennomgått store endringer de siste årene. Digitaliseringen
          har ført til at stadig mer av det rutinemessige regnskapsarbeidet automatiseres, noe som
          gjør at regnskapsførere kan bruke mer tid på rådgivning og verdiskapende arbeid.
          Skybaserte regnskapssystemer som Tripletex, Fiken, Visma og PowerOffice har blitt
          standarden, og gjør det mulig for regnskapsfører og kunde å samarbeide i sanntid
          uavhengig av geografisk avstand.
        </p>
        <p>
          Konsolidering er en tydelig trend i bransjen. Flere av de største regnskapsbyråene
          i Oslo har vokst gjennom oppkjøp av mindre kontorer, noe som gir dem bredere
          kompetanse og større kapasitet. Samtidig finnes det fortsatt et stort antall
          spesialiserte enkeltmannskontorer som tilbyr personlig oppfølging og nisjeekspertise.
        </p>
        <p>
          For bedrifter i Oslo betyr dette et bredt spekter av valg — fra store byråer med
          spisskompetanse innen internasjonale skatteregler og konsernregnskap, til små
          kontorer som kjenner din bransje inn og ut og gir deg direkte tilgang til
          regnskapsføreren din.
        </p>

        <h2>Viktige frister for regnskap i Oslo</h2>
        <p>
          Alle næringsdrivende i Oslo må forholde seg til en rekke frister gjennom året.
          MVA-meldingen leveres annenhver måned for MVA-registrerte virksomheter. A-meldingen
          med informasjon om lønn og skattetrekk leveres hver måned for bedrifter med ansatte.
          Skattemeldingen har frist 31. mai for både enkeltpersonforetak og aksjeselskaper.
          Årsregnskapet for aksjeselskaper skal sendes til Regnskapsregisteret innen 31. juli.
          Aksjonærregisteroppgaven har frist 31. januar.
        </p>
        <p>
          En god regnskapsfører sørger for at alle frister overholdes og varsler deg i god
          tid dersom det trengs dokumentasjon eller beslutninger fra din side. Å oversitte
          frister kan føre til tvangsmulkt og i verste fall tilleggsskatt.
        </p>
      </section>

      <FAQAccordion items={faqItems} />

      <InternalLinks />
    </div>
  );
}
