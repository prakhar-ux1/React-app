import React, { useEffect } from 'react'
import { useState } from 'react';
import TodoItem from './TodoItem';
import '../../styles/Todo.scss'
import actions from '../../services/actions/index'
import axios from 'axios';

function Todo() {

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setData([...data, { ...data[0], title: value }])
        setValue("");
    };
    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(response.data.slice(0, 4));
    }
    useEffect(() => {
        fetchData();
    }, [])

    const removeItem = (index) => {
        const new_data = [...data];
        new_data.splice(index, 1);
        setData(new_data);
    }
    const changeStatus = (index) => {
        let new_data = [...data]
        new_data.at(index).completed = !new_data.at(index).completed;
        setData(new_data);
    }
    return (
        <div className='todo'>
            {data.map(((element, index) => {
                return (<TodoItem key={element.title} data={element}
                    index={index}
                    removeItem={removeItem}
                    changeStatus={changeStatus} />)
            }))}


            <form className='todoInputForm' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder={"Enter task to be done"}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Todo