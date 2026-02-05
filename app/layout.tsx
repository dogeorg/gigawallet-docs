import { RootProvider } from 'fumadocs-ui/provider/next';
import '@/styles/global.css';
import { TopNav } from '@/components/layout/TopNav';

const baseUrl = 'https://gigawallet.dogecoin.org';
const siteTitle = 'GigaWallet - A backend for your Dogecoin Business';
const siteDescription =
  'Dogecoin GigaWallet is a backend service which provides a convenient integration API for platforms such as online shops, exchanges, social media platforms etc, to accept and transact Dogecoin on behalf of their users.';

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
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: true, options: { type: 'static' } }}>
          <TopNav />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
