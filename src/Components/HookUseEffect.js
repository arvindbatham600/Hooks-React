import React,{useState, useEffect} from 'react'

function HookUseEffect() {
    const[count,setCount] = useState(0);
    const[name,nameSetter] = useState('')
    useEffect(() => {
        console.log("Chaning the title")
        document.title = `you clicked ${count} times`
    },[count])

  return (
    <div>
        <input type= "text" value={name} onChange = {(e) => nameSetter(e.target.value)}></input>
        <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  )
}

export default HookUseEffect