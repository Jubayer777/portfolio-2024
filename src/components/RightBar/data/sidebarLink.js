import React from "react";
import { RiHome2Fill, RiQuillPenFill,RiGalleryFill } from "react-icons/ri";
import { BsFillFileEarmarkCodeFill, BsFillChatLeftFill } from "react-icons/bs";
import { FaUserGraduate, FaBriefcase,FaUserCog } from "react-icons/fa";

export const sidebarLinks = () => {
    return [
        { icon: <RiHome2Fill />, name: "Home", link: "#" },
        { icon: <FaUserCog/>, name: "Skill", link: "#skill" },
        { icon: <FaUserGraduate />, name: "Resume", link: "#resume" },
        { icon: <BsFillFileEarmarkCodeFill />, name: "Services", link: "#service" },
        { icon: <FaBriefcase />, name: "Portfolio", link: "#portfolio" },
        { icon: <RiQuillPenFill/>, name: "Blog", link: "#blog" },
        { icon: <RiGalleryFill />, name: "Gallery", link: "#gallery" },
        { icon: <BsFillChatLeftFill />, name: "Contact", link: "#contact" },
    ];
};
