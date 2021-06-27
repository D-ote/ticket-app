import React, { Component } from "react";
import logo from "../images/circle.jpeg";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { GrNotes, GrChatOption } from "react-icons/gr";
import {
  HiOutlineMailOpen,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.sidebarList = [
      { id: 1, link: "/", icon: AiOutlineHome, text: "Dashboard" },
      { id: 2, link: "/task", icon: GrNotes, text: "Task" },
      { id: 3, link: "/emails", icon: HiOutlineMailOpen, text: "Email" },
      { id: 4, link: "/calender", icon: AiOutlineCalendar, text: "Calendar" },
      { id: 5, link: "/board", icon: RiDashboardLine, text: "Board" },
      { id: 6, link: "/customer", icon: BsPeople, text: "Customers" },
      { id: 7, link: "/support", icon: GrChatOption, text: "Support" },
      { id: 8, link: "/guide", icon: FiBox, text: "Style Guide" },
      { id: 9, link: "/help", icon: AiOutlineQuestionCircle, text: "Help & Feedback" }
    ];
  }
  
  state = {
    showText: true,
    active: true,
  };
 
  render() {
    return (
      <div>
        <nav className="sideNav" id="sideNav">
          <div className="logoDiv">
            {this.state.showText ? (
              <>
                <img src={logo} alt="logo" />
                <span className="logoText">Dawn</span>
              </>
            ) : null}
            <span
              className="toggle"
              onClick={() =>
                this.setState((prevState) => ({
                  showText: !prevState.showText,
                }))
              }
            >
              {this.state.showText ? (
                <HiChevronDoubleLeft />
              ) : (
                <HiChevronDoubleRight />
              )}
            </span>
          </div>
          <div className="navList">
            <ul>
              {this.sidebarList.map((sidebar, index) => {
                return (
                  <li key={sidebar.id}>
                    <Link
                      className={index === 4 || index === 7 ? "borderLine" : ""}
                      to={sidebar.link}
                    >
                      <div className={this.state.showText ? "" : "noPadding"}>
                        {<sidebar.icon />}
                      </div>
                      {this.state.showText ? <span>{sidebar.text}</span> : null}
                    </Link>
                  </li>
                );
            })}
                {/* <li className="ulFooter">< AiOutlineQuestionCircle /> Help &amp; Feedback</li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;