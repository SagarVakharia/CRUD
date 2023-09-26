import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"))
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`https://64f23b190e1e60602d24ed23.mockapi.io/CRUDpractice/${id}`,{
      name: name,
      email: email,
    })
    .then(() => {
        navigate("/read");
    })
  };

  return (
    <div>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email"
            className="form-control"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
                   onClick={updateHandler} >
          Update</button>
      </form>
    </div>
  )
}

export default Update