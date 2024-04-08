import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import './globals.css';

const meta = {
  title: 'Ethereum Dashboards',
  description: 'All of your favorite Ethereum Dashboards in one place.',
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    title: 'ethdash.xyz',
    description: meta.description,
    site: '@mfbevan',
    creator: '@mfbevan',
    card: 'summary_large_image',
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: 'https://ethdash.xyz',
    siteName: 'ethdash.xyz',
    images: [
      {
        url: 'https://ethdash.xyz/eth.dash.png',
        width: 1233,
        height: 1233,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
