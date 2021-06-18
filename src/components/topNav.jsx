import React, { Component, createRef } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoThreeBars, GoPrimitiveDot } from "react-icons/go";
import headShot from "../images/headShot.jpg";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.datesDropDownFilter = createRef();
    this.activityDropDown = createRef();

    this.firstNavDropdown = createRef();
    this.firstNavDropdownToggler = createRef();
    this.secondNavdropdown = createRef();
    this.thirdNavDropdown = createRef();

    this.dropdown = {
      firstdropdown: [
        {
          id: 1,
          title: "Email Snooze",
          text: "Emails can now be snoozed to be seen at a later time.",
          isActive: true,
        },
        {
          id: 2,
          title: "Smarter Tasks",
          text: "Tasks are now upgraded with a whole bunch more features to make it easier.",
          isActive: false,
        },
        {
          id: 3,
          title: "No Contact Limit",
          text: "You wanted no limit on the contact list, and delivered! The contact list is now unlimited.",
          isActive: false,
        },
      ],
      seconddropdown: [
        {
          id: 1,
          title: "3 new emails",
          text: "From AudioHunt, Domains R Us, and Google Accounts.",
          isActive: true,
        },
        {
          id: 2,
          title: "4 new orders",
          text: "There are new orders to be fulfilled.",
          isActive: false,
        },
        {
          id: 3,
          title: "5 new tickets",
          text: "There are new tickets to be checked.",
          isActive: false,
        },
      ],
    };
    this.state = {
      updatesIsDropped: false,
      notificationsIsDropped: false,
    };
  }

  componentDidMount() {
    document.onclick = (e) => {
      let firstNavDropdownToggler =
        this.firstNavDropdownToggler.current.children[0];
      if (
        e.target !== this.firstNavDropdown.current &&
        e.target !== firstNavDropdownToggler
      )
        this.setState({ updatesIsDropped: false });
      //   const icon = document.getElementById("firstNavDropdown");
      //   if (e.target.id !== "firstIcon") {
      //     icon.setAttribute("class", "firstNavDropdown");
      //   }
      //   const notificationIcon = document.getElementById("secondNavDropdown");
      //   if (e.target.id !== "secondIcon") {
      //     notificationIcon.setAttribute("class", "secondNavDropdown");
      //   }
      //   const thirdNavDropdown = document.getElementById("thirdNavDropdown");
      //   if (e.target.id !== "thirdNavDropdown") {
      //     thirdNavDropdown.setAttribute("class", "thirdNavDropdown");
      //   }
    };
  }

  toggleUpdatesDropDown = () => {
    let state = this.state.updatesIsDropped;
    this.setState({ updatesIsDropped: !state });
  };

  toggleTopnavDropdown = () => {
    const thirdNavDropdown = this.thirdNavDropdown.current;
    // const topnavDownArrow = document.getElementById("topnavDownArrow");

    // topnavDownArrow.classList.toggle('turnUp');

    if (thirdNavDropdown.className === "thirdNavDropdown") {
      return thirdNavDropdown.setAttribute(
        "class",
        "thirdNavDropdown hideBtnDropdown"
      );
    }

    return thirdNavDropdown.setAttribute("class", "thirdNavDropdown");

    // navDropdown.classList.toggle('hideBtnDropdown');
  };

  handlenavIconToggle = () => {
    const icon = this.firstNavDropdown.current;

    if (icon.className === "firstNavDropdown") {
      return icon.setAttribute("class", "firstNavDropdown hideBtnDropdown");
    }

    // return icon.setAttribute("class", "firstNavDropdown");
  };

  handlesecondnavtoggle = () => {
    const notificationIcon = this.secondNavdropdown.current;

    if (notificationIcon.className === "secondNavDropdown") {
      return notificationIcon.setAttribute(
        "class",
        "secondNavDropdown hideBtnDropdown"
      );
    }

    return notificationIcon.setAttribute("class", "secondNavDropdown");
  };

  render() {
    return (
      <div>
        <nav className="topNav">
          <div className="searchDiv">
            <div className="burger">
              <GoThreeBars />
            </div>
            <div className="searchIcon">
              <BiSearch />
            </div>
            <input className="search" type="text" placeholder="Search" />
          </div>
          <ul className="rightNavSide">
            <li>
              <button className="navBtn" type="submit">
                Get Template
              </button>
            </li>
            <li ref={this.firstNavDropdownToggler}>
              <AiOutlineReload
                className="topNavIcon"
                id="firstIcon"
                // onClick={() => this.handlenavIconToggle()}
                onClick={() => this.toggleUpdatesDropDown()}
              />
            </li>
            <li>
              <GrNotification
                className="topNavIcon"
                id="secondIcon"
                onClick={() => this.handlesecondnavtoggle()}
              />
            </li>
            <li>
              <div className="topNavImage">
                <img src={headShot} alt="headShot" />
              </div>
            </li>
            <li>
              <span>
                <RiArrowDownSLine
                  className="topnavDownArrow"
                  id="topnavDownArrow"
                  onClick={() => this.toggleTopnavDropdown()}
                />
              </span>
            </li>
          </ul>
        </nav>
        <div
          ref={this.firstNavDropdown}
          className="firstNavDropdown"
          id="firstNavDropdown"
          style={
            this.state.updatesIsDropped
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {this.dropdown.firstdropdown.map((dropdown) => (
            <div className="first" key={dropdown.id}>
              <div className="topnavSpan">
                <GoPrimitiveDot
                  className={
                    dropdown.isActive === true
                      ? "dropdownIcon"
                      : "dropdownIcon inactiveDropdownIcon"
                  }
                />
                <div className="dropdownHeader">{dropdown.title}</div>
              </div>
              <p className="dropdownText">{dropdown.text}</p>
            </div>
          ))}
          <button className="dropdownBtn">See all updates</button>
        </div>

        <div
          ref={this.secondNavdropdown}
          className="secondNavDropdown"
          id="secondNavDropdown"
        >
          {this.dropdown.seconddropdown.map((dropdown) => (
            <div className="first" key={dropdown.id}>
              <div className="topnavSpan">
                <GoPrimitiveDot
                  className={
                    dropdown.isActive === true
                      ? "dropdownIcon"
                      : "dropdownIcon inactiveDropdownIcon"
                  }
                />
                <div className="dropdownHeader">{dropdown.title}</div>
              </div>
              <p className="dropdownText">{dropdown.text}</p>
            </div>
          ))}
          <button className="dropdownBtn">See all updates</button>
        </div>

        <ul className="thirdNavDropdown" id="thirdNavDropdown">
          <li>My Profile</li>
          <li className="borderLine">Settings</li>
          <li>Help Center</li>
          <li>Report an Issue</li>
          <li>Terms Conditions</li>
          <li>Privacy Policy</li>
          <li className="borderLine">Licenses</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default Topnav;
