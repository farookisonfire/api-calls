"use strict"

const React = require('react');
const { GoogleMapLoader, GoogleMap, Marker, SearchBox } = require('react-google-maps');

const Map = React.createClass({
  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    const markers = this.props.markers.map((venue, key) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      return <Marker key={key} position={marker.position} />
    })

    return (
        <GoogleMapLoader
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap
              defaultZoom={17}
              defaultCenter={this.props.center}
              center={this.props.center}
              options={{streetViewControl: false, mapTypeControl: false}}
              >
              {markers}
            </GoogleMap>
          }
        />
    );
  }
});

module.exports = Map;
