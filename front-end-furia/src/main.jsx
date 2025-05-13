import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Card from './pages/form/card.jsx'
import Login from './pages/login.jsx'
import LoginAlert from './pages/form/loginAlert.jsx'

const router = createBrowserRouter([
  {
    path: '/form',
    element: <App />,
  },
  {
    path: '/Card',
    element: <Card />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <LoginAlert />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
;('')
