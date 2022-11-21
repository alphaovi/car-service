import React from 'react';
import googleLogo from "../../../images/social/google.png";
import facebookLogo from "../../../images/social/facebook.png";
import githubLogo from "../../../images/social/github.png";
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        return (
            navigate("/home")
        );
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-secondary w-50">
                    <img src={googleLogo} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
            </div>
            <div>
                <button className="btn btn-primary mt-5 w-50">
                    <img src={facebookLogo} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
            </div>
            <div>
                <button onClick ={() => signInWithGithub()} className="btn btn-dark mt-5 w-50">
                    <img src={githubLogo} alt="" />
                    <span className="px-2">Github Login</span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;