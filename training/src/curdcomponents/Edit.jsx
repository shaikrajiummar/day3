import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Edit = () => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

   
    useEffect(() => {
        axios.get(`http://localhost:8000/users/${id}`)
            .then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
                setPhone(response.data.phone);
            })
            .catch(error => console.error("Error fetching user:", error));
    }, [id]);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/users/${id}`, { name, email, phone })
            .then(() => {
                console.log("User updated successfully");
                navigate("/"); 
            })
            .catch(error => console.error("Error updating user:", error));
    };

    return (
        <div className="edit-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className="edit-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="edit-input"
                /><br/>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="edit-input"
                /><br/>

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="edit-input"
                    maxLength={10}
                /><br/>

                <button type="submit" className="edit-submit-btn">Update</button>
            </form><br/>

            <button onClick={() => navigate('/')} className="return-home-btn">Return to Home</button>
        </div>
    );
};

export default Edit;
