import React from "react";
import "./resume.scss";
import { educationData } from "../data/educationData";
import { skillOptions } from "../data/skillTabData";
import { experienceData } from "../data/experienceData";
import { resumeSkillData, resumeSummaryData } from "../data/resumeData";

const Resume = () => {
    return (
        <div className="resume-section">
            <div className="resume-section__left">
                <p className="resume-section__title">Summary</p>
                <div className="resume-section__section resume-section__section--last">
                    <p className="resume-section__sub-title">{resumeSummaryData().name}</p>
                    <p className="resume-section__description">
                    {resumeSummaryData().description}
                    </p>
                    <ul className="resume-section__list">
                        {
                            resumeSummaryData().items.map((data,i)=><li key={i} className="resume-section__list__item">{data}</li> )
                        }
                    </ul>
                </div>
                <p className="resume-section__title">Education</p>
                {educationData().map((education, i) => (
                    <div
                        className={`resume-section__section ${
                            i === educationData().length - 1 &&
                            "resume-section__section--last"
                        }`}
                        key={i}
                    >
                        <p className="resume-section__sub-title">
                            {education.degree}
                        </p>
                        <div className="resume-section__time">
                            <p>{education.year}</p>
                        </div>
                        <p className="resume-section__organization">
                            {education.institute}
                        </p>
                        <p className="resume-section__result">
                            {education.result_name + " : " + education.result}
                        </p>
                        <p className="resume-section__description">
                            {education.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="resume-section__right">
                <p className="resume-section__title">Skills</p>
                <div className="resume-section__section resume-section__section--last">
                    <p className="resume-section__sub-title">
                        {resumeSkillData().designation}
                    </p>
                    <p className="resume-section__description">
                    {resumeSkillData().description}
                    </p>
                    <ul className="resume-section__list">
                        {skillOptions().map((skill,i) => (
                            <li className="resume-section__list__item" key={i}>
                                <strong>{skill.title}: </strong>
                                {skill.data.map((item, i) => (
                                    <span className="resume-section__skill-item" key={i}>
                                        {item.title}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="resume-section__title">Professional Experience</p>
                {experienceData().map((experience, i) => (
                    <div
                        className={`resume-section__section ${
                            i === experienceData().length - 1 &&
                            "resume-section__section--last"
                        }`}
                        key={i}
                    >
                        <p className="resume-section__sub-title">
                            {experience.position}
                        </p>
                        <div className="resume-section__time">
                            <p>{experience.year}</p>
                        </div>
                        <p className="resume-section__organization">
                            {experience.organization}
                        </p>
                        <p className="resume-section__address">
                            {experience.address}
                        </p>
                        <p className="resume-section__description">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;
