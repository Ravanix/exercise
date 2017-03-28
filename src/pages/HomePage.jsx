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
            Welcome to the Jetspree exercise.

            <PageLinkContainer>
              <PageLink name="Andrew" path="/andrew"/>
            </PageLinkContainer>

          </div>
        </div>
      </div>
    );
  }
}

class PageLinkContainer extends Component {

  render() {
    return (
      <div className="PageLinkContainer">
        {this.props.children}
      </div>
    );
  }

}

class PageLink extends Component {

  render() {

    return (
      <div className="PageLink">
        <h4>{this.props.name}</h4>
        <Link to={this.props.path}>Click here</Link>
      </div>
    );
  }
}

