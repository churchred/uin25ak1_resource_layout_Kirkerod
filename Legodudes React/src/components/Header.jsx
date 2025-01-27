
import NavBar from "./Nav"


export default function Header({cartCount}){

    
    return(
        <header>
            <a href="index.html" id="logo"><img src="website_images/LD_logo.svg" alt="Legodudes" /></a>
            <button id="shoppingcart">
                <span id="cartcount">{cartCount}</span>
                <img src="website_images/legocart.svg" alt="Handlevogn" />
            </button>
            <NavBar/>
        </header>
    )

}