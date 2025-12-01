import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from './context/user.context.jsx'
import { CategoriesProvider } from './context/categories.context.jsx'
import { CartProvider } from './context/cart.context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>   
    </BrowserRouter> 
  </StrictMode>,
)
