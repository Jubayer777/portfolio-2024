import { calculateYears } from "../../../utils.js/yearsCalculator";

export const generalData = () => {
    return {
        name: "Jubayer Al Alam",
        designation: "Software Engineer",
        gitLink: "https://github.com/Jubayer777",
        infos: [
            {
                label: "Age",
                value: calculateYears("1998-07-30"),
            },
            {
                label: "Residence",
                value: "Bangladesh",
            },
            {
                label: "Freelance",
                value: "Available",
                isGreen: true,
            },
            {
                label: "Address",
                value: "Dhaka, Bangladesh",
            },
        ],
    };
};
