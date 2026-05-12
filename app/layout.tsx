import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drsharonlavin.com'),
  title: {
    default: 'Dr. Sharon E. Lavin | Premium Therapy & Counseling',
    template: '%s | Sharon E. Lavin, PSY. D',
  },
  description:
    'Dr. Sharon E. Lavin, PSY. D — Marriage and Family Therapist in Woodland Hills, CA. Compassionate, evidence-based therapy for individuals, couples, and families.',
  keywords: [
    'therapy', 'counseling', 'marriage family therapist', 'psychotherapy',
    'Woodland Hills', 'Sharon Lavin', 'couples therapy', 'child therapy',
    'anxiety', 'depression', 'diabetes counseling', 'chronic illness',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sharon E. Lavin, PSY. D',
    images: [{ url: '/images/drs.jpg', width: 800, height: 800, alt: 'Dr. Sharon E. Lavin' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/drs.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
