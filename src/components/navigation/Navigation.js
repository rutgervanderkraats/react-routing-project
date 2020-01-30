import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink> &nbsp;
            <NavLink to="/about">About</NavLink> &nbsp;
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
};

export default Navigation;