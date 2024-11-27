import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import router from './router/Route.jsx'
import MainLayout from './Pages/MainLayout.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}>

 </RouterProvider>
  </StrictMode>
)
