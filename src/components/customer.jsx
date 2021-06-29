import "./customer.css"
import React, { Component } from "react";
import Footer from "./footer";
import Topnav from "./topNav";
import PageHeader from "./pageHeader";

class Customer extends Component {
    constructor(props) {
      super(props);
      this.checkboxStatus = {};
    }

    state = {
      customerDb : [
          { id: 1, number:"#68", name: "Yellow", email:"yellowrain@gmail.com", phone: "+234 813 008 213" },
          { id: 2, number:"#24", name: "Blue", email:"bluegarage@gmail.com", phone: "+234 813 008 213" },
          { id: 3, number:"#18", name: "Green", email:"greenbook@gmail.com", phone: "+234 813 008 213" },
          { id: 4, number:"#30", name: "Black", email:"blackbond@gmail.com", phone: "+234 813 008 213" },
          { id: 5, number:"#48", name: "Grey", email:"greybook@gmail.com", phone: "+234 813 008 213" },
          { id: 6, number:"#65", name: "Oxblood", email:"oxbloodblue@gmail.com", phone: "+234 813 008 213" },
          { id: 7, number:"#48", name: "Express", email:"expressway@yahoo.com", phone: "+234 813 008 213" },
          { id: 8, number:"#18", name: "Green", email:"greenbook@gmail.com", phone: "+234 813 008 213" },
          { id: 9, number:"#30", name: "Black", email:"blackbond@gmail.com", phone: "+234 813 008 213" },
          { id: 10, number:"#48", name: "Grey", email:"greybook@gmail.com", phone: "+234 813 008 213" },
          { id: 11, number:"#65", name: "Oxblood", email:"oxbloodblue@gmail.com", phone: "+234 813 008 213" },
          { id: 12, number:"#48", name: "Express", email:"expressway@yahoo.com", phone: "+234 813 008 213" },
          { id: 13, number:"#68", name: "Yellow", email:"yellowrain@gmail.com", phone: "+234 813 008 213" },
          { id: 14, number:"#24", name: "Blue", email:"bluegarage@gmail.com", phone: "+234 813 008 213" },
          { id: 15, number:"#18", name: "Green", email:"greenbook@gmail.com", phone: "+234 813 008 213" },
          { id: 16, number:"#30", name: "Black", email:"blackbond@gmail.com", phone: "+234 813 008 213" },
          { id: 17, number:"#48", name: "Grey", email:"greybook@gmail.com", phone: "+234 813 008 213" },
          { id: 18, number:"#65", name: "Oxblood", email:"oxbloodblue@gmail.com", phone: "+234 813 008 213" },          
      ],
      checked: false,
  };

  checkAllBoxes = (e) => {
    let state = this.state.checked;
    let checkboxStatus = this.checkboxStatus;
    this.setState({ checked: !state },()=>{

      Object.values(checkboxStatus).map(box => {
        return box.checked= this.state.checked
        // this.state.checked ? box.setAttribute("checked", true) : box.setAttribute("checked", false);
      })
    });  
  }

  render() {
    return (
      <div className="customerContainer">
        <Topnav />
        <div className="customerWrapper">
          <PageHeader name="Customer" className="customerBtn" buttonName="Add New Customer" />
          <div className="customerContent">
              <table className="customerTable">
                  <thead>
                      <tr>
                          <th><input type="checkbox" name="customer" className="customerCheckbox" onClick={()=> this.checkAllBoxes()} /></th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Number</th>
                      </tr>
                  </thead>
                  <tbody>
                      { this.state.customerDb.map((pick, idx) => {
                      return <tr key={pick.id} className="bodyRow" style={{}}>
                          <td><input type="checkbox" name="customer" className="checkbox" ref={element => this.checkboxStatus[idx]=(element)} /></td>
                          <td>{pick.number}</td>
                          <td>{pick.name}</td>
                          <td>{pick.email}</td>
                          <td>{pick.phone}</td>
                      </tr>
                      }) }
                  </tbody>
              </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Customer;
