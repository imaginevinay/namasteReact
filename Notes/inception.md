CDN : content delivery network - used for hosting files and images over the server for blazing fast access

crossorigin : this attribute sets the mode of request to HTTP CORS Request
CORS (Cross-origin-resource-sharing) - cross origin request is a request to load/access a resource on a different domain/ it is used to handle cors request that checks if it is safe to allow access to this incomming request 

react and react-DOM : 

react.development.js : core react framework
react-dom.js: react library useful for DOM operations/ modify the DOM

React.createElement() - creates an element inside react which is a core react thing

ReactDOM.createRoot() - this helps to render the root on the browser hence we use react-dom for this

why 2 sperate files ? react does not only work for browser react also works on phones called as react-native. 

so there are different functions used in browsers as compared to mobile hence we get react and react-dom seperately

compile process: 

1. React.createElement(<tag>, {<attributes>}, <children>) - this react api creates and object of react element. 
2. ReactDOM.createRoot(document.getElementById('root')) - capture the div with id root in index.html page
3. root.render(<>) - this will convert the react element into an html tag that the browser can understand and render on the webpage

React.createElement(<tag>, {<attributes>}, [<child1>, <child2>, ...]) - When you want to pass 2 or more tags as children/siblings then you pass it in a comma seprated array

now adding multiple siblings might become tedious to code hence we use JSX to simplify this problem : JSX (javascript XML)