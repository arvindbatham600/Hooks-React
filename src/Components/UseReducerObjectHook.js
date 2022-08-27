import React,{useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + 1
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - 1
            }
        case 'increment5':
            return {
                    ...state,
                    firstCounter: state.firstCounter + 5
                }
        case 'decrement5':
            return {
                    ...state,
                    firstCounter: state.firstCounter - 5
                }    

        case 'incrementWith10':
                return {
                    ...state,
                    secondCounter: state.secondCounter + 10
                }
        case 'decrementWith10':case 'increment':
            return {
                ...state,
                secondCounter: state.firstCounter + 1
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - 1
            }
                return {
                    ...state,
                    secondCounter: state.secondCounter - 10
                }
        case 'reset':
            return {
                ...state,
                firstCounter: initialState.firstCounter,
                secondCounter: initialState.secondCounter
            }
    }

}
function UseReducerObjectHook() {
    const[count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h2>Counter - {count.firstCounter}</h2>
        <h2>Counter2 - {count.secondCounter}</h2>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment5'})}>Increment5</button>
        <button onClick={() => dispatch({type:'decrement5'})}>Decrement5</button>
        <div>
        <button onClick={() => dispatch({type:'incrementWith10'})}>Increment2ndCounter</button>
        <button onClick={() => dispatch({type:'decrementWith10'})}>Decrement52ndCounter</button>
        </div>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerObjectHook