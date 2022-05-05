import React, { useState, useEffect } from "react";
import axios from "axios";
const miPostURL = "http://localhost:8080/v1/employees/Agent/ag39";



function AxiosGet() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(miPostURL, {
            params: {
                employee_name: 'Diego',
                employee_password: '3'
            }
        }).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post)
        return null;
    return (
        <div>
            <h1>{post.employee_id}</h1>

            <p>{post.body}</p>
        </div>
    );
}
export default AxiosGet;