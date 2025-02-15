import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users") 
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <section id="homeBlock">
            <article>
                <h1>List of Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>SI.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                    <Link to={`/edit/${user.id}`}>
                                            <button className="edit-btn">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to="/create">
                    <button>Create</button>
                </Link>
            </article>
        </section>
    );
};

export default Home;
