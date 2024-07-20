import React, { useState } from 'react';
import Content from '../src/components/Content/Content'
import PopupInput from './components/PopupInput/PopupInput';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { IoMdAdd } from "react-icons/io";

function App() {

  const [popup, setPopup] = useState(false)
  const [list, setList] = useState(JSON.parse(localStorage.getItem("PLAYERS")) || [])
 
  const [newPlayer, setNewPlayer] = useState('')
  const [newMinutes, setNewMinutes] = useState('')
  const [newSeconds, setNewSeconds] = useState('')
  const [newMilliseconds, setNewMilliseconds] = useState('')

  const addNewPlayer = (playerName, playerMinutes, playerSeconds, playerMilliseconds) => {
    const id = list.length ? list[list.length - 1].id +1 : 1;
    const addMinutes = parseInt(playerMinutes, 10);
    const addSeconds = parseInt(playerSeconds, 10);
    const addMilliseconds = parseInt(playerMilliseconds, 10);
    const newPlayers = {
     id: id,
     name: playerName,
     minutes : addMinutes,
     seconds: addSeconds,
     milliseconds: addMilliseconds
    };
    const addNewPlayerList = [...list, newPlayers]
    setList(addNewPlayerList)
    localStorage.setItem("PLAYERS", JSON.stringify(addNewPlayerList))
  }

  const addClick = (e) => {
    e.preventDefault();
    if(!newPlayer) return;
    addNewPlayer(newPlayer, newMinutes, newSeconds, newMilliseconds)
    setNewPlayer('');
    setNewMinutes('');
    setNewSeconds('');
    setNewMilliseconds('');
    setPopup(false)
  }

  const handleDelete = (id) => {
    const deletePlayer = list.filter((deleteList) => deleteList.id!==id )
    setList(deletePlayer)
    localStorage.setItem("PLAYERS", JSON.stringify(deletePlayer))
  }

  const sortedPlayers = [...list].sort((a, b) => {
    if (a.minutes !== b.minutes) return a.minutes - b.minutes;
    if (a.seconds !== b.seconds) return a.seconds - b.seconds;
    return a.milliseconds - b.milliseconds;
  });

  const allClear = () => {
    setList([])
    localStorage.setItem("PLAYERS", JSON.stringify([]))
  }

  const prizeAmount = [50000, 30000, 10000]

  return (
    <div>
      <Header />
      { popup ? <PopupInput
          setPopup={setPopup}
          addClick={addClick}
          list = {list}
          newPlayer={newPlayer}
          setNewPlayer={setNewPlayer}
          newMinutes={newMinutes}
          setNewMinutes={setNewMinutes}
          newSeconds={newSeconds}
          setNewSeconds={setNewSeconds}
          newMilliseconds={newMilliseconds}
          setNewMilliseconds={setNewMilliseconds}
        /> 
        : <></>
      } 
      <Content 
        popup={popup}
        sortedPlayers={sortedPlayers}
        setPopup={setPopup}
        handleDelete={handleDelete}
        prizeAmount={prizeAmount}
        allClear={allClear}
      />
      <IoMdAdd onClick={() => setPopup(true)} className='addIcon' size={35} />
      <Footer />
    </div>
  )
}

export default App
