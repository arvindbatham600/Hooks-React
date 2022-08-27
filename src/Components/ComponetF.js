import React, {useContext} from 'react'
import {userContext} from '../App'

function ComponetF() {
  
    const name = useContext(userContext)
    console.log(name)

  return (
    <div>My name is {name}</div>
  )
}

export default ComponetF