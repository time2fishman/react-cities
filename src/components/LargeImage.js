const LargeImage = (props) => {
    // JSX
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