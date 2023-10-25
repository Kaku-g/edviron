import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import Data from "./components/data/Data";
import Trends from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <div className="main-heading">DAV Public School,Bhilai</div>
        <Stats />
        <Data />
        <Trends />
        <Footer />
      </div>
    </div>
  );
}

export default App;
