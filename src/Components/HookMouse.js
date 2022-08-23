import React from 'react'
import {useState} from 'react'
import HookMouseOver from './HookMouseOver'

function HookMouse() {
    const[display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {display && <HookMouseOver />}
    </div>
  )
}

export default HookMouse