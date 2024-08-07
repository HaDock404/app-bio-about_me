import '../styles/home_logo_about.css'
import { Link, useNavigate } from 'react-router-dom'; //obligatoire avec hashrouter
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Home_logo() {
    const { language } = useContext(LanguageContext);

    const home = {
        en: 'HomePage',
        fr: "Accueil"
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }

    return (
        <Link to="/" id='home_logo_about' onClick={handleHomeClick}>
            &#x2190; {home[language]}
        </Link>
    )
}

export default Home_logo