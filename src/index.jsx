import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App className={style.App}/>
  </React.StrictMode>,
  document.getElementById('root'),
)