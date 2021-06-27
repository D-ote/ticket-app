import React, { Component } from "react";
import PageHeader from "./pageHeader";
import { BiSearch } from "react-icons/bi"
import Topnav from "./topNav";
import "./help.css";

class Help extends Component {
  state = {};
  render() {
    return (
      <div className="helpContainer">
        <Topnav />
        <div className="helpWrapper">
          <PageHeader name="Help Center" />
        </div>
        <div className="helpContent">
          <div className="helpTitle">How can we help?</div>
          <form action="form">
            <div className="helpSearchDiv">
              <BiSearch className="helpSearchIcon" />
              <input
                type="search"
                name="helpSearch"
                id="helpSearch"
                className="helpSearch"
                placeholder="Search for a topic"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Help;
