import { useTranslation } from "react-i18next";
import { ArticleData } from "../../intefaces/ArticleData"
import "./Article.css";
import formatDate from "../../helpers/formatDate";

interface ArticleProps {
    articleData: ArticleData,
    viewType: string
    handleArticleClick: Function
}

const Article: React.FC<ArticleProps> = ({articleData, viewType, handleArticleClick}) => {

    const {t} = useTranslation();

    const {author, content, publishedAt, source, title, url, urlToImage} = articleData

    const listTypeArticle = 
        <button 
            className="article list-type"
            aria-label="article"
            onClick={() => handleArticleClick({
                title: title,
                content: content,
                author: author,
                url: url,
                sourceName: source.name
            })}
        >
            <header className="article__header list-type">{title}</header>
            <div className="article__source list-type">{t('article.source')}: <span><strong>{source.name}</strong></span></div>
            <div className="article__publication-date list-type">{t('article.published_at')}: <span><strong>{publishedAt ? formatDate(publishedAt) : t('article.no_published_at_date')}</strong></span></div>
        </button>

    const gridTypeArticle =
        <button 
            className="article grid-type"
            aria-label="article"
            onClick={() => handleArticleClick({
                title: title,
                content: content,
                author: author,
                url: url,
                sourceName: source.name
            })}
        >

            <div className="article__main-content-container">
                {urlToImage && 
                    <div className="article__image-container">
                        <img src={urlToImage} alt="article" />
                    </div>
                }
                <header className="article__header grid-type">{title}</header>
            </div>

            <div className="article__release-details-container">
                <div className="article__source grid-type">{t('article.source')}: <span><strong>{source.name}</strong></span></div>
                <div className="article__publication-date grid-type">{t('article.published_at')}: <span><strong>{publishedAt ? formatDate(publishedAt) : t('article.no_published_at_date')}</strong></span></div>
            </div>

        </button>

    return (
        <>
            {viewType === "list" ? listTypeArticle : gridTypeArticle}
        </>
    )
}

export default Article;