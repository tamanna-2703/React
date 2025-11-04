import React from 'react'
import './App.css'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div>
    <div className="parent-card">
      {/* <div className="card">
      <img src="https://images.unsplash.com/photo-1619286188088-de820bdc1230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="tamannaah" />
      <h1>tamannaah</h1>
      <p>i am a software developer working at microsoft</p>
      <button>Follow</button>
      </div> */}

      <Card  user="tamannaah" age={21} />
      <Card user="yug" age={22} />
      <Card user="anu" age={23} />
      <Card user="john" age={24} />
      <Card user="jane" age={25} />
    </div>
    </div>
  )
}

export default App
