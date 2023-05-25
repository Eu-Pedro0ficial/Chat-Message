import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextMessageProvider } from './context/useMessage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextMessageProvider>
      <App />
    </ContextMessageProvider>
  </React.StrictMode>,
)
