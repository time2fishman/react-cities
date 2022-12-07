import React from 'react';

const SmallImage = (props) => {
    if (props.image.id !== 'bigimage') {
        return (
            <img
                onClick={() => props.setCurrentImage(props.image)}
                className={props.image.class}
                id={props.image.id}
                src={props.image.src}
                alt={props.image.alt}
            />
        )
    } else {
        return null
    }
};

export default SmallImage;