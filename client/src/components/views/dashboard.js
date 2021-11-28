import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
import "./dashboard.css";

export default function Dashboard() {
const dispatch = useDispatch();
const user = useSelector((state) => state.auth.user);
const bugs = useSelector((state) => state.bug.bug);
const projects = useSelector((state) => state.project.project);

const logoutUser = () => {
    dispatch(logoutHandler());
};

return (
    <div className="dashboard">
    <div className="dash-nav">
        <div className="User">
        <p>{`User : ${user?.name} ${user?.lastName}`}</p>
        </div>
        <div >
        <button className="Logout" onClick={logoutUser}>
            <Link to="/">
            <i class="fas fa-sign-out-alt" id="logout"></i>
            </Link>
        </button>
        </div>
    </div>
    <div className="dash-space">
        <div className="dash-left">
        <input type="checkbox" id="check" />
        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
            <header>My Menu</header>
            <a href="/Dashboard" class="active">
            <i class="fas fa-qrcode"></i>
            <span> Dashboard </span>
            </a>
            <a href="/dashboard/bugs">
            <i class="fas fa-link"></i>
            <span>Bugs</span>
            </a>
            <a href="/dashboard/projects">
            <i class="fas fa-stream"></i>
            <span>Projects</span>
            </a>
            <a href="/dashboard/profile">
            <i class="fas fa-user"></i>
            <span>Profile</span>
            </a>
            <a href="#">
            <i class="fas fa-address-card"></i>
            <span>About</span>
            </a>
            <a href="#">
            <i class="far fa-envelope"></i>
            <span>Contact</span>
            </a>
        </div>
        </div>
        <div className="dash-work">
        <div className="Card">
            <p>All Bugs</p>
            <p>{bugs.length}</p>
            <button className="bug-btn" >Add</button>
        </div>
        <div className="Card">
            <p>All Projects</p>
            <p>{projects.length}</p>
            <button className="project-btn" >Add</button>
        </div>
        </div>
    </div>
    </div>
);
}
