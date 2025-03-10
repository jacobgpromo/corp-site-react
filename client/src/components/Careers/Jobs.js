import React, { Component } from "react";

import "../../styles/Careers.css";

class Jobs extends Component {
  state = {
    webDeveloper: false,
  };

  handleOn = (position) => {
    if (position === "webDeveloper") {
      this.setState({ webDeveloper: true });
    }
  };

  handleOff = (position) => {
    if (position === "webDeveloper") {
      this.setState({ webDeveloper: false });
      document.documentElement.scrollTop = 500;
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="jobs-box">
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/mt5biOILqW/NetSuite-Administrator"
              >
                NetSuite Administrator
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/Q37prstF7c/Overture-Promotions-Pipeline-Application"
              >
                Overture Promotions - Pipeline Application
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/fR57a9AFdI/Purchasing-Assistant"
              >
                Purchasing Assistant
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/FTFLMo30A8/Account-Executive"
              >
                Account Executive
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/vbMwiQsLv5/Customer-Care-Administrator"
              >
                Customer Care Administrator
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/EvTQmiEExR/Special-Projects-Project-Admin"
              >
                Special Projects Project Admin
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/pQn9aBEVjI/Shipping-Coordinator"
              >
                Shipping Coordinator
              </a>
            </h3>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/DP7sJTdWlB/New-Business-Development-Manager"
              >
                New Business Development Manager
              </a>
            </h3>
          </div>

          {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Web Developer </h3>
                        <h5 onClick={() => this.handleOn('webDeveloper')} className="view-button">View Details</h5>
                        {this.state.webDeveloper ? <WebDeveloper bye={this.handleOff} /> : null}
                    </div> */}
        </div>
        <div style={{ margin: "30px 0" }}>
          <p className="basic">
            Overture is an equal opportunity/affirmative action employer
            committed to a diverse and inclusive workplace. All qualified
            applicants will receive consideration for employment without regards
            to race, color, religion, sex, sexual orientation, gender identity,
            national origin, disability status, protected veteran status, or any
            other basis prohibited by law. If you are an individual with a
            disability and need assistance in applying for a position, please
            contact us{" "}
            <a
              href="mailto:Humanresources@overturepromo.com"
              style={{ color: "#54565a", textDecoration: "underline" }}
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Jobs;
