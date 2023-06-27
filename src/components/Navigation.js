import React, { useState } from 'react'

import { Link } from "react-router-dom";

import './Navigation.css'

export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className='navigation-component' >
            <div className="navigation-container">

                <div className="logo-container">
                    <h2 className='logo'><Link to="/">Portfolio</Link></h2>
                </div>

                <nav>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'nav-menu-mobile' : ''}`}>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/projects">Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="nav-icon" onClick={handleMobileMenuToggle} >
                {mobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </div>
        </div>

    )
}
