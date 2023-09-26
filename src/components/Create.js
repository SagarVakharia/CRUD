import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const header = { "Allow -Control-Allow-Origin": "*" }
    const history = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(
            'https://64f23b190e1e60602d24ed23.mockapi.io/CRUDpractice', {
            name: name,
            email: email,
            header,
        })
            .then(() => { // added .then because when we re-direct to read page our data was not getting stored 
                history("/read");
            }); // This will re-direct to Read page after Submit is clicked 
    }
    return (
        <div>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitHandler}>
                    Submit</button>
            </form>
        </div>
    );
}