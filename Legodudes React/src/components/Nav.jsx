import NavItem from "./NavItem"
import { categories } from "../assets/Legodudes"

export default function NavBar(){



    return(
         <nav>
            <ul>
                {categories.map((category) => 
                <NavItem category={category.name} key={"NIC_" + category.id}/>
                )}
            </ul>
        </nav>
    )
}