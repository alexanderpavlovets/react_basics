# Star DB app

## How to run:
- npm install 
- npm start
- open localhost:3000 in the browser

___

## Advices: 

### Common:
- Always handle "error" and "loading"
- IMPORTANT. Sigle responsibility. Separate logic and rendering. One component only contains JSX, another - logic wherther show first one or not.

### API:
- React doesn't know anything about server. It just rendering the data. 
- Isolate API logic from Components. Components should only receive data. 
- If needed, transform data before pass it to the component.

___

## Component life-cycles (not full):
MOUNTING: 

constructor() => render => componentDidMount()

UPDATES:

New Props | setState => render() => componentDidUpdate(prevProps, prevState)

UNMOUNTING:

componentWillUnmount() // good place for clearing intervals for example. Removing possible memory leaks.

ERROR:

componentDidCatch(err, info) // Error boundary. If declared in App (higher level) will down all app, if declared lower - only components that lower in hierarchy

Work for errors of rendering and errors in lifeCycleHooks! Do not work with async code errors (API and event listeners for ex.) 

___

// 71