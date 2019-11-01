import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
  console.log('props', props)
  return (
    <>
    {props.players.map(player => {
      return (
        <PlayerCard key={player.id} player={player}/>
      )
    })}
    </>
    
  )

}

export default PlayerList