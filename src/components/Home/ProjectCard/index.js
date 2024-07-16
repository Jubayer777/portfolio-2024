import React from "react";
import "./project-card.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const ProjectCard = ({ projectData }) => {
    return (
        <div
            className="project-card"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(252, 250, 245, 0.52), rgba(56, 54, 47, 0.73)), url(${
                    (projectData.src && projectData.src) || "../public/book.png"
                })`,
            }}
        >
            <div className="project-card__normal-content">
                <p className="project-card__title">{projectData.title}</p>
                <p className="project-card__time">{projectData.time}</p>
                <p className="project-card__description">
                    {projectData.description}
                </p>
            </div>
            <div className="project-card__hover-content">
                <div className="project-card__content">
                    {projectData.features.map((data, i) => (
                        <div key={i}>
                            <div className="project-card__content__item">
                                <AiOutlineCheck className="project-card__content__icon" />
                                <p className={`project-card__content__text`}>
                                    {data}
                                </p>
                            </div>
                            {i < projectData.features.length - 1 && (
                                <hr className="project-card__content__line" />
                            )}
                        </div>
                    ))}
                </div>
                <div className={`project-card__button-div`}>
                    <a
                        className={`project-card__button`}
                        href={projectData.gitLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        className={`project-card__button project-card__button--active`}
                        href={projectData.liveLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
