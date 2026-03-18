import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion, AnimatedStat } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Grünerløkka Oslo — Finn regnskapsfører i Grünerløkka',
  description: 'Oversikt over regnskapsførere i Grünerløkka, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-grunerlokka/',
});

export default function RegnskapsforerGrunerlokkaPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Grünerløkka');
  const regnskapFirms = firms.filter(f => f.naeringskode === '69.202');
  const revisjonFirms = firms.filter(f => f.naeringskode === '69.201');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Grünerløkka')
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Grünerløkka Oslo',
    description: `Oversikt over regnskapsførere i Grünerløkka, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-grunerlokka/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Grünerløkka' },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1">Regnskapsfører Grünerløkka Oslo</h1>
        <p className="animate-in animate-in-2">
          {firms.length} registrerte regnskapsfirmaer i Grünerløkka i Oslo.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} colorClass="stat-card-green" label="Firmaer i Grünerløkka" />
        <AnimatedStat value={regnskapFirms.length} colorClass="stat-card-blue" label="Regnskapsføring" />
        <AnimatedStat value={allFirms.length} colorClass="stat-card-navy" label="Totalt i Oslo" />
      </div>

      {/* Firmakort FØRST */}
      <section style={{ marginTop: '2rem' }} className="animate-in animate-in-4">
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Grünerløkka ({firms.length})
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
            Ingen regnskapsfirmaer registrert i Grünerløkka. <Link href="/firmaer/">Se alle i Oslo</Link>.
          </p>
        )}
      </section>

      <hr className="section-divider" />

      {/* Innhold UNDER firmakort */}
      <section style={{ marginTop: '2rem' }} className="prose">

        <h2>Regnskapsmarkedet på Grünerløkka</h2>
        <p>
          Grünerløkka har {firms.length} registrerte regnskapsfirmaer og er en av bydelene
          med sterkest vekst i regnskapsbransjen. Bydelen har de siste tiårene
          utviklet seg fra et tradisjonelt arbeiderstrøk til et av Oslos mest dynamiske
          områder for gründervirksomhet og kreative næringer. Alle {firms.filter(f => f.mvaRegistrert).length} firmaer er
          MVA-registrerte.
        </p>

        <h2>Gründermiljøet på Grünerløkka</h2>
        <p>
          Grünerløkka er kjent for sitt levende startup-miljø, kreative byråer,
          kaféer, restauranter og butikker. Mange av bedriftene i bydelen er unge
          og vekstorienterte, med behov for regnskapsførere som forstår utfordringene
          til oppstartsbedrifter — fra stiftelse og kapitaltilførsel til skalering
          og potensielle oppkjøp.
        </p>
        <p>
          Regnskapsfirmaene på Grünerløkka har gjerne spesialisert seg på nettopp
          denne typen kunder. De tilbyr fleksible løsninger tilpasset bedrifter i
          rask vekst, og mange har erfaring med teknologiselskaper, e-handel,
          kreative byråer og restaurantdrift.
        </p>

        <h2>Regnskap for oppstartsbedrifter</h2>
        <p>
          For oppstartsbedrifter på Grünerløkka er det spesielt viktig å velge
          en regnskapsfører som forstår vekstselskapers behov. Dette inkluderer
          håndtering av emisjoner og kapitalforhøyelser, opsjonsprogrammer for
          ansatte, offentlige tilskudd som Skattefunn og Innovasjon Norge-støtte,
          og rapportering til investorer.
        </p>
        <p>
          En god regnskapsfører for startups gjør mer enn å føre tall — de
          hjelper deg med å forstå enhetskostnadene dine, holde oversikt over
          burn rate, og levere økonomisk rapportering som investorer forventer.
          <Link href="/regnskap-for-as-oslo/">Les mer om regnskap for AS</Link>.
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
        { q: 'Hvor mange regnskapsfirmaer er det i Grünerløkka?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Grünerløkka .` },
        { q: 'Må jeg bruke regnskapsfører i Grünerløkka?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Grünerløkka?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Grünerløkka?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Grünerløkka .` },
        { q: 'Må jeg bruke regnskapsfører i Grünerløkka?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Grünerløkka?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-grunerlokka/`} />
    </div>
  );
}
