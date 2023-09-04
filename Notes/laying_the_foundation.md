# Laying the Foundation

- **React Element** - It is a kind of an html element but not exactly an html element. React element is basically an Object at the end of the day. ***When we render this element on the DOM then it becomes an HTML element***

        React element => Object => HTML element

- **JSX** - Javascript XML - **JSX is not HTML** it is HTML like syntax.

        - creating element using core react
        const heading = React.createElement("h1", {}, "text")

        - creating element using JSX
        const heading = <h1>Text</h1>

        Note: on console.log both will return the same react object


- **JSX code is not a vlaid javascript syntax** - js engine understands only ES6 syntax code. JSX code is transpiled before it goes to the JS engine. This transpiling of code is done by parcel. Parcel is like manager for our code. Parcel gives this task to **Babel**
        
        JSX code => transpiled by => Parcel => Gives task to Babel for transpiling code.

- **Working of react element**

        React.createElement => React element => JS object => converts to HTMl element on render to DOM

- **Working of JSX**

        JSX code => transpiled to React.createElement => JS object => converts to HTML element on render to DOM.

- **Babel**

        - trasnpiler that converts ECMASCRIPT2015 code into backwards compatible code 
        - trasnforms syntax
        - polyfills

- **Functional Component**  - A javascript function that is returning a piece of JSX 

- **Component Composition** - composiing 2 components into one another. Calling one component inside another component.