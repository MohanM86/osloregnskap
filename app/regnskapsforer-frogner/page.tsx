import { getAllFirms, BYDELER_INFO } from '@/lib/data';
import { Breadcrumb, FirmCard, FAQ, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';

export const metadata = seo({
  title: 'Regnskapsfører Frogner Oslo — Finn regnskapsfører i Frogner',
  description: 'Oversikt over regnskapsførere i Frogner, Oslo. Komplett liste med adresser og kontaktinfo. Data fra Brønnøysundregistrene.',
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

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Om Frogner som næringsområde</h2>
        <p style={{ marginBottom: '1rem' }}>
          Frogner i Oslo dekker områdene Bygdøy allé, Frogner plass, Solli plass, Elisenberg og Majorstuen.
          Med {firms.length} regnskapsfirmaer har bydelen et godt utvalg av regnskapstjenester
          for lokale bedrifter og næringsdrivende.
        </p>
        <p>
          Regnskapsfirmaer i Frogner tilbyr typisk tjenester som løpende bokføring,
          fakturering, lønnskjøring, MVA-rapportering, årsoppgjør og skattemelding.
          Mange tilbyr også rådgivning innen økonomi, skatt og selskapsstruktur.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Alle regnskapsfirmaer i Frogner ({firms.length})
        </h2>
        {firms.map(f => <FirmCard key={f.orgnr} firm={f} />)}
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

      <FAQ items={[
        { q: 'Hvor mange regnskapsfirmaer er det i Frogner?', a: `Det er ${firms.length} registrerte regnskapsfirmaer i Frogner ifølge Brønnøysundregistrene.` },
        { q: 'Må jeg bruke regnskapsfører i Frogner?', a: 'Nei, du trenger ikke bruke en regnskapsfører i din egen bydel. Med moderne skybaserte løsninger kan regnskapsføreren jobbe fra hvor som helst. Mange foretrekker likevel en lokal regnskapsfører for enklere kommunikasjon.' },
        { q: 'Hva koster regnskapsfører i Frogner?', a: 'Prisene er omtrent de samme som ellers i Oslo. Typisk 500–1 500 kroner per time, eller 1 000–15 000 kroner per måned avhengig av bedriftsstørrelse og behov.' },
      ]} />

      <InternalLinks exclude={`/regnskapsforer-frogner/`} />
    </div>
  );
}
