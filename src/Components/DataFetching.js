import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [buttonClickid, buttonClickidHandler] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [buttonClickid]);

  

  return (
    <div>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <div>
          <button onClick={() => buttonClickidHandler(id)}>Get Title</button>
        </div>
      </div>
      {post.title}
    </div>
    // <div>
    //     <ul>
    //         {
    //             post.map(post => <li key={post.id}>{post.title}</li>)
    //         }
    //     </ul>
    // </div>
  );
}

export default DataFetching;
