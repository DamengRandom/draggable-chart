# Create a draggable histogram

## Getting Started

First, install the npm packages before starting the app 

```bash
yarn install
or 
yarn
```

Then, run the local development server:

```bash
yarn run start 
```

## Project Structure (Development/Design roadmap)

1. Implemented <a href="https://danilowoz.com/blog/atomic-design-with-react" target="_blank">Atomtic Design Methodlogy</a> to design React components
  - (Reason): Make folder strcuture easier to be maintained [tidy and clean]
2. Only used styled components for handling dynamic css updating (For instance, update width and height of Y-Axis based on users beahaviour [eg: change value from 10 to 20])
3. Using React hooks & functional components coding style to write the app
4. The core function is under `utils/draggableBar.js` which is handling the drag up/down for the histogram area
5. I didn't use `HTML canvas`, the core reason is for some of canvas elemnts, like `rect` doesn't support synthentic events, like `onChange`, which doesn't allow me to make draggable chart.
6. Decide to use `split view` concept to make histgram draggable happen
7. `ruler` concept for creating dynamic Y Axis based on the value change


## References (What I have learnt)
1. https://stackoverflow.com/questions/12194469/best-way-to-do-a-split-pane-in-html (get an idea for creating draggable histogram bar)
2. https://stackoverflow.com/questions/28805132/how-to-create-vertical-ruler-in-css-html (get an idea to create Y axis)


## Todo list:

This is my 4-5 hours work. Sorry, I have finished 90% functionalities, but about the showing a dashed line for number tracking functionality has no time to do ..


## End

Thank you for trying 😃

Cheers ~
