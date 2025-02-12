import React from "react";

const GoogleMap = () => {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5771570452002!2d151.0579837!3d-33.92628080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bbfb461402d7%3A0x447428e67d61571a!2sUnit%2074%2F20%20Matthews%20St%2C%20Punchbowl%20NSW%202196!5e0!3m2!1sen!2sau!4v1739331204677!5m2!1sen!2sau"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="jubayer"
            />
        </div>
    );
};

export default GoogleMap;
