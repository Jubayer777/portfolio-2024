import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./carousel.scss";
import { galleryData } from "../data/galleryData";

const Carousel = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:
            screenSize.width > 375
                ? screenSize.width > 768
                    ? screenSize.width > 1280
                        ? 4
                        : 3
                    : 2
                : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);

    return (
        <>
            <div className="carousel">
                <Slider {...settings}>
                    {galleryData().items.map((item) => (
                        <div key={item.id} className="carousel__image-div">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="carousel__image-div__img"
                            />
                            <p className="carousel__image-div__title">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
