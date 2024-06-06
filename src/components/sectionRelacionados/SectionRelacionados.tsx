import { useEffect, useState } from 'react'
import Produto from '../../models/Produto'
import Card from '../cardProduto/CardProduto'
import './SectionRelacionados.css'
import produtosData from '../../util/produto.json'


const Relacionados: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        
        setProdutos(produtosData.products);
        console.log('Produtos carregados:', produtosData.products);
    }, []); 

    {/*const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        
        const buscarProdutos = async () => {
            try {
                const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
                setProdutos(response.data);
                console.log('Produtos carregados:', response.data);
            } catch (error) {
                console.log('Erro ao carregar produtos:', error);
    
            }
        };

        buscarProdutos();
    }, []);*/}

    return (
        <section className='container_relacionados'>
            <h1 className='container__relacionados__titulo'>Produtos relacionados</h1>
            <div className='container_relacionados_lista'>
                <ul className = 'container_relacionados_lista-ul'>
                    <li className = 'container_relacionados_lista-li'>
                        <h2>CELULAR</h2>
                    </li>

                    <li className = 'container_relacionados_lista-li'>
                        <h2>ACESSORIOS</h2>
                    </li>

                    <li className = 'container_relacionados_lista-li'>
                        <h2>TABLETS</h2>
                    </li>

                    <li className = 'container_relacionados_lista-li'>
                        <h2>NOTEBOOK</h2>
                    </li>

                    <li className = 'container_relacionados_lista-li'>
                        <h2>TVS</h2>
                    </li>

                    <li className = 'container_relacionados_lista-li'>
                        <h2>VER TODOS</h2>
                    </li>
                </ul>

                <div className='container_relacionados_card'>

                        { produtos.map ((produto)=> (
                                        <>
                                        <Card key={produto.productName} produto ={produto}/>
                                        </>
                        ))}

                </div>

            <div className='container_parceiros'>


                    <div className='container_parceiros-item'>
                        <div className='container_parceiros-item-textos'>
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        </div>
                        <div className='container_parceiros-item-button'>
                            <button id='button_parceiros'>Confira</button>
                        </div>
                    </div>
                

                    <div className='container_parceiros-item'>
                        <div className='container_parceiros-item-textos'>
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        </div>
                        <div className='container_parceiros-item-button'>
                            <button id='button_parceiros'>Confira</button>
                        </div>
                    </div>
                </div>

                <div className='container__relacionados-novaSection'>
                <h1 className='container__relacionados__titulo'>Produtos relacionados</h1>
                <h2 className='container__relacionados__verTudo'>Ver todos</h2>
                </div>

                <div className='container_parceiros2'>


                    <div className='container_parceiros2-item'>
                        <div className='container_parceiros2-item-textos'>
                            <h1>Produtos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        </div>
                        <div className='container_parceiros2-item-button'>
                            <button id='button_parceiros2'>Confira</button>
                        </div>
                    </div>
                

                    <div className='container_parceiros2-item'>
                        <div className='container_parceiros2-item-textos'>
                            <h1>Produtos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        </div>
                        <div className='container_parceiros2-item-button'>
                            <button id='button_parceiros2'>Confira</button>
                        </div>
                    </div>
                </div>
                


            </div>
        </section>
    )
}

export default Relacionados