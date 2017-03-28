import React, {Component} from 'react';
import {Link} from 'react-router'
import './TopNavigation.css'

export default class TopNavigation extends Component {

  render() {
    return (
      <ul id="TopNavigation">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/andrew">Andrew</NavItem>
      </ul>
    );
  }
}


class NavItem extends Component {

  render() {
    return (
      <li className="NavItem">
        <Link to={this.props.path}>{this.props.children}</Link>
      </li>
    );
  }

}
