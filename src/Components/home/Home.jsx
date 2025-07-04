import React from 'react'
import profileImg from "../../assets/Raidul-fsae.JPG"
import shapeOne from "../../assets/shape-1.png"
import shapeTwo from "../../assets/shape-2.png"

import { FaLinkedin, FaInstagram, FaLink, FaLinkedinIn } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import './home.css'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__wrapper">
                <div className="home__container container">
                <p className="home__subtitle text-cs">
                    hi, <span>i'm</span>
                </p>

                <h1 className="home__title text-cs">
                    <span>raidul</span> islam
                </h1>

                <p className="home__job">
                    <span className="text-cs">i am</span> <b>an aspiring engineer :)</b> 
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-lg">
                            <img src="src\assets\Cornell Logo.png" alt="" className='cornell__logo' />
                        </span>

                        <span className="text-sm text-cs">
                            <span>cornell</span> university
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">
                            2028
                        </span>

                        <span className="text-sm text-cs">
                            <span>graduating</span> year
                        </span>
                    </p>

                    <img src={shapeOne} alt="" className="shape shape__1" />
                    <img src={shapeTwo} alt="" className="shape shape__2" />
                    <img src={shapeTwo} alt="" className="shape shape__3" />
                </div>

                <p className="home__text">
                    tldr; <br />
                    studying at cornell university as a rising sophomore. majoring in electrical & computer engineering. i love anything related
                    to tech, robotics and formula cars vroom vroom
                </p>

                <div className="home__socials">
                    <a href="https://www.linkedin.com/in/raidulislam/" className="home__social-link"><FaLinkedinIn/></a>
                    <a href="https://www.instagram.com/raidulri/" className="home__social-link"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/raidulislam/" className="home__social-link"><FaX/></a>
                </div>

                <div className="home__btns">
                    <a href="" className="btn text-cs" >download resume</a>
                    <a href="" className="hero__link text-cs">my blood sweat and tear T_T</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Home