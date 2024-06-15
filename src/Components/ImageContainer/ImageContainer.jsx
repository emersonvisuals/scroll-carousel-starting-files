import React from "react";
import "./imagecontainer.css";

const ImageContainer = ({ imageSource, description }) => {
    return (
        <div className="image-container">
            <img className="image" src={imageSource} alt="alt text goes here" />
            <p className="date">{description}</p>
        </div>
    );
};

export default ImageContainer;
