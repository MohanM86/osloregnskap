import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion, AnimatedStat } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Sentrum Oslo — Finn regnskapsfører i Sentrum',
  description: 'Oversikt over regnskapsførere i Sentrum, Oslo. Komplett liste med adresser og bydelsinformasjon. ',
  path: '/regnskapsforer-sentrum/',
});

export default function RegnskapsforerSentrumPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Sentrum');
  const regnskapFirms = firms.filter(f => f.naeringskode === '69.202');
  const revisjonFirms = firms.filter(f => f.naeringskode === '69.201');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Sentrum')
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Sentrum Oslo',
    description: `Oversikt over regnskapsførere i Sentrum, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-sentrum/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Sentrum' },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1">Regnskapsfører Sentrum Oslo</h1>
        <p className="animate-in animate-in-2">
          {firms.length} registrerte regnskapsfirmaer i Sentrum i Oslo.
        </p>
      </section>

      <div className="stats-row animate-in animate-in-3">
        <AnimatedStat value={firms.length} colorClass="stat-card-green" label="Firmaer i Sentrum" />
        <AnimatedStat value={regnskapFirms.length} colorClass="stat-card-blue" label="Regnskapsføring" />
        <AnimatedStat value={allFirms.length} colorClass="stat-card-navy" label="Totalt i Oslo" />
      </div>

      {/* Firmakort FØRST */}
      <section style={{ marginTop: '2rem' }} className="animate-in animate-in-4">
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Sentrum ({firms.length})
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
            Ingen regnskapsfirmaer registrert i Sentrum. <Link href="/firmaer/">Se alle i Oslo</Link>.
          </p>
        )}
      </section>

      <hr className="section-divider" />

      {/* Innhold UNDER firmakort */}
      <section style={{ marginTop: '2rem' }} className="prose">

        <h2>Regnskapsmarkedet i Oslo sentrum</h2>
        <p>
          Oslo sentrum er det absolutte tyngdepunktet for regnskapstjenester i hovedstaden.
          Med {firms.length} registrerte regnskapsfirmaer har sentrum den klart høyeste konsentrasjonen
          i byen — nesten tre ganger så mange som nest største bydel. Her finner du alt fra
          internasjonale revisjonsselskaper med hundrevis av ansatte til spesialiserte
          enkeltmannskontorer som betjener nisjebransjer.
        </p>
        <p>
          Av firmaene i sentrum driver {firms.filter(f => f.naeringskode === "69.202").length} med regnskapsføring og bokføring, mens
          {firms.filter(f => f.naeringskode === "69.201").length} er revisjonsfirmaer. Det eldste firmaet ble stiftet i {Math.min(...firms.map(f => f.stiftet ? parseInt(f.stiftet.substring(0,4)) : 9999))}, mens
          det nyeste kom til i {Math.max(...firms.map(f => f.stiftet ? parseInt(f.stiftet.substring(0,4)) : 0))}. Denne blandingen av erfarne og nye aktører gir
          et dynamisk marked med god konkurranse på pris og kvalitet.
        </p>

        <h2>Næringslivet i Oslo sentrum</h2>
        <p>
          Sentrum huser hovedkontorene til mange av Norges største selskaper innen finans,
          teknologi, media og konsulentvirksomhet. Aker Brygge og Vika er tunge finansklynger
          der banker, meglerhus og investeringsselskaper holder til. Bjørvika har utviklet seg
          til et teknologi- og innovasjonssenter med Barcode-rekken som adresse for flere
          store konsern. Karl Johans gate og områdene rundt er sentrum for handel, servering
          og kultur.
        </p>
        <p>
          Denne bredden i næringslivet gjenspeiles i regnskapstilbudet. Du finner
          regnskapsførere som spesialiserer seg på finans og verdipapirer, IT-selskaper
          med komplekse internasjonale strukturer, restaurant og uteliv med sine særegne
          regnskapsutfordringer, og handelsvirksomheter med høyt transaksjonsvolum.
        </p>

        <h2>Fordeler med regnskapsfører i sentrum</h2>
        <p>
          Den største fordelen med å velge regnskapsfører i sentrum er tilgangen til
          bred kompetanse. Sentralt beliggende kontorer tiltrekker seg ofte de mest
          erfarne regnskapsførerne, og mange har spesialistkompetanse innen krevende
          områder som internasjonal skatt, konsernregnskap og transaksjonsrådgivning.
        </p>
        <p>
          For bedrifter som verdsetter fysiske møter er sentrum lett tilgjengelig med
          kollektivtransport fra alle deler av Oslo. Mange regnskapskontorer ligger i
          gangavstand fra T-banestasjoner og bussholdeplasser.
        </p>
        <p>
          Ulempen kan være at kontorleie i sentrum er dyrt, noe som kan gjenspeiles i
          høyere timepriser. For bedrifter som primært kommuniserer digitalt kan et
          kontor i en annen bydel gi like god kvalitet til lavere pris.
        </p>

        <h2>Typiske priser i sentrum</h2>
        <p>
          Regnskapsførere i sentrum har gjennomsnittlig noe høyere priser enn i
          ytterbydelene, typisk 600–1 500 kroner per time. Fastpriser for
          enkeltpersonforetak starter fra rundt 1 500 kroner per måned, mens
          aksjeselskaper med ansatte betaler fra 5 000 kroner og oppover.
          De største byråene i sentrum betjener primært mellomstore og store
          bedrifter med priser deretter.
        </p>
        <p>
          <Link href="/hva-koster-regnskapsforer-oslo/">Les mer om priser for regnskapsfører i Oslo</Link>.
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
        { q: 'Hvor mange regnskapsfirmaer er det i Sentrum?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Sentrum .` },
        { q: 'Må jeg bruke regnskapsfører i Sentrum?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Sentrum?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />
      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Sentrum?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Sentrum .` },
        { q: 'Må jeg bruke regnskapsfører i Sentrum?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Sentrum?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-sentrum/`} />
    </div>
  );
}
