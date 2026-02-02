"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LANG_STORAGE_KEY = "warehouse-lang";

export type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language | ((prev: Language) => Language)) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLanguageState(getStoredLanguage());
    setMounted(true);
  }, []);

  const setLanguage = useCallback(
    (lang: Language | ((prev: Language) => Language)) => {
      setLanguageState((prev) => {
        const next = typeof lang === "function" ? lang(prev) : lang;
        if (typeof window !== "undefined") {
          localStorage.setItem(LANG_STORAGE_KEY, next);
        }
        return next;
      });
    },
    []
  );

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
  }, [language, mounted]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
