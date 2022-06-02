import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
  return (
    <nav className="NavbarItems">
      <Link to="/"><h1 className="navbar-logo">TechStack<i className="fab fa-react"></i></h1>
      </Link>
      <div className="menu-icon" onClick={(this.handleClick)}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
              {item.title}
              </Link>
              </li>
          )
        })}
  
      </ul>
    </nav>
  )
}
}

export default NavBar