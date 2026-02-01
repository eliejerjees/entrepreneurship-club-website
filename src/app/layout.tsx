import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import { clubInfo } from '@/lib/data';
import './globals.css';

// TODO: Update with real OG image URL
export const metadata: Metadata = {
  title: {
    default: `${clubInfo.name} | ${clubInfo.university}`,
    template: `%s | ${clubInfo.name}`,
  },
  description: `${clubInfo.name} at ${clubInfo.university}. ${clubInfo.tagline}. Join us to learn about startups, meet founders, and build something new.`,
  keywords: ['entrepreneurship', 'startup', 'student club', 'university', 'business', 'innovation'],
  authors: [{ name: clubInfo.name }],
  openGraph: {
    title: `${clubInfo.name} | ${clubInfo.university}`,
    description: `${clubInfo.tagline}. A student organization for aspiring entrepreneurs.`,
    url: 'https://yourclubwebsite.edu', // TODO: Replace with actual URL
    siteName: clubInfo.name,
    locale: 'en_US',
    type: 'website',
    // TODO: Add OG image
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: clubInfo.name,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${clubInfo.name} | ${clubInfo.university}`,
    description: clubInfo.tagline,
    // TODO: Add Twitter image
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
