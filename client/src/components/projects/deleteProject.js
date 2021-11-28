import React from "react";
import { useDispatch } from "react-redux";
import { deleteProjectHandler } from "../../redux/action/project-action";
import './project.css'

const DeleteProject = ({project}) => {

    const dispatch = useDispatch()
    const RemoveProject = (e) => {
        e.preventDefault()
        dispatch(deleteProjectHandler(project._id))
    }

    return (
        <div >
            <button type="button" className="btn-delete" onClick={RemoveProject}>Delete</button>
        </div>
    )
}


export default DeleteProject