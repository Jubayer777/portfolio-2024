import plumbPerfect from "../../../assets/images/projects/plumbperfect.png";
import sunrise from "../../../assets/images/projects/sunrise.png";
import fantasy from "../../../assets/images/projects/fantasy.png";
export const projectData = () => {
    return {
        description:
            "My projects showcase a diverse range of software solutions, highlighting my versatility as a full-stack developer. From creating responsive web applications to designing efficient database systems, each project demonstrates my commitment to delivering high-quality and impactful solutions. Explore my portfolio to witness the seamless integration of creativity, functionality, and technical expertise in my work.",
        items: [
            {
                title: "Plumb Perfect",
                time: "January - March (2021)",
                description:
                    "Plumb Perfect: An online plumbing service provider built with React, Bootstrap, and CSS. Users can browse and book from a range of plumbing services after logging in. Admins have full control over data management, while Stripe integration enables secure payments. With a responsive design, Plumb Perfect offers a seamless experience across all devices.",
                features: [
                    "Online plumbing service provider",
                    "Varied plumbing services",
                    "Attractive UI Design",
                    "React, Bootstrap, CSS",
                    "MongoDB, Express JS.",
                    "Firebase authentication",
                    "Private routes",
                    "User login required",
                    "Separate admin dashboard",
                ],
                gitLink: "https://github.com/Jubayer777/Plumb-perfect-client",
                liveLink: "https://plumb-perfect.netlify.app/",
                src: plumbPerfect,
                alt: "plumb-perfect",
            },
            {
                title: "Sunrise Mart",
                time: "March - Jun (2021)",
                description:
                    "Sunrise Mart is an online grocery shop that offers a wide range of products. Utilizing React, Bootstrap, and CSS, users can explore and purchase groceries after logging in. The project features dynamic product display, user-specific data management, and order history generation. With a fully responsive design, Sunrise Mart ensures a seamless shopping experience across all devices.",
                features: [
                    "Online grocery shop",
                    "Varied grocery products.",
                    "Attractive UI Design",
                    "React, Bootstrap, CSS",
                    "MongoDB, Express JS",
                    "Firebase authentication",
                    "Private routes",
                    "User login required",
                    "Dynamic product display",
                ],
                gitLink: "https://github.com/Jubayer777/Sunrise-mart-client",
                liveLink: "https://sunrise-mart.netlify.app/",
                src: sunrise,
                alt: "sunrise-mart",
            },
            {
                title: "Fantasy Games",
                time: "July - September (2021)",
                description:
                    "Fantasy Games is a project that provides detailed information about sports leagues. Built with React, React-bootstrap, CSS, and React-routing, it utilizes a sports API to collect and display league data. The user can explore each league in detail, with dynamic banners, logos, and league data cards. The project is fully responsive, ensuring a seamless experience across all devices.",
                features: [
                    "Sports league details",
                    "Multiple sports leagues",
                    "Dynamic league details",
                    "English and French language",
                    "Attractive UI Design",
                    "Home page banner",
                    "React, React-bootstrap, CSS",
                    "Sports API integration",
                    "Fully responsive design",
                ],
                gitLink: "https://github.com/Jubayer777/Fantasy-games",
                liveLink: "https://fantasy-games.netlify.app/",
                src: fantasy,
                alt: "fantasy-games",
            },
        ],
    };
};
