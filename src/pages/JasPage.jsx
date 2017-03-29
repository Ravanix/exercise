import React, {Component} from 'react';

export default class AndrewsPage extends Component {

  componentWillMount() {
    document.title = "Jasinu | Jetspree Exercise"
  }

  render() {

    return (
      <div id="HomePage" className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>Jasinu</h1>
            <h2>About me</h2>
            About Me Jas
          </div>
        </div>
      </div>
    );
  }
}
