import { Layout } from '@/components';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
});

const metadata: Metadata = {
  title: 'Nicole Bunge',
  description:
    'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
  openGraph: {
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    title: 'Nicole Bunge',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: '@BungeNicole',
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    title: 'Nicole Bunge',
  },
};

function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;

  return (
    <html lang="de">
      <body className={sourceSans.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
