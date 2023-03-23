import './SideMenu.css';
import {IoIosCloseCircle as CloseSideMenuCross} from 'react-icons/io';

interface SideMenuProps {
    handleSideMenuToggle: Function,
}

const SideMenu: React.FC<SideMenuProps> = ({handleSideMenuToggle}) => {
    return (
        <section className="side-menu">
            <button 
                className='side-menu__side-menu-close-cross'
                onClick={() => handleSideMenuToggle()} 
            >
                <CloseSideMenuCross />
            </button>
        </section>
    )
}

export default SideMenu;