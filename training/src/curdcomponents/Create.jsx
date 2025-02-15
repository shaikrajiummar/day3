import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/users", { name, email, phone })
            .then(() => {
                console.log("User added successfully");
                navigate("/"); 
            })
            .catch(error => console.error("Error adding user:", error));
    };

    return (
        <div className="create-container">
            <h2 className="create-title">Create User</h2>
            <form onSubmit={handleSubmit} className="create-form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="create-input"
                /><br/>

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="create-input"
                /><br/>

                <input 
                    type="text" 
                    placeholder="Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className="create-input"
                    maxLength={10}
                /><br/>

                <button type="submit" className="create-submit-btn">Submit</button>
            </form><br/>

            <button onClick={() => navigate('/')} className="return-home-btn">Return to Home</button>
        </div>
    );
};

export default Create;
