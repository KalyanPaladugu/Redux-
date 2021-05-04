# Redux:

+ Redux is predictable state container for JavaScript Applications
+ Redux is not tied to react we can use it for Angular,  vue.js frameworks and vanilla javascript also
+ Redux is a library for JavaScript Applications
+ Redux stores state of application
+ React context - prevents props drilling
+ React context + Reduceris pretty much what redux offer
+ React is UI library and Redux is statemanagement library
+ react-redux is official redux UI binding library for React

Environment steup:
==================
+ create projectfolder
+ Initialize package.json with default setting by using `npm init --yes`
+ `npm install redux` will install dependcies require to use redux functionalities
+ create index.js file for our js code

### Three core components:


+ Store  - A store that hold the state of the application
+ Action - An action that describes the changes in the state of the application
+ reducer - A reducer which acctually carries out the state transition depending on the action


## Actions:
===========
+ The only way your application can interact with the store
+ Carry some information from your app to the redux store
+ Plain javaScript objects
+ Have a property `type` that indicates the type of action being performed
+ The `type` property is typically defined as string constants
+ An action is object with type property


## Reducers:
============
+ specify how the app's state changes in response to actions sent to the store
+ It is a function that accepts state and action as arguments, and returns the next state of the application

+ `(prevState,action)  => newState`

## Store:
=========

+ one store for the application

#### Responsibilities

+ Holds application state
+ Allows access to state via getState()
+ Allows state to be updated via dispatch(action)
+ Registers listeners via subscribe(listener)
+ Handles unregistering of listeners via the function returned by subscribe(listener)
