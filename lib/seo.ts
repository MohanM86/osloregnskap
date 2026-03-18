import type { Metadata } from 'next';

const SITE = 'https://osloregnskap.no';
const SITE_NAME = 'OsloRegnskap.no';

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
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'nb_NO',
      type: 'website',
    },
  };
}
