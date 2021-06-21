import React, { Component, createRef } from "react";
import { IoIosArrowDown, IoIosAdd } from "react-icons/io";
import { GrFormAdd, GrCheckmark } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import OrderCard from "./orderCard";
import Topnav from "./topNav";
import Footer from "./footer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.scheduleDropdownToggler = createRef();
    this.scheduleDropdown = createRef();
    this.popUpToggler = createRef();
    this.popUpDropdown = createRef();
  }

  state = {
    cards: [
      { id: 1, title: "New Orders", number: 4 },
      { id: 2, title: "New Customers", number: 12 },
      { id: 3, title: "Open Tickets", number: 23 },
      { id: 4, title: "On Hold", number: 8 },
    ],
    tasks: [
      {
        id: 1,
        title: "Fix CSS styling on mobile",
        description: "Link styles have the wrong colours on mobile, titles…",
        tag: "Urgent",
      },
      {
        id: 2,
        title: "Fix javascript filtering issue",
        description: "there is a filtering issue on the customers page",
        tag: "",
      },
      {
        id: 3,
        title: "Change home page illustration",
        description: "",
        tag: "",
      },
      { id: 4, title: "Send monthly invoices", description: "", tag: "Urgent" },
      {
        id: 5,
        title: "Help support with tickets",
        description: "Ask Jamie which ones are most urgent",
        tag: "",
      },
      { id: 6, title: "Recalculate MRR", description: "", tag: "" },
    ],
    scheduleDayIsDropped: false,
    popUpIsDropped: false,
  };

  schedule = [
    {
      id: 1,
      time: "9AM",
      schedule: "Task Review",
      emptySchedule: false,
      isActive: true,
    },
    {
      id: 2,
      time: "10AM",
      schedule: "Prepare Orders",
      emptySchedule: false,
      isActive: false,
    },
    {
      id: 3,
      time: "11AM",
      schedule: "Update Website",
      emptySchedule: false,
      isActive: false,
    },
    {
      id: 4,
      time: "12PM",
      schedule: "Skype with Jason",
      emptySchedule: false,
      isActive: false,
    },
    { id: 5, time: "1PM", schedule: "", emptySchedule: true, isActive: false },
    {
      id: 6,
      time: "2PM",
      schedule: "Task Review",
      emptySchedule: false,
      isActive: false,
    },
    { id: 7, time: "3PM", schedule: "", emptySchedule: true, isActive: false },
    {
      id: 8,
      time: "4PM",
      schedule: "Send Orders",
      emptySchedule: false,
      isActive: false,
    },
  ];
  emails = [
    {
      id: 1,
      header: "Audio Hunt",
      time: "1:34am",
      body: "New music is out!",
      bodyDescription: "The playlist made just for you, every Friday",
    },
    {
      id: 2,
      header: "Domains R Us",
      time: "12:52pm",
      body: "Your domain will expire soon",
      bodyDescription: "Your domain “nicehats.com” is set to expire",
    },
    {
      id: 3,
      header: "Google Accounts",
      time: "9:39am",
      body: "Security alert",
      bodyDescription: "A new device from New York has signed in",
    },
  ];

  componentDidMount() {
    document.onclick = (e) => {
      if (
        e.target !== this.scheduleDropdown.current &&
        e.target !== this.scheduleDropdownToggler.current.children[0]
      )
        this.setState({ scheduleDayIsDropped: false });

      if (
        e.target !== this.popUpToggler.current.children[0] &&
        e.target !== this.popUpDropdown.current
      )
        this.setState({ popUpIsDropped: false });
    };
  }

  handlePopUp = () => {
    let state = this.state.popUpIsDropped;
    this.setState({ popUpIsDropped: !state });
  };

  handleDropdownToggle = () => {
    let state = this.state.scheduleDayIsDropped;
    this.setState({ scheduleDayIsDropped: !state });
  };

  render() {
    return (
      <div className="dashboardContainer">
        <div className="dashboard" id="dashboard">
          <Topnav />
          <div className="dashboardContent">
            <header>
              <h2>Dashboard</h2>
              <button className="headerBtn">Edit Dashboard</button>
            </header>
            <section className="dashboardCards">
              {this.state.cards.map((card) => (
                <OrderCard
                  key={card.id}
                  title={card.title}
                  number={card.number}
                />
              ))}
            </section>
            <div className="scheduleTasks">
              <div className="schedule">
                <div className="scheduleHeader">
                  <h3>Schedule</h3>
                  <button
                    onClick={() => this.handleDropdownToggle()}
                    ref={this.scheduleDropdownToggler}
                  >
                    Today <IoIosArrowDown className="icon" />
                  </button>
                </div>
                <ul
                  className="btnDropdown"
                  ref={this.scheduleDropdown}
                  style={
                    this.state.scheduleDayIsDropped
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <li>Last Week</li>
                  <li>This Month</li>
                </ul>
                <form action="#" className="scheduleForm">
                  {this.schedule.map((item, index) => (
                    <div className="formDiv">
                      <p className={item.emptySchedule === true && "noTime"}>
                        {item.time}
                      </p>
                      <div
                        className={
                          item.emptySchedule === true
                            ? "noSchedule"
                            : item.isActive === true
                            ? "scheduleDescription colorDiv"
                            : "scheduleDescription"
                        }
                      >
                        {item.schedule}
                      </div>
                    </div>
                  ))}
                </form>
              </div>
              <div className="task">
                <div className="scheduleTask">
                  <h3>Task</h3>
                  <button>
                    <GrFormAdd className="icon" />
                  </button>
                </div>
                <form action="#" className="taskForm">
                  {this.state.tasks.map((task, idx) => (
                    <div className="tasksDiv" key={task.id}>
                      <input
                        type="checkbox"
                        className="taskInput"
                        name={"task" + idx}
                      />
                      <div className="text">
                        <label htmlFor="task1" className="taskLabel">
                          {task.title}
                        </label>
                        <p>{task.description}</p>
                      </div>
                      {task.tag && <div className="tag">{task.tag}</div>}
                    </div>
                  ))}
                </form>
              </div>
            </div>
            <div className="emailTicketDiv">
              <div className="emailDiv">
                <div className="emailHeader">
                  <h3>Latest Emails</h3>
                  <button>See All</button>
                </div>
                <div className="emailBody">
                  {this.emails.map((email, idx) => (
                    <div key={email.id}>
                      <div className="emailBodyHeader">
                        <GoPrimitiveDot className="emailIcon" />
                        <div className="textHeader">{email.header}</div>
                        <div className="time">{email.time}</div>
                      </div>
                      <div
                        className={
                          this.emails.length - 1 === idx
                            ? "emailBodyText emailBodyTextWithoutBorder"
                            : "emailBodyText emailBodyTextWithBorder"
                        }
                      >
                        <p className="first">{email.body}</p>
                        <p className="second">{email.bodyDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ticketDiv">
                <div className="ticketHeader">
                  <h3>New Tickets</h3>
                </div>
                <div className="ticketBody">
                  <GrCheckmark className="ticketIcon" />
                  <p>
                    No new <br /> tickets
                  </p>
                </div>
              </div>
            </div>
            <ul
              className="popUpList"
              id="popUpList"
              style={
                this.state.popUpIsDropped
                  ? { display: "block" }
                  : { display: "none" }
              }
              ref={this.popUpDropdown}
            >
              <li>
                <GrNotes className="popUpIcon" /> New Task
              </li>
              <li>
                <HiOutlineMailOpen className="popUpIcon" /> New Email
              </li>
              <li>
                <AiOutlineCalendar className="popUpIcon" /> New Event
              </li>
            </ul>
            <div 
              ref={this.popUpToggler}>
            <IoIosAdd
              className={
                this.state.popUpIsDropped ? "pagePlus pageClose" : "pagePlus"
              }
              onClick={() => this.handlePopUp()}
            /> </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
