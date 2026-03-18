import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Østensjø Oslo — Finn regnskapsfører i Østensjø',
  description: 'Oversikt over regnskapsførere i Østensjø, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-ostensjo/',
});

export default function RegnskapsforerOstensjoPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Østensjø');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Østensjø')
    .slice(0, 8);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Østensjø Oslo',
    description: `Oversikt over regnskapsførere i Østensjø, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-ostensjo/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Østensjø' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Østensjø Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsfirmaer i Østensjø i Oslo.
        Østensjø er en folkerik bydel øst i Oslo med et voksende næringsliv. Bydelen har flere næringsparker og kontormiljøer der regnskapsfirmaer holder til.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Østensjø</span>
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

        <h2>Regnskapsmarkedet i Østensjø</h2>
        <p>
          Østensjø er en av Oslos største bydeler for regnskapstjenester med {firms.length}
          registrerte firmaer. Bydelen har et aktivt næringsliv med flere næringsparker
          og kontormiljøer. {firms.filter(f => f.naeringskode === "69.202").length} firmaer driver med regnskapsføring, og nesten
          alle ({firms.filter(f => f.mvaRegistrert).length}) er MVA-registrerte, noe som tyder på etablerte og aktive virksomheter.
        </p>

        <h2>Næringslivet i Østensjø</h2>
        <p>
          Østensjø dekker områder som Bøler, Manglerud, Skullerud, Godlia og Oppsal.
          Bydelen har en god miks av bolig og næring, med flere næringsklynger langs
          hovedveiene. Mange småbedrifter, håndverkere og tjenesteytere holder til
          i bydelen og trenger regnskapstjenester tilpasset sine behov.
        </p>
        <p>
          Regnskapsførere i Østensjø betjener typisk lokale bedrifter innen håndverk,
          handel, transport og tjenesteyting. Fordelen med et lokalt regnskapskontor
          er at de kjenner næringslivet i området og ofte har erfaring med nettopp
          den typen bedrifter som dominerer i bydelen.
        </p>

        <h2>Fordeler med lokal regnskapsfører</h2>
        <p>
          Å velge en regnskapsfører i Østensjø gir deg enkel tilgang til fysiske møter
          uten lang reisevei. Lokale regnskapsførere har gjerne lavere kontorkostnader
          enn kontorer i sentrum, noe som kan gi gunstigere priser. Mange bedriftseiere
          verdsetter også den personlige kontakten som et lokalt kontor kan tilby.
        </p>
        <p>
          Med skybaserte regnskapssystemer trenger du riktignok ikke en lokal
          regnskapsfører — det viktigste er kompetanse og kvalitet. Men dersom
          du foretrekker å kunne stikke innom kontoret med bilag eller ha
          ansikt-til-ansikt-møter, er et kontor i Østensjø en praktisk løsning.
        </p>

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Østensjø ({firms.length})
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
            Det er foreløpig ingen regnskapsfirmaer registrert med forretningsadresse i Østensjø.
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
        { q: 'Hvor mange regnskapsfirmaer er det i Østensjø?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Østensjø .` },
        { q: 'Må jeg bruke regnskapsfører i Østensjø?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Østensjø?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Østensjø?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Østensjø .` },
        { q: 'Må jeg bruke regnskapsfører i Østensjø?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Østensjø?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-ostensjo/`} />
    </div>
  );
}
