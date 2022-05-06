import React, { useEffect } from "react";
import axios from "axios";

const cliente = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});


export default function AxiosInstancia(){

    //manejamos los estados del post
    const [post, setPost] = React.useState(null);

    //manejamos la actualizacion del post
    React.useEffect(() => {
        cliente.get("/1").then((response) => {
            setPost(response.data);
        })
    },[]);

    if(!post)
        return "No hay post";

    return(
        <div>

            <h1>{post.title}</h1>
            <h2>ID: {post.id}</h2>
            <p>{post.body}</p>

        </div>
    );
}