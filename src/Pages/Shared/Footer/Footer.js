import React from 'react';
import "./Footer.css";
const Footer = () => {
    const today = new Date();
    const date = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
    return (
        <footer className="text-center mt-5">
            <p><small>copyright @ {date}</small></p>
        </footer>
    );
};

export default Footer;