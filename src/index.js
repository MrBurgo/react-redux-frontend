import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/header/header-container'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
), document.getElementById('root')
)
registerServiceWorker()
