import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'

function App() {
const [items, setItems] = useState([])
const [active, setActive] = useState (1)
const [category, setCategory] = useState("general")

useEffect (() => {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6fe3314f135f46fe998897cbba1c8606')
  .then(res => { res.json()})
  .then(data => { setItems(data.articles)})
}, [category])

return (
 <div className='App'>
  <h1 className='title'>see news</h1>
  <Menu active={active} setActive={setActive} setCategory={setCategory}/>
  <NewsGrid items={items}/>
 </div>
)
}

export default App

