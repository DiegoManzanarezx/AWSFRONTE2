import React, { useEffect } from "react";
import axios from "axios";

const miPostsListURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosError(){

    //manejamos los estados del post
    const [post, setPost] = React.useState(null);

    //manejamos el posible error como un estado
    const [error, setError] = React.useState(null);

    //manejamos la actualizacion del post
    React.useEffect(() => {
        axios.get(`${miPostsListURL}/abcde`).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    },[]);


    //Visualizamos el error
    if(error){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(error.toJSON());
        return `Error: ${error.message}`;
    }

    if(!post)
        return "No hay ningún post";

    return(
        <div>

            <h1>{post.title}</h1>
            <h2>ID: {post.id}</h2>
            <p>{post.body}</p>

        </div>
    );
}