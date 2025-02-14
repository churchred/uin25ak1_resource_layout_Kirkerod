
import NavBar from "./Nav"


export default function Header({cartCount, setToggleCart, toggleCart}){


    const handleClick = ()=>{
        setToggleCart(!toggleCart)
        console.log(toggleCart)
    }
    
    return(
        <header>

            {/* Code for the logo in the top left */}
            <a href="index.html" id="logo"><img src="website_images/LD_logo.svg" alt="Legodudes" /></a>

            {/* Code for the shoppingcart icon in top right */}
            <button id="shoppingcart" onClick={handleClick}>
                <span id="cartcount">{cartCount}</span>
                <img src="website_images/legocart.svg" alt="Handlevogn" />
            </button>

            {/* Code for the navigation menu */}
            <NavBar/>
        </header>
    )

}