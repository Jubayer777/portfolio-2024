import React from 'react';
import './footer.scss'
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