"use strict"

const React = require('react');

const Places = React.createClass({
  render() {
    const venues = this.props.places.map((place, idx) => {
      return <li key={idx} className="list-group-item">{place.name}</li>
    })

    return (
        <ol className="list-group">
          {venues}
        </ol>
    );
  }
});


module.exports = Places;
