import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
    height: '100%',
    width:'40%',
    position:"relative"
}

export class MapContainer extends Component {

    constructor(){
        super();
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
  onMarkerClick = (place, props, marker) => {
        this.setState({
            showingInfoWindow: true,
            activeMarker: marker,
            selectedPlace: place
        })
    }

    onClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

       


    render(){

        const {google} = this.props;
      
        const quakesList = this.props.quakes.features.map((quake, i) => {
            return(
                <Marker key={i} 
                position={{lat:quake.geometry.coordinates[1], lng:quake.geometry.coordinates[0]}}
                icon={{url: "/images/earthquake.png", 
                scaledSize: new google.maps.Size(32,32)}}
                onClick={this.onMarkerClick.bind(null, quake.properties.place)}
                />
            )
        });

        return(
            
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: 30.2682, 
                    lng: -97.74295
                }}
            >
         
                {quakesList}

                <InfoWindow 
                    marker={this.state.activeMarker} 
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace}</h4>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);


