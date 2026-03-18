import type { Metadata } from 'next';
import { Header, Footer } from '@/lib/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'OsloRegnskap.no — Komplett oversikt over regnskapstjenester i Oslo',
  description: 'Finn regnskapsfører, regnskapskontor og regnskapsbyrå i Oslo. Komplett katalog med 386 registrerte regnskapsfirmaer fra Brønnøysundregistrene.',
  metadataBase: new URL('https://osloregnskap.no'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body>
        <Header />
        <main style={{ minHeight: '80vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
