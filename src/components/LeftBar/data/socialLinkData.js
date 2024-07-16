import React from "react";
import { GrFacebookOption,GrLinkedinOption,GrDribbble} from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter,BsYoutube } from "react-icons/bs";
export const socialLinksData = () => {
    return [
        { icon: <GrFacebookOption/>, link: "#" },
        { icon: <AiFillInstagram/>, link: "#" },
        { icon: <BsTwitter/>, link: "#" },
        { icon: <GrLinkedinOption/>, link: "#" },
        { icon: <BsYoutube/>, link: "#" },
        { icon: <GrDribbble />, link: "#" },
    ];
};
