import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return (
        <Router>
            <div className="nav-container">
                <nav className='nav-bar'>
                    <div className="logo">
                        <p>WOOKIE</p>
                        <p>MOVIES</p>
                    </div>
                    <div className="search-bar">
                        <input type="text"/>
                    </div>
                </nav>
            </div>            
        </Router>
    )
}
