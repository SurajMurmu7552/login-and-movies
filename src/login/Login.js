import React from 'react';
import Register from './components/Register';
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="layer"></div>
            <div className="trial-page">
                <div className="header-container">
                    <div className="header-title">
                        <h2>Learn to code by watching others</h2>
                    </div>
                    <div className="header-content">
                        <p>See how experience developers solve problems in real-time. </p>
                        <p>Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                    </div>
                </div>
                <div className="register-container">
                    <p className="register-trial"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
                    <Register />
                </div>
            </div>
        </div>
    )
}
