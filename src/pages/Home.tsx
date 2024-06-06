import Marcas from '../components/sectionMarcas/sectionMarcas'
import SectionIcones from '../components/sectionIcones/sectionIcones'
import Relacionados from '../components/sectionRelacionados/SectionRelacionados'
import './Home.css'



function Home () {

    
    
    return (
        <>
        <section className="container_banner">
                <div className="container_banner_textos" >
                    <h1>Venha conhecer nossas promoções</h1>
                    <h2>50% Off nos produtos</h2>
                    <button id="button_home">Ver produto</button>
            </div>
        </section>

        <SectionIcones/>
        <Relacionados/>
        <Marcas/>
    
    


        </>
    )
}



export default Home