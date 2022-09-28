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
];

export default APIS;