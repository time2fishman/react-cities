import { useState } from 'react'
import './App.css';
import LargeImage from './components/LargeImage';
import SmallImage from './components/SmallImage';


function App() {

  // IMAGE DATA
  const imageData = [
    {
      class: 'thumb',
      id: 'london',
      src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'london',
    },
    {
      class: 'thumb',
      id: 'amsterdam',
      src: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'amsterdam',
    },
    {
      class: 'thumb',
      id: 'sidney',
      src: 'https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'sidney',
    },
    {
      class: 'thumb',
      id: 'tokyo',
      src: 'https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'tokyo',
    },
    {
      class: 'thumb',
      id: 'dallas',
      src: 'https://images.unsplash.com/photo-1592409065737-a253f2900fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'dallas',
    },
    {
      class: 'thumb',
      id: 'paris',
      src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      alt: 'paris',
    },
    {
      class: 'thumb',
      id: 'athens',
      src: 'https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'athens',
    },
    {
      class: 'thumb',
      id: 'dubai',
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'dubai',
    },
    {
      class: 'thumb',
      id: 'bigimage',
      src: 'https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      alt: 'bigimage',
    },
  ]

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
        <LargeImage currentImage={currentImage} />
      </div>
    </div>
  );
}

export default App;
