import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Sagene Oslo — Finn regnskapsfører i Sagene',
  description: 'Oversikt over regnskapsførere i Sagene, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-sagene/',
});

export default function RegnskapsforerSagenePage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Sagene');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Sagene')
    .slice(0, 8);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Sagene Oslo',
    description: `Oversikt over regnskapsførere i Sagene, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-sagene/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Sagene' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Sagene Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsfirmaer i Sagene i Oslo.
        Sagene er en sentrumsnær bydel nord i Oslo med et voksende næringsliv. Bydelen har blitt populær blant gründere og småbedrifter.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Sagene</span>
        </div>
        <div className="stat-box">
          <span className="num">{firms.filter(f => f.mvaRegistrert).length}</span>
          <span className="label">MVA-registrerte</span>
        </div>
        <div className="stat-box">
          <span className="num">{allFirms.length}</span>
          <span className="label">Totalt i Oslo</span>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }} className="prose">

        <h2>Regnskapsmarkedet i Sagene</h2>
        <p>
          Sagene har {firms.length} registrerte regnskapsfirmaer. Bydelen er en sentrumsnær bydel som har blitt stadig mer populær blant unge bedriftsgründere. Med sin nærhet til sentrum og Grünerløkka tiltrekker bydelen kreative og innovative virksomheter.
          Av firmaene driver {firms.filter(f => f.naeringskode === "69.202").length} med regnskapsføring og bokføring.
          {firms.filter(f => f.mvaRegistrert).length} er MVA-registrerte.
        </p>

        <h2>Næringslivet i Sagene</h2>
        <p>
          Sagene dekker områdene Sagene, Bjølsen, Ila og Iladalen. Regnskapsfirmaene i bydelen betjener
          typisk gründere, frilansere og kreative virksomheter som verdsetter den sentrumsnære beliggenheten. Å velge en lokal regnskapsfører kan gi
          fordeler i form av kortere reisevei til møter, kjennskap til lokale
          næringsforhold og ofte lavere priser enn i sentrum.
        </p>

        <h2>Velge regnskapsfører i Sagene</h2>
        <p>
          Med {firms.length} regnskapsfirmaer i Sagene har du valgmuligheter lokalt.
          Sjekk at regnskapsføreren har <Link href="/autorisert-regnskapsforer/">gyldig
          autorisasjon</Link> og erfaring med din bransje. Dersom du ikke finner
          et passende kontor i Sagene, kan du enkelt samarbeide med en
          regnskapsfører i en annen bydel via skybaserte systemer.
        </p>
        <p>
          <Link href="/hvordan-velge-regnskapsforer-oslo/">Les vår guide for valg av regnskapsfører</Link> eller
          <Link href="/hva-koster-regnskapsforer-oslo/"> se typiske priser</Link>.
        </p>

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Sagene ({firms.length})
        </h2>
        {firms.map(f => <Link href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
              <div className="firm-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div className="firm-name">{f.navn}</div>
                    <div className="firm-meta">Org.nr: {f.orgnr} · {f.orgform}</div>
                  </div>
                  <span className="firm-badge">{f.bydel}</span>
                </div>
                {f.adresse && <div className="firm-detail">{f.adresse}, {f.postnummer} {f.poststed}</div>}
              </div>
            </Link>)}
        {firms.length === 0 && (
          <p style={{ color: 'var(--muted)' }}>
            Det er foreløpig ingen regnskapsfirmaer registrert med forretningsadresse i Sagene.
            <Link href="/firmaer/">Se alle regnskapsfirmaer i Oslo</Link>.
          </p>
        )}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Regnskapsfører i andre bydeler</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
          {otherBydeler.map(([name, info]) => (
            <Link key={info.urlSlug} href={`/regnskapsforer-${info.urlSlug}/`}
              style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', display: 'block' }}>
              Regnskapsfører {info.displayName}
            </Link>
          ))}
        </div>
      </section>

      <SchemaFAQ items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Sagene?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Sagene .` },
        { q: 'Må jeg bruke regnskapsfører i Sagene?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Sagene?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Sagene?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Sagene .` },
        { q: 'Må jeg bruke regnskapsfører i Sagene?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Sagene?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-sagene/`} />
    </div>
  );
}
