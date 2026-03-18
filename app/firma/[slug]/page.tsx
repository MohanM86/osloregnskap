import { getAllFirms, getFirmBySlug } from '@/lib/data';
import { Breadcrumb, InternalLinks } from '@/lib/components';
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
  const sameBydel = allFirms.filter(f => f.bydel === firm.bydel && f.orgnr !== firm.orgnr).slice(0, 6);
  const stiftetYear = firm.stiftet ? parseInt(firm.stiftet.substring(0, 4)) : null;
  const yearsActive = stiftetYear ? new Date().getFullYear() - stiftetYear : null;

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'AccountingService',
    name: firm.navn,
    address: { '@type': 'PostalAddress', streetAddress: firm.adresse, postalCode: firm.postnummer, addressLocality: 'Oslo', addressRegion: firm.bydel, addressCountry: 'NO' },
    ...(firm.telefon ? { telephone: firm.telefon } : {}),
    ...(firm.epost ? { email: firm.epost } : {}),
    ...(firm.hjemmeside ? { url: firm.hjemmeside.startsWith('http') ? firm.hjemmeside : `https://${firm.hjemmeside}` } : {}),
    areaServed: { '@type': 'City', name: 'Oslo' },
  };

  const infoRows = [
    ['Organisasjonsnr.', firm.orgnr],
    ['Organisasjonsform', `${firm.orgform} (${firm.orgformKode})`],
    ['Næringskode', `${firm.naeringskode} — ${firm.naeringsbeskrivelse}`],
    stiftetYear ? ['Stiftet', `${firm.stiftet} (${yearsActive} år siden)`] : null,
    ['MVA-registrert', firm.mvaRegistrert ? 'Ja' : 'Nei'],
  ].filter(Boolean) as [string, string][];

  const contactRows = [
    ['Adresse', firm.adresse],
    ['Postnummer', `${firm.postnummer} ${firm.poststed}`],
    ['Bydel', firm.bydel],
    firm.telefon ? ['Telefon', firm.telefon] : null,
    firm.epost ? ['E-post', firm.epost] : null,
    firm.hjemmeside ? ['Nettside', firm.hjemmeside] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[
        { label: 'Hjem', href: '/' },
        { label: 'Firmaer', href: '/firmaer/' },
        { label: firm.navn },
      ]} />

      <section className="hero" style={{ padding: '1.5rem 0 2rem' }}>
        <h1 className="animate-in animate-in-1" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>{firm.navn}</h1>
        <p className="animate-in animate-in-2">Regnskapsfirma i {firm.bydel}, Oslo</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }} className="animate-in animate-in-3">
        <div className="card">
          <h2 style={{ fontSize: '1.05rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Firmainformasjon</h2>
          <table style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
            <tbody>
              {infoRows.map(([label, val]) => (
                <tr key={label}>
                  <td style={{ padding: '0.5rem 0', color: 'var(--fg-muted)', width: '140px', verticalAlign: 'top' }}>{label}</td>
                  <td style={{ padding: '0.5rem 0' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.05rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Kontakt og adresse</h2>
          <table style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
            <tbody>
              {contactRows.map(([label, val]) => (
                <tr key={label}>
                  <td style={{ padding: '0.5rem 0', color: 'var(--fg-muted)', width: '140px', verticalAlign: 'top' }}>{label}</td>
                  <td style={{ padding: '0.5rem 0' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="prose animate-in animate-in-4">
        <h2>Om {firm.navn}</h2>
        <p>
          {firm.navn} er et regnskapsfirma lokalisert i {firm.bydel} i Oslo.
          Firmaet er registrert som {firm.orgform.toLowerCase()} med organisasjonsnummer {firm.orgnr}.
          {stiftetYear && ` Selskapet ble stiftet ${firm.stiftet} og har vært aktivt i ${yearsActive} år.`}
        </p>
        <p>
          Firmaet er registrert under næringskode {firm.naeringskode} ({firm.naeringsbeskrivelse}).
          {firm.mvaRegistrert ? ' Selskapet er registrert i MVA-registeret.' : ''}
          {' '}Forretningsadressen er {firm.adresse}, {firm.postnummer} {firm.poststed}.
        </p>
        <p>
          Data om {firm.navn} er hentet  og er offentlig tilgjengelig informasjon.
        </p>
      </section>

      {sameBydel.length > 0 && (
        <section style={{ marginTop: '2.5rem' }} className="animate-in animate-in-5">
          <h2 className="section-heading" style={{ fontSize: '1.3rem' }}>Andre regnskapsfirmaer i {firm.bydel}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {sameBydel.map(f => (
              <Link key={f.orgnr} href={`/firma/${f.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="firm-card">
                  <div className="firm-name">{f.navn}</div>
                  <div className="firm-meta">{f.adresse}, {f.postnummer} {f.poststed}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <InternalLinks />
    </div>
  );
}
