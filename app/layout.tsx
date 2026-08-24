import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import ActionBar from '@/components/ActionBar/ActionBar';
import Footer from '@/components/Footer/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manashi Ray , Author · Scholar · Speaker',
  description:
    'Personal website of Manashi Ray , acclaimed author, scholar, and speaker. Explore her biography, debut memoir, achievements, and speaking engagements.',
  keywords: ['Manashi Ray', 'author', 'scholar', 'speaker', 'memoir', 'biography', 'book'],
  authors: [{ name: 'Manashi Ray' }],
  openGraph: {
    title: 'Manashi Ray , Author · Scholar · Speaker',
    description:
      'Illuminating the human experience through rigorous research, powerful storytelling, and a lifelong commitment to learning.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>
        <ActionBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
