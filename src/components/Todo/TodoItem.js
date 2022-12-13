import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/TodoItem.scss';
function TodoItem(props) {
    const [isCompleted, setCompleted] = useState(props.data.completed);
    const toogleDone = () => {
        props.changeStatus(props.data.id)
        setCompleted(!isCompleted);

    }

    return (
        <div className='todo_card'>
            <div className='todo_detail'>
                <span style={{ 'textDecoration': `${isCompleted ? 'line-through' : 'none'}` }}
                    className='Todo_detail_text'>{props.data.title}</span>
            </div>
            <div className='options'>
                {!isCompleted ?
                    (<button className='options_butn butn_Mark' onClick={toogleDone}>Mark</button>) : (
                        <button className='options_butn butn_done' onClick={toogleDone}>
                            <i className="fa fa-check" aria-hidden="true"></i> Done</button>

                    )}
                <button className='options_butn butn_delete' onClick={() => { props.removeItem(props.data.id) }}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
            </div>
        </div>

    )
}

export default TodoItem