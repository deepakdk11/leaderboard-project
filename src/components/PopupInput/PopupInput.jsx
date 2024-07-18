import React from 'react'

const PopupInput = ({list, addClick,newPlayer, setNewPlayer,newMinutes, setNewMinutes, newSeconds, setNewSeconds, newMilliseconds, setNewMilliseconds  }) => {
  return (
    <div>
      <form onSubmit={addClick} >
              <input type="text" name={list.name} id={list.name} onChange={(e) => setNewPlayer(e.target.value)} value={newPlayer} autoFocus required />
              <input type="number" name="" id="" onChange={(e) => setNewMinutes(e.target.value)} value={newMinutes} required/>
              <input type="number" name="" id="" onChange={(e) => setNewSeconds(e.target.value)} value={newSeconds} required/>
              <input type="number" name="" id=""onChange={(e) => setNewMilliseconds(e.target.value)} value={newMilliseconds} required/>
              <button type="submit" >Add</button>
      </form>
    </div>
  )
}

export default PopupInput
