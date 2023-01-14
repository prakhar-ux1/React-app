import React from 'react'
import ReactDOM from "react-dom"
import "../styles/modal.scss"
function Modal({ open, children, close }) {
    if (!open)
        return <></>;

    return ReactDOM.createPortal(
        <>
            <div className='overlay' onClick={close}></div>
            <div className='portal'>
                {children}
            </div>
        </>, document.getElementById("modalroot")
    )
}

export default Modal