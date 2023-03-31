import { useTranslation } from "react-i18next";
import { ArticleDetails } from "../../App";
import "./ArticleDetailsPopUp.css";

interface ArticleDetailsPopUpProps extends ArticleDetails {}

const ArticleDetailsPopUp: React.FC<ArticleDetailsPopUpProps> = ({title, content, author, url, sourceName}) => {

    const {t} = useTranslation();

    return (
        <>
            <header className="article-details-pop-up__title">{title? title : t('article.no_title')}</header>
            <p className="article-details-pop-up__content">{content? content : t('article.no_content')}</p>
            <div className="article-details-pop-up__sources">
                <div className="article-details-pop-up__title__author">{t('article.author')}: <span>{author? author : "No information"}</span></div>
                <div className="article-details-pop-up__source-link">
                    {t('article.source')}: <span>{sourceName} - </span><a href={url}>{url}</a>
                </div>
            </div>
        </>
    )
}

export default ArticleDetailsPopUp;