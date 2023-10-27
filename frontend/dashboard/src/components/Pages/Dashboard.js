import Stats from "../stats/Stats";
import Data from "../data/Data";
import Trends from "../Chart/Chart";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    // document.body.style.zoom = "80%";
  }, []);
  return (
    <div
      className="Dashboard"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    >
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
