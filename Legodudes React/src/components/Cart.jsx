import CartProduct from "./CartProduct";

export default function Cart({toggleCart, cartContent}){

    

    return(
        <section id="cart" className={toggleCart ? "visible" : null}>
            <h3>Din handlevogn</h3>
            <div id="cart-products">
                {cartContent.map((product) => 
                <CartProduct product={product} key={"CPL_"+product.prodid} />)}
                
            </div>
            <p>Totalt: Kr. <span id="cart-total">99999</span>,-</p>
        </section>
    )
}