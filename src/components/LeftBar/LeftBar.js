import React from "react";
import "./LeftBar.scss";
import Profile from "../../assets/images/profile.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineBlock } from "react-icons/ai";
import { languageData } from "./data/languageData";
import { skillsData } from "./data/skillsData";
import { socialLinksData } from "./data/socialLinkData";
import { extraSkillsData } from "./data/extraSkillsData";
import { generalData } from "./data/genarelLeftBarData";

const LeftBar = () => {
    return (
        <div className="left-bar">
            <section className="left-bar__profile-section">
                <div>
                    <img
                        className="left-bar__profile-img"
                        src={Profile}
                        alt=""
                    />
                    <div className="left-bar__active-dot"></div>
                </div>
                <p className="left-bar__name">{generalData().name}</p>
                <p className="left-bar__title">{generalData().designation}</p>
                <div className="left-bar__social">
                    {socialLinksData().map((data, i) => (
                        <a href={data.link} key={i}>{data.icon}</a>
                    ))}
                </div>
            </section>
            <hr className="left-bar__line" />

            <div className="left-bar__scroll-div">
                <section className="left-bar__info-section">
                    {
                        generalData().infos.map((info,i) =><div key={i} className="left-bar__info-section__item">
                        <p className="left-bar__info-section__label">{info.label} :</p>
                        <p className={`left-bar__info-section__value ${info.isGreen && 'left-bar__info-section__value--green'}`}>{info.value}</p>
                    </div>)
                    }
                </section>
                <hr className="left-bar__line left-bar__line--scroll" />
                <section className="left-bar__progress-section">
                    <p className="left-bar__progress-section__title">
                        Languages
                    </p>
                    {languageData().map((data, i) => (
                        < div key={i}>
                            {" "}
                            <div className="left-bar__progress">
                                <p>{data.name}</p>
                                <p>{data.value}</p>
                            </div>
                            <div className="left-bar__progress-bar">
                                <div
                                    className="left-bar__progress-bar__line"
                                    style={{ width: `${data.percentage}` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </section>
                <hr className="left-bar__line left-bar__line--scroll" />
                <section className="left-bar__progress-section">
                    <p className="left-bar__progress-section__title">Skill</p>
                    {skillsData().map((data, i) => (
                        <div key={i}>
                            <div className="left-bar__progress">
                                <p>{data.name}</p>
                                <p>{data.value}</p>
                            </div>
                            <div className="left-bar__progress-bar">
                                <div
                                    className="left-bar__progress-bar__line"
                                    style={{ width: `${data.percentage}` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </section>
                <hr className="left-bar__line left-bar__line--scroll" />
                <section className="left-bar__extra-skill-section">
                    <p className="left-bar__extra-skill-section__title">
                        Extra Skill
                    </p>
                    {extraSkillsData().map((data, i) => (
                        <div
                            key={i}
                            className="left-bar__extra-skill-section__area"
                        >
                            <AiOutlineBlock className="left-bar__extra-skill-section__icon" />
                            <p className="left-bar__extra-skill-section__text">
                                {data}
                            </p>
                        </div>
                    ))}
                </section>
            </div>
            <hr className="left-bar__line" />
            <a
                className="left-bar__button"
                href={generalData().gitLink}
                rel="noreferrer"
                target="_blank"
            >
                <span className="left-bar__button__text">GitHub</span>
                <AiFillGithub  className="left-bar__button__icon" />
            </a>
        </div>
    );
};

export default LeftBar;
