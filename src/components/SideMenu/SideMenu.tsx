import './SideMenu.css';
import countriesList from '../../assets/countries-list.json';
import {IoIosCloseCircle as CloseSideMenuCross} from 'react-icons/io';
import { NavLink } from 'react-router-dom';

interface SideMenuProps {
    handleSideMenuToggle: Function,
}

const SideMenu: React.FC<SideMenuProps> = ({handleSideMenuToggle}) => {

    //TODO: Encapsulate this logic into separate component
    const allCountries = countriesList.map(country => {

        const FLAG_STYLE = "SHINY"; // Available FLAT/SHINY
        const FLAG_SIZE = 32; // 16/24/32/48/64 - width in pixels
        const COUNTRY_CODE = country.code;
        const COUNTRY_NAME = country.name;

        return (
            <NavLink
                to={`/country/${COUNTRY_CODE}`} 
                className={({isActive, isPending}) => 
                    isPending ? "country pending" : isActive ? "country active" : "country"
                }
                key={COUNTRY_CODE}
            >
                <img src={`https://www.countryflagicons.com/${FLAG_STYLE}/${FLAG_SIZE}/${COUNTRY_CODE}.png`} alt='country'/>
                <span>{COUNTRY_NAME}</span>
            </NavLink>
        )
    })

    return (
        <section className="side-menu">
            <button 
                className='side-menu__side-menu-close-cross'
                onClick={() => handleSideMenuToggle()} 
            >
                <CloseSideMenuCross />
            </button>
            <div className='side-menu__countries-container'>
                {allCountries}
            </div>
        </section>
    )
}

export default SideMenu;