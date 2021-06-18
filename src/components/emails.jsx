import React, { Component } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Footer from "./footer";
import Topnav from "./topNav";

class Emails extends Component {
  state = {
    today: [
      {
        id: 1,
        header: "Audio Hunt",
        time: "1:34am",
        body: "New music is out!",
        bodyDescription: "The playlist made just for you, every Friday",
        isActive: true, 
      },
      {
        id: 2,
        header: "Domains R Us",
        time: "12:52pm",
        body: "Your domain will expire soon",
        bodyDescription: "Your domain “nicehats.com” is set to expire",
        isActive: true, 
      },
      {
        id: 3,
        header: "Gooble Accounts",
        time: "9:39am",
        body: "Security alert",
        bodyDescription: "A new device from New York has signed in",
        isActive: true, 
      },
    ],
    tomorrow: [
      {
        id: 1,
        header: "Audio Hunt",
        time: "2/02/2021",
        body: "New music is out!",
        bodyDescription: "The playlist made just for you, every Friday",
        isActive: true, 
      },
      {
        id: 2,
        header: "Domains R Us",
        time: "2/02/2021",
        body: "Your domain will expire soon",
        bodyDescription: "Your domain “nicehats.com” is set to expire",
        isActive: false, 
      },
      {
        id: 3,
        header: "Gooble Accounts",
        time: "2/02/2021",
        body: "Security alert",
        bodyDescription: "A new device from New York has signed in",
        isActive: false, 
      },
    ],
    LastWeek: [
      {
        id: 1,
        header: "Audio Hunt",
        time: "2/02/2021",
        body: "New music is out!",
        bodyDescription: "The playlist made just for you, every Friday",
        isActive: false, 
      },
      {
        id: 2,
        header: "Domains R Us",
        time: "2/02/2021",
        body: "Your domain will expire soon",
        bodyDescription: "Your domain “nicehats.com” is set to expire",
        isActive: false, 
      },
      {
        id: 3,
        header: "Gooble Accounts",
        time: "2/02/2021",
        body: "Security alert",
        bodyDescription: "A new device from New York has signed in",
        isActive: false, 
      },
    ],
  };


  render() {
    return (
      <div className="emailContainer">
        <Topnav />
        <div className="emailWrapper">
          <header>
            <h2>Emails</h2>
            <button className="emailHeaderBtn">Compose New Email</button>
          </header>
          <div className="emailsDivs">
            <div className="emailsHeaderDiv">
              <h3>Today</h3>
            </div>
            <div className="emailBodyDiv">
              {this.state.today.map((email) => (
                <div key={email.id}>
                  <div className="emailBodyHeader">
                    <GoPrimitiveDot className="emailIcon" />
                    <div className="textHeader">{email.header}</div>
                    <div className="time">{email.time}</div>
                  </div>
                  <div className="emailsBodyText">
                    <p className="first">{email.body}</p>
                    <p className="second">{email.bodyDescription}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="emailsHeaderDiv">
              <h3>Tomorrow</h3>
            </div>
            <div className="emailBodyDiv">
              {this.state.tomorrow.map((email) => (
                <div key={email.id}>
                  <div className="emailBodyHeader">
                    <GoPrimitiveDot className={ email.isActive === true ? "emailIcon" : "emailIcon inactiveMail" } />
                    <div className={ email.isActive=== true ? "textHeader" : "textHeader inactiveTextHeader" }>{email.header}</div>
                    <div className="time">{email.time}</div>
                  </div>
                  <div className="emailsBodyText">
                    <p className="first">{email.body}</p>
                    <p className="second">{email.bodyDescription}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="emailsHeaderDiv">
              <h3>Last Week</h3>
            </div>
            <div className="emailsBodyDiv">
              {this.state.LastWeek.map((email) => (
                <div key={email.id}>
                  <div className="emailBodyHeader">
                    <GoPrimitiveDot className={ email.isActive === true ? "emailIcon" : "emailIcon inactiveMail" } />
                    <div className={ email.isActive=== true ? "textHeader" : "textHeader inactiveTextHeader" }>{email.header}</div>
                    <div className="time">{email.time}</div>
                  </div>
                  <div className="emailsBodyText">
                    <p className="first">{email.body}</p>
                    <p className="second">{email.bodyDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          <button className="emailsBtn">Load More Emails</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Emails;
