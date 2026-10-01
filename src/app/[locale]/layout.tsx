import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/components/portfolio/portfolio.css";
import localFont from "next/font/local";
import { Header, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { baseURL } from "@/app/resources";

const primary = localFont({
  src: "../../../public/fonts/InterVariable.woff2",
  variable: "--font-primary",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`https://${baseURL}`),
  title: {
    default: "John Wakaba — Software Developer",
    template: "%s | John Wakaba",
  },
  description:
    "Software developer in Nairobi building practical business systems, mobile apps, commerce experiences, and data tools.",
  openGraph: {
    title: "John Wakaba — Software Developer",
    description:
      "Useful software, built with care. Explore my latest projects.",
    siteName: "John Wakaba",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og"] },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={primary.variable}
      data-theme="light"
      data-neutral="sand"
      data-brand="moss"
      data-accent="moss"
      data-solid="contrast"
      data-solid-style="flat"
      data-border="conservative"
      data-surface="filled"
      data-transition="micro"
    >
      <body className="portfolio-body">
        <NextIntlClientProvider messages={messages}>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="portfolio-main">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
