import { ArticleData } from "../../intefaces/ArticleData";
import {useState, useEffect} from "react";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer";
import SideMenu from "../SideMenu/SideMenu";
import './MainContent.css';
import {useParams} from "react-router";

// TODO: Delete when real data will be fetched
import countryNewsUS from '../../assets/mocks/countryNewsUS.json';

interface MainContentProps {
    fetchedArticles: ArticleData[];
    isSideMenuOpen: boolean
    handleSideMenuToggle: Function
    setFetchedArticles: Function
    handleArticleClick: Function
}

const MainContent: React.FC<MainContentProps> = ({fetchedArticles, isSideMenuOpen, handleSideMenuToggle, setFetchedArticles, handleArticleClick}) => {

    const DEFAULT_COUNTRY = "pl"

    const countryCode = useParams().countryCode || DEFAULT_COUNTRY;

    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {

        const fetchData = async () => {

            
            try {

                // setFetchedArticles(countryNewsUS.articles);

                // TODO: Switch mocked data to 
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                
                if (!response.ok) {
                    throw new Error (`HTTP error: ${response.status} `)
                }
                
                const data = await response.json();
                
                if (data.totalResults === 0) {
                    throw new Error("There no articles for given country code")
                }

                setFetchedArticles(data.articles)
                setIsError(false)

            } catch (error) {

                console.error(`Cannot get articles: ${error}`)
                setIsError(true);
            }

        }


        fetchData()
    
      }, [countryCode, setFetchedArticles])


    return (
        <main className="main-content">
            {isSideMenuOpen && <SideMenu handleSideMenuToggle={handleSideMenuToggle} />}

            {isError ? 
                <h1>Country code doesnt' exist</h1>
                :
                <ArticlesContainer 
                    fetchedArticles={fetchedArticles}
                    handleArticleClick={handleArticleClick}
                />
            }

        </main>
    )
}

export default MainContent;