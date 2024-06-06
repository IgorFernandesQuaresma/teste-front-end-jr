import Popup from 'reactjs-popup';
import './ModalProduto.css'
import { useState } from 'react';
import Produto from '../../models/Produto';


interface CardProdutoProps {
    produto: Produto

}



function ModalProduto({produto}:CardProdutoProps) {

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    
    return (
        <Popup
            trigger={<button className='button_modal'>Comprar</button>}
            modal
            overlayStyle={{
                background: 'rgba(0, 0, 0, 0.5)', 
            }}
            contentStyle={{
                width: '769px',
                height: '290px',
                padding: '2rem',
                background: 'white'
            }}
        >
            <div className='container_modal'>
                <div className='container_modal-img'>
                <img className='' src={produto.photo} alt="" />
                </div>

                <div className='container_modal-textos'>
                <h1 id='productName'>{produto.productName}</h1>
                <h2>{`R$ ${produto.price.toFixed(2)}`}</h2>/
                <p>{produto.descriptionShort} </p>
                <p>Veja mais sobre o produto </p>

                <div id='contador'>

                <button onClick={handleDecrement}>
                    -
                </button>

                <h1>{count}</h1>

                <button onClick={() => setCount(count + 1)}>
                    +
                </button>

                </div>
                <button className='container_modal-button'>Comprar</button>
                </div>

            </div>
        </Popup>
    );
}

export default ModalProduto;