import React from 'react';

const QuakesList = (props) => {

    const quakesList = props.quakes.features.map((quake, i) => {
        return <p>M {quake.properties.mag} - {quake.properties.place}</p>
    });

    return(
        <div>
            {quakesList}
        </div>
    )
        
    
}

export default QuakesList;