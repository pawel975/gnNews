import getRandomUUID from "../../helpers/getRandomUUID"
import { ArticleData } from "../../intefaces/ArticleData"
import Article from "../Article/Article"
import './ArticlesContainer.css';

interface ArticlesContainerProps {
    fetchedArticles: Array<ArticleData>
}

const ArticlesContainer: React.FC<ArticlesContainerProps> = ({fetchedArticles}) => {

    const allArticles = fetchedArticles.map(articleData => {

        return (
            <Article key={getRandomUUID()} articleData={articleData} type={"grid"}/>
        )
    })

    return (
        <section className="articles-container grid-type">
            {allArticles}
        </section>
    )
}

export default ArticlesContainer;