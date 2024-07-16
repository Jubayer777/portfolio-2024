import React from "react";
import "./Hero.scss";
import profileImg from "../../../assets/images/profile.png";
import { BiDownload } from "react-icons/bi";
import Typewriter from "typewriter-effect";
import pdf from "../../../assets/pdf/jubayer_al_alam_resume.pdf";
import { heroData } from "../data/heroData";

const HeroTop = () => {
    return (
        <div className="hero-section">
            <div className="hero-section__profile-info">
                <p className="hero-section__profile-title">
                    I'm {heroData().name}<br />
                    <span className="hero-section__profile-title--highlight">
                        <Typewriter
                            options={{
                                strings: heroData().designations,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </p>
                <p className="hero-section__profile-description">
                    {heroData().description}
                </p>
                <a
                    className="hero-section__hire-btn"
                    href={pdf}
                    rel="noreferrer"
                    target="_blank"
                >
                    Download Resume
                    <span className="hero-section__hire-btn__icon">
                        <BiDownload size={22} />
                    </span>
                </a>
            </div>
            <img
                className="hero-section__profile-img"
                src={profileImg}
                alt=""
            />
        </div>
    );
};

export default HeroTop;
