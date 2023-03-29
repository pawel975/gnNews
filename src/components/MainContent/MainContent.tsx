import { ArticleData } from "../../intefaces/ArticleData";
import {useState, useEffect} from "react";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer";
import SideMenu from "../SideMenu/SideMenu";
import './MainContent.css';
import {useParams} from "react-router";

// TODO: Delete when real data will be fetched
import countryNewsUS from '../../assets/mocks/countryNewsUS.json';
import { Oval } from "react-loader-spinner";

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

    const [isFetchError, setIsFetchError] = useState<boolean>(false);
    const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

    useEffect(() => {

        const fetchData = async () => {
            
            try {

                // setFetchedArticles(countryNewsUS.articles);

                // TODO: Switch mocked data to 

                setIsDataLoading(true);
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                
                if (!response.ok) {
                    setIsDataLoading(false);
                    throw new Error (`HTTP error: ${response.status} `)
                }
                
                const data = await response.json();
                
                if (data.totalResults === 0) {
                    setIsDataLoading(false);
                    throw new Error("There no articles for given country code")
                }

                setFetchedArticles(data.articles)
                setIsFetchError(false)
                setIsDataLoading(false);

            } catch (error) {
                setIsDataLoading(false);
                setIsFetchError(true);
                console.error(`Cannot get articles: ${error}`)
            }

        }


        fetchData()
    
      }, [countryCode, setFetchedArticles])

    return (
        <main className="main-content">
            {isSideMenuOpen && <SideMenu handleSideMenuToggle={handleSideMenuToggle} />}
            <div className="main-content__articles-container">
                {
                    isDataLoading ? 
                        <Oval
                            height={80}
                            width={80}
                            color="#4fa94d"
                            wrapperStyle={{margin: "2rem"}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={4}
                            strokeWidthSecondary={4}
                        /> 
                    :
                    isFetchError ? 
                    <h1>Country code doesn't exist</h1>
                    :
                    <ArticlesContainer 
                        fetchedArticles={fetchedArticles}
                        handleArticleClick={handleArticleClick}
                    />
                }
            </div>
                


        </main>
    )
}

export default MainContent;