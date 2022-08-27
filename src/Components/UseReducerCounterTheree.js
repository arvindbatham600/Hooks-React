import React,{useReducer} from 'react'
import { act } from 'react-dom/test-utils';
const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return state = 0
    }
}

function UseReducerCounterThree() {
    const [count,dispatch] = useReducer(reducer, initialState)
    const [count2,dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <h2>Count2 = {count2}</h2>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerCounterThree