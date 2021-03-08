import React from 'react';

function List(props) {
    console.log(props.items, 'items')
    return(
        <div>
            <ul>
                {props.items.map(item=>(<div key={item._id}>{item.name}</div>))}
            </ul>
        </div>
    )
}

export default List;
