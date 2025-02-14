
import { useState } from "react"
import CategoryTitle from "./CategoryTitle"
import ProductCard from "./ProductCard"


export default function PageContent({products, setCartCount, setCartContent, cartContent}){

    const [title, setTtile] = useState("Ninjago")

    return(
        <main>

            {/* Title for current category */}
            <CategoryTitle title={title}/>

            {/* List of content we are viewing */}
            <div id="productlist">
            {products.map((product, index) =>
                <ProductCard 
                    product={product} 
                    setCartCount={setCartCount} 
                    key={("FCT_"+index)} 
                    setCartContent={setCartContent}
                    cartContent={cartContent}
                />
            )}
            </div>
       
        </main>
    )

}