import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
     };
}
componentDidMount() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
  fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ flats: data }));
}

selectFlat = (flat) => {

}

render() {
  let center = {
    lat: 48.8566,
    lng: 2.3522
  }
  /*const flat = {
    "id": 145,
    "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR",
    "lat": 48.884211,
    "lng": 2.346890
  }
  const flats = [flat, flat]*/
  return (
    <div className="app">
      <div className="main">
        <div className="search"></div>
        <div className="flats">
          {this.state.flats.map(flat => { return <Flat
          key={flat.name}
          flat={flat}
          handleclick={this.selectFlat} /> })}

        </div>
      </div>
      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={13}>
          {this.state.flats.map((flat) => {
            return <Marker
              key={flat.id}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
            />
          }
          )}
        </GoogleMapReact>

      </div>
    </div>
  );
}

}

export default App;
