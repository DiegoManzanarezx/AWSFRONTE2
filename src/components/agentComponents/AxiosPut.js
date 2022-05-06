import React, { useEffect } from "react";
import axios from "axios";

const miPostsListURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosPut(){

    //manejamos los estados del post
    const [post, setPost] = React.useState(null);

    //manejamos la actualizacion del post
    React.useEffect(() => {
        axios.get(`${miPostsListURL}/1`).then((response) => {
            setPost(response.data);
        });
    },[]);

    function actualizarPost() {
        axios.put(`${miPostsListURL}/1`, {
            title: "Estoy editando el endpoint",
            body: "Usando axios y un app react, estamos editando este post."
        }).then((response) => {
            setPost(response.data);
        });
    }

    if(!post)
        return null;

    return(
        <div>

            <h1>{post.title}</h1>
            <h2>ID: {post.id}</h2>
            <p>{post.body}</p>
            <button onClick={actualizarPost}>Actualizar el post</button>

        </div>
    )
    

}