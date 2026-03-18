import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion, AnimatedStat } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Nordstrand Oslo — Finn regnskapsfører i Nordstrand',
  description: 'Oversikt over regnskapsførere i Nordstrand, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-nordstrand/',
});

export default function RegnskapsforerNordstrandPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Nordstrand');
  const regnskapFirms = firms.filter(f => f.naeringskode === '69.202');
  const revisjonFirms = firms.filter(f => f.naeringskode === '69.201');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Nordstrand')
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Nordstrand Oslo',
    description: `Oversikt over regnskapsførere i Nordstrand, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-nordstrand/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Nordstrand' },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1">Regnskapsfører Nordstrand Oslo</h1>
        <p className="animate-in animate-in-2">
          {firms.length} registrerte regnskapsfirmaer i Nordstrand i Oslo.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} colorClass="stat-card-green" label="Firmaer i Nordstrand" />
        <AnimatedStat value={regnskapFirms.length} colorClass="stat-card-blue" label="Regnskapsføring" />
        <AnimatedStat value={allFirms.length} colorClass="stat-card-navy" label="Totalt i Oslo" />
      </div>

      {/* Firmakort FØRST */}
      <section style={{ marginTop: '2rem' }} className="animate-in animate-in-4">
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Nordstrand ({firms.length})
        </h2>
        <div className="firm-grid stagger-fade">
          {firms.map(f => (
            <Link key={f.orgnr} href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
              <div className="firm-card">
                <div className="firm-name">{f.navn}</div>
                <div className="firm-detail">{f.adresse ? `${f.adresse}, ${f.postnummer} ${f.poststed}` : ''}</div>
                <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  <span className={f.naeringskode === '69.201' ? 'badge-blue' : 'badge-green'}>{f.naeringsbeskrivelse === 'Revisjon' ? 'Revisjon' : 'Regnskap'}</span>
                  {f.stiftet && <span className="firm-badge">Stiftet {f.stiftet.substring(0, 4)}</span>}
                  {f.mvaRegistrert && <span className="badge-amber">MVA</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {firms.length === 0 && (
          <p style={{ color: 'var(--fg-muted)' }}>
            Ingen regnskapsfirmaer registrert i Nordstrand. <Link href="/firmaer/">Se alle i Oslo</Link>.
          </p>
        )}
      </section>

      <hr className="section-divider" />

      {/* Innhold UNDER firmakort */}
      <section style={{ marginTop: '2rem' }} className="prose">

        <h2>Regnskapsmarkedet på Nordstrand</h2>
        <p>
          Nordstrand har {firms.length} registrerte regnskapsfirmaer og er en veletablert
          bydel for regnskapstjenester sør i Oslo. Bydelen har en lang tradisjon
          for lokalt næringsliv med {firms.filter(f => f.naeringskode === "69.202").length} regnskapsførere og {firms.filter(f => f.naeringskode === "69.201").length} revisjonsfirmaer.
          Det eldste firmaet ble stiftet i {Math.min(...firms.map(f => f.stiftet ? parseInt(f.stiftet.substring(0,4)) : 9999))}.
        </p>

        <h2>Lokalt næringsliv på Nordstrand</h2>
        <p>
          Nordstrand dekker områder som Bekkelaget, Lambertseter, Ljan og
          Nordstrandshøgda. Bydelen er primært et rolig boligområde, men har
          et aktivt lokalt næringsliv med håndverkere, tjenesteytere, småbutikker
          og selvstendige konsulenter. Mange beboere driver enkeltpersonforetak
          eller små aksjeselskaper ved siden av eller som hovedvirksomhet.
        </p>
        <p>
          Regnskapsfirmaer på Nordstrand betjener typisk disse lokale bedriftene
          og kjenner forholdene i området godt. Flere av kontorene har vært
          etablert i bydelen i mange år og har bygget opp solid erfaring med
          de bransjene som dominerer lokalt.
        </p>

        <h2>Praktiske hensyn på Nordstrand</h2>
        <p>
          For bedrifter og næringsdrivende på Nordstrand kan det være praktisk
          å bruke et lokalt regnskapskontor. Kort reisevei til fysiske møter,
          kjennskap til lokale forhold og ofte mer personlig service enn hva
          du får hos de store sentrumskontorene. Prisene er gjerne noe lavere
          enn i sentrum og på Frogner.
        </p>
        <p>
          Alternativt kan du bruke en regnskapsfører i en annen bydel og
          samarbeide digitalt. Med skybaserte systemer spiller beliggenhet
          liten praktisk rolle for selve regnskapsarbeidet.
          <Link href="/hva-koster-regnskapsforer-oslo/">Se typiske priser</Link>.
        </p>

      </section>

      {/* Andre bydeler */}
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Regnskapsfører i andre bydeler</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {otherBydeler.map(([name, info]) => (
            <Link key={info.urlSlug} href={`/regnskapsforer-${info.urlSlug}/`}
              className="bydel-card">
              <span className="bydel-name">{info.displayName}</span>
            </Link>
          ))}
        </div>
      </section>

      <SchemaFAQ items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Nordstrand?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Nordstrand .` },
        { q: 'Må jeg bruke regnskapsfører i Nordstrand?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Nordstrand?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Nordstrand?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Nordstrand .` },
        { q: 'Må jeg bruke regnskapsfører i Nordstrand?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Nordstrand?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-nordstrand/`} />
    </div>
  );
}
