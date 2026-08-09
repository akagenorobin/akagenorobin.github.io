export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

/** 多言語テキスト。データ層は全てこの形で持つ */
export type L = Record<Locale, string>;

export function t(text: L, locale: Locale): string {
  return text[locale];
}

/** ja はプレフィックスなし、en は /en/ 配下 */
export function localePath(path: string, locale: Locale): string {
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '');
  const base = locale === defaultLocale ? '' : `/${locale}`;
  return clean === '/' ? `${base}/` : `${base}${clean}/`;
}

/** 現在のパスからロケール部分を取り除いて返す */
export function stripLocale(pathname: string): string {
  const withoutLocale = pathname.replace(/^\/(?:en)(?=\/|$)/, '');
  return withoutLocale === '' ? '/' : withoutLocale;
}

export function localeFromPath(pathname: string): Locale {
  return /^\/en(?:\/|$)/.test(pathname) ? 'en' : defaultLocale;
}

/** 同じページの別ロケール版のパス */
export function alternatePath(pathname: string, locale: Locale): string {
  return localePath(stripLocale(pathname), locale);
}

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
};

export const htmlLang: Record<Locale, string> = {
  ja: 'ja',
  en: 'en',
};
