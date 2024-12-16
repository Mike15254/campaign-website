// src/hooks/useTranslation.ts
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/translations/locales/en';
import sw from '@/translations/locales/sw';
import fr from '@/translations/locales/fr';

const translations = {
  en,
  sw,
  fr,
};

export type TranslationKey = keyof typeof en;

export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (key: string, params: Record<string, string> = {}) => {
    // Get the translation based on current language
    const translatedText = key.split('.').reduce((obj, k) => obj?.[k], translations[currentLanguage.code as keyof typeof translations]) || key;

    // Replace any parameters in the translation
    return Object.entries(params).reduce(
      (text, [param, value]) => text.replace(`{{${param}}}`, value),
      translatedText as string
    );
  };

  return { t };
}

// src/lib/translation-utils.ts
export function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Type definitions for our translations
// src/types/translations.d.ts
declare module '@/translations/*' {
  const content: {
    [key: string]: any;
  };
  export default content;
}