import React from 'react'
import ReactDOM from 'react-dom/client'
// import 경로가 './App.jsx' 인지 확인합니다.
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)