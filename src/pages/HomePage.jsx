import React, {Component} from 'react';

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
            Welcome to the Jetspree exercise.

          </div>
        </div>
      </div>
    );
  }
}
