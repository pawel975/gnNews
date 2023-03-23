import { ArticleData } from "../../intefaces/ArticleData"
import "./Article.css";

interface ArticleProps {
    articleData: ArticleData,
    type: string
}

const Article: React.FC<ArticleProps> = ({articleData, type}) => {

    const {author, content, description, publishedAt, source, title, url, urlToImage} = articleData

    const listTypeArticle = 
    <>
        <header className="article__header">{title}</header>
        <div className="article__source">Source: <span><strong>{source.name}</strong></span></div>
        <div className="article__publication-date">Published at: <span><strong>{publishedAt}</strong></span></div>
    </>

    const gridTypeArticle =
    <>
    </>

    return (
        <div className="article">
            {type === "list" ? listTypeArticle : gridTypeArticle}
        </div>
    )
}

export default Article;