const APIS = [
  {
    id: 1,
    question: "What is Virtual DOM?",
    answer:
      "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the real DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. (or) DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.",
  },
  {
    id: 2,
    question: "What is SPA?",
    answer:
      "Single page application : Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.",
  },
  {
    id: 3,
    question: "What is difference between Functional and Class component?",
    answer:
      "Functional Components:A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.There is no render method used in functional components.Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.React lifecycle methods (for example, componentDidMount) cannot be used in functional components.Hooks can be easily used in functional components to make them Stateful. example: const [name,SetName]= React.useState('').Constructors are not used, Class Component:A class component requires you to extend from React. Component and create a render function which returns a React element.It must have the render() method returning JSX (which is syntactically similar to HTML)Also known as Stateful components because they implement logic and state.React lifecycle methods can be used inside class components (for example componentDidMount).It requires different syntax inside a class component to implement hooks. example: constructor(props) { super(props); this.state = {name: ‘ ‘} }Constructor are used as it needs to store state.",
  },
  {
    id: 4,
    question: "What does mean by state and its use in react?",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.Let's create a user component with message state,State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.",
  },
  {
    id: 5,
    question: "What is JSX and why do we use it instead of js?",
    answer:
      "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax. In the example below text insideJSX or JavaScript XML combines HTML and JavaScript, making the code easier to read and understandable for the user. JSX combines interactivity with markup rather than separating the two. It makes it easier to visualize DOM. In JSX we can directly write HTML tags inside JavaScript code. One of the advantages of JSX is that React creates a virtual DOM (a virtual representation of the page) to track changes and updates. Instead of rewriting the entire HTML, React modifies the DOM of the page whenever the information is updated. This is one of the main issues React was created to solve.",
  },
  {
    id: 6,
    question:
      "What is the Difference between react and react native? Which one is library or framework?",
    answer:
      "React and React Native are developed by Facebook and have gained a huge fan base in a short time. React is known as ReactJs, which is a JavaScript library to build single-page web applications.Besides, React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.React is a JavaScript library of reusable components designed to create skeletons of the apps, whereas React Native is designed to build native mobile apps with reusable components. React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript. Both React and React Native are ruling the industry and are widely used for mobile and web applications. However, the difference between web apps vs websites will not affect your user.",
  },
  {
    id: 7,
    question: "Which one is library or framework?",
    answer:
      "React is an open source JavaScript framework, that isn't actually a framework. But it is currently the most commonly used front-end development technology in the world. React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS 'library'. React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It's based on React, Facebook's JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.",
  },
  {
    id: 8,
    question: "Why is react a library and react-native a framework?",
    answer:
      "Reactjs, eventually, is a JavaScript library, which enables the programmer to create an engaging and high performing UI Layer while React Native is an entire framework for building cross-platform apps, be it web, iOS or Android.",
  },
  {
    id: 9,
    question: "What is the package name you are using for routing?",
    answer:
      "React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.In this Browser Router as Router, Routes and Route and NavLink get imported from react-router-dom. React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.",
  },
  {
    id: 10,
    question: "What is package.json?",
    answer:
      "It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project.",
  },

  {
    id: 11,
    question: "What is lazy loading in react ?",
    answer:
      "In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.Example:An example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport. An example of image lazy-loading in action.Benefits: The benefits of lazy loading include: Reduces initial load time Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation Lazy loading conserves bandwidth by delivering content to users only if it's requested.",
  },
  {
    id: 12,
    question: "Difference b/w Stateful and stateless Component.",
    answer:
      "Stateless:If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless we need to use a lifecycle hook in your components, we should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether. && Stateful: If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor. class App extends Component { constructor(props) { super(props) this.state = { count: 0 } }",
  },

  {
    id: 13,
    question: "How do you switch one component to another?",
    answer:
      "Stateless:If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless we need to use a lifecycle hook in your components, we should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether. && Stateful: If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor. class App extends Component { constructor(props) { super(props) this.state = { count: 0 } }",
  },

  {
    id: 14,
    question: "Difference between Axios and fetch.?",
    answer:
      "Axios :Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests. & Fetch:  The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request.",
  },

  {
    id: 15,
    question: "What are React Life cycles? Explain each one with Example.",
    answer:
      "Mounting : When an instance of a component is being created and inserted into the DOM. Updating : When a component is being re-render as a result of changes to either its props or state Unmounting : When a component is being removed from the DOM Mounting :constructor static getDerivedStateFromProps render componentDidMount Updating :static getDerivedStateFromProps shouldComponentUpdate  render  getSnapshotBeforeUpdate componentDidUpdate Unmounting :componentWillUnmount",
  },

  {
    id: 16,
    question: "What is UseState Hook ?(Implementation)",
    answer:
      "The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.",
  },

  {
    id: 17,
    question: "What is useEffect Hook ?(Implementation)",
    answer:
      "useEffect :It allows us to implement all of the lifecycle hooks from within a single function API. // this will run when the component mounts and anytime the stateful data changes React.useEffect(() => { alert('Hey, Nads here!'); }); // this will run, when the component is first initialized React.useEffect(() => { alert('Hey, Nads here!'); }, []); // this will run only when count state changes React.useEffect(() => { fetch('nads').then(() => setLoaded(true)); }, [count]); // this will run when the component is destroyed or before the component is removed from UI. React.useEffect(() => { alert('Hey, Nads here'); return () => alert('Goodbye Component'); });",
  },

  {
    id: 18,
    question: "What is UseReducer Hook ?(Implementation)",
    answer:
      "It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.",
  },

  {
    id: 19,
    question: "What is UseMemo Hook ?(Implementation)",
    answer:
      "The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.",
  },

  {
    id: 20,
    question: "What is Context api?",
    answer:
      "The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. (or) Context provides a way to pass data through the component tree without having to pass props down manually at every level.For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components",
  },

  {
    id: 21,
    question: "Difference between callback and useCall back Hook ?",
    answer:
      "callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.",
  },

  {
    id: 22,
    question: "What is Props Drilling Concept ?What is State Uplifting ?",
    answer:
      "Prop Drilling : It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around. && State Uplifting: When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.",
  },

  {
    id: 23,
    question: "Difference between useEffect and useContext ?",
    answer:
      "useEffect : It allows us to implement all of the lifecycle hooks from within a single function API. // this will run when the component mounts and anytime the stateful data changes React.useEffect(() => { alert('Hey, Nads here!'); });// this will run, when the component is first initialized React.useEffect(() => { alert('Hey, Nads here!'); }, []);// this will run only when count state changes React.useEffect(() => { fetch('nads').then(() => setLoaded(true)); }, [count]);// this will run when the component is destroyed or before the component is removed from UI. React.useEffect(() => { alert('Hey, Nads here'); return () => alert('Goodbye Component'); }); && useContext : This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props. It basically removes prop-drilling const ans = { right: '✅', wrong: '❌' }",
  },

  {
    id: 24,
    question: " High Order Component in react js ?",
    answer:
      "A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature. We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. const EnhancedComponent = higherOrderComponent(WrappedComponent)",
  },

  {
    id: 25,
    question:
      "Do you know about SEO ? Is it true that react js supports SEO support?",
    answer:
      "Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic. React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.",
  },

  {
    id: 26,
    question: "clean up in useEffect.",
    answer:
      "clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks. //componentWillUnmount : Cleanup function in useEffect. useEffect(() =>{ console.log('Inside useEffect hook');",
  },

  {
    id: 27,
    question: "What is the use of useMemo and useCallback?",
    answer:
      "Use of useMemo: React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. && Use of useCallback: useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
  },

  {
    id: 28,
    question: "Why do we need keys in react less?",
    answer:
      "The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as Unique IDs are the best value to assign to keys. (or) 'Key' prop is used to look pretty, and there is no benefit whatsoever. 'Key' prop is a way for React to identify a newly added item in a list and compare it during the 'diffing' algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.",
  },

  {
    id: 29,
    question: "Do you know about redux?",
    answer:
      "Redux is a pattern and library for managing and updating application state, using events called actions. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Here is a small example of react and Redux application. You can also try developing small apps. Sample code for increase or decrease counter is given below − This is the root file which is responsible for the creation of store and rendering our react app component. /src/index.",
  },

  {
    id: 30,
    question: "Have you used redux?",
    answer:
      "Yes, i used in react-redux: Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.",
  },

  {
    id: 31,
    question: "Is react library or frameworks?",
    answer:
      "React is Library. many React-based frameworks have cropped up in recent years to provide developers with a more powerful set of built-in tools. These allow you to build projects faster without needing as many third-party libraries. Some of the most popular of these frameworks include Next.We can store of our libraries and third party one in package-lock.json",
  },

  {
    id: 32,
    question: "How to pass props in components?",
    answer:
      "That’s because you don’t want to have a component rendering static data, but pass dynamic data to your component instead. That’s where React’s props come into play. You can pass data in React by defining custom HTML attributes to which you assign your data with JSX syntax. So don’t forget the curly braces.",
  },

  {
    id: 33,
    question: "What is an event in react?",
    answer:
      "An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events. React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.",
  },

  {
    id: 34,
    question: "What is the difference between states and props?",
    answer:
      "Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.",
  },

  {
    id: 35,
    question: "What is memory leak and how to overcome?",
    answer:
      "Memory leak occurs when programmers create a memory in heap and forget to delete it. The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly . Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.",
  },

  {
    id: 36,
    question: "Do you prefer function-based or class component and why ?",
    answer:
      "Functional Component. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components.",
  },

  {
    id: 37,
    question: " Explain reducer as pure function in redux?",
    answer:
      "In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action. (previousState, action) => newState",
  },

  {
    id: 38,
    question: "Why do we use redux thunk?",
    answer:
      "The most common use case for Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API. Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.",
  },

  {
    id: 23,
    question: "What do you know about NPM?",
    answer:
      "NPM stands for 'Node Package Module',npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well. npm consists of three distinct components: the website, the Command Line Interface (CLI), the registry",
  },

 
];

export default APIS;
