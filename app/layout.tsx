import { RootProvider } from 'fumadocs-ui/provider/next';
import '@/styles/global.css';
import { Comic_Neue } from 'next/font/google';
import { TopNav } from '@/components/layout/TopNav';

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const baseUrl = 'https://gigawallet.dogecoin.org';
const siteTitle = 'GigaWallet - A backend for your Dogecoin Business';
const siteDescription =
  'Dogecoin GigaWallet is a backend service which provides a convenient integration API for platforms such as online shops, exchanges, social media platforms etc, to accept and transact Dogecoin on behalf of their users.';
const ogTitle = 'GigaWallet - A backend for your Dogecoin Business';
const ogDescription =
  'Dogecoin GigaWallet: a backend service and integration API for platforms to accept and transact Dogecoin on behalf of their users.';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'gigawallet',
    'dogecoin',
    'backend',
    'api',
    'payments',
    'invoices',
    'doge connect',
    'integration',
  ],
  authors: [{ name: 'Dogecoin Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'GigaWallet',
    title: ogTitle,
    description: ogDescription,
    url: baseUrl,
    images: [
      {
        url: '/images/gigawallet-icon.png',
        width: 512,
        height: 512,
        alt: ogTitle,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dogecoin',
    creator: '@dogecoin',
    title: ogTitle,
    description: ogDescription,
    images: ['/images/gigawallet-icon.png'],
    imagesAlt: ogTitle,
  },
  icons: {
    icon: '/images/gigawallet-icon.png',
    apple: '/images/gigawallet-icon.png',
  },
};

export const viewport = { themeColor: '#374151' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={comicNeue.className} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: true, options: { type: 'static' } }}>
          <TopNav />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
