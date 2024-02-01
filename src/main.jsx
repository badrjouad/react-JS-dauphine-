import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Counter.jsx'
import FizzBuzz from './FuzzBuzz.jsx'
import AnagramChecker from './AnagramChecker.jsx'
import SeriesList from './SeriesList.jsx'
import CountDown from './CountDown.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CountDown/>
    
  </React.StrictMode>,
)
