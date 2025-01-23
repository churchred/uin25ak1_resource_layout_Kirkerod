import CartProduct from "./CartProduct";

export default function Cart(){
    return(
        <section id="cart">
            <h3>Din handlevogn</h3>
            <div id="cart-products">
                <CartProduct/>
            </div>
            <p>Totalt: Kr. <span id="cart-total">99999</span>,-</p>
        </section>
    )
}