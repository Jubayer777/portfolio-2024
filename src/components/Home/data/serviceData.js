import frontendIcon from "../../../assets/images/frontend.png";
import uiIcon from "../../../assets/images/uiux.png";
import backendIcon from "../../../assets/images/backend.png";
import responsiveIcon from "../../../assets/images/responsive.png";
import customization from "../../../assets/images/custom.png";
import deployment from "../../../assets/images/deployment.png";
export const serviceData = () => {
    return {
        description:
            "As a full-stack software developer, I bring expertise in both front-end and back-end development, ensuring comprehensive solutions for your software needs. With a deep understanding of various programming languages, frameworks, and databases, I deliver efficient and scalable applications that cater to your specific requirements. From user-friendly interfaces to robust server-side functionality, I provide end-to-end development services that drive innovation and enhance user experiences.",
        items: [
            {
                title: "User Friendly UI/UX",
                description:
                    "Creating intuitive interfaces that delight users and enhance their experience",
                icon: uiIcon,
            },
            {
                title: "Frontend Development",
                description:
                    "Transforming designs into interactive digital experiences",
                icon: frontendIcon,
            },
            {
                title: "Backend Development",
                description:
                    "Powering applications with robust and efficient server-side functionality",
                icon: backendIcon,
            },
            {
                title: "Responsive Design",
                description:
                    "Adapting seamlessly to every device, delivering a consistent and optimal user experience",
                icon: responsiveIcon,
            },
            {
                title: "Software Customization",
                description:
                    "Tailoring solutions to meet unique business needs, unlocking the full potential of technology",
                icon: customization,
            },
            {
                title: "Deployment and Maintenance",
                description:
                    "Ensuring smooth and reliable operation of software systems throughout their lifecycle",
                icon: deployment,
            },
        ],
    };
};
