import { NavLink } from 'react-router-dom';
import ToggleArticlesViewTypeButton from '../ToggleArticlesViewTypeButton/ToggleArticlesViewTypeButton';
import './Header.css';
import {GiHamburgerMenu as OpenSideMenuIcon} from 'react-icons/gi';

interface HeaderProps {
    handleSideMenuToggle: Function,
    handleConclusionPopUpOpen: Function
    defaultRoute: string
}

const Header: React.FC<HeaderProps> = ({handleSideMenuToggle, handleConclusionPopUpOpen, defaultRoute}) => {
    
    return (
        <header className="header" data-testid="header">
            
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

            <div className='header__actions-container'>
                <button
                    className='header__open-conclusions-button'
                    data-testid="open-conclusions-button"
                    onClick={() => handleConclusionPopUpOpen()}
                >
                    Conclusions
                </button>

                <ToggleArticlesViewTypeButton/> 
            </div>


        </header>
    )
}

export default Header;