import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {

  return (
    <>
      <div className="col-md-4 col-lg-3  mb-4">
        <div className="card h-100">
          <div className="card-body p-0">
            <img src={item.strDrinkThumb} alt="" className="img-fluid" />
          </div>
          <div className="card-header text-center">
            <h5 className="lead">{item.strDrink}</h5>
          </div>
          <div className="card-footer">
            <Link to={`/detalle/${item.idDrink}`} href="#" className="btn btn-outline-dark btn-sm  d-grid">
              Ver
            </Link>
          </div>
        </div>
      </div>

  
    </>
  );
}

export default Card