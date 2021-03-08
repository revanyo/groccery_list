import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import Post from './Post.jsx';

function App(props) {

    const [list, setList] = useState([])
    
    useEffect(()=>{
        axios.get('/list').then((data)=>{
            setList(data.data)
        })
    }, [])

    const newEntry = (name, description) =>{
        console.log(name, description)
    }

    return(
        <div>
            <Post />
            <List items={list} newEntry={newEntry()}/>
        </div>
    )
}

export default App;