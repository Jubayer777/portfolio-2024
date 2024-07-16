import React from "react";
import { BiChevronRight } from "react-icons/bi";
import "./blog-card.scss";

const BlogCard = ({ blogData }) => {
    return (
        <a
            className="blog-card"
            href={blogData.link}
            rel="noreferrer"
            target="_blank"
        >
            <img className="blog-card__icon" src={blogData.src} alt="" />
            <p className="blog-card__title">{blogData.title}</p>
            <p className="blog-card__description">{blogData.description}</p>
            <a
                className="blog-card__button"
                href={blogData.link}
                rel="noreferrer"
                target="_blank"
            >
                Visit Blog <BiChevronRight className="blog-card__button__arrow" />
            </a>
        </a>
    );
};

export default BlogCard;
