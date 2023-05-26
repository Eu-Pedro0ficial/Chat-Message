import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextMessageProvider } from './context/useMessage.tsx'
import Router from './routers/router.tsx'
import { UserAuthProvider } from './context/userAuth.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserAuthProvider>
      <ContextMessageProvider>
        <Router/>
      </ContextMessageProvider>
    </UserAuthProvider>
  </React.StrictMode>,
)
