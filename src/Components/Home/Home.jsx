import React, { Component } from "react";
import Footer from "./Footer";
//import Navbar from "../Navbar/Navbar";
import OurClients from "./OurClients";
import OurTeam from "./OurTeam";
import Services from "./Services";
import ScrollToTop from "../scrollToTop/Index";
import Banner from "../Banner";

export class Home extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Banner />
        <Services />
        <OurTeam />
        <OurClients />
        <Footer />
      </div>
    );
  }
}

export default Home;
