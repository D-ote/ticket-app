import "./calender.css";
import React, { Component } from "react";
import Footer from "./footer";
import Topnav from "./topNav";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PageHeader from "./pageHeader";

class Calender extends Component {
  calender = [
    { id: 1, day: "Sun", date: "31", tag: "none", isFeb: false },
    { id: 2, day: "Mon", date: "1", tag: "dull", isFeb: true },
    { id: 3, day: "Tue", date: "2", tag: "none", isFeb: true },
    { id: 4, day: "Wed", date: "3", tag: "none", isFeb: true },
    { id: 5, day: "Thurs", date: "4", tag: "dull", isFeb: true },
    { id: 6, day: "Fri", date: "5", tag: "none", isFeb: true },
    { id: 7, day: "Sat", date: "6", tag: "none", isFeb: true },
    { id: 8, day: "Sun", date: "7", tag: "none", isFeb: true },
    { id: 9, day: "Mon", date: "8", tag: "none", isFeb: true },
    { id: 10, day: "Tue", date: "9", tag: "none", isFeb: true },
    { id: 11, day: "Wed", date: "10", tag: "none", isFeb: true },
    { id: 12, day: "Thurs", date: "11", tag: "none", isFeb: true },
    { id: 13, day: "Fri", date: "12", tag: "dull", isFeb: true },
    { id: 14, day: "Sat", date: "13", tag: "dull", isFeb: true },
    { id: 15, day: "Sun", date: "14", tag: "none", isFeb: true },
    { id: 16, day: "Mon", date: "15", tag: "none", isFeb: true },
    { id: 17, day: "Tue", date: "16", tag: "none", isFeb: true },
    { id: 18, day: "Wed", date: "17", tag: "bright", isFeb: true },
    { id: 19, day: "Thurs", date: "18", tag: "dull", isFeb: true },
    { id: 20, day: "Fri", date: "19", tag: "none", isFeb: true },
    { id: 21, day: "Sat", date: "20", tag: "none", isFeb: true },
    { id: 22, day: "Sun", date: "21", tag: "dull", isFeb: true },
    { id: 23, day: "Mon", date: "22", tag: "bright", isFeb: true },
    { id: 24, day: "Tue", date: "23", tag: "none", isFeb: true },
    { id: 25, day: "Wed", date: "24", tag: "none", isFeb: true },
    { id: 26, day: "Thurs", date: "25", tag: "dull", isFeb: true },
    { id: 27, day: "Fri", date: "26", tag: "none", isFeb: true },
    { id: 28, day: "Sat", date: "27", tag: "bright", isFeb: true },
    { id: 29, day: "Sun", date: "28", tag: "none", isFeb: true },
    { id: 30, day: "Mon", date: "1", tag: "none", isFeb: false },
    { id: 31, day: "Tue", date: "2", tag: "none", isFeb: false },
    { id: 32, day: "Wed", date: "3", tag: "none", isFeb: false },
    { id: 33, day: "Tue", date: "4", tag: "none", isFeb: false },
    { id: 34, day: "Tue", date: "5", tag: "none", isFeb: false },
  ];

  state = {};

  render() {
    return (
      <div className="calenderContainer">
        <Topnav />
        <div className="calenderWrapper">
          <div className="calenderContent">
            <PageHeader name="Calender" className="calenderBtn" buttonName="Add New Event" />
            <div className="calender">
              <div className="calenderHeader">
                <BsChevronLeft className="calenderIcon" />{" "}
                <h3>February 2021</h3>{" "}
                <BsChevronRight className="calenderIcon" />
              </div>
              <table className="calenderTable">
                <thead>
                  <tr
                    className="tableHead"
                    style={{ borderBottom: "1px solid grey" }}
                  >
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  {this.calender.map((cal) => {
                    return <tr
                      key={cal.id}
                      className={
                        (cal.tag === "bright" && "tableBody bright") ||
                        (cal.tag === "dull" && "tableBody dull") ||
                        (cal.tag === "none" && "tableBody none")
                      }
                    >
                       <td> {cal.date} </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calender;
