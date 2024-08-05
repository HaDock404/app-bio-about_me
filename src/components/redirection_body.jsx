import '../styles/redirection_body.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Redirection_body() {
    const { language } = useContext(LanguageContext);

    const texts = {
        en: 'This website is in Beta and is not fully optimized, thank you for your patience.',
        fr: 'Ce site est en Beta et n’est pas adapté à tous les appareils, merci de votre compréhension.'
    };

    const visits = {
        en: 'Visit',
        fr: 'Visiter'
    };

    const uppercasedLanguage = language.toUpperCase();
    const linkPath = `/Home_${uppercasedLanguage}`;

    return (
        <div id='body'>
            <div className="container">
                <div className="message">
                    {texts[language]}
                </div>
                <Link to={linkPath} className="button">{visits[language]}</Link>
            </div>
        </div>
    )
}

export default Redirection_body