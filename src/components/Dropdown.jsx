import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import '../styles/dropdown.css'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        setIsOpen(!isOpen);
        setLanguage(lang);
    };

    return (
        <div className="dropdown">
           
            <button onClick={toggleDropdown} className="dropdown-button">
                {language.toUpperCase()}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={() => handleLanguageChange('en')}>En</a>
                    <a className="dropdown-item" onClick={() => handleLanguageChange('fr')}>Fr</a>
                </div>
            )}
        </div>
    )
}

export default Dropdown