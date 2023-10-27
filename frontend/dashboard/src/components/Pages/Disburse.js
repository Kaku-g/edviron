import Sidebar from "../sidebar/Sidebar";
import "./Disburse.css";
import money from "../icons/money.svg";
import check from "../icons/check.svg";
import wallet from "../icons/wallet-blue.svg";
import icon from "../icons/Icon.svg";
const data = {
  stats: [
    {
      title: "this month collection",
      value: "90L",
      icon: money,
    },

    {
      title: "Prev month collection",
      value: "80L",
      icon: wallet,
    },
  ],

  history: [
    {
      date: "15 Oct 2023",
      amount: " 15L",
      status: "completed",
    },
    {
      date: "19 Oct 2023",
      amount: " 16L",
      status: "completed",
    },
    {
      date: "20 Oct 2023",
      amount: "15L",
      status: "completed",
    },
    {
      date: "22 Oct 2023",
      amount: "16L",
      status: "completed",
    },
    {
      date: "23 Oct 2023",
      amount: "16L",
      status: "completed",
    },
    {
      date: "24 Oct 2023",
      amount: "16L",
      status: "completed",
    },
    {
      date: "25 Oct 2023",
      amount: "16L",
      status: "completed",
    },
    {
      date: "26 Oct 2023",
      amount: "16L",
      status: "completed",
    },
  ],
};

console.log(data.stats);

const Disburse = () => {
  return (
    <div
      className="disburse"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    >
      <div className="disburse_stats">
        {data.stats.map((el) => {
          return (
            <div className="stats-item">
              <div className="stats-icon">
                {/* <img className="wallet-icon" alt="Wallet money" src={Wallet} /> */}
              </div>
              <div className="disburse_stats_text">
                <div className="stats-heading">{el.title}</div>
                <div className="stats-count">{el.value}</div>
                <div className="stats-change">
                  <img src={el.icon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="account_heading">Accounts </div>
      <div className="main_account">
        <div className="accounts_details">
          <div className="accounts_subhead">
            <div className="subhead_item">Bank Name</div>
            <div className="subhead_item">Account No</div>
            <div className="subhead_item">Balance</div>
          </div>
          <div className="accounts">
            <div className="account_bank">SBI</div>
            <div className="account_no">xxxx905</div>
            <div className="account_balance">XXXXXXX</div>
          </div>
        </div>

        <div className="students">
          <h3>Total students</h3>
          <div className="total">
            <img src={icon} alt="" />
            <span>2,040</span>
          </div>
        </div>
      </div>

      <div className="payments">
        <div className="disburse_form">
          <h2 className="disburse_form_heading">Send Money</h2>
          <form action="">
            <label className="amtlabel" htmlFor="">
              Amount
            </label>
            <input type="number" />

            <div className="options">
              <label htmlFor="">
                IMPS <input name="method" type="radio" />
              </label>
              <label htmlFor="">
                NEFT
                <input name="method" type="radio" />
              </label>
            </div>
            <button className="btn">Disburse</button>
          </form>
        </div>

        <div className="payment_history">
          <div className="headings">
            <div className="heading_item">Date</div>
            <div className="heading_item">Amount</div>
            <div className="heading_item">Status</div>
          </div>
          <span className="line-break"></span>

          {data.history.map((el) => {
            return (
              <div className="payment_history_columns">
                <div className="payment_history_column">{el.date}</div>
                <div className="payment_history_column">{el.amount}</div>
                <div className="payment_history_column">
                  <img className="history_status" src={check} alt="" />
                  <span>{el.status}</span>
                </div>
              </div>
            );
          })}
          <img
            className="down-icon"
            src="https://c.animaapp.com/LNadpEK0/img/chevron-down-2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Disburse;
