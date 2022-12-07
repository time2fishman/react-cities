import React, { useState } from 'react';

const Form = (props) => {
    const [city, setCity] = useState()
    console.log(city);
    const [url, setUrl] = useState()
    console.log(url);

    return (
        <div>
            <h2>Add new image</h2>
            <form>
                <label htmlFor='city'>Enter City</label><br />
                <input type='text' id='city' name='city' onChange={e => setCity(e.target.value)} /><br /><br />
                <label htmlFor='src'>Enter Image URL</label><br />
                <input type='text' id='src' name='src' onChange={e => setUrl(e.target.value)} /><br /><br />
                <input type='submit' id='submit' value='Submit' />
            </form>
        </div>
    );
};

export default Form;