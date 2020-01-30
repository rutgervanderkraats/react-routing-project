import React from 'react';
import '../../App.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Home page</h1>

            <h2>Setting up the React Router package</h2>
            <p className="app">
                1. $ npm install react-router-dom<br />
                Or $ yarn add react-router-dom<br />
                2. Check if package has been added to your package.json, in dependencies<br />
            </p>

            <h2>Setting up the Page Routing</h2>
            <p>
                3. In App.js import the named exports: "BrowserRouter", "Switch" and "Route" from "react-router-dom"<br />
                Now you can add your routing in the App.js file.<br />
                4. In the Route components, add 3 parameters; "path" - which will be the url, "component" - the page component and "exact".<br />
                Because "/" is not only present in the homepage-path but also in "about" and "contact", it'll display the content from the homepage on all pages.<br /> 
                You can fix this with "exact"<br />
                5. Switch will prevent the Error page component being visible on all other pages, because it has no specified path -could be any path.
            </p>

            <h2>Setting up the Navigation</h2>
            <p>
                7. Create a Navigation component and import NavLink from react-router-dom.
                8. The NavLink element takes in only one parameter, the "to", which is the same as path.
            </p>
            <p><strong>Happy Routing!</strong></p>
        </div>
    )
};

export default Home;