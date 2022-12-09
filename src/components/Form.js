import { useState } from 'react';

const Form = (props) => {
    // STATE
    const [city, setCity] = useState()
    const [url, setUrl] = useState()

    // EVENT HANDLER FUNCTIONS
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setImages((current) => [...current, { class: 'thumb', id: city, src: url, alt: city }])
        setCity('')
        setUrl('')
    }

    // JSX
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new image</h2>
            <label htmlFor='city'>Enter City</label><br />
            <input type='text' id='city' name='city' onChange={e => setCity(e.target.value)} value={city} /><br /><br />
            <label htmlFor='src'>Enter Image URL</label><br />
            <input type='text' id='src' name='src' onChange={e => setUrl(e.target.value)} value={url} /><br /><br />
            <input type='submit' id='submit' value='Submit' />
        </form>
    );
};

export default Form;