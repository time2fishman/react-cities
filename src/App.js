import { useState } from 'react'
import SmallImage from './components/SmallImage';
import LargeImage from './components/LargeImage';
import Form from './components/Form';
import imageData from './data/imageData'
import './App.css';


const App = () => {
  // STATE
  const [images, setImages] = useState(imageData)
  const [currentImage, setCurrentImage] = useState(imageData[0])

  // JSX
  return (
    <div className="wrapper">
      <h1>React Cities</h1>
      <div id='thumbnails'>
        {images.map((element, index) => {
          return <SmallImage setCurrentImage={setCurrentImage} image={element} key={index} />
        })}
      </div>
      <div>
        <LargeImage currentImage={currentImage} />
      </div>
      <Form setImages={setImages} />
    </div>
  );
}

export default App;
