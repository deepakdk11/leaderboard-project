import React from 'react'
import './PopupInput.css'
import { IoMdClose } from "react-icons/io";

const PopupInput = ({ addClick, setPopup, newPlayer, setNewPlayer,newMinutes, setNewMinutes, newSeconds, setNewSeconds, newMilliseconds, setNewMilliseconds  }) => {
  return (
    <div className="popup" >
      <IoMdClose  onClick={() => setPopup(false)} className='closeBtn' size={35} />
      <form onSubmit={addClick} >
              <input type="text" name="playerInput" id="playerInput" placeholder='Player Name' onChange={(e) => setNewPlayer(e.target.value)} value={newPlayer} autoFocus required />
              <div className='number'>
                <input type="number" name="minutes" id="minutes" placeholder='MM' onChange={(e) => setNewMinutes(e.target.value)} value={newMinutes} required /> :
                <input type="number" name="seconds" id="seconds" placeholder='SS' onChange={(e) => setNewSeconds(e.target.value)} value={newSeconds} required /> :
                <input type="number" name="milliseconds" id="milliseconds" placeholder='MMS' onChange={(e) => setNewMilliseconds(e.target.value)} value={newMilliseconds} required/>
              </div>
              <button type="submit" >ADD</button>
      </form>
    </div>
  )
}

export default PopupInput
