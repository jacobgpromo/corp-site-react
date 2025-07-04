import React, { Component } from "react";
import Modal from "react-modal";
import { Element } from "react-scroll";
import Employee from "./Employee";
import NotPictured from "./NotPictured";
import { People } from "./people/Operations";

import "../../styles/Team.css";

class Operations extends Component {
  state = {
    showModal: [false],
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal = (index) => {
    const arr = [...this.state.showModal];
    arr[index] = true;
    this.setState({ showModal: arr });
  };

  closeModal = (index) => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <Element id="operations-orange">Operations</Element>
        <div className="row">
          <Employee
            image={People.RonG.image}
            name={People.RonG.name}
            title={People.RonG.title}
          />
          <Employee
            image={People.NicoleS.image}
            name={People.NicoleS.name}
            title={People.NicoleS.title}
          />
          <Employee
            image={People.Troy.image}
            name={People.Troy.name}
            title={People.Troy.title}
          />
          <Employee
            image={People.Corinne.image}
            name={People.Corinne.name}
            title={People.Corinne.title}
          />
          <Employee
            image={People.Trina.image}
            name={People.Trina.name}
            title={People.Trina.title}
          />
          <Employee
            image={People.Brittney.image}
            name={People.Brittney.name}
            title={People.Brittney.title}
          />
          <Employee
            image={People.IanP.image}
            name={People.IanP.name}
            title={People.IanP.title}
          />
          <Employee
            image={People.Giovanni.image}
            name={People.Giovanni.name}
            title={People.Giovanni.title}
          />
          <Employee
            image={People.AndrewK.image}
            name={People.AndrewK.name}
            title={People.AndrewK.title}
          />

          <Employee
            image={People.Glenda.image}
            name={People.Glenda.name}
            title={People.Glenda.title}
          />
          <Employee
            image={People.StephanieD.image}
            name={People.StephanieD.name}
            title={People.StephanieD.title}
          />
          <Employee
            image={People.Noelia.image}
            name={People.Noelia.name}
            title={People.Noelia.title}
          />
          <Employee
            image={People.Robb.image}
            name={People.Robb.name}
            title={People.Robb.title}
          />
          <Employee
            image={People.Jeff.image}
            name={People.Jeff.name}
            title={People.Jeff.title}
          />
          <Employee
            image={People.Eileen.image}
            name={People.Eileen.name}
            title={People.Eileen.title}
          />
          <Employee
            image={People.Liz.image}
            name={People.Liz.name}
            title={People.Liz.title}
          />
          <Employee
            image={People.Morgan.image}
            name={People.Morgan.name}
            title={People.Morgan.title}
          />
          <Employee
            image={People.Yanis.image}
            name={People.Yanis.name}
            title={People.Yanis.title}
          />
          <Employee
            image={People.Michael.image}
            name={People.Michael.name}
            title={People.Michael.title}
          />
          <Employee
            image={People.Blair.image}
            name={People.Blair.name}
            title={People.Blair.title}
          />
          <Employee
            image={People.Bernadette.image}
            name={People.Bernadette.name}
            title={People.Bernadette.title}
          />
          <Employee
            image={People.BrittneyH.image}
            name={People.BrittneyH.name}
            title={People.BrittneyH.title}
          />
          <Employee
            image={People.Jennifer.image}
            name={People.Jennifer.name}
            title={People.Jennifer.title}
          />
          <Employee
            image={People.MalloryF.image}
            name={People.MalloryF.name}
            title={People.MalloryF.title}
          />
          <Employee
            image={People.Simeon.image}
            name={People.Simeon.name}
            title={People.Simeon.title}
          />
          <Employee
            image={People.Julyne.image}
            name={People.Julyne.name}
            title={People.Julyne.title}
          />
          <Employee
            image={People.ClaudiaR.image}
            name={People.ClaudiaR.name}
            title={People.ClaudiaR.title}
          />
          <Employee
            image={People.Grace.image}
            name={People.Grace.name}
            title={People.Grace.title}
          />
          <Employee
            image={People.Lisa.image}
            name={People.Lisa.name}
            title={People.Lisa.title}
          />
          <Employee
            image={People.RachelK.image}
            name={People.RachelK.name}
            title={People.RachelK.title}
          />
          <Employee
            image={People.Justin.image}
            name={People.Justin.name}
            title={People.Justin.title}
          />
          <Employee
            image={People.StephanieV.image}
            name={People.StephanieV.name}
            title={People.StephanieV.title}
          />
          <Employee
            image={People.JaredK.image}
            name={People.JaredK.name}
            title={People.JaredK.title}
          />
          <Employee
            image={People.Wade.image}
            name={People.Wade.name}
            title={People.Wade.title}
          />
          <Employee
            image={People.Makalah.image}
            name={People.Makalah.name}
            title={People.Makalah.title}
          />
          <Employee
            image={People.AmandaW.image}
            name={People.AmandaW.name}
            title={People.AmandaW.title}
          />
          <Employee
            image={People.NicoleB.image}
            name={People.NicoleB.name}
            title={People.NicoleB.title}
          />
          <Employee
            image={People.Byron.image}
            name={People.Byron.name}
            title={People.Byron.title}
          />
          <Employee
            image={People.MichelleB.image}
            name={People.MichelleB.name}
            title={People.MichelleB.title}
          />
          <Employee
            image={People.Kiernan.image}
            name={People.Kiernan.name}
            title={People.Kiernan.title}
          />
          <Employee
            image={People.Cristian.image}
            name={People.Cristian.name}
            title={People.Cristian.title}
          />
          <Employee
            image={People.JordanW.image}
            name={People.JordanW.name}
            title={People.JordanW.title}
          />
          <Employee
            image={People.ThomasJ.image}
            name={People.ThomasJ.name}
            title={People.ThomasJ.title}
          />
          <Employee
            image={People.JayliaS.image}
            name={People.JayliaS.name}
            title={People.JayliaS.title}
          />
          <Employee
            image={People.Tye.image}
            name={People.Tye.name}
            title={People.Tye.title}
          />
          <Employee
            image={People.Elisa.image}
            name={People.Elisa.name}
            title={People.Elisa.title}
          />
          <Employee
            image={People.ElisaG.image}
            name={People.ElisaG.name}
            title={People.ElisaG.title}
          />
          <Employee
            image={People.Ramiro.image}
            name={People.Ramiro.name}
            title={People.Ramiro.title}
          />
        </div>
        <Element id="creative-orange">Not Pictured</Element>
        <div className="row" style={{ marginBottom: "50px" }}>
          <NotPictured
            name={People.AndreaA.name}
            title={People.AndreaA.title}
          />
          <NotPictured name={People.Byron.name} title={People.Byron.title} />
          <NotPictured
            name={People.MatthewS.name}
            title={People.MatthewS.title}
          />
          <NotPictured name={People.Sania.name} title={People.Sania.title} />
          <NotPictured
            name={People.Sarafina.name}
            title={People.Sarafina.title}
          />
        </div>
      </div>
    );
  }
}

export default Operations;
