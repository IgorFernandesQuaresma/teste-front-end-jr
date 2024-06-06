import { BoxArrowUp, CreditCard, CrownSimple, Heart, MagnifyingGlass, ShieldCheck, ShoppingCart, Truck, UserCircle } from "@phosphor-icons/react"
import './NavBar.css'


function NavBar () {
    return (
        <nav className="container_nav">
            <div className="container_nav-icon-top">
                    <div className="container_nav-icon-top-icon">
                    <h1>Compra <span className="container_nav-icon-top-icon_texto">100% Segura</span></h1>
                    <ShieldCheck size={20} />
                    </div>

                    <div className="container_nav-icon-top-icon">
                    <h1><span className="container_nav-icon-top-icon_texto">Frete grátis </span>acima de R$200</h1>
                    <Truck size={20} />
                    </div>

                    <div className="container_nav-icon-top-icon">
                    <h1><span className="container_nav-icon-top-icon_texto">Parcele </span>suas compras</h1>
                    <CreditCard size={20} />
                    </div>
            </div>

            <div className="container_nav-middle">
                <div className="container_nav-middle-img">
                <img className="container_nav-middle-logo" src="/logoVtex.png" alt="Logo Vtex" />
                </div>       
                
                <div className="container_nav-middle-campo_input">
                    <input className="container_nav-middle_input" type="text" placeholder="O que você está buscando?" />
                    <div className="icon-container">
                        <MagnifyingGlass size={28} className="search-icon" />
                    </div>
                </div>

                    <div className="container_nav-middle-campo_icon">
                        
                        <div className="container_nav-middle-campo_icon-icone">
                        <BoxArrowUp size={24} />
                        </div>

                        <div className="container_nav-middle-campo_icon-icone">
                        <Heart size={24} />
                        </div>

                        <div className="container_nav-middle-campo_icon-icone">
                        <UserCircle size={24} />
                        </div>

                        <div className="container_nav-middle-campo_icon-icone">
                        <ShoppingCart size={24} />
                        </div>

                    </div>

                
            </div>

            <div className="container_nav-bottom">
                <div className="container_navigate">
                    <ul className="container_nav_navigate">
                        <li className="container_nav_navigate_li">
                        <a href="#">
                                Todas Categorias
                        </a>
                            </li>
                            <li>
                                <a href="#">
                                    Supermercado
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Livro
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Moda
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Lançamento
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Oferta do dia
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <CrownSimple size={20} />
                                    Assinatura
                                </a>
                            </li>
                    </ul>
                    
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar