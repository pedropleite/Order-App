import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Meals from './components/Meals/Meals';
import Login from './components/Login/Login';

const Paths = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/order" element={<Meals />} />
            </Routes>
        </>
    );
};

export default Paths;
