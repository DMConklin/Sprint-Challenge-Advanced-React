import React from 'react';

const PlayerCard = (props) => {
    return(
        <div>
            <h1>{props.player.name}</h1>
            <h2>{props.player.country}</h2>
            <h2>{props.player.searches}</h2>
        </div>
    )
}

export default PlayerCard;