import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import Data from "./components/data/Data";
import Trends from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Disburse from "./components/Pages/Disburse";

function App() {
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Switch>
          <div className="main">
            <div className="main-heading">DAV Public School,Bhilai</div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/disburse" component={Disburse} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
