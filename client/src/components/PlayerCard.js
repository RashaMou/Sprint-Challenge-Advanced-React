import React from 'react';

const PlayerCard = (props) => {
  return (
    <div>
      <h2>{props.player.name}</h2>
      <ul>
        <li>{props.player.country}</li>
        <li>Number of Searches: {props.player.searches}</li>
      </ul>
    </div>
    
  )

}

export default PlayerCard