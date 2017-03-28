import React, {Component} from 'react';
import TopNavigation from '../components/TopNavigation'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <TopNavigation />
        {this.props.children}
      </div>
    );
  }
}
