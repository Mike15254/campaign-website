'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { TranslationType } from '@/types/translations';
import en from '@/translations/locales/en';
import sw from '@/translations/locales/sw';
import fr from '@/translations/locales/fr';

const translations: Record<string, TranslationType> = {
  en,
  sw,
  fr,
};

export type TranslationKey = keyof typeof en;

export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[currentLanguage.code];

    for (const key of keys) {
      if (current === undefined) return path;
      current = current[key];
    }

    return current || path;
  };

  return { t };
}
