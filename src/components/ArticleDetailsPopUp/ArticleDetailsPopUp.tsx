import { ArticleDetails } from "../../App";
import "./ArticleDetailsPopUp.css";

interface ArticleDetailsPopUpProps extends ArticleDetails {
    onClose: Function
}

const ArticleDetailsPopUp: React.FC<ArticleDetailsPopUpProps> = ({title, content, author, url, sourceName, onClose}) => {

    return (
        <div className="article-details-pop-up" onClick={() => onClose()}>
            <section className="article-details-pop-up__modal" onClick={e => e.stopPropagation()}>
                <header className="article-details-pop-up__title">{title}</header>
                <p className="article-details-pop-up__content">{content}</p>
                <div className="article-details-pop-up__sources">
                    <div className="article-details-pop-up__title__author">Author: <strong>{author? author : "No information"}</strong></div>
                    <div className="article-details-pop-up__source-link">Source:<a href={url}> {url}</a> 

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ArticleDetailsPopUp;