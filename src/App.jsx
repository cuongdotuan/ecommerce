import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import Home from './routes/Home'
import Products from './routes/Products'
import ProductDetail from './routes/ProductDetail'
import Cart from './routes/Cart'
import Checkout from './routes/Checkout'
import About from './routes/About'
import CartProvider from './contexts/CartContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },

    ]
  }
])
function App() {

  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  )
}

export default App
