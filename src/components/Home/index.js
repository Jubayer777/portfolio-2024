import React from "react";
import HeroTop from "./Hero";
import About from "./About";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data/serviceData";
import { projectData } from "./data/projectData";
import Resume from "./Resume";
import Carousel from "./Carousel";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";
import { galleryData } from "./data/galleryData";
import { contactData } from "./data/contactData";
import { blogData } from "./data/blogData";
import BlogCard from "./BlogCard";
import Skill from "./Skill";
import "./home.scss";

const Home = () => {
    return (
        <div className="home-content">
            <HeroTop />

            <div className="home-content__section" id="skills">
                <p className="home-content__section__title">About Me</p>
                <About />
            </div>
            <div className="home-content__section" id="skill">
                <p className="home-content__section__title">Skill</p>
                <Skill />
            </div>
            <div className="home-content__section" id="resume">
                <p className="home-content__section__title">Resume</p>
                <Resume />
            </div>
            <div className="home-content__section" id="service">
                <p className="home-content__section__title">My Services</p>
                <p className="home-content__section__sub-title">
                    {serviceData().description}
                </p>
                <div className="home-content__section__card-container">
                    {serviceData().items.map((data, i) => (
                        <ServiceCard key={i} service={data} />
                    ))}
                </div>
            </div>
            <div className="home-content__section" id="portfolio">
                <p className="home-content__section__title">Portfolio</p>
                <p className="home-content__section__sub-title">
                    {projectData().description}
                </p>
                <div className="home-content__section__card-container">
                    {projectData().items.map((data, i) => (
                        <ProjectCard key={i} projectData={data} />
                    ))}
                </div>
            </div>
            <div className="home-content__section" id="blog">
                <p className="home-content__section__title">Blog</p>
                <p className="home-content__section__sub-title">
                    {blogData().description}
                </p>
                <div className="home-content__section__card-container">
                    {blogData().items.map((data, i) => (
                        <BlogCard key={i} blogData={data} />
                    ))}
                </div>
            </div>
            <div className="home-content__section" id="gallery">
                <p className="home-content__section__title">Gallery</p>
                <p className="home-content__section__sub-title">
                    {galleryData().description}
                </p>
                <div className="home-content__section__slider">
                    <Carousel />
                </div>
            </div>
            <div className="home-content__section" id="contact">
                <p className="home-content__section__title">Contact</p>
                <p className="home-content__section__sub-title">
                    {contactData().description}
                </p>
                <Contact />
            </div>
        </div>
    );
};

export default Home;
