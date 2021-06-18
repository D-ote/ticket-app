import "./support.css";
import React, { Component } from "react";
import Footer from "./footer";
import Topnav from "./topNav";

class Support extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      supportDb : [
        { id: 1, number:"#68", customer: "Yellow", date:"23/03/21", status: "Open" },
        { id: 2, number:"#24", customer: "Blue", date:"23/03/21", status: "Issues" },
        { id: 3, number:"#18", customer: "Green", date:"23/03/21", status: "Open" },
        { id: 4, number:"#30", customer: "Black", date:"23/03/21", status: "Issues" },
        { id: 5, number:"#48", customer: "Grey", date:"23/03/21", status: "Issues" },
        { id: 6, number:"#65", customer: "Oxblood", date:"23/03/21", status: "New" },
        { id: 7, number:"#48", customer: "Express", date:"23/03/21", status: "New" },
        { id: 8, number:"#18", customer: "Green", date:"23/03/21", status: "Issues" },
        { id: 9, number:"#30", customer: "Black", date:"23/03/21", status: "Open" },
        { id: 10, number:"#48", customer: "Grey", date:"23/03/21", status: "New" },
        { id: 11, number:"#65", customer: "Oxblood", date:"23/03/21", status: "Open" },
        { id: 12, number:"#48", customer: "Express", date:"23/03/21", status: "Issues" },
        { id: 13, number:"#68", customer: "Yellow", date:"23/03/21", status: "New" },
        { id: 14, number:"#24", customer: "Blue", date:"23/03/21", status: "Open" },
        { id: 15, number:"#18", customer: "Green", date:"23/03/21", status: "Open" },
        { id: 16, number:"#30", customer: "Black", date:"23/03/21", status: "New" },
        { id: 17, number:"#48", customer: "Grey", date:"23/03/21", status: "Issues" },
        { id: 18, number:"#65", customer: "Oxblood", date:"23/03/21", status: "New" },          
      ]
  };

  selectNew = () => {
      
  }

  render() {
    return (
      <div className="supportContainer">
        <Topnav />
        <div className="supportWrapper">
          <header>
            <h2>Support</h2>
            <button className="supportBtn">Add New Ticket</button>
          </header>
          <div className="supportContent">
            <div className="supportHeader">
              <ul className="headerList">
                <li onClick={() => this.selectAll()}>All</li>
                <li onClick={() => this.selectNew()}>New</li>
                <li>Open</li>
                <li>Issues</li>
                <li>Closed</li>
              </ul>
            </div>
            <table className="supportTable">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      name="support"
                      className="supportCheckbox"
                    />
                  </th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th className="statusheader">Status</th>
                </tr>
              </thead>
              <tbody>
                      { this.state.supportDb.map((pick) => {
                      return <tr key={pick.id} className="bodyRow">
                          <td><input type="checkbox" name="support" className="supportCheckbox" /></td>
                          <td>{pick.number}</td>
                          <td>{pick.date}</td>
                          <td>{pick.customer}</td>
                          <td><div className= {(pick.status === "New" && "new") || (pick.status === 'Issues' &&  "issue") || (pick.status === 'Open' && 'open')}><span>{pick.status}</span></div></td>
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

export default Support;
