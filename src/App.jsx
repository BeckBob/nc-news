import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Navbar from './components/navBar'
import { Route, Routes } from "react-router-dom";
import ArticleList from './components/articleList';
import SingleArticle from './components/pages/singleArticle';

function App() {
  return (
<div>
<div>
      <Header/>
      <Navbar/>
</div>
      <Routes>
      <Route path="/" element={<div className='article-list'><ArticleList /></div>} />
      <Route path="/articles/:article_id" element={<SingleArticle/>} />
      </Routes>
      </div>
  )
}

export default App
