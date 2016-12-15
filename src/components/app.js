"use strict"

const React = require('react');

const Navigation = require('./navigation')

const Main = React.createClass({
  render() {
    return (
        <div>
          <Navigation />
          <div>


            {this.props.children}


          </div>
        </div>
    );
  }
});

module.exports = Main;
