import '../styles/redirection_body.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Redirection_body() {
    const { language } = useContext(LanguageContext);

    const texts = {
        en: 'Visit my interactive resume to explore my background and professional skills.',
        fr: 'Visitez mon CV interactif pour découvrir mon parcours et mes compétences professionnelles.'
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