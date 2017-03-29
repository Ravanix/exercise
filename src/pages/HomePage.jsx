import React, {Component} from 'react'
import {Link} from 'react-router'

export default class HomePage extends Component {

  componentWillMount() {
    document.title = "Jetspree Exercise"
  }

  render() {

    return (
      <div id="HomePage" className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>Welcome.</h1>
            <p>Welcome to the Jetspree git exercise.</p>
            <p>This is a simple React app that we will work on collaboratively in order to learn git.</p>

            <h5>On the agenda: </h5>
            <ul>
              <li><s>Best practices</s></li>
              <li>Pull requests</li>
              <li>Code review</li>
              <li>Merging</li>
              <li>Rebasing</li>
            </ul>


          </div>
        </div>
      </div>
    );
  }
}

