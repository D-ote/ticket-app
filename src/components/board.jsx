import "./board.css";
import React, { Component } from "react";
import Footer from "./footer";
import Topnav from "./topNav";
import { AiOutlinePlus } from "react-icons/ai";
import PageHeader from "./pageHeader";

class Board extends Component {
  state = {
    toDo: [
      { id: 1, text: "Read - It Doesn't Have to be Crazy at Work" },
      { id: 2, text: "Update pricing page" },
      { id: 3, text: "Provide new lunch options" },
      { id: 4, text: "Get new watercooler" },
    ],
    inProgress: [
      { id: 1, text: "Update support team on new system" },
      { id: 2, text: "Send meeting notes to Jim" },
    ],
    done: [{ id: 1, text: "Move to new building" }],
  };

  render() {
    return (
      <div className="boardContainer">
        <Topnav />
        <div className="boardWrapper">
          <PageHeader className="boardBtn" name="Board" buttonName="Add New Board" />
          <div className="boardContent">
            <div className="content">
              <h4>To Do</h4>
              {this.state.toDo.map((toDo) => {
                return (
                  <div className="contentDiv">
                    <p>{toDo.text}</p>
                  </div>
                );
              })}
              <div className="contentFooter">
                <AiOutlinePlus /> Add a card
              </div>
            </div>
            <div className="content">
              <h4>In Progress</h4>
              {this.state.inProgress.map((progress) => {
                return (
                  <div className="contentDiv">
                    <p>{progress.text}</p>
                  </div>
                );
              })}
              <div className="contentFooter">
                <AiOutlinePlus /> Add a card
              </div>
            </div>
            <div className="content">
              <h4>Done</h4>
              {this.state.done.map((done) => {
                return (
                  <div className="contentDiv">
                    <p>{done.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Board;
