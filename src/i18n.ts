import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./locales/pl.json";
import en from "./locales/en.json";

const resources = {
    pl: {translation: pl},
    en: {translation: en},
}

console.log(resources)

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug: true,
    resources: resources,
    fallbackLng: "en"
})

export default i18n;