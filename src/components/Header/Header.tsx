import './Header.css';
import {GiHamburgerMenu as OpenSideMenuIcon} from 'react-icons/gi';

interface HeaderProps {
    handleSideMenuToggle: Function,
}

const Header: React.FC<HeaderProps> = ({handleSideMenuToggle}) => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <button 
                    className='header__open-side-menu-icon'
                    onClick={() => handleSideMenuToggle()}
                >
                    <OpenSideMenuIcon />
                </button>
                <a className='header__logo' href='/'>
                    <span>gnNews</span>
                </a>
            </div>
        </header>
    )
}

export default Header;