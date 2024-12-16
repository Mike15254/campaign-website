'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type Language = {
  code: string;
  name: string;
  flag: string;
  direction?: 'ltr' | 'rtl';
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', direction: 'ltr' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', direction: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', direction: 'ltr' },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  languages: Language[];
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'preferred-language';

function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return languages[0];
  
  // Check localStorage
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const found = languages.find(lang => lang.code === parsed.code);
      if (found) return found;
    }
  } catch (e) {
    console.warn('Error reading from localStorage:', e);
  }

  // Check navigator language
  try {
    const browserLang = navigator.language.split('-')[0];
    const found = languages.find(lang => lang.code === browserLang);
    if (found) return found;
  } catch (e) {
    console.warn('Error getting navigator language:', e);
  }

  return languages[0];
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const initialLang = getBrowserLanguage();
    setCurrentLanguage(initialLang);
    document.documentElement.lang = initialLang.code;
    document.documentElement.dir = initialLang.direction || 'ltr';
    setMounted(true);
    setIsLoading(false);
  }, []);

  const setLanguage = (lang: Language) => {
    setIsLoading(true);
    try {
      setCurrentLanguage(lang);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(lang));
      document.documentElement.lang = lang.code;
      document.documentElement.dir = lang.direction || 'ltr';
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent hydration errors by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        setLanguage, 
        languages,
        isLoading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}