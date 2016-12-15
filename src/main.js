const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, hashHistory, IndexRoute } = require('react-router');

const App = require('./components/app');
const Welcome = require('./components/welcome');
const Movies = require('./components/movies');
const MyMap = require('./components/map-contain');


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/movies" component={Movies} />
        <Route path="/maps" component={MyMap} />
      </Route>
    </Router>,
  document.getElementById('app')
)
