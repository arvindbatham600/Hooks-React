import React, {useState,useEffect} from 'react'

function HookMouseOver() {
    const[X,setX] = useState(0)
    const[Y,setY] = useState(0)

    const logMousePositions = (e) => {
        console.log("setting x and y")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect((e) => {
        console.log("useEffect")
        window.addEventListener("mousemove",logMousePositions)
    },[])
  return (
    <div>
        Hook X - {X} Y - {Y}
    </div>
  )
}

export default HookMouseOver