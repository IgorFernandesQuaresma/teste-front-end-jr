import './sectionMarcas.css'
import logo from '../../assets/logo.png'


function Marcas () {
    return (
    <section className='container_marcas'>
            <h1 className='container_marcas_titulo'>Navegue por marcas</h1>
        <div className='container_marcas-bloco'>
            <div className='container_marcas-marca'>
                <img src={logo} alt="Logo da vtex" />
            </div>
            <div className='container_marcas-marca'>
                <img src={logo} alt="Logo da vtex" />
            </div>
            <div className='container_marcas-marca'>
                <img src={logo} alt="Logo da vtex" />
            </div>
            <div className='container_marcas-marca'>
                <img src={logo} alt="Logo da vtex" />
            </div>
            <div className='container_marcas-marca'>
                <img src={logo} alt="Logo da vtex" />
            </div>
        </div>
    </section>
    )
}

export default Marcas