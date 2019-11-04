import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
  return (
    <div className='player-list'>
    {props.players.map(player => {
      return (
        <PlayerCard key={player.id} player={player} data-testid="player-card"/>
      )
    })}
    </div>
    
  )

}

export default PlayerList