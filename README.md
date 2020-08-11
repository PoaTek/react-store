# react-store
Storing data in React with context API.
## What is react store?
React store is a context wrapper to hold a variable combined with a architecture to organize data flux. The core of the store is mutation of the stored variable and react updating after the mutation is done, this behaviour can be achieved with four key functionalities:
* Getting the instance of the stored variable from anywhere.
* Mutating the stored variable instance.
* Listening to the store to trigger a re-render in the component.
* Notifying listeners for changes in the store.

If you are not familiar with React's context API, read more about in [React documentation](https://pt-br.reactjs.org/docs/context.html) because we inherit his behaviour and functionality. 

### Beyond context
 
We chnaged the functionality to behave more like a global variable by preserving the instance of the stored variable after the provider is dismounted, but still protected by the hierachy of context.

## Action based architecture

This wrapper alone provides a lot of freedom to manage your data inside your application, but freedom comes at a cost. It may lead to a lack of pattern, untracked side effects and mostly a bad way to organize the mutations and notify calls. To solve this problems we created simple rules to manage mutations, simply by isolating inside of a well defined purpose function that does one job only. Since the attributes inside your stored object have meaning and belongs together, it would have multiple defined ways to mutate this collection of varaibles, we can call it a **Action**. This actions functions follow simple defined rules:
* Shouldn't return a value
* May recieve any number of parameters
* Must have a single purpose, multiple purposes can be isolated then chained in the action call
* Should notify changes after every sinchronous block, since it will be done in one react render call, multiple calls of notify will be compressed into one re-render.

You can find examples in the examples folder.