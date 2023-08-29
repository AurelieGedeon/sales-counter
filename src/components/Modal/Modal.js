import ".../App.css"
import "./Modal.css"
import { useState } from "react"

export default function Modal() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        <button 
        onClick={toggleModal}
        className="btn-modal">Add Button</button>
        </>
    )
}