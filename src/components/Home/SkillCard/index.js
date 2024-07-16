import React from "react";
import "./skillCard.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            <p className="skill-card__icon" style={{color:`${skill.iconColor}`}}>{skill.icon}</p>
            <p className="skill-card__title">{skill.title}</p>
            <div className="skill-card__description">
                <VisibilitySensor>
                    {({ isVisible }) => {
                        const percentage = isVisible ? skill.percentage : 0;
                        return (
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    strokeLinecap: "round",
                                    textSize: "20px",
                                    pathColor: skill.storkColor,
                                    textColor: skill.storkColor,
                                    trailColor: "#d6d6d6",
                                    backgroundColor: "#3e98c7",
                                })}
                            />
                        );
                    }}
                </VisibilitySensor>
            </div>
        </div>
    );
};

export default SkillCard;
