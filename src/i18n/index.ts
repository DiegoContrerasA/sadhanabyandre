import { es } from './es';
import { en } from './en';

export const DEFAULT_LANG = 'es';

export const LANGS = ['es', 'en'] as const;
export type Lang = typeof LANGS[number];
export type { Translations } from './es';

import type { Translations } from './es';

const dict: Record<Lang, Translations> = {
  es,
  en: en as unknown as Translations,
};

export function getLang(currentLocale?: string): Lang {
  return (LANGS.includes(currentLocale as Lang) ? currentLocale : DEFAULT_LANG) as Lang;
}

export function useTranslations(lang?: Lang) {
  return <K extends keyof Translations>(key: K): Translations[K] => {
    if(!lang) return dict[DEFAULT_LANG][key];
    return dict[lang][key] ?? dict[DEFAULT_LANG][key];
  }

}
