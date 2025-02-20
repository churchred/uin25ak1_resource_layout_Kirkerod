import { Link } from "react-router-dom"

export default function Layout({children}){
    return(
    <>
        <header>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="bosses"> Bosses </Link>
                <Link to="characters"> Characters </Link>
                <Link to="items"> Items </Link>
            </nav>
        </header>
        
        {/* Children betyr at innholdet her kan variere */}
        {children}

        <footer>
            <p>@Zelda API forelesning 2025</p>
        </footer>
    </>
    )
} 