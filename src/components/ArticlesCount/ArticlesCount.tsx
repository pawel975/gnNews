
interface ArticlesCountProps {
    viewedArticlesCount: number
}

const ArticlesCount: React.FC<ArticlesCountProps> = ({viewedArticlesCount}) => {
    return (
        <div className="articles-count">
            <div>Articles on page: <span>{viewedArticlesCount}</span></div>
        </div>
    )
}

export default ArticlesCount;