import React,{useState, useEffect} from 'react'

function HookUseEffect() {
    const[count,setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  )
}

export default HookUseEffect