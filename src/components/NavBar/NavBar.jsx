import CartWidget from "../CartWidget/cartWidget"



const NavBar = () => {
    return(
        <nav>
            
            <div className="navegador">
                <img src="../logoNuestro/basLogo.jpg" alt="" />
                <h3>NDHserv</h3>
                <button>Home</button>
                <button>Placas</button>
                <button>Motores</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar