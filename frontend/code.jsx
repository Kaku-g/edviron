import React from "react";
import { Overview } from "../../components/Overview";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="side-menu">
          <div className="overlap-3">
            <div className="list-menu-wrapper">
              <div className="list-menu">
                <img
                  className="img-2"
                  alt="Icon outline key"
                  src="https://c.animaapp.com/LNadpEK0/img/icon---24---outline---key-square.svg"
                />
                <div className="text-wrapper-16">Dashboard</div>
              </div>
            </div>
            <div className="list-menu-2">
              <img className="img-2" alt="Element square" src="https://c.animaapp.com/LNadpEK0/img/3d-square-1.svg" />
              <div className="text-wrapper-17">Fee Management</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu-3">
              <img className="img-2" alt="User square" src="https://c.animaapp.com/LNadpEK0/img/user-square-1.svg" />
              <div className="text-wrapper-17">Students</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu-4">
              <img className="img-2" alt="Wallet money" src="https://c.animaapp.com/LNadpEK0/img/wallet-money-2.svg" />
              <div className="text-wrapper-17">Disbursal</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu-5">
              <img
                className="img-2"
                alt="Discount shape"
                src="https://c.animaapp.com/LNadpEK0/img/discount-shape-1.svg"
              />
              <div className="text-wrapper-17">Promote</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu-6">
              <img
                className="img-2"
                alt="Message question"
                src="https://c.animaapp.com/LNadpEK0/img/message-question-1.svg"
              />
              <div className="text-wrapper-17">Help</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/LNadpEK0/img/ellipse-8@2x.png" />
            <div className="group-3">
              <div className="overlap-group-3">
                <div className="text-wrapper-18">Prashant Kumar</div>
                <div className="text-wrapper-19">Super Admin</div>
              </div>
            </div>
            <img
              className="chevron-down"
              alt="Chevron down"
              src="https://c.animaapp.com/LNadpEK0/img/chevron-down-2.svg"
            />
            <div className="overlap-4">
              <div className="group-4">
                <div className="text-wrapper-20">Edviron</div>
                <img className="setting" alt="Setting" src="https://c.animaapp.com/LNadpEK0/img/setting-1.svg" />
              </div>
              <div className="text-wrapper-21">v.01</div>
            </div>
          </div>
        </div>
        <div className="heading">DAV Public School, Bhilai</div>
        <div className="overlap-5">
          <div className="stats">
            <div className="group-5">
              <div className="stats-item">
                <div className="overlap-group-4">
                  <div className="text-wrapper-22">Students</div>
                  <div className="text-wrapper-23">1,049</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-6">
                  <div className="text-wrapper-24">Sections</div>
                  <div className="text-wrapper-25">18</div>
                  <div className="text-wrapper-26">in 12 classes</div>
                </div>
              </div>
              <div className="stats-item-2">
                <div className="overlap-7">
                  <div className="text-wrapper-22">Collection this month</div>
                  <div className="text-wrapper-23">₹90.56L</div>
                </div>
              </div>
              <div className="stats-item-3">
                <div className="overlap-8">
                  <div className="text-wrapper-22">FIne Collected till date</div>
                  <div className="text-wrapper-23">₹11.20L</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-main">
            <div className="div-3">
              <div className="div-3">
                <div className="overlap-9">
                  <div className="text-wrapper-27">/ 1,049 Students</div>
                  <div className="group-6">
                    <div className="overlap-group-5">
                      <div className="group-7">
                        <div className="text-wrapper-28">Collection till date</div>
                        <div className="text-wrapper-29">₹5.34Cr</div>
                        <div className="money-recive-wrapper">
                          <img
                            className="img-3"
                            alt="Money recive"
                            src="https://c.animaapp.com/LNadpEK0/img/money-recive-1.svg"
                          />
                        </div>
                      </div>
                      <div className="group-8">
                        <div className="text-wrapper-30">Balance</div>
                        <div className="text-wrapper-31">₹2.4L</div>
                        <div className="text-wrapper-32">11</div>
                        <div className="wallet-money-wrapper">
                          <img
                            className="img-3"
                            alt="Wallet money"
                            src="https://c.animaapp.com/LNadpEK0/img/wallet-money-1.svg"
                          />
                        </div>
                      </div>
                      <div className="group-9">
                        <div className="text-wrapper-33">Defaulters</div>
                        <div className="group-10" />
                        <div className="group-11">
                          <p className="element-in-last-days">
                            <span className="span">11%</span>
                            <span className="text-wrapper-34"> in last 30 days</span>
                          </p>
                          <img
                            className="arrow-up"
                            alt="Arrow up"
                            src="https://c.animaapp.com/LNadpEK0/img/arrow-up-1-1.svg"
                          />
                        </div>
                        <div className="group-12">
                          <p className="p">
                            <span className="span">10%</span>
                            <span className="text-wrapper-34"> in last 30 days</span>
                          </p>
                          <img
                            className="arrow-up-2"
                            alt="Arrow up"
                            src="https://c.animaapp.com/LNadpEK0/img/arrow-up-1.svg"
                          />
                        </div>
                      </div>
                      <img className="line" alt="Line" src="https://c.animaapp.com/LNadpEK0/img/line-2.svg" />
                      <img className="line-2" alt="Line" src="https://c.animaapp.com/LNadpEK0/img/line-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="icon" alt="Icon" src="https://c.animaapp.com/LNadpEK0/img/icon.svg" />
            </div>
            <Overview className="overview-instance" />
            <div className="overlap-10">
              <div className="customers">
                <div className="overlap-11">
                  <div className="text-wrapper-35">Payment Mode</div>
                  <p className="split-between-online">
                    Split between Online, Cash
                    <br />
                    and Cheque for collections till date
                  </p>
                  <div className="chart">
                    <div className="overlap-group-6">
                      <div className="ellipse-2" />
                      <img
                        className="ellipse-3"
                        alt="Ellipse"
                        src="https://c.animaapp.com/LNadpEK0/img/ellipse-6.svg"
                      />
                      <img
                        className="ellipse-4"
                        alt="Ellipse"
                        src="https://c.animaapp.com/LNadpEK0/img/ellipse-7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="sent">
                    <div className="text-wrapper-36">Online</div>
                    <div className="text-wrapper-37">63%</div>
                    <div className="ellipse-5" />
                  </div>
                  <div className="recieved">
                    <div className="text-wrapper-36">Cash</div>
                    <div className="text-wrapper-38">25%</div>
                    <div className="ellipse-6" />
                  </div>
                  <div className="recieved-2">
                    <div className="text-wrapper-36">Cheque</div>
                    <div className="text-wrapper-39">11%</div>
                    <div className="ellipse-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-left">
          <div className="title">
            <div className="title-2">Admins</div>
          </div>
          <div className="div-4">
            <img className="separator" alt="Separator" src="https://c.animaapp.com/LNadpEK0/img/separator-1.svg" />
            <div className="titles">
              <div className="category">
                <div className="label">Name</div>
              </div>
              <div className="label-wrapper">
                <div className="label-2">Role</div>
              </div>
              <div className="category-2">
                <div className="label-2">Title</div>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="text-wrapper-40">Prashant Kumar</div>
            <div className="text-wrapper-41">Super Admin</div>
          </div>
          <div className="content-4">
            <div className="text-wrapper-40">Aditya Mullay</div>
            <div className="text-wrapper-41">Management Staff</div>
          </div>
          <div className="content-5">
            <div className="text-wrapper-40">Tarun Kheria</div>
            <div className="text-wrapper-41">Admin</div>
          </div>
          <div className="content-6">
            <div className="text-wrapper-40">Jasraj Singh&nbsp;&nbsp;Bhatia</div>
            <div className="text-wrapper-41">Admin</div>
          </div>
        </div>
        <div className="footer-right">
          <div className="title">
            <div className="title-2">Disbursals</div>
          </div>
          <div className="div-4">
            <div className="header">
              <img className="separator-2" alt="Separator" src="https://c.animaapp.com/LNadpEK0/img/separator.svg" />
              <div className="titles">
                <div className="category">
                  <div className="label">Date</div>
                </div>
                <div className="category-3">
                  <div className="label-2">Amount</div>
                </div>
                <div className="category-2">
                  <div className="label-2">Title</div>
                </div>
              </div>
            </div>
            <div className="category-4">
              <div className="label-2">Status</div>
            </div>
          </div>
          <div className="overlap-12">
            <div className="content-7">
              <div className="text-wrapper-40">July 11, 2023</div>
              <div className="text-wrapper-41">₹5,03,123</div>
              <div className="text-wrapper-42">₹5,03,123</div>
            </div>
            <div className="content-8">
              <div className="text-wrapper-40">July 10, 2023</div>
            </div>
          </div>
          <div className="content-9">
            <div className="text-wrapper-40">July 8, 2023</div>
            <div className="text-wrapper-41">₹5,03,123</div>
          </div>
          <div className="content-10">
            <div className="text-wrapper-40">July 9, 2023</div>
            <div className="text-wrapper-41">₹5,03,123</div>
          </div>
          <div className="group-13">
            <div className="text-wrapper-43">Pending</div>
            <img className="img-2" alt="Check circle" src="https://c.animaapp.com/LNadpEK0/img/check-circle-3.svg" />
          </div>
          <div className="group-14">
            <div className="text-wrapper-44">Successful</div>
            <img className="img-2" alt="Check circle" src="https://c.animaapp.com/LNadpEK0/img/check-circle-2.svg" />
          </div>
          <div className="group-15">
            <div className="text-wrapper-44">Successful</div>
            <img className="img-2" alt="Check circle" src="https://c.animaapp.com/LNadpEK0/img/check-circle-1.svg" />
          </div>
          <div className="group-16">
            <div className="text-wrapper-44">Successful</div>
            <img className="img-2" alt="Check circle" src="https://c.animaapp.com/LNadpEK0/img/check-circle.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
