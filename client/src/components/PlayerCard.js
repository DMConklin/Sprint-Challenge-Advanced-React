import React from 'react';
import { SetPlayerSearches } from './SetPlayerSearches';

const PlayerCard = (props) => {
    const [playerSearches, handlePlayerSearches] = SetPlayerSearches(props.player.searches);

    return(
        <div>
            <h1>Name: {props.player.name}</h1>
            <h2>Country: {props.player.country}</h2>
            <h2 onClick={() => handlePlayerSearches()} >Searches:{playerSearches}</h2>
        </div>
    )
}

export default PlayerCard;