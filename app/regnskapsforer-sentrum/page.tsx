import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks, SchemaFAQ } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
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
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Sentrum')
    .slice(0, 8);

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regnskapsfører Sentrum Oslo',
    description: `Oversikt over regnskapsførere i Sentrum, Oslo`,
    url: 'https://osloregnskap.no/regnskapsforer-sentrum/',
    isPartOf: { '@type': 'WebSite', name: 'OsloRegnskap.no', url: 'https://osloregnskap.no' },
    about: { '@type': 'City', name: 'Oslo' },
  }) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Sentrum' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Sentrum Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsfirmaer i Sentrum i Oslo.
        Oslo Sentrum er hjertet av Oslos næringsliv og har den høyeste konsentrasjonen av regnskapsfirmaer i byen. Her finner du alt fra små spesialiserte kontorer til store regnskapsbyråer som betjener kunder i hele Oslo-regionen.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Sentrum</span>
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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Sentrum ({firms.length})
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
            Det er foreløpig ingen regnskapsfirmaer registrert med forretningsadresse i Sentrum.
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
