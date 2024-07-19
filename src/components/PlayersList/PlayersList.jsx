import React from 'react'
import './PlayersList.css'
import { IoMdClose } from "react-icons/io";

const PlayersList = ({orderNumber, id,name, minutes, seconds, milliseconds, prize, handleDelete}) => {
  return (
    <div className='playersList'>

                <p className='serialNumber'>{orderNumber}</p>
                <p className='playerName'>{name}</p>
                {prize && <p className='playerPrize'>{prize}</p>}
                <div className='MSM'>
                    <p className='minutes'>{minutes}</p>:
                    <p className='seconds'>{seconds}</p>:
                    <p className='milliseconds'>{milliseconds}</p>
                </div>
                <IoMdClose className='removeBtn' onClick={() => handleDelete(id)}/>

    </div>
  )
}

export default PlayersList
