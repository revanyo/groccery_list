import React, { useState} from 'react';

function Post(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    
    return (
        <div>
            <form onSubmit={props.newEntry(name, description)}>
                <input placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
                <input placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
                <input type="submit" ></input>
            </form>
        </div>
    )
}

export default Post;