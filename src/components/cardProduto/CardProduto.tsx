import Produto from '../../models/Produto'
import './CardProduto.css'
import ModalProduto from './ModalProduto'

interface CardProdutoProps {
    produto: Produto

}


function Card({produto}: CardProdutoProps) {

    
    return (

        <div className="card__produto">
            <img src={produto.photo}
            alt="Alt" />
            <div className="card__produto_textos">
            <p className="descricao">{produto.descriptionShort}</p>
            <p className="valor_antigo">{`R$ ${(produto.price * 0.85 / 2).toFixed(2)}`}</p>
            <p className="preco">{`R$ ${produto.price.toFixed(2)}`}</p>
            <p className="parcelado">{`ou 2x de R$ ${(produto.price / 2).toFixed(2)} sem juros`}</p>
            <h2 className="frete">Frete grátis</h2>
            </div>
            <div className="card__produto_btn">
            <ModalProduto  produto={produto}/>
            </div>
        </div>


    
    )
}

export default Card