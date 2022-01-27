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
      flats: [],
      selectedFlat: null,
      search: ""
     };
}
componentDidMount() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
  fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ flats: data }));
}

selectFlat = (flat) => {
  console.log(flat)
  this.setState ({
    selectedFlat: flat
  })

}

handleSearch = (event) => {
    console.log(event.target.value)
  this.setState({
    search: flat
  })

}

render() {
  let center = {
    lat: 48.8566,
    lng: 2.3522
  }
  if (this.state.selectedFlat) {
    center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input type="text"
          placeholder='Search...'
          value={this.state.search}
          onChange={this.handleSearch} />
        </div>
        <div className="flats">
          {this.state.flats.map(flat => { return <Flat
          key={flat.name}
          flat={flat}
          selectFlat={this.selectFlat} /> })}

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
              selected={flat === this.state.selectedFlat}
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
