import { ArticleData } from "../../intefaces/ArticleData";
import {useEffect} from "react";
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
}

const MainContent: React.FC<MainContentProps> = ({fetchedArticles, isSideMenuOpen, handleSideMenuToggle, setFetchedArticles}) => {

    const countryCode = useParams().countryCode || "pl";

    console.log(fetchedArticles)

    useEffect(() => {

        // TODO: Switch mocked data to 
        // fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`).then(res => res.json()).then(data => setFetchedArticles(data.articles)) 
        setFetchedArticles(countryNewsUS.articles);
        console.log(countryCode)
    
      }, [countryCode, setFetchedArticles])


    return (
        <main className="main-content">
            {isSideMenuOpen && <SideMenu handleSideMenuToggle={handleSideMenuToggle} />}
            <ArticlesContainer fetchedArticles={fetchedArticles}/>
        </main>
    )
}

export default MainContent;