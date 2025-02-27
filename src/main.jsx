import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([{
  path:'/',
  element:<App/>
}])

createRoot(document.getElementById('root')).render(<RouterProvider router={routes}/>)
