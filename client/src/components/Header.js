import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/Header.css";
import Logo from "../images/home/overture_logo.svg";

class Header extends Component {
  state = {
    hamburger: false,
  };

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.userway.org/widget.js";
    script.async = true;

    document.body.appendChild(script);
  }

  handleClick = (boolean) => {
    this.setState({ hamburger: boolean });
  };

  colorChange = (links) => {
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll(".nav-links")[i].style.color = "white";
    }
    var changeLink = document.getElementById(links);
    changeLink.style.color = "#ef7521";
  };

  clearAll = () => {
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll(".nav-links")[i].style.color = "white";
    }
  };

  render() {
    if (this.state.hamburger) return <Hamburger noCheese={this.handleClick} />;

    return (
      <div className="headers-div">
        <div className="container header-desktop">
          <div className="row">
            <div className="col-md-4">
              <Link to="/" onClick={() => this.colorChange("home-link")}>
                <img
                  src={Logo}
                  style={{ width: "234px", marginTop: "5px" }}
                  alt="main-logo"
                />
              </Link>
            </div>
            <div className="col-md-8">
              <nav>
                <Link
                  id="home-link"
                  className="nav-links"
                  to="/"
                  onClick={() => this.colorChange("home-link")}
                >
                  HOME
                </Link>
                <Link
                  id="about-link"
                  className="nav-links"
                  to="/about"
                  onClick={() => this.colorChange("about-link")}
                >
                  ABOUT
                </Link>
                <Link
                  id="team-link"
                  className="nav-links"
                  to="/team"
                  onClick={() => this.colorChange("team-link")}
                >
                  TEAM
                </Link>
                <Link
                  id="work-link"
                  className="nav-links"
                  to="/work"
                  onClick={() => this.colorChange("work-link")}
                >
                  WORK
                </Link>
                <Link
                  id="csr-link"
                  className="nav-links"
                  to="/csr"
                  onClick={() => this.colorChange("csr-link")}
                >
                  CSR
                </Link>
                <Link
                  id="careers-link"
                  className="nav-links"
                  to="/careers"
                  onClick={() => this.colorChange("careers-link")}
                >
                  CAREERS
                </Link>
                <a
                  href="https://overturemarket.espwebsite.com"
                  target="blank"
                  className="nav-links"
                >
                  CATALOG
                </a>
                <Link
                  className="contact-button"
                  to="/contact"
                  onClick={() => this.clearAll()}
                >
                  CONTACT US
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-mobile">
          <div className="hellobar-div-mobile">
            <a href="/brandon" className="hellobar-cta">
              Overture acquires Brandon
            </a>
          </div>
          <div className="container">
            <div className="col-xs-2">
              <i
                className="fa fa-bars"
                onClick={() => this.handleClick(true)}
              ></i>
            </div>
            <div className="col-xs-10">
              <Link to="/">
                <h4 className="mobile-logo">OVERTURE</h4>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="container header-mobile">
                    <div className="row">
                        <div className="col-xs-2">
                            <i className="fa fa-bars" onClick={() => this.handleClick(true)}></i>
                        </div>
                        <div className="col-xs-10">
                            <Link to="/"><h4 className="mobile-logo">OVERTURE</h4></Link>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}

export default Header;
