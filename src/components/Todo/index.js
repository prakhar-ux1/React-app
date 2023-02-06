import React, { useEffect } from 'react'
import { useState } from 'react';
import TodoItem from './TodoItem';
import '../../styles/Todo.scss'
import actions from '../../services/actions/index'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoListAPI, addItem, removeItem, changeItemStatus } from "../../redux/todoSlice"
import Loader from '../Loader';

function Todo() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const todoListstate = useSelector(state => state.todo.todoList);
    const [maxId, setMaxId] = useState(todoListstate.length);
    const [isloading, setLoading] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setValue("");
        dispatch(addItem({ ...todoListstate[0], title: value, id: maxId + 1 }));
        setMaxId(prev => prev + 1);
    };

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(getTodoListAPI(response.data.slice(0, 4)));
        setLoading(false);

    }
    useEffect(() => {
        //fetchData();
    }, [])

    useEffect(() => {
        if (isloading == false) {
            setMaxId(todoListstate.length)
        }
    }, [isloading]);

    const removeTodoItem = (id) => {
        dispatch(removeItem(id));
    }

    const changeStatus = (id) => {
        dispatch(changeItemStatus(id));
    }

    return (
        <div className='todo'>
            {isloading ? <Loader /> : (todoListstate.map(((element, index) => {
                return (<TodoItem key={element.id} data={element}
                    index={index}
                    removeItem={removeTodoItem}
                    changeStatus={changeStatus} />)
            })))}
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