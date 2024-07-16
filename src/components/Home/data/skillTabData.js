import { DiReact, DiNodejsSmall, DiJava, DiScrum } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";

import { IoLogoCss3 } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { TbBrandJavascript, TbBrandNextjs} from "react-icons/tb";
import {
    SiTypescript,
    SiExpress,
    SiNestjs,
    SiGraphql,
    SiLaravel,
    SiMongodb,
    SiCplusplus,
    SiNetlify,
    SiAmazonaws,
    SiHeroku,
    SiVercel,
    SiCpanel,
    SiDocker,
    SiJenkins,
    SiGithub,
    SiBootstrap,
    SiWebpack,
    SiJest,
    SiPhp,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
export const skillOptions = () => {
    return [
        {
            title: "Frontend",
            tabValue: 0,
            data: [
                {
                    title: "HTML",
                    percentage: "90",
                    icon: <AiFillHtml5 size={60} />,
                    storkColor: "#DD4B25",
                    iconColor: "#DD4B25",
                },
                {
                    title: "CSS",
                    percentage: "90",
                    icon: <IoLogoCss3 size={60} />,
                    storkColor: "#254BDD",
                    iconColor: "#254BDD",
                },
                {
                    title: "Sass",
                    percentage: "90",
                    icon: <FaSass size={50} />,
                    storkColor: "#C76494",
                    iconColor: "#C76494",
                },
                {
                    title: "Bootstrap",
                    percentage: "80",
                    icon: <SiBootstrap size={50} />,
                    storkColor: "#8311F6",
                    iconColor: "#8311F6",
                },
                {
                    title: "React",
                    percentage: "90",
                    icon: <DiReact size={70} />,
                    storkColor: "#5ED3F3",
                    iconColor: "#5ED3F3",
                },

                {
                    title: "TypeScript",
                    percentage: "90",
                    icon: <SiTypescript size={40} />,
                    storkColor: "#2F74C0",
                    iconColor: "#2F74C0",
                },
                {
                    title: "NextJS",
                    percentage: "90",
                    icon: <TbBrandNextjs size={60} />,
                    storkColor: "orange",
                    iconColor: "#fff",
                },
            ],
        },
        {
            title: "Backend",
            tabValue: 1,
            data: [
                {
                    title: "NodeJS",
                    percentage: "90",
                    icon: <DiNodejsSmall size={60} />,
                    storkColor: "#6BA35E",
                    iconColor: "#6BA35E",
                },
                {
                    title: "ExpressJS",
                    percentage: "90",
                    icon: <SiExpress size={50} />,
                    storkColor: "orange",
                    iconColor: "#fff",
                },
                {
                    title: "NestJS",
                    percentage: "80",
                    icon: <SiNestjs size={50} />,
                    storkColor: "#E0234E",
                    iconColor: "#E0234E",
                },
                {
                    title: "GrapahQL",
                    percentage: "80",
                    icon: <SiGraphql size={50} />,
                    storkColor: "#DE33A6",
                    iconColor: "#DE33A6",
                },
                {
                    title: "Laravel",
                    percentage: "60",
                    icon: <SiLaravel size={50} />,
                    storkColor: "#F72C1F",
                    iconColor: "#F72C1F",
                },
            ],
        },

        {
            title: "Database",
            tabValue: 2,
            data: [
                {
                    title: "MongoDB",
                    percentage: "90",
                    icon: <SiMongodb size={50} />,
                    storkColor: "#449A44",
                    iconColor: "#449A44",
                },
                {
                    title: "MySQL",
                    percentage: "80",
                    icon: <GrMysql size={40} />,
                    storkColor: "#507E9C",
                    iconColor: "#507E9C",
                },
            ],
        },
        {
            title: "Programming",
            tabValue: 3,
            data: [
                {
                    title: "JS",
                    percentage: "90",
                    icon: <TbBrandJavascript size={60} />,
                    storkColor: "#EFD81D",
                    iconColor: "#EFD81D",
                },
                {
                    title: "C++",
                    percentage: "80",
                    icon: <SiCplusplus size={40} />,
                    storkColor: "#6295CB",
                    iconColor: "#6295CB",
                },
                {
                    title: "Java",
                    percentage: "70",
                    icon: <DiJava size={60} />,
                    storkColor: "#F0931C",
                    iconColor: "#F0931C",
                },
                {
                    title: "Php",
                    percentage: "80",
                    icon: <SiPhp size={60} />,
                    storkColor: "#697AB1",
                    iconColor: "#697AB1",
                },
            ],
        },
        {
            title: "DevOps",
            tabValue: 4,
            data: [ {
                title: "AWS",
                percentage: "40",
                icon: <SiAmazonaws size={60} />,
                storkColor: "gray",
                iconColor: "#F7F7F7",
            },
            {
                title: "Docker",
                percentage: "50",
                icon: <SiDocker size={60} />,
                storkColor: "#2496ED",
                iconColor: "#2496ED",
            },
            {
                title: "Jenkins",
                percentage: "50",
                icon: <SiJenkins size={60} />,
                storkColor: "#D4202D",
                iconColor: "#D4202D",
            },
            {
                title: "Netlify",
                percentage: "90",
                icon: <SiNetlify size={50} />,
                storkColor: "#2EB0B4",
                iconColor: "#2EB0B4",
            },
            {
                title: "Heroku",
                percentage: "90",
                icon: <SiHeroku size={40} />,
                storkColor: "#6112AA",
                iconColor: "#6112AA",
            },
            {
                title: "Vercel",
                percentage: "90",
                icon: <SiVercel size={40} />,
                storkColor: "gray",
                iconColor: "#F7F7F7",
            },
            {
                title: "cPanel",
                percentage: "70",
                icon: <SiCpanel size={60} />,
                storkColor: "#EF671D",
                iconColor: "#EF671D",
            }
        ],
        },

        {
            title: "Others",
            tabValue: 5,
            data: [{
                title: "GitHub",
                percentage: "90",
                icon: <SiGithub size={50} />,
                storkColor: "gray",
                iconColor: "#F7F7F7",
            },
            {
                title: "Webpack",
                percentage: "80",
                icon: <SiWebpack size={50} />,
                storkColor: "#8ACFF3",
                iconColor: "#8ACFF3",
            },
            {
                title: "Jest",
                percentage: "80",
                icon: <SiJest size={40} />,
                storkColor: "#944058",
                iconColor: "#944058",
            },
            {
                title: "Scrum",
                percentage: "90",
                icon: <DiScrum size={60} />,
                storkColor: "#F78B1A",
                iconColor: "#F78B1A",
            },
            
        ],
        },
    ];
};
