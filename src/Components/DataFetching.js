import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function DataFetching() {
    const[posts,setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(error => console.log(error))
    })
    
  return (
    <div>
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching