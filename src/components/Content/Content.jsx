import React from 'react'
import PlayersList from '../PlayersList/PlayersList'
import './Content.css'
import { ImTrophy } from "react-icons/im";
import { RxLapTimer } from "react-icons/rx";
import { FcDeleteDatabase } from "react-icons/fc";

const Content = ({popup, handleDelete, sortedPlayers, prizeAmount, allClear}) => {
  return (
    <div className={popup ? '' : 'active'} id='content'>
      <div className='heading'>
        <ImTrophy style={{color:"gold"}} />
        <p className='playerName'>NAME</p>
        <div className='timing'>
          <RxLapTimer />
          <p>Timing</p>
        </div>
        <FcDeleteDatabase size={25} onClick={allClear} style={{cursor:'pointer'}} />
      </div>
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
