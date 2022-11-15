import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Register.css";
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    };
    
    if(user){
        navigate("/home")
    }
   

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="register-form">
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="your name" />
                <input type="email" name="email" id="" placeholder="Email Address" requried/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="submit" value="Register" />
                <p>Already a member of Genius Car? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateToLogin}>Please Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;