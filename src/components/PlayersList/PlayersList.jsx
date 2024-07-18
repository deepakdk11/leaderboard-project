import React from 'react'

const PlayersList = ({orderNumber, id,name, minutes, seconds, milliseconds, prize, handleDelete}) => {
  return (
    <div>
      <ul>
            <li>
                <p>{orderNumber}</p>
                <p>{name}</p>
                {prize && <p>{prize}</p>}
                <div>
                    <p>{minutes}</p>:
                    <p>{seconds}</p>:
                    <p>{milliseconds}</p>
                </div>
                <button onClick={() => handleDelete(id)}>remove</button>
            </li>
        </ul>
    </div>
  )
}

export default PlayersList
