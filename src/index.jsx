import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './app/App';
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AndrewsPage from './pages/AndrewsPage'
import YuhoPage from './pages/YuhoPage'
import SamuelsPage from './pages/SamuelsPage'
import JasPage from './pages/JasPage'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="andrew" component={AndrewsPage} />
        <Route path="yuho" component={YuhoPage} />
        <Route path="samuel" component={SamuelsPage} />
        <Route path="jas" component={JasPage} />
        <IndexRoute component={HomePage} />
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>,
    document.getElementById('root')
  );

});
