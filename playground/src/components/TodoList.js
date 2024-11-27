import React, { useState } from 'react';

const TodoList = () => {
    const [list,setList] = useState([]); 
    const [todo,setTodo] = useState('');

    const addToList = () => {
        setList([...list,todo]);
    }
    return(
        <div>
            <h1>To do list for Zachary</h1>
            <input onChange={(e)=>{ setTodo(e.target.value)}}></input>
            <button onClick={addToList}>Submit</button>
            <ul>
                {list.map((todo , index) => {
                    return(
                        <li key={index}>{todo}</li>
                    )
                })}
            </ul>
        </div>

    )
    
}
export default TodoList;
