import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { locales, type Locale, getMessages, defaultLocale } from '../../i18n';

export const metadata: Metadata = {
  title: "Wenderson Junior | Personal Site",
  description: "Personal site of Wenderson Junior",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const messagesPromises = locales.reduce((acc, locale) => {
  acc[locale] = getMessages(locale);
  return acc;
}, {} as Record<Locale, Promise<Record<string, unknown>>>);

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: paramLocale } = await params;
  const safeLocale = locales.includes(paramLocale as Locale) ? paramLocale as Locale : defaultLocale;
  const messages = await messagesPromises[safeLocale];
  
  return (
    <NextIntlClientProvider locale={safeLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
