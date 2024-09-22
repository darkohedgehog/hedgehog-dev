import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import { unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider";
import LangSwitch from '@/components/header/LangSwitch';
import HeaderTop from '@/components/header/HeaderTop';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteMetadata from '../utils/siteMetaData';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: siteMetadata.siteUrl, 
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`, // Full URL for social banner
        width: 1200, // Default width for social banners
        height: 630, // Default height for social banners
        alt: siteMetadata.title,
      },
    ],
    locale: siteMetadata.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`], // Full URL for social banner
    site: '@Zivic_Darko',
  },
};

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={`${inter.className} min-h-screen relative`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Gradient kao pozadina */}
            <div className="background-gradient fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></div>
            {/* Sadržaj aplikacije */}
            <div className="relative z-10">
              <LangSwitch />
              <HeaderTop />
              <Nav />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
