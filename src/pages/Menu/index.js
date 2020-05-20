import React, { Component } from "react";
import { Link } from "react-router-dom";
// Css
import "./Menu.css";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const { isMenuActive } = this.state;
    this.setState({
      isMenuActive: !isMenuActive,
    });
  }
  render() {
    const { isMenuActive } = this.state;
    const menuClass = isMenuActive ? "Menu-active" : "";
    return (
      <div>
        <div className={`Menu ${menuClass}`}>
          <h2>Menu</h2>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={this.toggleMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/Notes" onClick={this.toggleMenu}>Notas</Link>
                </li>
                <li>
                  <Link to="/Converter" onClick={this.toggleMenu}>Conversor divisas</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <button onClick={this.toggleMenu} className="Menu-button">
          Menú
        </button>
      </div>
    );
  }
}