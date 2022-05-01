import React from "react";
import { Link } from "react-router-dom";

function PaginasHijas(){
    return (
        <div className="home">
            <div className="container">
                <Link to="/page/hija1">
                    <h2 className="text-center mt-5"> Página Hija 1 </h2>
                </Link>
                <p>
                    Aqui puede venir un resumen de la pagina 1.
                </p>
            </div>

        </div>

    );
}

export default PaginasHijas;