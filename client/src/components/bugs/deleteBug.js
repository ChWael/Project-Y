import React from "react";
import { useDispatch } from "react-redux";
import { deleteBugHandler } from "../../redux/action/bug_actions";
import "./editBug.css"

const DeleteBug = ({bug}) => {

    const dispatch = useDispatch()
    const RemoveBug = (e) => {
        e.preventDefault()
        dispatch(deleteBugHandler(bug._id))
    }

    return (
        <div>
            <button type="button" className="btn-delete" onClick={RemoveBug}> <i class="fas fa-trash-alt"></i> </button>
        </div>
    )
}


export default DeleteBug