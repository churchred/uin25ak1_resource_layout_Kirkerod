
import { useState } from "react"
import CategoryTitle from "./CategoryTitle"
import ProductCard from "./ProductCard"


export default function PageContent({products, setCartCount}){

    const [title, setTtile] = useState("Ninjago")

    return(
        <main>

            <CategoryTitle title={title}/>
    
            <div id="productlist">
            {products.map((product, index) =>
                <ProductCard product={product} setCartCount={setCartCount} key={("FCT_"+index)} />
            )}
            </div>
       
        </main>
    )

}