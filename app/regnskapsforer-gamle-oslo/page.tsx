import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion, AnimatedStat } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Gamle Oslo Oslo — Finn regnskapsfører i Gamle Oslo',
  description: 'Oversikt over regnskapsførere i Gamle Oslo, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-gamle-oslo/',
});

export default function RegnskapsforerGamleosloPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Gamle Oslo');
  const regnskapFirms = firms.filter(f => f.naeringskode === '69.202');
  const revisjonFirms = firms.filter(f => f.naeringskode === '69.201');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Gamle Oslo')
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Gamle Oslo Oslo',
    description: `Oversikt over regnskapsførere i Gamle Oslo, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-gamle-oslo/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Gamle Oslo' },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1">Regnskapsfører Gamle Oslo Oslo</h1>
        <p className="animate-in animate-in-2">
          {firms.length} registrerte regnskapsfirmaer i Gamle Oslo i Oslo.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} colorClass="stat-card-green" label="Firmaer i Gamle Oslo" />
        <AnimatedStat value={regnskapFirms.length} colorClass="stat-card-blue" label="Regnskapsføring" />
        <AnimatedStat value={allFirms.length} colorClass="stat-card-navy" label="Totalt i Oslo" />
      </div>

      {/* Firmakort FØRST */}
      <section style={{ marginTop: '2rem' }} className="animate-in animate-in-4">
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Gamle Oslo ({firms.length})
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
            Ingen regnskapsfirmaer registrert i Gamle Oslo. <Link href="/firmaer/">Se alle i Oslo</Link>.
          </p>
        )}
      </section>

      <hr className="section-divider" />

      {/* Innhold UNDER firmakort */}
      <section style={{ marginTop: '2rem' }} className="prose">

        <h2>Regnskapsmarkedet i Gamle Oslo</h2>
        <p>
          Gamle Oslo har {firms.length} registrerte regnskapsfirmaer. Bydelen er en bydel i rask utvikling øst i sentrum. Bjørvika har tiltrukket store selskaper til Barcode-rekken, mens Grønland og Tøyen har et mangfoldig småbedriftsmiljø.
          Av firmaene driver {firms.filter(f => f.naeringskode === "69.202").length} med regnskapsføring og bokføring.
          {firms.filter(f => f.mvaRegistrert).length} er MVA-registrerte.
        </p>

        <h2>Næringslivet i Gamle Oslo</h2>
        <p>
          Gamle Oslo dekker områdene Grønland, Tøyen, Kampen, Vålerenga og Bjørvika. Regnskapsfirmaene i bydelen betjener
          typisk småbedrifter innen handel, servering og tjenesteyting, samt nyetablerte selskaper som drar nytte av bydelens sentrale beliggenhet. Å velge en lokal regnskapsfører kan gi
          fordeler i form av kortere reisevei til møter, kjennskap til lokale
          næringsforhold og ofte lavere priser enn i sentrum.
        </p>

        <h2>Velge regnskapsfører i Gamle Oslo</h2>
        <p>
          Med {firms.length} regnskapsfirmaer i Gamle Oslo har du valgmuligheter lokalt.
          Sjekk at regnskapsføreren har <Link href="/autorisert-regnskapsforer/">gyldig
          autorisasjon</Link> og erfaring med din bransje. Dersom du ikke finner
          et passende kontor i Gamle Oslo, kan du enkelt samarbeide med en
          regnskapsfører i en annen bydel via skybaserte systemer.
        </p>
        <p>
          <Link href="/hvordan-velge-regnskapsforer-oslo/">Les vår guide for valg av regnskapsfører</Link> eller
          <Link href="/hva-koster-regnskapsforer-oslo/"> se typiske priser</Link>.
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
        { q: 'Hvor mange regnskapsfirmaer er det i Gamle Oslo?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Gamle Oslo .` },
        { q: 'Må jeg bruke regnskapsfører i Gamle Oslo?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Gamle Oslo?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Gamle Oslo?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Gamle Oslo .` },
        { q: 'Må jeg bruke regnskapsfører i Gamle Oslo?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Gamle Oslo?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-gamle-oslo/`} />
    </div>
  );
}
