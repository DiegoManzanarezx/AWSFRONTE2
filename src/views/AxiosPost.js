import React, { useState, useEffect } from "react";
import axios from "axios";

//const miPostListURL = "https://jsonplaceholder.typicode.com/posts";
//const miPostListURL = "http://localhost:8080/v1/employees/Agent";

const miPostListURL = "http://localhost:8080/v1/employees/signin";

function AxiosPost() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get({miPostListURL}).then((response) => {
            setPost(response.data);

        });
    }, []);
    function crearPost() {
        axios.post(miPostListURL, {
            employee_name: 'Luis Orozco',
            employee_password: 'COD123'
        }).then((response) => { setPost(response.data) });
    }
    
    return (
        <div>
           {/*} <h1>{post.employee_role}</h1>
            <h3>ID: {post.employee_id}</h3> */}
            <button onClick={crearPost}>Crear nuevo Post</button>
        </div>
    );
}
export default AxiosPost;