import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="">
      <div className="App">

      <Route exact path="/" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/projects" component={Projects} />

        <div className="navigation">
            <Link to="/" className="item">About</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
          </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
