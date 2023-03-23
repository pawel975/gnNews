import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import { ArticleData } from './intefaces/ArticleData'

// TODO: Delete when real data will be fetched
import countryNewsPoland from './mocks/countryNewsPoland.json';
import countryNewsUS from './mocks/countryNewsUS.json';

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);
  const [fetchedArticles, setFetchedArticles] = useState<Array<ArticleData>>([]);
  
  const handleSideMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  useEffect( () => {

    // TODO: Switch mocked data to 
    // fetch(`https://newsapi.org/v2/top-headlines?country=pl&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`).then(res => res.json()).then(data => setFetchedArticles(data.articles)) 
    setFetchedArticles(countryNewsUS.articles);
    console.log(fetchedArticles)

  }, [])

  return (
    <div className="app">
      <Header handleSideMenuToggle={handleSideMenuToggle}/>
      <MainContent 
        fetchedArticles={fetchedArticles}
        isSideMenuOpen={isSideMenuOpen}
        handleSideMenuToggle={handleSideMenuToggle}
      />
      <Footer/>
    </div>
  )
}

export default App
