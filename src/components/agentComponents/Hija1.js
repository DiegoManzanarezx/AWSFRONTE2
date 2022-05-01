import React, { useEffect } from "react";
import { useParams } from "react-router";

function Hija1(){

    let {pageSlug} = useParams();

    useEffect(() => {
    }, [pageSlug])

    return (
        <div className = "home">
            <div className = "container">
                <h1 className = "mt-5"> Esta es la página hija 1. </h1>
                <h6 className = "mb-5"> El slug de la página es: {pageSlug} </h6>
                <p>Este es un párrafo de la página 1. Este es un párrafo de la página 1.</p>
            </div> 
        </div>  
    );
}

export default Hija1;
