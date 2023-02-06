import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import "../styles/modal.scss"
function Modal({ open, children, close,
    //customOverlayClass, customClass 
}) {

    useEffect(() => {
        open && (document.body.classList.add('modal-active'));
        // !open &&
        return () => (document.body.classList.remove('modal-active'));
    }, [open])

    if (!open)
        return <></>;

    return ReactDOM.createPortal(
        <>
            <div className={`overlay`} onClick={close}></div>
            <div className={`portal`}>
                {children}
            </div>
        </>, document.getElementById("modalroot")
    )
}

export default Modal