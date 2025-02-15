import React, { useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [file, setFile] = useState(null);

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            Username: username,
            Email: mail,
            Password: password,
            Gender: gender,
            Address: address,
            Country: country,
            File: file ? file.name : "No file uploaded"
        });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
                <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} /><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <label>Gender:</label>
                <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /><label>Male</label>
                <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /><label>Female</label>
                <input type="radio" name="gender" value="Others" checked={gender === "Others"} onChange={(e) => setGender(e.target.value)} /><label>Others</label>
                <br/>
                <textarea id="address" cols="40" rows="5" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                <br/>
                <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">---Select Country---</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Russia">Russia</option>
                    <option value="Japan">Japan</option>
                    <option value="America">America</option>
                </select>
                <br/>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Dashboard;
