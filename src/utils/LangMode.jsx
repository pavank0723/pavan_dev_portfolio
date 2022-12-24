import React, { useEffect } from "react"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Bharat from '../assets/bharat.svg'
import './lang.css'
import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";
import translationMA from "./locales/ma/translation.json";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: translationEN
            },
            hi: {
                translation: translationHI
            },
            ma: {
                translation: translationMA
            }

        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

const LangMode = () => {
    let currentLang = localStorage.getItem('lang')

    const [lang, setLang] = React.useState(currentLang === null ? currentLang = 'en' : currentLang)

    const handleOnChange = (e) => {
        setLang(e.target.value)
    }
    const handleOnClick = (l) => {
        return () => {
            i18n.changeLanguage(l)
            
            localStorage.setItem('lang', l)
        }
    }
    useEffect(() => {
        console.log(lang)
        
        i18n.changeLanguage(currentLang)
    }, [lang])
    return (
        <>
            <div className="lang_container">
                <div className="selected_lang">
                    <img className="lang_icon" src={Bharat} alt='bharat' />
                    <span className="lang">{lang.toUpperCase()}</span>
                </div>
                <ul>
                    <li>
                        <input className="ln_radio" type='radio' value='hi' name='lang' onChange={handleOnChange} onClick={handleOnClick('hi')} checked={lang === 'hi'} />हिन्दी - HI
                    </li>
                    <li>
                        <input className="ln_radio" type='radio' value='ma' name='lang' onChange={handleOnChange} onClick={handleOnClick('ma')} checked={lang === 'ma'} />Marathi - MR
                    </li>
                    <div className="divider"></div>
                    <li>
                        <input className="ln_radio" type='radio' value='en' name='lang' onChange={handleOnChange} onClick={handleOnClick('en')} checked={lang === 'en'} />English - EN
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LangMode