import { cart } from "../assets/Legodudes"


// Spørsmål til lærer: Hvor økte vi antal items in cart number?


export default function ProductCard({product, setCartCount, setCartContent, cartContent}){

    const handleClick = () => {

        const exist = cartContent.find((item) => item.prodid === product.prodid);
        setCartContent((prev) =>
          exist
            ? prev.map((item) =>
                item.prodid === product.prodid
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...prev, { ...product, quantity: 1 }]
        );
    
        console.log("Denne sjekken skjer i ProductCar:", exist);

        
        /*let found = false

        cartContent.map((element, index) =>{
            if(element.prodid === product.prodid){
                found = true
                element.quantity += 1
            }
        })

        if(found === false){
            cartContent.push({...product, quantity : 1})
        }

        setCartContent(cartContent)
        
        cartContent.forEach(element => {
            console.log(element.title + " " + element.quantity)
        });*/   
    };
        
    



    return(
        <article className="product-card">
            <img src= {`website_images/PROD_${product.imagefile}`} alt={product.title}/>
            <a href="#KATEGORISIDE">{product.category}</a>
            <h3>{product.title}</h3>
            <p>Kr. {product.price},-</p>
            <button onClick={handleClick}>Legg i handlekurv</button>
        </article>
    )
}