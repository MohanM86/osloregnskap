import { getAllFirms, getFirmBySlug } from '@/lib/data';
import { Breadcrumb, FAQ, InternalLinks } from '@/lib/components';
import { seo } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllFirms().map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const firm = getFirmBySlug(slug);
  if (!firm) return {};
  return seo({
    title: `${firm.navn} — Regnskapsfirma i Oslo ${firm.bydel}`,
    description: `${firm.navn} er et regnskapsfirma i ${firm.bydel}, Oslo. Org.nr: ${firm.orgnr}. ${firm.naeringsbeskrivelse}. Adresse: ${firm.adresse}, ${firm.postnummer} ${firm.poststed}.`,
    path: `/firma/${firm.slug}/`,
  });
}

export default async function FirmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const firm = getFirmBySlug(slug);
  if (!firm) notFound();

  const allFirms = getAllFirms();
  const sameBydel = allFirms.filter(f => f.bydel === firm.bydel && f.orgnr !== firm.orgnr).slice(0, 5);
  const stiftetYear = firm.stiftet ? parseInt(firm.stiftet.substring(0, 4)) : null;
  const yearsActive = stiftetYear ? new Date().getFullYear() - stiftetYear : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: firm.navn,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.adresse,
      postalCode: firm.postnummer,
      addressLocality: 'Oslo',
      addressRegion: firm.bydel,
      addressCountry: 'NO',
    },
    ...(firm.telefon ? { telephone: firm.telefon } : {}),
    ...(firm.epost ? { email: firm.epost } : {}),
    ...(firm.hjemmeside ? { url: firm.hjemmeside.startsWith('http') ? firm.hjemmeside : `https://${firm.hjemmeside}` } : {}),
    areaServed: { '@type': 'City', name: 'Oslo' },
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Firmaer', href: '/firmaer/' },
        { label: firm.navn },
      ]} />

      <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{firm.navn}</h1>
      <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
        Regnskapsfirma i {firm.bydel}, Oslo
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid var(--border)', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Firmainformasjon</h2>
          <table style={{ width: '100%', fontSize: '0.9rem' }}>
            <tbody>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)', width: '140px' }}>Organisasjonsnr.</td><td>{firm.orgnr}</td></tr>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Organisasjonsform</td><td>{firm.orgform} ({firm.orgformKode})</td></tr>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Næringskode</td><td>{firm.naeringskode} — {firm.naeringsbeskrivelse}</td></tr>
              {stiftetYear && <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Stiftet</td><td>{firm.stiftet} ({yearsActive} år siden)</td></tr>}
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>MVA-registrert</td><td>{firm.mvaRegistrert ? 'Ja' : 'Nei'}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ border: '1px solid var(--border)', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Kontakt og adresse</h2>
          <table style={{ width: '100%', fontSize: '0.9rem' }}>
            <tbody>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)', width: '140px' }}>Adresse</td><td>{firm.adresse}</td></tr>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Postnummer</td><td>{firm.postnummer} {firm.poststed}</td></tr>
              <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Bydel</td><td>{firm.bydel}</td></tr>
              {firm.telefon && <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Telefon</td><td>{firm.telefon}</td></tr>}
              {firm.epost && <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>E-post</td><td>{firm.epost}</td></tr>}
              {firm.hjemmeside && <tr><td style={{ padding: '0.4rem 0', color: 'var(--muted)' }}>Nettside</td><td>{firm.hjemmeside}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Om {firm.navn}</h2>
        <p style={{ marginBottom: '1rem' }}>
          {firm.navn} er et regnskapsfirma lokalisert i {firm.bydel} i Oslo.
          Firmaet er registrert som {firm.orgform.toLowerCase()} i Brønnøysundregistrene med
          organisasjonsnummer {firm.orgnr}.
          {stiftetYear && ` Selskapet ble stiftet ${firm.stiftet} og har vært aktivt i ${yearsActive} år.`}
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Firmaet er registrert under næringskode {firm.naeringskode} ({firm.naeringsbeskrivelse}).
          {firm.mvaRegistrert ? ' Selskapet er registrert i MVA-registeret.' : ''}
          Forretningsadressen er {firm.adresse}, {firm.postnummer} {firm.poststed}.
        </p>
        <p>
          Data om {firm.navn} er hentet fra Brønnøysundregistrene og er offentlig tilgjengelig informasjon.
          For mer detaljert informasjon om selskapet, se Brønnøysundregistrene eller Proff.no.
        </p>
      </section>

      {sameBydel.length > 0 && (
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Andre regnskapsfirmaer i {firm.bydel}</h2>
          {sameBydel.map(f => (
            <div key={f.orgnr} className="firm-card">
              <h3 style={{ fontSize: '1rem' }}><Link href={`/firma/${f.slug}/`}>{f.navn}</Link></h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{f.adresse}, {f.postnummer} {f.poststed}</p>
            </div>
          ))}
        </section>
      )}

      <InternalLinks />
    </div>
  );
}
