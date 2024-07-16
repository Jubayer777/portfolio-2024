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
                value: "Dhaka,Bangladesh",
            },
            {
                label: "Website",
                value: "https://jubayer-portfolio.netlify.app",
            },
            {
                label: "Phone",
                value: "+8801604118323",
            },
            {
                label: "Email",
                value: "jubayeralmahmud24@gmail.com",
            },
            {
                label: "Company",
                value: "BJIT",
            },
        ],
        description:
            "Introducing Jubayer Al Alam: The Maestro Of Software Development At BJIT! With A Passion For Coding That Knows No Bounds, I Am Jubayer Al Alam, A Software Developer Renowned. At BJIT, I Wield My Skills With Finesse, Crafting Digital Solutions That Impress. From Frontend Design To Backend Complexity, I Embrace Challenges With Unwavering Tenacity. Join Me On This Journey As We Redefine What's Possible, And Together, We'll Create Software That's Truly Unstoppable.",
    };
};
