import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Frogner Oslo — Finn regnskapsfører i Frogner',
  description: 'Oversikt over regnskapsførere i Frogner, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-frogner/',
});

export default function RegnskapsforerFrognerPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Frogner');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Frogner')
    .slice(0, 8);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Frogner Oslo',
    description: `Oversikt over regnskapsførere i Frogner, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-frogner/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Frogner' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Frogner Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsfirmaer i Frogner i Oslo.
        Frogner er en av Oslos mest etablerte bydeler for næringsliv og har mange anerkjente regnskapsfirmaer. Bydelen er kjent for sine kontorlokaler langs Bygdøy allé og i området rundt Frogner plass.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Frogner</span>
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

        <h2>Regnskapsmarkedet på Frogner</h2>
        <p>
          Frogner er Oslos nest største bydel for regnskapstjenester med {firms.length} registrerte
          firmaer. Bydelen har en sterk tradisjon for profesjonelle tjenester og er hjemsted
          for mange veletablerte regnskapsbyråer. {firms.filter(f => f.naeringskode === "69.202").length} av firmaene driver med
          regnskapsføring, mens {firms.filter(f => f.naeringskode === "69.201").length} er revisjonsfirmaer.
        </p>
        <p>
          Regnskapsfirmaene på Frogner har lang fartstid — det eldste ble stiftet i {Math.min(...firms.map(f => f.stiftet ? parseInt(f.stiftet.substring(0,4)) : 9999))}.
          Denne erfaringen gjenspeiles i høy faglig kvalitet og bred kompetanse innen
          krevende regnskapsoppdrag.
        </p>

        <h2>Næringslivet på Frogner</h2>
        <p>
          Frogner er kjent for sine eksklusive handlegater, ambassader og velstående
          boligstrøk. Langs Bygdøy allé, rundt Frogner plass og ved Solli plass
          finner du et konsentrert næringsliv dominert av advokatfirmaer,
          konsulentselskaper, eiendomsmeglere og finansielle rådgivere. Mange
          selvstendige konsulenter og frilansere har også base i bydelen.
        </p>
        <p>
          Regnskapsførere på Frogner betjener ofte kunder med komplekse økonomiske
          forhold — holdingselskaper, eiendomsporteføljer, internasjonale inntekter
          og avanserte selskapsstrukturer. Dersom du har denne typen behov, kan
          et regnskapskontor på Frogner ha relevant spisskompetanse.
        </p>

        <h2>Velge regnskapsfører på Frogner</h2>
        <p>
          Med {firms.length} firmaer å velge mellom har du god valgfrihet på Frogner. Sjekk
          at regnskapsføreren har <Link href="/autorisert-regnskapsforer/">gyldig
          autorisasjon</Link> og erfaring med din type bedrift. Frogner har en god
          miks av store byråer med bred kompetanse og mindre kontorer som gir
          tett personlig oppfølging.
        </p>
        <p>
          Prisene på Frogner er sammenlignbare med sentrum — noe høyere enn
          gjennomsnittet i Oslo, men du får gjerne tilgang til regnskapsførere
          med lang erfaring og spesialistkompetanse.
          <Link href="/hvordan-velge-regnskapsforer-oslo/"> Les vår guide for valg av regnskapsfører</Link>.
        </p>

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Frogner ({firms.length})
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
            Det er foreløpig ingen regnskapsfirmaer registrert med forretningsadresse i Frogner.
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
        { q: 'Hvor mange regnskapsfirmaer er det i Frogner?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Frogner .` },
        { q: 'Må jeg bruke regnskapsfører i Frogner?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Frogner?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Frogner?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Frogner .` },
        { q: 'Må jeg bruke regnskapsfører i Frogner?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Frogner?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-frogner/`} />
    </div>
  );
}
