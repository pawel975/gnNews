import { useTranslation } from "react-i18next";

interface ArticlesCountProps {
    viewedArticlesCount: number
}

const ArticlesCount: React.FC<ArticlesCountProps> = ({viewedArticlesCount}) => {

    const {t} = useTranslation();

    return (
        <div className="articles-count">
            <div>{t('footer.articlesOnPage')}: <span>{viewedArticlesCount}</span></div>
        </div>
    )
}

export default ArticlesCount;