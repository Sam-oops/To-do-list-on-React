import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json'
import ru from './translations/ru.json';

const language = localStorage.getItem('lang')

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru }
        },
        lng: language,
        fallbacklng: "eng"
    })

export default i18n