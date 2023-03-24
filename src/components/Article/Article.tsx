import { ArticleData } from "../../intefaces/ArticleData"
import "./Article.css";

interface ArticleProps {
    articleData: ArticleData,
    type: string
}

const Article: React.FC<ArticleProps> = ({articleData, type}) => {

    const {author, content, description, publishedAt, source, title, url, urlToImage} = articleData

    const listTypeArticle = 
        <div className="article list-type">
            <header className="article__header list-type">{title}</header>
            <div className="article__source list-type">Source: <span><strong>{source.name}</strong></span></div>
            <div className="article__publication-date list-type">Published at: <span><strong>{publishedAt}</strong></span></div>
        </div>

    const gridTypeArticle =
        <div className="article grid-type">

            <div className="article__main-content-container">
                {urlToImage && 
                    <div className="article__image-container">
                        <img src={urlToImage} alt="article" />
                    </div>
                }
                <header className="article__header grid-type">{title}</header>
            </div>

            <div className="article__release-details-container">
                <div className="article__source grid-type">Source: <span><strong>{source.name}</strong></span></div>
                <div className="article__publication-date grid-type">Published at: <span><strong>{publishedAt}</strong></span></div>
            </div>

        </div>

    return (
        <>
            {type === "list" ? listTypeArticle : gridTypeArticle}
        </>
    )
}

export default Article;