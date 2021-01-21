import React, { useState } from 'react'
import "./register.css"

export default function Register() {

    let [err , setErr] = useState({});
    let [values, setValues] = useState({firstname: "First name" , lastname : "Last name", email :"Email" , password : "Password"});

    const handleValidation = (temp)=>{
        let error = {}
        let valid =true;

        if(temp.querySelector('#firstname').value === null || temp.querySelector('#firstname').value=== undefined || temp.querySelector('#firstname').value ==="" ){   
            valid = false;
            temp.querySelector('#firstname').parentNode.classList.add('error');
            error["firstname"] = "First Name cannot be empty";
        }
        if(temp.querySelector('#lastname').value === null || temp.querySelector('#lastname').value=== undefined || temp.querySelector('#lastname').value ==="" ){
            
            valid = false;
            temp.querySelector('#lastname').parentNode.classList.add('error');
            error["lastname"] = "Last Name cannot be empty";
        }
        if(temp.querySelector('#email').value === null || temp.querySelector('#email').value=== undefined || temp.querySelector('#email').value ==="" ){

            valid = false;
            temp.querySelector('#email').parentNode.classList.add('error');
            temp.querySelector('#email').placeholder= "email@example/com";
            error["email"] = "Email cannot be empty";
        }
        if(temp.querySelector('#password').value === null || temp.querySelector('#password').value=== undefined || temp.querySelector('#password').value ==="" ){

            valid = false;
            temp.querySelector('#password').parentNode.classList.add('error');
            error["password"] = "Password cannot be empty";
        }
        
        setErr(err = error);
        return valid;

    }

    const onSubmit =(e) =>{
        e.preventDefault();
        const valid = handleValidation(e.target);
        console.log(valid)
        if(valid)   alert('form submitted successfully')
    }

    const onClick =(e) =>{
        e.target.parentNode.classList.remove('error');

    }
    
    const handleChange = (e)=>{

        const obj = values
        obj[e.target.id] =e.target.value
        setValues(values = obj)
        console.log(values)
    }

    return (
        <div className="register-card">
            <form className="card" onSubmit={onSubmit} >
                <div className="card-item">
                    <input  type="text" id="firstname" placeholder= {values['firstname']} onChange={handleChange} onClick={onClick} />
                    <span className="icon"><img src="http://localhost:3000/asset/icon-error.svg" alt=""/></span>
                    <span className='card-err' style={{ color: "red"}}>{err['firstname']}</span> 
                </div>  
                <div className="card-item">
                    <input type="text" id="lastname" placeholder={values['lastname']} onChange={handleChange} onClick={onClick}/>
                    <span className="icon"><img src="http://localhost:3000/asset/icon-error.svg" alt=""/></span>
                    <span className='card-err' style={{ color: "red"}}>{err['lastname']}</span> 
                </div> 
                <div className="card-item">
                    <input type="text" id="email" placeholder={values['email']} onChange={handleChange} onClick={onClick} />
                    <span className="icon"><img src="http://localhost:3000/asset/icon-error.svg" alt=""/></span>
                    <span className='card-err' style={{ color: "red"}}>{err['email']}</span> 
                </div> 
                <div className="card-item">
                    <input type="text" id="password" placeholder={values['password']} onChange={handleChange} onClick={onClick} />
                    <span className="icon"><img src="http://localhost:3000/asset/icon-error.svg" alt=""/></span>
                    <span className='card-err' style={{ color: "red"}}>{err['password']}</span> 
                </div> 
                <input className="card-item submit" type="submit" value="CLAIM YOUR FREE TRIAL" />
            </form>
           <div className="terms">
                <p>By clicking the button you are agreeing to our <a href="http://" target="_blank" rel="noopener noreferrer">Terms and Services</a> </p>
           </div>
        </div>
    )
}
