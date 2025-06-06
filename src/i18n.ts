import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export async function getMessages(locale: Locale) {
  try {
    return (await import(`../src/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return (await import(`../src/messages/${defaultLocale}.json`)).default;
  }
}

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: defaultLocale,
      messages: await getMessages(defaultLocale)
    };
  }
  
  return {
    locale: locale as Locale,
    messages: await getMessages(locale as Locale)
  };
});
