import React, {Component} from 'react';

export default class YuhoPage extends Component {

  componentWillMount() {
    document.title = "Yuho | Jetspree Exercise"
  }

  render() {

    return (
      <div id="HomePage" className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>Yuho</h1>
            <h2>About me</h2>
            Gamer.
          </div>
        </div>
      </div>
    );
  }
}
