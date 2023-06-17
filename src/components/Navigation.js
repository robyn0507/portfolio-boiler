import React from 'react'

import { Link } from "react-router-dom";

import './Navigation.css'

export default function Navigation() {
    return (
        <div className='navigation-container'>
            <nav>
                <div className="logo-container">
                    <h2 className='logo'><Link to="/">Portfolio</Link></h2>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
