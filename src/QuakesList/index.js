import React from 'react';

const QuakesList = (props) => {

    const quakesList = props.quakes.features.map((quake, i) => {
        let currentTime = new Date().getTime();
        let time = quake.properties.time;
        // timeInSecond = Math.round(timeInSecond / 1000) ;
        let diffrenceTimeInSecond = Math.floor((currentTime - time) / 1000);
        let hoursAgo = Math.floor(diffrenceTimeInSecond / 3600);

        return <p>{quake.properties.title} / {hoursAgo} hours a go</p>
    });

    return(
        <div id="info">
            {quakesList}
        </div>
    )
        
    
}

export default QuakesList;