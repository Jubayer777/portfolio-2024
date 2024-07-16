import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
export const contactData = () => {
    return {
        description:
            "Have A Question Or Want To Work Together? Leave A Message.",
        items: [
            {
                label: "Location",
                value: "Notunbazar,Gulshan,Dhaka,Bangladesh",
                icon: <MdLocationPin />,
            },
            {
                label: "Email",
                value: "jubayeralmahmud24@gmail.com",
                icon: <MdEmail />,
            },
            {
                label: "Cell",
                value: "+8801604118323",
                icon: <MdPhoneInTalk />,
            },
        ],
    };
};
