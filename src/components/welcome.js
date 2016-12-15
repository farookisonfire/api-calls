"use strict"

const React = require('react');

const Welcome = React.createClass({
  render() {
    return (
      <div className="containter-fluid">
        <h3>Welcome!</h3>
        <h6>The purpose of this application is to make api-calls</h6>
      </div>
    );
  }
});

module.exports = Welcome;
