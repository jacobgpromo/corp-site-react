import React, { Component } from "react";
import Map from "../images/home/map.svg";
import WorldMap from "../images/home/worldmap.png";
import { Link } from "react-router-dom";
import Dallas from "../images/home/love-dallas.svg";

import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container footer-container">
        <div className="row">
          <div className="col-md-3 contact-col">
            <div className="address">
              <h4 className="overture">Overture Promotions, Inc.</h4>
              <h5 className="info">800 S. Northpoint Blvd.</h5>
              <h5 className="infoBreak">Waukegan, IL 60085</h5>
            </div>
            <div className="phone">
              <h5 className="info">
                <i className="fa fa-phone" style={{ color: "#ef7521" }}></i>{" "}
                888.456.9564
              </h5>
              <h5 className="info">
                <i className="fa fa-fax" style={{ color: "#ef7521" }}></i>{" "}
                847.680.0114
              </h5>
            </div>
            <div className="socials" style={{ paddingTop: "17px" }}>
              <a
                href="https://www.facebook.com/OverturePromotions/"
                target="blank"
              >
                <i className="fa fa-facebook" style={footerIcons}></i>
              </a>
              <a
                href="https://twitter.com/overturepromo?lang=en"
                target="blank"
              >
                <i className="fa fa-twitter" style={footerIcons}></i>
              </a>
              <a
                href="https://www.instagram.com/overturepromotions/"
                target="blank"
              >
                <i className="fa fa-instagram" style={footerIcons}></i>
              </a>
              <a
                href="https://www.linkedin.com/company/overture-promotions2018/"
                target="blank"
              >
                <i className="fa fa-linkedin" style={footerIcons}></i>
              </a>
            </div>
            <div className="news-button-div">
              <Link to="/news" className="news-button">
                Overture News
              </Link>
            </div>
          </div>
          <div className="col-md-4 map-divy">
            <p></p>

            {/* <img src={Map} alt="map" /> */}
            <img src={WorldMap} alt="map" style={{ width: "100%" }} />
            <p></p>
            <p className="map-paragraph">
              Offices in Chicago, Dallas, Sweden & Shanghai, with global
              distribution in every major region.
            </p>

            {/* <img
              src={Dallas}
              alt="Love-dallas"
              style={{ margin: "30px 0 15px 0" }}
            /> */}
          </div>
          <div className="col-md-4 col-md-offset-1 footer-right-nav">
            <h4 className="overture">Opportunity is knocking</h4>
            <p style={{ fontSize: "16px", marginBottom: "50px" }}>
              It's simple: we hire people with creativity, passion and the drive
              to be the best.
            </p>
            <Link to="/careers" className="career-button">
              JOIN OUR TEAM
            </Link>
            <div className="footer-nav-links">
              <Link to="/contact" className="footer-link">
                <h5 className="footer-link">Contact Us</h5>
              </Link>
              <Link to="/privacy" className="footer-link">
                <h5 className="footer-link">Privacy Policy</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//This is the font awesome only being able to take on one css so inline are necessary

const footerIcons = {
  color: "#ef7521",
  fontSize: "2.2em",
  marginLeft: "10px",
};

export default Footer;
