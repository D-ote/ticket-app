import React, { Component } from "react";
import Topnav from "./topNav";
import { TiPencil } from "react-icons/ti";
import { GrCheckboxSelected } from "react-icons/gr";
import { FiArchive } from "react-icons/fi";
import Footer from "./footer";
import { createRef } from "react/cjs/react.development";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.taskEntry = createRef();

    this.originalTaskbarContent = [
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
      {
        id: 4,
        title: "Send monthly invoices",
        description: "",
        tag: "Urgent",
      },
      {
        id: 5,
        title: "Help support with tickets",
        description: "Ask Jamie which ones are most urgent",
        tag: "",
      },
      { id: 6, title: "Recalculate MRR", description: "", tag: "" },
    ];

    this.state = {
      taskbarContent: this.originalTaskbarContent,
      border: "all",
      checked: false,
    };

    this.taskSticker = [
      { id: 1, icon: TiPencil, title: "New Tasks" },
      { id: 2, icon: GrCheckboxSelected, title: "Select all tasks" },
      { id: 3, icon: FiArchive, title: "Archive Tasks" },
    ];
  }

  handleUrgentTasks = () => {
    const urgentTasks = this.originalTaskbarContent.filter(
      (task) => task.tag === "Urgent"
    );
    this.setState({ taskbarContent: urgentTasks, border: "urgent" });
  };

  handleAllTasks = () => {
    this.setState({ taskbarContent: this.originalTaskbarContent, border: "all" });
  };

  handleCheckboxSelection = () => {
    const checked = this.taskEntry.current;
    console.log(checked)
  }

  render() {
    return (
      <div className="taskContainer">
        <div className="taskDiv">
          <Topnav />
          <div className="tasksContent">
            <header>
              <h2>Tasks</h2>
            </header>
            <div className="taskBar">
              <div className="taskbarContent">
                <ul className="taskbarHeader">
                  <li
                    className= {this.state.border === "all" ? "active" : "taskBorder" }
                    onClick={() => this.handleAllTasks()}
                  >
                    All
                  </li>
                  <li
                    className={this.state.border === "urgent" ? "active" : "taskBorder"}
                    onClick={() => this.handleUrgentTasks()}
                  >
                    Urgent
                  </li>
                </ul>
                <form action="#" className="barContent">
                  {this.state.taskbarContent.map((task, idx) => (
                    <div className="tasksDiv" key={task.id} ref={this.taskEntry}>
                      <input
                        type="checkbox"
                        className="taskInput" onChange={(e) => this.handleCheckboxSelection()}
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
              <div className="stickerDiv">
                <form action="#" className="formSticker">
                  {this.taskSticker.map((sticker) => {
                    return (
                      <div className="sticker">
                        {<sticker.icon className="stickerIcon" />}
                        <div className="stickerText">{sticker.title}</div>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Tasks;
