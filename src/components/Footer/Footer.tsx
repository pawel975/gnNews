import ArticlesCount from "../ArticlesCount/ArticlesCount";
import CurrentTimeViewer from "../CurrentTimeViewer/CurrentTimeViewer";
import "./Footer.css";

interface FooterProps {
    viewedArticlesCount: number;
}

const Footer: React.FC<FooterProps> = ({viewedArticlesCount}) => {
    return (
        <footer className="footer" data-testid="footer">
            <CurrentTimeViewer/>
            <ArticlesCount viewedArticlesCount={viewedArticlesCount}/>
        </footer>
    )
}

export default Footer;