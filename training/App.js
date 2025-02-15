import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './crudcomponents/Home';
import Edit from './crudcomponents/Edit';
import Create from './crudcomponents/Create';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />  
                <Route path='/edit/:id' element={<Edit />} />  
            </Routes>
        </BrowserRouter>
    );
};

export default App;
