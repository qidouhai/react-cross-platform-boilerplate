<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [CounterContainer](#countercontainer)
-   [CountActions](#countactions)
    -   [decrement](#decrement)
    -   [increment](#increment)
    -   [reset](#reset)
-   [countReducer](#countreducer)
-   [Counter](#counter)

## CounterContainer

Container component that provides a presentational component the listed props.

**Properties**

-   `props` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `props.count` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
    -   `props.onClickDecrement` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
    -   `props.onClickIncrement` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
    -   `props.onClickReset` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 

## CountActions

Actions file for changing the count.

### decrement

Decrements the count by one.

### increment

Increments the count by one.

### reset

Resets the count to 0.

## countReducer

The count reducer

**Parameters**

-   `state` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The current state (optional, default `0`)
-   `action` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The action to process
    -   `action.type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The type of the action

## Counter

Counter presentational component.

**Parameters**

-   `props` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `props.onClickIncrement` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
    -   `props.onClickDecrement` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
    -   `props.onClickReset` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
    -   `props.count` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
