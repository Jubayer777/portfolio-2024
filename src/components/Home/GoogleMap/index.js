import React from "react";

const GoogleMap = () => {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58409.09178528365!2d90.42765725122128!3d23.798384656633175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f83f511d3d%3A0xe2192389e17049f0!2sNotun%20Bazar!5e0!3m2!1sen!2sbd!4v1687502009673!5m2!1sen!2sbd"
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
