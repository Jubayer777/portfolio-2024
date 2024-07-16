import React from "react";
import "./about.scss";
import { MdOutlineDone } from "react-icons/md";
import { aboutData } from "../data/aboutData";

const About = () => {
    return (
        <div className="about-section">
            <p className="about-section__description">
                {aboutData().description}
            </p>
            <div className="about-section__vertical-line"></div>
            <div className="about-section__right">
                <p className="about-section__title">
                    {aboutData().designations}
                </p>
                <ul className="about-section__list">
                        {aboutData()
                            .items
                            .map((data, i) => (
                                <li className="about-section__item" key={i}>
                                    {" "}
                                    <MdOutlineDone className="about-section__list-icon" />
                                    <strong>{data.label}:</strong> {data.value}
                                </li>
                            ))}
                    </ul>
            </div>
        </div>
    );
};

export default About;
