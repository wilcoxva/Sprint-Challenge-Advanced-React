- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components are still very widely used, as function components are fairly new.

- [ ] Name three lifecycle methods and their purposes.

    Constructor - The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

    Render - The render() method is required, and is the method that actual outputs HTML to the DOM.

    Component did mount - The componentDidMount() method is called after the component is rendered.  This is where you run statements that requires that the component is already placed in the DOM.

- [ ] What is the purpose of a custom hook?

    Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value).

- [ ] Why is it important to test our apps?

    Code testing is important because it helps you find bugs easily.