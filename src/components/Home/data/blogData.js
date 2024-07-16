import blog1 from "../../../assets/images/projects/arrayLogo.jpeg";
import blog2 from "../../../assets/images/projects/block-bindings.png";
import blog3 from "../../../assets/images/projects/reactFandamental.png";
export const blogData = () => {
    return {
        description:
            "Exploring the World Through Words: Dive into captivating stories, insightful perspectives, and fascinating discoveries in my blog section. Join us on a journey of knowledge, inspiration, and endless possibilities. Uncover the hidden gems of wisdom that await within our virtual pages.",
        items: [
            {
                title: "A Brief Note on JavaScript Array",
                description:
                    "Discover the power and versatility of JavaScript arrays with our comprehensive guide. From basic operations to advanced techniques, gain a brief yet insightful understanding of this fundamental data structure in web development.",
                link: "https://jubayeralmahmud24.medium.com/a-brief-note-on-javascript-array-acce885ba5de",
                src: blog1,
                alt: "blog-1",
            },
            {
                title: "A glance at JavaScript Block Bindings",
                description:
                    "Take a quick glance at JavaScript block bindings and explore the wonders of let, const, and block scope. Uncover the benefits and best practices of utilizing these powerful features to enhance your coding experience.",
                link: "https://jubayeralmahmud24.medium.com/a-glance-at-javascript-block-bindings-aa602f0c7777",
                src: blog2,
                alt: "blog-2",
            },
            {
                title: "Things you need to know about React js",
                description:
                    "Dive into the world of React JS and uncover the essential knowledge every developer should have. From component-based architecture to virtual DOM, gain valuable insights to master the art of building dynamic and interactive user interfaces.",
                link: "https://jubayeralmahmud24.medium.com/things-you-need-to-know-about-react-js-d9df345b9bee",
                src: blog3,
                alt: "blog-3",
            },
        ],
    };
};
