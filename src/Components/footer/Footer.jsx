import React from 'react'
import { FaLinkedin, FaInstagram, FaLink, FaLinkedinIn } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/raidulislam/" className="footer__social-link"><FaLinkedinIn/></a>
                    <a href="https://www.instagram.com/raidulri/" className="footer__social-link"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/raidulislam/" className="footer__social-link"><FaX/></a>
                </div>


                <p className="footer__copyright text-cs"> &copy; 2025 <span>Luique.</span> All Rights Reserved</p>    
                <p className="footer__copyright text-cs">Developed by <span>Raidul Islam</span></p>
            </div>
        </footer>
    )
}

export default Footer