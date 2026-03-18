import type { Metadata, Viewport } from 'next';
import { Header, Footer } from '@/lib/components';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#002d30',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://osloregnskap.no'),
  title: {
    default: 'OsloRegnskap.no — Komplett oversikt over regnskapstjenester i Oslo',
    template: '%s | OsloRegnskap.no',
  },
  description: 'Finn regnskapsfører, regnskapskontor og regnskapsbyrå i Oslo. Komplett katalog med 386 registrerte regnskapsfirmaer fordelt på 15 bydeler. ',
  keywords: ['regnskap oslo', 'regnskapsfører oslo', 'regnskapskontor oslo', 'regnskapsbyrå oslo', 'autorisert regnskapsfører oslo', 'bokføring oslo', 'regnskapsfirma oslo'],
  authors: [{ name: 'IT-Firma.no', url: 'https://it-firma.no' }],
  creator: 'IT-Firma.no',
  publisher: 'OsloRegnskap.no',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://osloregnskap.no',
    siteName: 'OsloRegnskap.no',
    title: 'OsloRegnskap.no — Komplett oversikt over regnskapstjenester i Oslo',
    description: 'Finn regnskapsfører i Oslo. 386 regnskapsfirmaer, 15 bydeler, guider og priser. ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'OsloRegnskap.no — 386 regnskapsfirmaer i Oslo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OsloRegnskap.no — Regnskapstjenester i Oslo',
    description: 'Finn regnskapsfører i Oslo. 386 firmaer, 15 bydeler. Komplett katalog ',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://osloregnskap.no',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OsloRegnskap.no',
    url: 'https://osloregnskap.no',
    logo: 'https://osloregnskap.no/icon-512.png',
    description: 'Komplett og uavhengig oversikt over regnskapstjenester i Oslo. Katalog med 386 registrerte regnskapsfirmaer.',
    foundingDate: '2026',
    parentOrganization: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
    areaServed: {
      '@type': 'City',
      name: 'Oslo',
      '@id': 'https://www.wikidata.org/wiki/Q585',
    },
    knowsAbout: ['Regnskap', 'Regnskapsfører', 'Revisjon', 'Bokføring', 'MVA-rapportering', 'Årsoppgjør', 'Skattemelding'],
    sameAs: ['https://it-firma.no'],
  };

  const siteNavSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Hovednavigasjon',
    hasPart: [
      { '@type': 'WebPage', name: 'Regnskapsfører Oslo', url: 'https://osloregnskap.no/regnskapsforer/' },
      { '@type': 'WebPage', name: 'Regnskapskontor Oslo', url: 'https://osloregnskap.no/regnskapskontor/' },
      { '@type': 'WebPage', name: 'Alle regnskapsfirmaer', url: 'https://osloregnskap.no/firmaer/' },
      { '@type': 'WebPage', name: 'Hva koster regnskapsfører?', url: 'https://osloregnskap.no/hva-koster-regnskapsforer-oslo/' },
    ],
  };

  return (
    <html lang="nb">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2K5BDKGPDH" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-2K5BDKGPDH');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }} />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: '80vh', paddingBottom: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
