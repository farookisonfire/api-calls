"use strict"

const React = require('react')

const { mapSearch, mapSubmit } = require('./styles/styles')

const MapSearch = React.createClass({
  render() {
    return (

        <form>
          <div className="form-group">
            <input
              name="location"
              className="form-control"
              type="text"
              placeholder="Location"
              ref="location"
              style={mapSearch}
              value={this.props.searchStr}
              onChange={this.props.onChange}  />
            <input
              type="submit"
              value="Search"
              className="btn btn-default btn-info"
              style={mapSubmit}
            />
          </div>
        </form>
    );
  }
});

module.exports = MapSearch;
