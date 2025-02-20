import './App.css'

// Imoport my components
import Layout from './components/layout'
import CategoryPage from './components/category'
import Home from './components/home'

// Import react components
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [games, setGames] = useState();

  const getGames = async()=>{
    fetch('https://zelda.fanapis.com/api/games')
    .then(response => response.json())
    .then(data => setGames(data.data))
    .catch(error => console.error)
  }

  useEffect(()=>{
    getGames();
    console.log("Min State", games)
  }, [])

  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<Home games={games}/>}/>
        <Route path=":slug" element={<CategoryPage />} />
      </Routes>
    </Layout>
  )
}

export default App
