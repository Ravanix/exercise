import React, {Component} from 'react';

export default class SamuelsPage extends Component {

  componentWillMount() {
    document.title = "Samuel | Jetspree Exercise"
  }

  render() {

    return (
      <div id="HomePage" className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>Samuel</h1>
            <h2>About me</h2>
            I sleep at the night.
          </div>
        </div>
      </div>
    );
  }
}
