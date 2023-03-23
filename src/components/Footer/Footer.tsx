import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__current-time">
                <div>Time: <span>00:00:00</span></div>
            </div>
            <div className="footer__articles-count">
                <div>Articles on page: <span>0</span></div>
            </div>
        </footer>
    )
}

export default Footer;