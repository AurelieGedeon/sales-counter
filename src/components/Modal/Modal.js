import ".../App.css"
import "./Modal.css"
import { useState } from "react"

export default function Modal() {
    const [modal, setModal] = useState(false)

    return(
        <>
        <button className="btn-modal"></button>
        </>
    )
}