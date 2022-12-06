## React Cities

Convert the following [CodePen](https://codepen.io/jkeohan/pen/850f8454693590e9772f8d0f6c2f44c8) into a React app. Additionally, your app should have a form for the user to add their own image.

1. Create the following Components and organize based on the below hierarchy:
    - App
      - Form (this is not in the CodePen)
      - SmallImage
      - LargeImage

1. Make a state variable in App that holds an array of image urls, call it `images`. Use the `images` array to generate a list of SmallImage components. Build out the SmallImage component, so it displays the image passed to it through a prop called `image`.

1. Make a state variable in App that holds the current image url, call it `currentImage`. Build out the LargeImage component, so it displays the `currentImage`.

1. Add an onClick event to SmallImage that updates `currentImage` to match the SmallImage that is clicked. You will need to pass `currentImage`'s update function to each SmallImage component through props.

1. Build out the Form component with a form that has a text input.

1. Make a state variable in Form to track what the user types in the text input. Add an onChange function to the input to update that state variable.

1. Build a function in App that will handle when the form submits, call it `handleSubmit`. `handleSubmit` should add an image to the `images` array. Pass `handleSubmit` to the Form component and connect it to the form's onSubmit event.