
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

  return (

      <div id="content">
        {/* Code for the Shopping Cart */}
        <Cart/>

        {/* Code for Header*/}
        <Header cartCount={cartCount}/>

        {/* Code for Main body */}
        <PageContent products={products} setCartCount={setCartCount}/> 


        <footer>
            <p>2025 &copy; Legodudes</p>
        </footer>
    </div>

  )
}

export default App
