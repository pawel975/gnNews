import { NavLink } from 'react-router-dom';
import {useState, useEffect} from "react";
import ToggleArticlesViewTypeButton from '../ToggleArticlesViewTypeButton/ToggleArticlesViewTypeButton';
import './Header.css';
import {GiHamburgerMenu as OpenSideMenuIcon} from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
    handleSideMenuToggle: Function,
    handleConclusionPopUpOpen: Function
    defaultRoute: string
}

const Header: React.FC<HeaderProps> = ({handleSideMenuToggle, handleConclusionPopUpOpen, defaultRoute}) => {
    
    const {t, i18n} = useTranslation();
    
    const DEFAULT_LANGUAGE = i18n.language.toUpperCase();

    const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);


    const handleLanguageChange = () :void => {
        const updatedLanguage = language === "PL" ? "EN" : "PL";
        setLanguage(updatedLanguage)
        i18n.changeLanguage(updatedLanguage.toLowerCase());
    }

    return (
        <header className="header" data-testid="header">
            
            <div style={{display:"flex", justifyContent: "flex-start"}}>
                <button 
                    className='header__open-side-menu-icon'
                    data-testid="open-side-menu-icon"
                    onClick={() => handleSideMenuToggle()}
                >
                    <OpenSideMenuIcon />
                </button>

                <div className="header__logo-container">
                    <NavLink className='header__logo' to={defaultRoute}>
                        <span>gnNews</span>
                    </NavLink>
                </div>
            </div>

            <div className='header__actions-container'>
                <button
                    className='header__open-conclusions-button'
                    data-testid="open-conclusions-button"
                    onClick={() => handleConclusionPopUpOpen()}
                >
                    {t(`header.conclusions`)}
                </button>

                <ToggleArticlesViewTypeButton/> 

                <button
                    className='header__switch-language'
                    onClick={() => handleLanguageChange()}
                >
                    {language}
                </button>
            </div>


        </header>
    )
}

export default Header;