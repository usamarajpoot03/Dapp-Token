import React, { Component } from "react";
import "./App.css";
import Identicon from "identicon.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          rel="noopener noreferrer"
        >
          Eth Swap
        </div>
        <ul className="navbar-nav px-3">
          <li className="nac-ite text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account"> {this.props.account}</small>
            </small>
            {this.props.account ? (
              <img
                className="ml-2"
                alt="description of image"
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
              />
            ) : (
              <span> </span>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
