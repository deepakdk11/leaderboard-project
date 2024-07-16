import React, { useState } from 'react';
import Content from '../src/components/Content/Content'

import './App.css'

function App() {

  const [list, setList] = useState([
    {
      id : 1,
      name : "Deepak",
      price : 50000,
      score : "00:22:22"
    },
    {
      id : 2,
      name : "san",
      price : 50000,
      score : "00:22:22"
    },
    {
      id : 3,
      name : "Sandhiya",
      price : 50000,
      score : "00:22:22"
    }
  ])

  console.log(list)

  return (
    <div>
      <Content list = {list} setList = {setList}/>
    </div>
  )
}

export default App
