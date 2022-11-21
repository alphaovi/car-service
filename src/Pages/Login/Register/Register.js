import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import "./Register.css";
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { verifyBeforeUpdateEmail } from 'firebase/auth';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    };

    if (user) {
        navigate("/home")
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        const success = await verifyBeforeUpdateEmail(email);
        if (success) {
            alert(
                'Please check your email to verify your updated email address'
            );
        }
        navigate("/home");
    }
    return (
        <div className="register-form">
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="your name" />
                <input type="email" name="email" id="" placeholder="Email Address" requried />
                <input type="password" name="password" placeholder="Password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input disabled={!agree} className="btn btn-primary mt-2" type="submit" value="Register" />
                <p>Already a member of Genius Car? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateToLogin}>Please Login</Link> </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;