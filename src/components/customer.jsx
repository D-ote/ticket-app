import "./customer.css"
import React, { Component } from "react";
import Footer from "./footer";
import Topnav from "./topNav";

class Customer extends Component {
    constructor(props) {
        super(props)

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
      ]
  };

  render() {
    return (
      <div className="customerContainer">
        <Topnav />
        <div className="customerWrapper">
          <header>
            <h2>Customer</h2>
            <button className="customerBtn">Add New Customer</button>
          </header>
          <div className="customerContent">
              <table className="customerTable">
                  <thead>
                      <tr>
                          <th><input type="checkbox" name="customer" className="checkbox" /></th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Number</th>
                      </tr>
                  </thead>
                  <tbody>
                      { this.state.customerDb.map((pick) => {
                      return <tr key={pick.id} className="bodyRow">
                          <td><input type="checkbox" name="customer" className="checkbox" /></td>
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
