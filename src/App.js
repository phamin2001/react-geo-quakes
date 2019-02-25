import React, { Component } from 'react';
import MapContainer from './MapContainer';
import QuakesList from './QuakesList';

class App extends Component {

  constructor(){
    super();

    this.state={
        quakes:[],
        loading: true
    }
}

getQuakes = async () => {
    try {
        let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-02-20&endtime=2019-02-20T01:30:00';

        const quakes = await fetch(url);
        if(!quakes.ok){
            throw Error(quakes.statusText);
        }
        console.log(quakes, 'json quakes');
        const quakesJson = await quakes.json();
        console.log(quakesJson, 'parsed quakes');
        return quakesJson;        
    } catch (err) {
        console.log(err,'error in catch block');
        return err;        
    }
}

componentDidMount(){
    this.getQuakes().then((data) => {
        this.setState({
            quakes: data,
            loading: false
        })
    })
}


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          {this.state.loading ? <span>Data Is Loading ...</span> : <QuakesList quakes={this.state.quakes}/>}
        </div>
      </div>
    );
  }
}

export default App;
