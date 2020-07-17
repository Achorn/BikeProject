import React from "react";
import "./App.css";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <Blog />
      <ol>
        <li>
          <strike>Create Redux store which will store our news</strike>
        </li>
        <li>
          <strike>
            Create 2 React components - Blog & Post, Blog will render list of
            posts
          </strike>
        </li>
        <li>
          <strike>
            Install Material UI and follow their guides to set up it for React
            project
          </strike>
        </li>
        <strike>
          <li>Use Card component in our Post component</li>
        </strike>
        <li>
          <strike>
            Connect Blog component with Redux and map over our posts to render
            list of Posts
          </strike>
        </li>
      </ol>
    </div>
  );
}

export default App;
