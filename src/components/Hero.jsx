
import hero1 from '../assets/hero1.jpg';
const Hero = () => {
  return (
    <div className='container'>
        <h3 className='text-center py-5'>API de TheCocktailDB</h3>
        <div className='row p-4'>
            <div className='col-md-8 '>
                <h5 className='text-white lead'><b>El API de TheCocktailDB</b> es una fuente de datos abierta y en línea que proporciona información sobre bebidas y cócteles de todo el mundo. Es una API simple en formato JSON que ofrece una base de datos en línea de recetas de cócteles. Puedes acceder a una amplia variedad de información, como el nombre de las bebidas, los ingredientes, las imágenes y más.</h5>
                <h5 className='text-white lead'>El API de TheCocktailDB es utilizado por desarrolladores para crear aplicaciones y sitios web relacionados con cócteles. También es utilizado por universidades para enseñar diseño web y programación debido a su API fácil de usar y su contenido interesante.</h5>
                <ul className='text-white lead'>Algunas características y funcionalidades del API de TheCocktailDB incluyen:


                    <li>Obtener una lista de todas las bebidas disponibles, junto con sus ingredientes y imágenes.</li>
                    <li>Buscar bebidas por nombre, tipo, ingrediente, tipo de vaso, y más.</li>
                    <li>Obtener información detallada sobre una bebida específica utilizando su ID.</li>
                    <li>Buscar una selección de 10 bebidas al azar.</li>
                    <li>Obtener imágenes en miniatura de bebidas y ingredientes.</li>
                    <li>Filtrar bebidas por si son alcohólicas o no alcohólicas.</li></ul>
            </div>
            <div className='col-md-4'>
                <img src={hero1} alt="" className='img-fluid img-thumbnail' />
            </div>
            </div>
    </div>
  )
}

export default Hero