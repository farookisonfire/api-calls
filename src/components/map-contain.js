"use strict"

const React = require('react');
const Map = require('./map')

const MapContain = React.createClass({

  getInitialState(){
    return {
      center: {lat: 40.7575285, lng: -73.9884469},
      markers: [
        {location: {lat:40.7575285,lng: -73.9884469}},
        {location: {lat:40.8575285,lng: -73.9884469}}
      ]
    }
  },

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ')
      .then(res => res.json())
        .then(res => console.log(res.response.venues))
  },

  render() {
    const center = {lat: 40.7575285, lng: -73.9884469}
    return (
      <div style={{width:'400px', height:'400px', background:'lightblue'}}>
        <Map
          center={this.state.center}
          markers={this.state.markers} />
      </div>
    );
  }
});

module.exports = MapContain;
