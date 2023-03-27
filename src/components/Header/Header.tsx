import ToggleArticlesViewTypeButton from '../ToggleArticlesViewTypeButton/ToggleArticlesViewTypeButton';
import './Header.css';
import {GiHamburgerMenu as OpenSideMenuIcon} from 'react-icons/gi';

interface HeaderProps {
    handleSideMenuToggle: Function,
}

const Header: React.FC<HeaderProps> = ({handleSideMenuToggle}) => {
    return (
        <header className="header">
            
            <button 
                className='header__open-side-menu-icon'
                onClick={() => handleSideMenuToggle()}
            >
                <OpenSideMenuIcon />
            </button>

            <div className="header__logo-container">
                <a className='header__logo' href='/'>
                    <span>gnNews</span>
                </a>
            </div>

            <ToggleArticlesViewTypeButton/> 

        </header>
    )
}

export default Header;