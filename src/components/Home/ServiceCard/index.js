import React from "react";
import "./service-card.scss";
import { BiChevronRight } from "react-icons/bi";

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <img className="service-card__icon" src={service.icon} alt="" />
            <p className="service-card__title">{service.title}</p>
            <p className="service-card__description">{service.description}</p>
        </div>
    );
};

export default ServiceCard;
