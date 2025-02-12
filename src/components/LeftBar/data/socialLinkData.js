import React from "react";
import { GrFacebookOption,GrLinkedinOption,GrDribbble} from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter,BsYoutube } from "react-icons/bs";
export const socialLinksData = () => {
    return [
        { icon: <GrFacebookOption/>, link: "https://www.facebook.com/jubayer.allmhamud" },
        // { icon: <AiFillInstagram/>, link: "#" },
        { icon: <BsTwitter/>, link: "https://x.com/jubayer_i" },
        { icon: <GrLinkedinOption/>, link: "www.linkedin.com/in/jubayer-al-alam-7a1a94160" },
        // { icon: <BsYoutube/>, link: "#" },
        { icon: <GrDribbble />, link: "https://jubayer-al-alam.vercel.app/" },
    ];
};
