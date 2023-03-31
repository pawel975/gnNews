import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./data/locales/pl.json";
import en from "./data/locales/en.json";

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug: true,
    resources: {
        pl: {translation: pl},
        en: {translation: en},
    },
    fallbackLng: "en"
})

export default i18n;