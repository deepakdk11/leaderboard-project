import React from 'react'

const Content = ({list}) => {
  return (
    <div>
        <ul>
            {
                list.map((item) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </div>
  )
}

export default Content
