import React, { Component } from "react";
import Typical from "react-typical";
import logo from "../images/logo.png"

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = () => {
      return (
        <Typical className="title-styles" steps={this.titles} loop={Infinity} />
      );
    };

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12" style={{ color: "white" }}>
            <div>
              <img
                data-inline="false"
                className="iconify header-icon"
                src={logo}
                alt="logo"
              />
              <br />
              <h1 className="mb-0">
                <span className="Typical">{name}</span>
              </h1>
              <br/>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
