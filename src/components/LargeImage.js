import React from 'react';

const LargeImage = (props) => {
    return (
        <img
            className={props.currentImage.class}
            id='bigimage'
            src={props.currentImage.src}
            alt={props.currentImage.alt}
        />
    );
};

export default LargeImage;