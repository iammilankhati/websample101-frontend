import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="footer__upper">
            <div className="contact">
              <h2>Our Contact</h2>
              <h4>Overtake company Inc</h4>
              <p>
                JC Main Road, Near Silnile tower <br /> Pin-21543 NewYork Us.
                <br />
                <FontAwesomeIcon icon={["fas", "phone"]} /> (123)
                456-789-1255-4526{" "}
              </p>
              <p>email@emailmilankc.com</p>
            </div>
            <Router>
              <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/latestEvents">latest Events</Link>
                  </li>
                  <li>
                    <Link to="/termsAndConditions">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privaryPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/Career">Career</Link>
                  </li>
                  <li>
                    <Link to="/contactUs">Contact us</Link>
                  </li>
                </ul>
              </div>

              <Switch>
                <Route path="/lastestEvents">
                  <Home />
                </Route>
                <Route path="/termsAndConditions">
                  <Home />
                </Route>
                <Route path="/privacyPolicy">
                  <Home />
                </Route>
                <Route path="/Career">
                  <Home />
                </Route>
                <Route path="/contactUs">
                  <Home />
                </Route>
              </Switch>
            </Router>

            <div className="latest-posts">
              <h2>Latest posts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis temporibus inventore non laboriosam eius nulla ipsa
                dicta saepe doloremque facere voluptatem voluptates at
                voluptatum ratione
              </p>
            </div>
            <div className="recent-news">
              <h2>Recent News</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nostrum porro facere debitis ea, quisquam tempore? Totam sequi
                accusantium enim.
              </p>
            </div>
          </div>
          <div className="copyrights">
            <div className="copyrights__text">
              &copy;Overtake 2021 All rights reserved. By Milan Kc
            </div>
            <Router>
              <div className="social-icons">
                <Link to="/facebook">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "facebook"]}
                    size="2x"
                  />{" "}
                </Link>
                <Link to="/twitter">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "twitter"]}
                    size="2x"
                  />{" "}
                </Link>
                <Link to="/linkedin">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "linkedin"]}
                    size="2x"
                  />{" "}
                </Link>
                <Link to="/pinterest">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "pinterest"]}
                    size="2x"
                  />{" "}
                </Link>
                <Link to="/google">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "google"]}
                    size="2x"
                  />{" "}
                </Link>
              </div>
              <Switch>
                <Route path="/facebook">
                  <Home />
                </Route>
                <Route path="/twitter">
                  <Home />
                </Route>
                <Route path="/linkedin">
                  <Home />
                </Route>
                <Route path="/pinterest">
                  <Home />
                </Route>
                <Route path="/google">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
