import '../styles/header.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

import Worldicon from './Wordicon.jsx'
import Dropdown from './Dropdown.jsx';

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Header() {
    const { language } = useContext(LanguageContext);

    const home = {
        en: 'HomePage',
        fr: "Accueil"
    };

    const abouts = {
        en: 'About',
        fr: 'A propos'
    }

    return (
        <header>
            <nav className='header_nav'>
                <Link to="/" className='home_logo'>
                    {home[language]}
                </Link>
                <ul className='ul_nav'>
                    <li className='underline-on-hover'>Blog</li>
                    <li className='underline-on-hover'>{abouts[language]}</li>
                    <li className='underline-on-hover'>Contact</li>
                    <div className='lang-menu'>
                        <Worldicon />
                        <Dropdown />
                </div>
                </ul>
            </nav>

        </header>
    )
}

export default Header