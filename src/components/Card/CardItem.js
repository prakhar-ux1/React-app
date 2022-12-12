import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '../Modal';
import CardItemModify from './CardItemModify';
import { CardItemDelete } from './CardItemModify';
import { Link } from 'react-router-dom';
import "../../styles/CardItem.scss"
function CardItem({ index, data, deleteItem, updateItem }) {
    const [isOpen, setOpenedModal] = useState(false);
    const [isDeleteModalOpened, setDeleteModal] = useState(false);
    return (
        <div className="OneCard">
            <div className='modify'>
                <i className="fa fa-trash-o" onClick={() => {
                    setDeleteModal(true);
                }}></i>
                <Modal
                    open={isDeleteModalOpened}
                    close={() => setDeleteModal(false)}>
                    <CardItemDelete
                        onClose={() => setDeleteModal(false)}
                        onConfirm={() => {
                            setDeleteModal(false);
                            deleteItem(index);
                        }} />
                </Modal>
                <i className="fa fa-pencil" onClick={() => setOpenedModal(true)}></i>
                <Modal
                    open={isOpen}
                    close={() => setOpenedModal(false)}>
                    <CardItemModify
                        actionType="Update"
                        data={data}
                        onClose={() => setOpenedModal(false)}
                        onSave={updateItem}
                    />
                </Modal>
            </div>
            <Link to='/cards/cardDetails' state={data}>
                <div className='image'>
                    <img className="avtar" src={data.thumbnailUrl} alt="Card " />
                </div>
                <div className='text' >
                    {data.title.slice(0, 9)}
                </div>
            </Link>

            <div className='btn'>
                <Button variant="outlined" onClick={() => window.open(data.thumbnailUrl, "new tab")}>Album</Button>
                <Button variant="outlined" onClick={() => window.open(data.url, "new tab")}>View in Full</Button>

            </div>
        </div >
    )
}

export default CardItem