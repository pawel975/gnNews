import getRandomUUID from "../../helpers/getRandomUUID"
import { ArticleData } from "../../intefaces/ArticleData"
import { useAppSelector } from "../../redux/hooks";
import Article from "../Article/Article"
import './ArticlesContainer.css';

interface ArticlesContainerProps {
    fetchedArticles: Array<ArticleData>
    handleArticleClick: Function
}

const ArticlesContainer: React.FC<ArticlesContainerProps> = ({fetchedArticles, handleArticleClick}) => {

    const viewType = useAppSelector(state => state.articlesViewType.type);

    const allArticles = fetchedArticles.map(articleData => {

        return (
            <Article 
                key={getRandomUUID()} 
                articleData={articleData} 
                viewType={viewType}
                handleArticleClick={handleArticleClick}
            />
        )
    })

    return (
        <section className="articles-container grid-type">
            {allArticles}
        </section>
    )
}

export default ArticlesContainer;