import SideMenu from "../SideMenu/SideMenu";
import './MainContent.css';

interface MainContentProps {
    isSideMenuOpen: boolean,
    handleSideMenuToggle: Function,
}

const MainContent: React.FC<MainContentProps> = ({isSideMenuOpen, handleSideMenuToggle}) => {
    return (
        <main className="main-content">
            {isSideMenuOpen && <SideMenu handleSideMenuToggle={handleSideMenuToggle} />}
        </main>
    )
}

export default MainContent;