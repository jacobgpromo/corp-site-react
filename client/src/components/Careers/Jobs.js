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
            <p>Compensation: 100k-120k annually</p>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/h0Xe1FhAnc/Account-Manager"
              >
                Account Manager
              </a>
            </h3>
            <p>Compensation: 40k-50k annually</p>
          </div>
          <div style={{ borderTop: "1px solid #d8dadc" }}>
            <h3>
              <a
                className="apply-link"
                target="blank"
                href="https://overturepromotions.applytojob.com/apply/YFe4i0HOQF/Tax-And-Accounting-Clerk"
              >
                Tax and Accounting Clerk
              </a>
            </h3>
            <p>Compensation: $18-$20 hourly</p>
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
