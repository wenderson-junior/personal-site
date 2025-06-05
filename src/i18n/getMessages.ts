import { notFound } from 'next/navigation';
import { locales, Locale } from '../i18n';

export async function getMessages(locale: string) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}
