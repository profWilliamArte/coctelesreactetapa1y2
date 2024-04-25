import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fondo from '../assets/bg_4.jpg';
const API="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const Detalle = () => {
    const [datos, setDatos] = useState([]);
    const params = useParams()
    const id=params.id;
    const getDatos = async () =>{
        let URI=API+id;
        try {
          const response = await fetch(URI);
          const data = await response.json();
          setDatos(data.drinks[0]);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (
    <main>
        <div className="fondoDetalle" >
            <h3 className="text-center py-4">Detalle del Cóctel</h3>
            <div className="container">
                <div className="row"> 
                    <div className="col-md-5 ">
                        <img src={datos.strDrinkThumb} alt={datos.strDrinkThumb} className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-7">
                        <h3>{datos.strDrink}</h3>
                        <p>
                            Código: {id}<br/>
                            Tipo: {datos.strAlcoholic}<br/>
                            Categoria: {datos.strCategory}<br/>
                            Servir: {datos.strGlass}<br/> 
                        </p>
                        <div>
                            <b>Ingredientes</b><br/>
                            {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => (
                            datos[`strIngredient${index}`] && (
                                <div key={index}>
                                    {datos[`strIngredient${index}`]} {datos[`strMeasure${index}`]}
                                </div>
                            )
                            ))}
                        </div>
                        <p className="mt-3">
                            <hr/>
                            <b>Instrucciones</b><br/>
                            {datos.strInstructions}
                        </p>
                    </div>
               </div>  
         
            </div>
        </div>
    </main>

  )
}

export default Detalle
