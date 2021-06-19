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
    this.secondNavdropdownToggler = createRef();
    this.thirdNavDropdown = createRef();
    this.thirdNavdropdownToggler = createRef();

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
      thirddropdown: [
        { id: 1, class: "none", list: "My Profile" },
        { id: 2, class: "borderline", list: "Settings" },
        { id: 3, class: "none", list: "Help Center" },
        { id: 4, class: "none", list: "Report an Issue" },
        { id: 5, class: "none", list: "Terms Conditions" },
        { id: 6, class: "none", list: "Privacy Policy" },
        { id: 7, class: "borderline", list: "Licences" },
        { id: 8, class: "none", list: "Log Out" },
      ],
    };

    this.state = {
      updatesIsDropped: false,
      notificationsIsDropped: false,
      topnavIsDropped: false,
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

      let secondNavdropdownToggler =
        this.secondNavdropdownToggler.current.children[0];
      if (
        e.target !== this.secondNavdropdown.current &&
        e.target !== secondNavdropdownToggler
      )
        this.setState({ notificationsIsDropped: false });

      let topnavToggler = this.thirdNavdropdownToggler.current.children[0];
      if (
        e.target !== this.thirdNavDropdown.current &&
        e.target !== topnavToggler
      )
        this.setState({ topnavIsDropped: false });
    };
  }

  toggleUpdatesDropDown = () => {
    let state = this.state.updatesIsDropped;
    this.setState({ updatesIsDropped: !state });
  };

  toggleNotificationsDropdown = () => {
    let state = this.state.notificationsIsDropped;
    this.setState({ notificationsIsDropped: !state });
  };

  toggleTopnavDropdown = () => {
    let state = this.state.topnavIsDropped;
    this.setState({ topnavIsDropped: !state });
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
                onClick={() => this.toggleUpdatesDropDown()}
              />
            </li>
            <li ref={this.secondNavdropdownToggler}>
              <GrNotification
                className="topNavIcon"
                id="secondIcon"
                onClick={() => this.toggleNotificationsDropdown()}
              />
            </li>
            <li>
              <div className="topNavImage">
                <img src={headShot} alt="headShot" />
              </div>
            </li>
            <li ref={this.thirdNavdropdownToggler}>
              <RiArrowDownSLine
                className="topnavDownArrow"
                id="topnavDownArrow"
                onClick={() => this.toggleTopnavDropdown()}
              />
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
          style={
            this.state.notificationsIsDropped
              ? { display: "block" }
              : { display: "none" }
          }
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

        <ul
          className="thirdNavDropdown"
          id="thirdNavDropdown"
          ref={this.thirdNavDropdown}
          style={
            this.state.topnavIsDropped
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {this.dropdown.thirddropdown.map((list) => (
            <li
              key={list.id}
              className={list.class === "borderline" && "borderline"}
            >
              {list.list}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Topnav;
