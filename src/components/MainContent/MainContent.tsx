import { ArticleData } from "../../intefaces/ArticleData";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer";
import SideMenu from "../SideMenu/SideMenu";
import './MainContent.css';

interface MainContentProps {
    fetchedArticles: ArticleData[];
    isSideMenuOpen: boolean
    handleSideMenuToggle: Function
}

const MainContent: React.FC<MainContentProps> = ({fetchedArticles, isSideMenuOpen, handleSideMenuToggle}) => {
    return (
        <main className="main-content">
            {isSideMenuOpen && <SideMenu handleSideMenuToggle={handleSideMenuToggle} />}
            <ArticlesContainer fetchedArticles={fetchedArticles}/>
        </main>
    )
}

export default MainContent;