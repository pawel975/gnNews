import "./Footer.css";

interface FooterProps {
    viewedArticlesCount: number;
}

const Footer: React.FC<FooterProps> = ({viewedArticlesCount}) => {
    return (
        <footer className="footer">
            <div className="footer__current-time">
                <div>Time: <span>00:00:00</span></div>
            </div>
            <div className="footer__articles-count">
                <div>Articles on page: <span>{viewedArticlesCount}</span></div>
            </div>
        </footer>
    )
}

export default Footer;