import React, { Component } from "react";
import logo from "../Assets/img/logo.png";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
//importing pages

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Services/Service";
import Portfolio from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasClass: false,
      isActive: false,
    };
  }

  toggleClass = () => {
    this.setState({ hasClass: !this.state.hasClass });
  };
  render() {
    return (
      <header>
        <div className="main">
          <img src={logo} alt="overtake consulting" />
          <div className="main__burger" onClick={this.toggleClass}>
            <div className="main__burger--icon"></div>
          </div>
        </div>

        <Router>
          <nav className={this.state.hasClass ? "open" : null}>
            <ul className="menu-nav">
              <li className="menu-nav__item ">
                <NavLink
                  exact={true}
                  to="/"
                  className="menu-nav__link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-nav__item">
                <NavLink
                  to="/about"
                  className="menu-nav__link"
                  activeClassName="active"
                >
                  About us
                </NavLink>
              </li>
              <li className="menu-nav__item">
                <NavLink
                  to="/service"
                  className="menu-nav__link"
                  activeClassName="active"
                >
                  Services
                </NavLink>
              </li>
              <li className="menu-nav__item">
                <NavLink
                  to="/portfolio"
                  className="menu-nav__link"
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="menu-nav__item">
                <NavLink
                  to="/pricing"
                  activeClassName="active"
                  className="menu-nav__link"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="menu-nav__item">
                <NavLink
                  to="/contact"
                  className="menu-nav__link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/Pricing">
              <Pricing />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </header>
    );
  }
}

export default Navbar;
