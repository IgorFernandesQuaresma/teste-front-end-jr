import'./Footer.css'
import facebook from '../../assets/redesocial/023-facebook.svg'
import instagram from '../../assets/redesocial/044-instagram.svg'
import youtube from '../../assets/redesocial/116-youtube.svg'

import visa from '../../assets/cartoes/Group.svg'
import elo from '../../assets/cartoes/elo.svg'
import alelo from '../../assets/cartoes/alelo.svg'
import diner from '../../assets/cartoes/dinners.svg'
import ifood from '../../assets/cartoes/ifood.svg'
import master from '../../assets/cartoes/mastercard.svg'
import pix from '../../assets/cartoes/pix.svg'
import american from '../../assets/cartoes/amex.svg'
import ticket from '../../assets/cartoes/ticket.svg'
import sodexo from '../../assets/cartoes/sodexo.svg'

import logo1 from '../../assets/redeSocialFooter/Group 35.svg'
import logo2 from '../../assets/redeSocialFooter/Grupo 1999.svg'



function Footer () {
    return (
        <footer className='container_footer'>
            <div className='container_footer_primeiroBloco'>

            <div className='container_footer_primeiroBloco-01'>

                <div className='container_footer_primeiroBloco-sobre'>
                    <h1>Sobre nós</h1>
                    <ul>
                        <li>
                            <a href="/">CONHEÇA</a>
                        </li>

                        <li>
                            <a href="/">COMO COMPRAR</a>
                        </li>

                        <li>
                            <a href="/">INDICAÇÃO E DESCONTO</a>
                        </li>
                    </ul>

                    <div className='container_footer_primeiroBloco-sobre-icon'>
                        <img src={facebook} alt="Facebook Logo" />
                        <img src={instagram} alt="Instagram Logo" />
                        <img src={youtube} alt="youtube Logo" />
                    </div>
                </div>

                <div className='container_footer_primeiroBloco-informacoes'>
                    <h1>Informações uteis</h1>
                    <ul>
                        <li>
                            <a href="/">FALE CONOSCO</a>
                        </li>

                        <li>
                            <a href="/">DÚVIDAS</a>
                        </li>

                        <li>
                            <a href="/">PRAZOS DE ENTREGA</a>
                        </li>

                        <li>
                            <a href="/">POLÍTICA DE PRIVACIDADE</a>
                        </li>

                        <li>
                            <a href="/">TROCAS E DEVOLUÇÕES</a>
                        </li>
                    </ul>
                </div>

                <div className='container_footer_primeiroBloco-pagamento'>
                    <h1>Formas de pagamento</h1>
                
                <div className='container_footer_primeiroBloco-pagamento-img'>
            
                        <img src={visa} alt="logo" />
                        <img src={elo} alt="logo" />
                        <img src={alelo} alt="logo" />
                        <img src={diner} alt="logo" />
                        <img src={ifood} alt="logo" />
                        <img src={master} alt="logo" />
                        <img src={pix} alt="logo" />
                        <img src={american} alt="logo" />
                        <img src={ticket} alt="logo" />
                        <img src={sodexo} alt="logo" />
                </div>
            </div>

            </div>

                <div className='container_footer_primeiroBloco-card'>
                    <div className='container_footer-card'>
                        <h2>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span>
                        </h2>
                        <h3>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</h3>
                        
                <div className="container_footer_campo_input">
                    <input className="container_footer_input" type="text" placeholder="SEU E-MAIL" />
                    <div className="footer-icon-container">
                        <h4>OK</h4>
                </div>
                
                </div>



                    </div>
                </div>
            </div>

            <div className='container_footer_segundoBloco'> 
                <div className='container_footer_segundoBloco-textos'>
                    <p className='container_footer_texto'>Copyright © 2019. Todos os direitos reservados. 
                        Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                    </p>
                </div>
                    <div className='container_footer_logorodape'>
                            <div className='container_footer_img'>
                                <img src={logo2} alt="logo" />
                            </div>

                            <div className='container_footer_img'>
                                <img src={logo1} alt="logo" />
                            </div>
                    
                </div>
    </div>

        </footer>
    )
}


export default Footer
