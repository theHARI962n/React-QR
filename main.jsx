import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import { QrCode } from './QrCode'
// import App from './App.jsx'
//import './index.css'
// import './QrCode.css'
// import { AdiviceApp } from './formSamples/AdiviceApp'
  // import { QrCode } from './QrCode'
// import { UserCard } from './UserCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> 
    <UserCard/>*/}
   {/* <QrCode /> */}
    {/* <AdiviceApp /> */}
     <WeatherApp /> 
  </React.StrictMode>,
)
