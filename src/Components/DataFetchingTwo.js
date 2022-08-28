import React,{useReducer, useEffect} from 'react'
import axios from 'axios'
const initialState = {
    loding: true,
    error: 'Something Went Wrong',
    post: {}
}

const reducer = (state, action) => {
 switch(action.type){
    case 'FETCH_SUCCESS':   
        return{
            loading:false,
            error: '',
            post: action.payload
        }
    case 'FETCH_ERROR':
        return{
            loding:true,
            error:'Something Went Wrong',
            post:action.payload
        }
 }
}

function DataFetchingTwo() {
    const[state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type:'FETCH_SUCCESS', payload:res.data})
        }).catch(err => {
            dispatch({type:'FETCH_ERROR', payload:err})
        } )
    },[])
  return (
    <div>
        <h1>Fetching Data Using useReducer</h1>
        {state.loding ? <p>{state.error}</p> : <p>{state.post.title}</p>}
    </div>
  )
}

export default DataFetchingTwo