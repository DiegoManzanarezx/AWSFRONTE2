import React, { useEffect } from "react";
import axios from "axios";

const miPostsListURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosDelete(){

    //manejamos los estados del post
    const [post, setPost] = React.useState(null);

    //manejamos la actualizacion del post
    React.useEffect(() => {
        axios.get(`${miPostsListURL}/1`).then((response) => {
            setPost(response.data);
        });
    },[]);

    function eliminarPost() {
        axios.delete(`${miPostsListURL}/1`).then(() => {
            alert("Item eliminado!");
            setPost(null);
        });
    }

    if(!post)
        return null;

    return(
        <div>

            <h1>{post.title}</h1>
            <h2>ID: {post.id}</h2>
            <p>{post.body}</p>
            <button onClick={eliminarPost}>Eliminar el post</button>

        </div>
    )
    

}