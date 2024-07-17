import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import { unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider";
import LangSwitch from '@/components/header/LangSwitch';
import HeaderTop from '@/components/header/HeaderTop';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Hedgehog Web Developer",
  description: "Izrada web aplikacija",
};

export default async function LocaleLayout({ children, params: { locale } }) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages(locale);

    return (
      <>
        <html lang={locale} suppressHydrationWarning>
          <head />
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
      </>
    );
}
