import type { Metadata } from 'next';

const SITE = 'https://osloregnskap.no';
const SITE_NAME = 'OsloRegnskap.no';
const OG_IMAGE = '/og-image.png';

export function seo({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'nb_NO',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
