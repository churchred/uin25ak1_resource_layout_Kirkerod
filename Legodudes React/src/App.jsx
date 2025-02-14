
// Imports the style of the site
import './styles/style.css';

// Imports a product dictionary from a js file
import { products } from "./assets/Legodudes";

// Import native React components
import { useState } from "react";

// Imports components
import Cart from './components/Cart';
import Header from './components/Header';
import PageContent from './components/PageContent';



function App() {

  const [cartCount, setCartCount] = useState(0)
  const [toggleCart, setToggleCart] = useState(false)
  const [cartContent, setCartContent] = useState([])

  return (

      <div id="content">

        {/* Code for the Shopping Cart */}
        <Cart toggleCart={toggleCart} cartContent={cartContent}/>

        {/* Code for Header*/}
        <Header 
          cartCount={cartCount} 
          setToggleCart={setToggleCart} 
          toggleCart={toggleCart}
        />

        {/* Code for Main body */}
        <PageContent 
            products={products} 
            setCartContent={setCartContent} 
            cartContent={cartContent} 
            setCartCount={setCartCount} 
        /> 


        <footer>
            <p>2025 &copy; Legodudes</p>
        </footer>
    </div>

  )
}

export default App
