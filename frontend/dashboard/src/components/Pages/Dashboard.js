import Stats from "../stats/Stats";
import Data from "../data/Data";
import Trends from "../Chart/Chart";
import Footer from "../Footer/Footer";

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
