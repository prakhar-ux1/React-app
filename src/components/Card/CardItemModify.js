import React, { useEffect, useState } from 'react'
import "../../styles/CardItemModify.scss"
function CardItemModify({ data, onClose, onSave, newId, actionType }) {
    const [state, setstate] = useState(
        {
            id: null,
            title: "",
            albumId: "",
            thumbnailUrl: "",
            url: ""
        });
    useEffect(() => {

        if (data == null)
            return;
        setstate(data);
        console.log("redener")
    }, [data]);
    useEffect(() => {
        if (newId)
            setstate({ ...state, id: newId })
    }, []);
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='wrapped'>
            <h2>{actionType} Card as you wish to</h2>
            <hr />
            <form
                // onSubmit={handleSubmit}
                className='updateForm'>
                <div className='item_detail'> Enter the Title</div>
                <input
                    type="text"
                    name='title'
                    className="card_input"
                    value={state.title}
                    placeholder={"Enter title"}
                    onChange={handleChange}
                />
                <div className='item_detail'>Album Id</div>
                <input
                    type="text"
                    name='albumId'
                    className="card_input"
                    value={state.albumId}
                    placeholder={"Enter Album Id"}
                    onChange={handleChange}
                />
                <div className='item_detail'>Image Url</div>
                <input
                    type="text"
                    name='thumbnailUrl'
                    className="card_input"
                    value={state.thumbnailUrl}
                    placeholder={"Enter Image Url"}
                    onChange={handleChange}
                />
            </form>
            <div className='item_update_btn'>
                <button className='butn' onClick={onClose}> Close</button>
                <button className='butn' onClick={() => {
                    onSave(state);
                    onClose();

                }}>Save</button>
            </div>




        </div>
    )
}
export function CardItemDelete({ onClose, onConfirm }) {
    return (
        <div className='wrapped'>
            <h2> Are you sure you want to delete this card</h2>
            <hr className='hr_delete' />
            <div className='item_update_btn'>
                <button className='butn' onClick={onClose}>cancel</button>
                <button className='butn butn_delete' onClick={onConfirm}>Yes</button>
            </div>
        </div>
    );
}

export default CardItemModify