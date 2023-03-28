import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import { ArticleData } from './intefaces/ArticleData'
import {Routes, Route, Navigate} from "react-router-dom";
import ArticleDetailsPopUp from './components/ArticleDetailsPopUp/ArticleDetailsPopUp'
import PopUpContainer from './components/PopUpContainer/PopUpContainer'
import Conclusions from './components/Conclusions/Conclusions'

export interface ArticleDetails {
  title: string | null
  content: string | null
  author: string | null
  url: string | undefined
  sourceName: string
}

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);
  const [fetchedArticles, setFetchedArticles] = useState<Array<ArticleData>>([]);

  const [isArticleDetailsPopUpActive, setIsArticleDetailsPupUpActive] = useState<boolean>(false);
  const [isConclusionsPopUpActive, setIsConclusionsPopUpActive] = useState<boolean>(false);

  const [articleDetails, setArticleDetails] = useState<ArticleDetails>(
    {
      title: "", 
      content: "", 
      author: "", 
      url: "",
      sourceName: "",
    }
  );
  
  const handleSideMenuToggle = (): void => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  const handleArticleDetailsPopUpClose = (): void => {
    setIsArticleDetailsPupUpActive(false);
  }

  const handleArticleDetailsPopUpOpen = (): void => {
    setIsArticleDetailsPupUpActive(true);
  }

  const handleConclusionPopUpClose = (): void => {
    setIsConclusionsPopUpActive(false);
  }

  const handleConclusionPopUpOpen = (): void => {
    setIsConclusionsPopUpActive(true);
  }

  const handleArticleClick = (articleDetails: ArticleDetails): void => {
    setIsArticleDetailsPupUpActive(!isArticleDetailsPopUpActive);
    setArticleDetails(articleDetails);
  }

  return (
    <div className="app">
      
      {isArticleDetailsPopUpActive && 
        <PopUpContainer 
          PopUpContent={
            <ArticleDetailsPopUp 
              title={articleDetails.title}
              content={articleDetails.content}
              author={articleDetails.author}
              url={articleDetails.url}
              sourceName={articleDetails.sourceName}
            />
          }
          onClose={handleArticleDetailsPopUpClose}
        />
      } 

      {isConclusionsPopUpActive &&
        <PopUpContainer
          PopUpContent={
            <Conclusions/>
          }
          onClose={handleConclusionPopUpClose}
        />
      }

      <Header 
        handleSideMenuToggle={handleSideMenuToggle}
        handleConclusionPopUpOpen={handleConclusionPopUpOpen}
      />

      <Routes>
        <Route
          index
          path='/'
          element={<Navigate to="/country/pl"/>}
        />

        <Route
          path={`/country/:countryCode`}
          element={
            <MainContent 
              fetchedArticles={fetchedArticles}
              isSideMenuOpen={isSideMenuOpen}
              handleSideMenuToggle={handleSideMenuToggle}
              setFetchedArticles={setFetchedArticles}
              handleArticleClick={handleArticleClick}
            />
          }
        />

        <Route
          path='*'
          element={<p>404 NOT FOUND</p>}
        />

      </Routes>

      <Footer viewedArticlesCount={fetchedArticles.length}/>
    </div>
  )
}

export default App
