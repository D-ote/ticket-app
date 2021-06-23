import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";
import Tasks from "./components/tasks";
import Emails from "./components/emails";
import Calender from "./components/calender";
import Board from "./components/board";
import Customer from "./components/customer";
import Support from "./components/support";
import Help from "./components/help";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Route path="/" exact component={Dashboard} />
        <Route path="/task" exact component={Tasks} />
        <Route path="/emails" exact component ={Emails}  />
        <Route path="/calender" exact component ={Calender} />
        <Route path="/board" exact component={Board} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/support" exact component={Support} />
        <Route path="/help" exact component={Help} />
      </div>
    </Router>
  );
}

export default App;
