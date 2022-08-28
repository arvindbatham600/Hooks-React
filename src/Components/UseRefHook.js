import React,{useEffect,useRef} from 'react'

function UseRefHook() {

    const inputRef = useRef(null);
    useEffect(() => {
        // here we will use useRef Hook to focus on the text input element
        inputRef.current.focus();
    })
  return (
    <div>
        <input type='text' ref={inputRef}></input>
    </div>
  )
}

export default UseRefHook