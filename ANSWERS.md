- [ ] Why would you use class component over function components (removing hooks from the question)?

Better control of state! You can delcare it once, manipulate more aspects of it and use it throughout the app to manipulate it as needed. I personally feel like I can see the flow of how state moves more thoroughly in class components. Hooks however, are definitely great for cleaner code. 
- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount - only called once in the entire lifecycle, signaling that the component has mounted/rendered properly! It's a great place for things like API calls!

2. componentDidUpdate- This method triggers when state changes/DOM elements are re-rendered. It's important to remember dependency arrays here when using handleChange operations here!

3. componentWillUnmount- a final operation opportunity right before the death of the entire component lifecycle. Right before it dies it can execute any "clean-up" operations put in!

- [ ] What is the purpose of a custom hook?
to keep code DRY! Re-using logical state manipulators etc throughout an app is not only great for keeping things concise, it's time saving as well! reusability is key!

- [ ] Why is it important to test our apps?
To help spot any potential minor bugs that can create a bigger issue later. Clearing bugs and major issues before production saves a LOT of a time later on rather than trying to find and troubleshoot bugs at production stage. Kill one bug....3 more crawl out....