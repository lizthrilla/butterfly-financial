import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home'

const Index = () => {
  return <Home />
}

const About = () => {
  return <h3>About</h3>
}

const Book = () => {
  return <h3>Life, Health and Annuity Reinsurance</h3>
}

const Resources = () => {
  return <h3>Resources</h3>
}

const Services = () => {
  return <h3>Services</h3>
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Butterfly Financial Consultants</Link>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/life-health-annuity/">Life, Health & Annuity</Link>
            </li>
            <li>
              <Link to="/resources/">Resources</Link>
            </li>
            <li>
            <Link to="/about/">About</Link>
          </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/services/" component={Services} />
        <Route path="/life-health-annuity/" component={Book} />
        <Route path="/resources/" component={Resources} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  )
}

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
