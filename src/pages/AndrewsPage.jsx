import React, {Component} from 'react';

export default class AndrewsPage extends Component {

  componentWillMount() {
    document.title = "Andrew | Jetspree Exercise"
  }

  render() {

    return (
      <div id="HomePage" className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>Andrew</h1>
            <h2>About me</h2>
            I ride motorcycles for a living.
          </div>
        </div>
      </div>
    );
  }
}
