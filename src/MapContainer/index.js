import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
    height: '60%',
    width:'40%',
    // // size:'covr',
    margin: '0',
    padding: '50 px',
    // display: 'block', 
    // // // flexFlow: 'row nowrap'
    // // position: 'relative'
    // float:'left',
    // width: '100%',
    // height:'100%',
    // "object-fit":'cover'
}

export class MapContainer extends Component {
    state={
        activeMarker: {}
    }

    onMarkerClick = (marker, e) =>
        this.setState({
            activeMarker: marker
        })

    render(){
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
            <Marker
                
                onClick={this.onMarkerClick}
                // name={'test'}
            />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);


//btw, there is no magic way to fit map to its container, is it?