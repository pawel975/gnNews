import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);

  const handleSideMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <div className="app">
      <Header handleSideMenuToggle={handleSideMenuToggle}/>
      <MainContent 
        isSideMenuOpen={isSideMenuOpen}
        handleSideMenuToggle={handleSideMenuToggle}
      />
      <Footer/>
    </div>
  )
}

export default App
