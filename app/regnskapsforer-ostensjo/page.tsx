import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion, AnimatedStat } from '@/lib/client-components';
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
  const regnskapFirms = firms.filter(f => f.naeringskode === '69.202');
  const revisjonFirms = firms.filter(f => f.naeringskode === '69.201');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Østensjø')
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Østensjø Oslo',
    description: `Oversikt over regnskapsførere i Østensjø, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-ostensjo/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Østensjø' },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1">Regnskapsfører Østensjø Oslo</h1>
        <p className="animate-in animate-in-2">
          {firms.length} registrerte regnskapsfirmaer i Østensjø i Oslo.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} colorClass="stat-card-green" label="Firmaer i Østensjø" />
        <AnimatedStat value={regnskapFirms.length} colorClass="stat-card-blue" label="Regnskapsføring" />
        <AnimatedStat value={allFirms.length} colorClass="stat-card-navy" label="Totalt i Oslo" />
      </div>

      {/* Firmakort FØRST */}
      <section style={{ marginTop: '2rem' }} className="animate-in animate-in-4">
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Østensjø ({firms.length})
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
            Ingen regnskapsfirmaer registrert i Østensjø. <Link href="/firmaer/">Se alle i Oslo</Link>.
          </p>
        )}
      </section>

      <hr className="section-divider" />

      {/* Innhold UNDER firmakort */}
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
