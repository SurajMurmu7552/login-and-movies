import React from 'react'
import "./register.css"

export default function Register() {
    const handleValidation = ()=>{

    }
    const handleInput=()=>{

    }
    return (
        <div className="register-card">
            <form className="card" >
                <input className="card-item error" type="text" name="firstname" placeholder="First Name" />
                <input className="card-item"type="text" name="lastname" placeholder="Last Name"/>
                <input className="card-item" type="email" name="email" placeholder="Email Address"/>
                <input className="card-item" type="password" name="password" placeholder="Password"/>
                <input className="card-item submit" type="submit" value="CLAIM YOUR FREE TRIAL" />
            </form>
           <div className="terms">
                <p>By clicking the button you are agreeing to our <a href="http://" target="_blank" rel="noopener noreferrer">Terms and Services</a> </p>
           </div>
        </div>
    )
}
