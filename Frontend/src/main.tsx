import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextMessageProvider } from './context/useMessage.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextMessageProvider>
      <RouterProvider router={router} />
    </ContextMessageProvider>
  </React.StrictMode>,
)
