import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Navbar from './components/navBar'
import { Route, Routes } from "react-router-dom";
import ArticleList from './components/articleList';

function App() {
  return (
<div>
<div>
      <Header/>
      <Navbar/>
</div>
      <Routes>
      <Route path="/" element={<div className='article-list'><ArticleList /></div>} />
      </Routes>
      </div>
  )
}

export default App
