import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import Data from "./components/data/Data";
import Trends from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="main">
        <Stats />
        <Data />
        <Trends />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
