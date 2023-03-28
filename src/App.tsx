import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import { ArticleData } from './intefaces/ArticleData'
import {Routes, Route, Navigate} from "react-router-dom";

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);
  const [fetchedArticles, setFetchedArticles] = useState<Array<ArticleData>>([]);
  
  const handleSideMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <div className="app">
      <Header handleSideMenuToggle={handleSideMenuToggle}/>
      
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
