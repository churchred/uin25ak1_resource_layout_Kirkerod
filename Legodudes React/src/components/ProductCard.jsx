


export default function ProductCard({product, setCartCount}){

    const handleClick = () => {
        setCartCount(10)
    }

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