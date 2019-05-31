import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    // Handles Log Out onClick
    let clearUser = () => {
      sessionStorage.clear("credentials")
    }

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Nutshell 2.0</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/dashboard/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages/">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events/">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/friends/">Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/news/">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tasks/">Tasks</NavLink>
              </NavItem>
              <NavItem id="logout-item">
                <NavLink id="logout-link" onClick={clearUser} href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}