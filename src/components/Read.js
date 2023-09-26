import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]); // To store the data we are fetching 
    const getData = (e) => {
        axios.get('https://64f23b190e1e60602d24ed23.mockapi.io/CRUDpractice')
            .then((response) => {
                setData(response.data); // Doing same thing as e.target.value
            });
    };

    useEffect(() => {
        getData();
    }, [])


    const deleteHandler = (id) => {
        axios.delete(`https://64f23b190e1e60602d24ed23.mockapi.io/CRUDpractice/${id}`)
            .then(() => {
                getData();
            })
    }

    useEffect(() => {
        getData();
    }, [])

const setToLocalStorage = (id, name, email) => {
     localStorage.setItem("id", id);
     localStorage.setItem("name", name);
     localStorage.setItem("email", email);
}

    return (
        <>
            <h2>Read Operation</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                { /* We created JS here to implement a loop i.e data.map */
                    data.map((eachData) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>
                                        <Link to="/update">
                                            <button
                                                className='btn-success'
                                                onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}
                                            >
                                                Edit</button>
                                        </Link>
                                    </td>
                                    <td><button className='btn-danger' onClick={() => deleteHandler(eachData.id)}>Delete</button></td>
                                </tr>
                            </tbody>);
                    })
                }{/* This curly brace and data.map function is just to create loop */}
            </table>
        </>
    )
}

export default Read