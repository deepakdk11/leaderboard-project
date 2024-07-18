import React from 'react'

const Content = ({list, setPopup, handleDelete}) => {
  return (
    <div>
      <button onClick={() => setPopup(true)}>+</button>
        <ul>
            {
                list.map((players) =>
                <li key={players.id}>
                  <p>{players.id}</p>
                  <p>{players.name}</p>
                  <div>
                    <p>{players.minutes}</p>:
                    <p>{players.seconds}</p>:
                    <p>{players.milliseconds}</p>
                    <p></p>
                  </div>
                  <button onClick={() => handleDelete(players.id)}>remove</button>
                </li>
              
              )
            }
        </ul>
    </div>
  )
}

export default Content
