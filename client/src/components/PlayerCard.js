import React from 'react';

const PlayerCard = (props) => {
  return (
    <div className='card'>
      <header className="card-header">
        <h3 className='card-header-title'>{`${props.player.id + 1}`}. {props.player.name}</h3>
      </header>
      <div className='card-content'>
        <h4>{props.player.country}</h4>
        <h4>No. of searches: {props.player.searches}</h4>
      </div>
    </div>
    
  )

}

export default PlayerCard