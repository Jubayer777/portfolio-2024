import { calculateYears } from "../../../utils.js/yearsCalculator";

export const aboutData = () => {
    return {
        designations: "Software Engineer",
        items: [
            {
                label: "BirthDay",
                value: "30 July 1998",
            },
            {
                label: "Age",
                value: calculateYears("1998-07-30"),
            },
            {
                label: "Degree",
                value: "B.S.C in CSE",
            },
            {
                label: "City",
                value: "Sydney, Australia",
            },
            {
                label: "Website",
                value: "https://jubayer-al-alam.vercel.app/",
            },
            {
                label: "Phone",
                value: "+61416928427",
            },
            {
                label: "Email",
                value: "jubayeralmahmud24@gmail.com",
            },
            {
                label: "Former Company",
                value: "BJIT",
            },
            {
                label: "University",
                value: "CQU",
            },
            
        ],
        description:
            "<p><strong>Introducing Jubayer Al Alam: A Visionary in Software Development and IT!</strong></p><p>With a passion for coding that knows no bounds, I am Jubayer Al Alam, a software developer driven by innovation. With <strong>3.2 years of experience at BJIT Limited</strong>, I honed my skills in crafting seamless digital solutions. Now, as I pursue a <strong>Master of IT at CQU</strong>, I continue to embrace new challenges, refining my expertise in <strong>frontend and backend development</strong>. Join me on this journey as we push the limits of technology and create solutions that inspire! 🚀</p>",
    };
};
