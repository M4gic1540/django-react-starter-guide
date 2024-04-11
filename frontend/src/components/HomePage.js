import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage"; // Importa el componente AboutPage
import ContactPage from "./ContactPage"; // Importa el componente ContactPage

export default class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage /> {/* Renderiza el componente AboutPage en la ruta "/about" */}
          </Route>
          <Route path="/contact">
            <ContactPage /> {/* Renderiza el componente ContactPage en la ruta "/contact" */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return <h2>This is the Home page</h2>;
}
