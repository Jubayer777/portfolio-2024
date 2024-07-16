import React from 'react';
import './footer.scss'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='footer'>
            <BiCopyright className='footer__icon'/>
            <p className='footer__text'>{new Date().getFullYear()} All Right Reserved . <span className='footer__text--highlighter'>Jubayer Al Alam</span></p>
        </div>
    );
};

export default Footer;