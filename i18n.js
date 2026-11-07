import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Automatically detects browser language
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en', // Use English if the browser language is not supported
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my portfolio",
          description: "I am a software engineer."
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido a mi portafolio",
          description: "Soy ingeniero de software."
        }
      }
    }
  });

export default i18n;