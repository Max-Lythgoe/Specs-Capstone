import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logoPic from "./techstacklogo.png";

class NavBar extends Component {
  state = { clicked: false };

  //function for changing icon for hamburger menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {

    return (
      <nav className="NavbarItems">
        <Link to="/">
          <div className="navbar-logo">
            <img src={logoPic} alt="logo" className="logo-pic"></img>
          </div>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
