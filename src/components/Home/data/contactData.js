import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
export const contactData = () => {
    return {
        description:
            "Have A Question Or Want To Work Together? Leave A Message.",
        items: [
            {
                label: "Location",
                value: "Punchbowl, Sydney, Australia",
                icon: <MdLocationPin />,
            },
            {
                label: "Email",
                value: "jubayeralmahmud24@gmail.com",
                icon: <MdEmail />,
            },
            {
                label: "Cell",
                value: "+610416928427",
                icon: <MdPhoneInTalk />,
            },
        ],
    };
};
