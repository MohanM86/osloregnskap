import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, InternalLinks } from '@/lib/components';
import { FAQAccordion } from '@/lib/client-components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Søndre Nordstrand Oslo — Finn regnskapsfører i Søndre Nordstrand',
  description: 'Oversikt over regnskapsførere i Søndre Nordstrand, Oslo. Komplett liste med adresser og kontaktinfo. Data fra Brønnøysundregistrene.',
  path: '/regnskapsforer-sondre-nordstrand/',
});

export default function RegnskapsforerSondrenordstrandPage() {
  const allFirms = getAllFirms();
  const firms = allFirms.filter(f => f.bydel === 'Søndre Nordstrand');
  const otherBydeler = Object.entries(BYDELER_INFO)
    .filter(([name]) => name !== 'Søndre Nordstrand')
    .slice(0, 8);

  return (
    <div className="container">
      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Regnskapsfører Oslo', href: '/regnskapsforer/' },
        { label: 'Søndre Nordstrand' },
      ]} />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Regnskapsfører Søndre Nordstrand Oslo</h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Det finnes {firms.length} registrerte regnskapsfirmaer i Søndre Nordstrand i Oslo.
        Søndre Nordstrand er Oslos sørligste bydel med et voksende næringsliv. Bydelen har flere regnskapsfirmaer som betjener det lokale næringslivet.
      </p>

      <div className="stat-grid">
        <div className="stat-box">
          <span className="num">{firms.length}</span>
          <span className="label">Regnskapsfirmaer i Søndre Nordstrand</span>
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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Om Søndre Nordstrand som næringsområde</h2>
        <p style={{ marginBottom: '1rem' }}>
          Søndre Nordstrand i Oslo dekker områdene Holmlia, Mortensrud, Bjørndal, Prinsdal og Hauketo.
          Med {firms.length} regnskapsfirmaer har bydelen et godt utvalg av regnskapstjenester
          for lokale bedrifter og næringsdrivende.
        </p>
        <p>
          Regnskapsfirmaer i Søndre Nordstrand tilbyr typisk tjenester som løpende bokføring,
          fakturering, lønnskjøring, MVA-rapportering, årsoppgjør og skattemelding.
          Mange tilbyr også rådgivning innen økonomi, skatt og selskapsstruktur.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Søndre Nordstrand ({firms.length})
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
            Det er foreløpig ingen regnskapsfirmaer registrert med forretningsadresse i Søndre Nordstrand.
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

      <FAQAccordion items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Søndre Nordstrand?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Søndre Nordstrand ifølge Brønnøysundregistrene.` },
        { q: 'Må jeg bruke regnskapsfører i Søndre Nordstrand?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Søndre Nordstrand?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-sondre-nordstrand/`} />
    </div>
  );
}
