import React, { useState } from 'react';
import Content from '../src/components/Content/Content'
import './App.css'
import PopupInput from './components/PopupInput/PopupInput';
import Footer from './components/Footer/Footer';

function App() {

  const [popup, setPopup] = useState(false)
  const [list, setList] = useState(JSON.parse(localStorage.getItem("PLAYERS")) || [])
  // const [list, setList] = useState([
  //   {
  //     id : 1,
  //     name : "Deepak",
  //     price : 50000,
  //     minutes: 0,
  //     seconds: 21 ,
  //     milliseconds : 45
  //   },
  //   {
  //     id : 2,
  //     name : "san",
  //     price : 50000,
  //     minutes: 0,
  //     seconds: 21 ,
  //     milliseconds : 45
  //   },
  //   {
  //     id : 3,
  //     name : "Sandhiya",
  //     price : 50000,
  //     minutes: 0,
  //     seconds: 21 ,
  //     milliseconds : 45
  //   }
  // ])

  // console.log(list)

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
    console.log(list)
    addNewPlayer(newPlayer, newMinutes, newSeconds, newMilliseconds)
    setNewPlayer('');
    setNewMinutes('');
    setNewSeconds('');
    setNewMilliseconds('');
  }

  const handleDelete = (id) => {
    const deletePlayer = list.filter((deleteList) => deleteList.id!==id )
    setList(deletePlayer)
    localStorage.setItem("PLAYERS", JSON.stringify(deletePlayer))
  }
  return (
    <div>
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
        list = {list}
        setPopup={setPopup}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  )
}

export default App
