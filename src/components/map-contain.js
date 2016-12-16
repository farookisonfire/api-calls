"use strict"

const React = require('react');
const Map = require('./map')
const Places = require('./map-places')
const { mapContainStyle } = require('./styles/styles')
const MapSearch = require('./map-search')


const MapContain = React.createClass({

  getInitialState(){
    return {
      center: {lat: 40.7575285, lng: -73.9884469},
      markers: [
        {location: {lat:40.7575285,lng: -73.9884469}},
        {location: {lat:40.8575285,lng: -73.9884469}}
      ],
      places: [],
      searchString:""
    }
  },

  onChange(event){
    const searchStr = event.target.value
    this.state.searchString = searchStr;
    this.setState(this.state);
    console.log('state changed', this.state)
  },

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ')
      .then(res => res.json())
        .then(res => {
          this.state.places = res.response.venues;
          this.setState(this.state);
        })
  },

  render() {
    const center = {lat: 40.7575285, lng: -73.9884469}

    return (
      <div className="container">
        <div className="row">
          <MapSearch onChange={this.onChange} searchStr={this.state.searchString}/>
          <div style={mapContainStyle} className="col-xs-12 col-sm-6">
            <Map
              center={this.state.center}
              markers={this.state.places} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Places places={this.state.places}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MapContain;
