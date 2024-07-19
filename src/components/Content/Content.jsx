import React from 'react'
import PlayersList from '../PlayersList/PlayersList'
import './Content.css'

const Content = ({ handleDelete, sortedPlayers, prizeAmount}) => {
  return (
    <div className='content'>
      {sortedPlayers.map((player, index) => (
        <PlayersList
          key={player.id}
          handleDelete={handleDelete}
          id={player.id}
          orderNumber={index + 1}
          name={player.name}
          minutes={player.minutes}
          seconds={player.seconds}
          milliseconds={player.milliseconds}
          prize={index < 3 ? prizeAmount[index] : null}
        />
      ))}
        
    </div>
  )
}

export default Content
